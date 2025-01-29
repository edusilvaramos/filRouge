<?php

namespace App\Controller;

use App\Entity\Task;
use App\Form\TaskType;
use App\Model\SearshData;
use App\Repository\TaskRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Project;
use Symfony\Component\Routing\Attribute\Route;




#[Route('/task')]
final class TaskController extends AbstractController
{
    #[Route(name: 'app_task_index', methods: ['GET'])]
    public function index(Request $request, TaskRepository $taskRepository, EntityManagerInterface $entityManager): Response
    {
        $session = $request->getSession();
        $projectId = $session->get('project_id');
        $project = $entityManager->getRepository(Project::class)->find($projectId);

        // Busca tarefas associadas ao projeto
        $tasks = $taskRepository->findBy(['Project' => $project]);

        return $this->render('task/indexTask.html.twig', [
            'project' => $project,
            'tasks' => $tasks,
        ]);
    }


    #[Route('/new', name: 'app_task_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, UserRepository $userRepository,): Response
    {
        $session = $request->getSession();
        $projectId = $session->get('project_id');
        $project = $entityManager->getRepository(Project::class)->find($projectId);

        $task = new Task();
        $form = $this->createForm(TaskType::class, $task);
        $form->handleRequest($request);
     
        if ($form->isSubmitted() && $form->isValid()) {
            $task = $form->getData();
            $task->setProject($project);
            $matricule = $form->get('matricule')->getData();
            $user = $userRepository->findOneBy(['matricule' => $matricule]);
            if (!$user) {
                // Se não encontrar o usuário, exibe um erro
                $this->addFlash('danger', 'Aucun utilisateur trouvé avec cette matricule.');
                return $this->redirectToRoute('task_new'); // Redireciona para o formulário
            }
            $task->setEmploye($user);
            $entityManager->persist($task);
            $entityManager->flush();
            return $this->redirectToRoute('app_task_index', [], Response::HTTP_SEE_OTHER);
        }
        return $this->render('task/newTask.html.twig', [
            'task' => $task,
            'form' => $form,
            'projectId' => $projectId,
      
        ]);
        // -------------------------------------------

    }

    #[Route('/{id}', name: 'app_task_show', methods: ['GET'])]
    public function show(Task $task): Response
    {


        return $this->render('task/showTask.html.twig', [
            'task' => $task,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_task_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Task $task, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(TaskType::class, $task);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_task_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('task/editTask.html.twig', [
            'task' => $task,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_task_delete', methods: ['POST'])]
    public function delete(Request $request, Task $task, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $task->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($task);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_task_index', [], Response::HTTP_SEE_OTHER);
    }
}
