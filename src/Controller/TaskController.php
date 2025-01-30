<?php

namespace App\Controller;

use App\Entity\Task;
use App\Form\TaskType;
use App\Model\SearshData;
use App\Repository\TaskRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Classes\SessionManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Project;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;





#[Route('/task')]
final class TaskController extends AbstractController
{
    #[Route(name: 'app_task_index', methods: ['GET'])]
    public function index(SessionManager $session, TaskRepository $taskRepository, EntityManagerInterface $entityManager): Response
    {
        $projectId = $session->getProjectId();
        $project = $entityManager->getRepository(Project::class)->find($projectId);
        // Busca tarefas associadas ao projeto
        $tasks = $taskRepository->findBy(['Project' => $project]);
        return $this->render('task/indexTask.html.twig', [
            'project' => $project,
            'tasks' => $tasks,
        ]);
    }

    #[Route('/new', name: 'app_task_new', methods: ['GET', 'POST'])]
    public function new(SessionManager $session,Request $request, EntityManagerInterface $entityManager, UserRepository $userRepository): Response
    {
        $projectId = $session->getProjectId();
        // dd($projectId);
        $project = $entityManager->getRepository(Project::class)->find($projectId);

        $task = new Task();
        $form = $this->createForm(TaskType::class, $task);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $task = $form->getData();
            $task->setProject($project);
            $email = $form->get('email')->getData();
            $user = $userRepository->findOneBy(['email' => $email]);
            if (!$user) {
                // Se não encontrar o usuário, exibe um erro
                $this->addFlash('danger', 'Aucun utilisateur trouvé avec cette email.');
                return $this->redirectToRoute('task_new'); // Redireciona para o formulário
            }
            $task->setEmploye($user);
            $entityManager->persist($task);
            $entityManager->flush();
            return $this->redirectToRoute('app_task_index', [], Response::HTTP_SEE_OTHER);
            // função de envio de e-mail
            // $this->sendEmail($mailer, $user);
        }
        return $this->render('task/newTask.html.twig', [
            'task' => $task,
            'form' => $form,
            'projectId' => $projectId,

        ]);
    }

    // ------------------  email -----------------------------------------


  

    #[Route('/{id}', name: 'app_task_show', methods: ['GET'])]
    public function show(Task $task, UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();

        return $this->render('task/showTask.html.twig', [
            'task' => $task,
            'users' => $users
        ]);
    }

    #[Route('/{id}/edit', name: 'app_task_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Task $task, EntityManagerInterface $entityManager, UserRepository $userRepository): Response
    {
        $employe = $task->getEmploye();
        $email = $employe ? $employe->getMatricule() : null; // Verifica se há um empregado antes de pegar a matrícula

        $form = $this->createForm(TaskType::class, $task);

        // Definir a matrícula no campo correto do formulário, caso o empregado exista
        if ($email) {
            $form->get('email')->setData($email);
        }

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Pegar o valor da matrícula do formulário
            $email = $form->get('email')->getData();
            $user = $userRepository->findOneBy(['email' => $email]);

            if (!$user) {
                // Exibir erro se o usuário não for encontrado
                $this->addFlash('danger', 'Aucun utilisateur trouvé avec cette email.');
                return $this->redirectToRoute('app_task_edit', ['id' => $task->getId()]); // Redireciona de volta ao formulário
            }

            // Associar o empregado à tarefa
            $task->setEmploye($user);

            // Salvar no banco
            $entityManager->flush();

            return $this->redirectToRoute('app_task_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('task/editTask.html.twig', [
            'task' => $task,
            'form' => $form,
            'email' => $email,
        ]);
    }


    #[Route('/{id}', name: 'app_task_delete', methods: ['POST'])]
    public function delete(Request $request, Task $task, EntityManagerInterface $entityManager,): Response
    {

        if ($this->isCsrfTokenValid('delete' . $task->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($task);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_task_index', [], Response::HTTP_SEE_OTHER);
    }
}
