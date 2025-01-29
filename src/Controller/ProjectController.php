<?php

namespace App\Controller;

use App\Entity\Project;
use App\Form\ProjectType;
use App\Repository\UserRepository;
use App\Repository\TaskRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/project')]
final class ProjectController extends AbstractController
{
    #[Route(name: 'app_project_index', methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('project/projectIndex.html.twig');
    }
    #[Route('/new', name: 'app_project_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, UserRepository $userRepository): Response
    {
        // Cria uma nova instância do projeto
        $project = new Project();
        // Cria o formulário baseado no tipo de entidade ProjectType
        $form = $this->createForm(ProjectType::class, $project);
        // cria o formulário com os dados da requisição(os dados no formtype), que contém os dados do formulário/entity
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // Captura as matrículas digitadas no campo 'Employe'
            $matricules = $form->get('Employe')->getData();
            // Se houver matrículas informadas, realiza a busca no banco de dados
            if (!empty($matricules)) {
                // Consulta no banco de dados buscando os usuários com as matrículas fornecidas
                $employeEntities = $userRepository->createQueryBuilder('u')
                    // essa perte e muito importante, porque estou passando uma lista de matricules - (:matricules)
                    ->where('u.matricule IN (:matricules)')
                    ->setParameter('matricules', $matricules)
                    ->getQuery()
                    ->getResult();
                // Associa os usuários encontrados ao projeto $employeEntities  e uma lista 
                foreach ($employeEntities as $user) {
                    $project->addEmploye($user);
                }
            }
            // Gerenciamento do upload de imagem para o projeto
            $chamin = "assets/images/project"; // Define o diretório de destino para a imagem
            $file = $form->get('imageProject')->getData(); // Obtém o arquivo de imagem do formulário
            // Se um arquivo for enviado, processa o upload
            if ($file) {
                // Gera um nome único para o arquivo de imagem
                $fileName = uniqid() . '.' . $file->guessExtension();
                // Move o arquivo para o diretório de destino
                $file->move($chamin, $fileName);
                // Associa o caminho da imagem ao projeto
                $project->setImageProject($chamin . '/' . $fileName);
            }
            // Persiste o novo projeto no banco de dados
            $entityManager->persist($project);
            $entityManager->flush();
            // Redireciona para a página de listagem de projetos após a criação
            return $this->redirectToRoute('app_project_index', [], Response::HTTP_SEE_OTHER);
        }
        // Exibe o formulário para criação do projeto
        return $this->render('project/projectNew.html.twig', [
            'project' => $project,
            'form' => $form,
        ]);
    }


    #[Route('/{id}', name: 'app_project_show', methods: ['GET'])]
    public function show(int $id, Request $request, TaskRepository $taskRepository, EntityManagerInterface $entityManager): Response
    {
        $project = $entityManager->getRepository(Project::class)->find($id);
        $tasks = $taskRepository->findBy(['Project' => $project]);
        $session = $request->getSession();
        $session->set('project_id', $project->getId());
        $flagTaskStatus = 'Pending';
        foreach ($tasks as $task) {
            if ($task->getFlagTask() === 'pending' || $task->getFlagTask() === 'in_progress') {
                $flagTaskStatus = 'Il y a des taches en cours';
                break;
            } else {

                $flagTaskStatus = 'Le Project est Termine';
            }
        }
        return $this->render('project/projectShow.html.twig', [
            'project' => $project,
            'flagTaskStatus' => $flagTaskStatus,
        ]);
    }




    #[Route('/{id}/edit', name: 'app_project_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Project $project, EntityManagerInterface $entityManager): Response
    {
        // nom de l'image actuelle
        $originalImage = $project->getImageProject();

        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);


        if ($form->isSubmitted() && $form->isValid()) {

            $chamin = "assets/images/project";
            $file = $form->get('imageProject')->getData();

            if ($file) {
                $file->move($chamin, $file->getClientOriginalName());
                $project->setimageProject("assets/images/project/" . $file->getClientOriginalName());
            } else {
                // Se nenhuma nova imagem for enviada, mantenha a antiga
                $project->setImageProject($originalImage);
            }

            $entityManager->flush();

            return $this->redirectToRoute('app_project_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('project/projectEdit.html.twig', [
            'project' => $project,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_project_delete', methods: ['POST'])]
    public function delete(Request $request, Project $project, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $project->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($project);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_project_index', [], Response::HTTP_SEE_OTHER);
    }
}
