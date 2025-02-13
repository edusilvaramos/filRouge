<?php

namespace App\Controller;

use App\Entity\Task;
use App\Form\TaskType;
use App\Repository\TaskRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Classes\SessionManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Project;
use App\Entity\User;
use App\Service\NotificationService;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/task')]
final class TaskController extends AbstractController
{
    #[Route(name: 'app_task_index', methods: ['GET'])]
    public function index(SessionManager $session, TaskRepository $taskRepository, EntityManagerInterface $entityManager): Response
    {
        $projectId = $session->getProjectId();
        $project = $entityManager->getRepository(Project::class)->find($projectId);
        $user = $this->getUser();

        // Busca tarefas associadas ao projeto
        $tasks = $taskRepository->findByUserAndProject($project, $user);

        return $this->render('task/indexTask.html.twig', [
            'project' => $project,
            'tasks' => $tasks,
        ]);
    }

    #[Route('/new', name: 'app_task_new', methods: ['GET', 'POST'])]
    public function new(SessionManager $session, Request $request, EntityManagerInterface $entityManager, NotificationService $notification): Response
    {
        $projectId = $session->getProjectId();
        // dd($projectId);
        $project = $entityManager->getRepository(Project::class)->find($projectId);
        // empregados do projeto para associar
        $employes = $project->getEmploye();
        // dd($employes);

        $task = new Task();
        $form = $this->createForm(TaskType::class, $task, [
            'project' => $project
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $task = $form->getData();
            $task->setProject($project);

            $selectedUser = $form->get('employe')->getData();
            $task->setEmploye($selectedUser);

            $entityManager->persist($task);
            $entityManager->flush();
            $this->addFlash('success', 'La tâche a éte crée avec succéss!');

            $notification->createNotification($selectedUser, "La tâche: " . $task->getTitle() . ", a éte Ajoutée a votre profil.");

            return $this->redirectToRoute('app_task_index', [], Response::HTTP_SEE_OTHER);
        }
        return $this->render('task/newTask.html.twig', [
            'task' => $task,
            'form' => $form,
            'projectId' => $projectId,
            'employes' => $employes,
            'employe' => true,
            "emailFormButton" => "",
        ]);
    }


    #[Route('/{id}', name: 'app_task_show', methods: ['GET'])]
    public function show(Task $task, UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();

        return $this->render('task/showTask.html.twig', [
            'task' => $task,
            'users' => $users
        ]);
    }

    #[Route('/edit/{id}', name: 'app_task_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Task $task, EntityManagerInterface $entityManager, SessionManager $session, NotificationService $notification): Response
    {
        $employe = $task->getEmploye();
        // dd($employe);
        $email = $employe ? $employe->getEmail() : null; // Verifica se há um empregado antes de pegar a matrícula
        // dd($email);
        $projectId = $session->getProjectId();
        // Usa a sessão já injetada no construtor
        // dd($projectId);
        $project = $entityManager->getRepository(Project::class)->find($projectId);
        $form = $this->createForm(TaskType::class, $task, [
            'project' => $project
        ]);
        // Definir a matrícula no campo correto do formulário, caso o empregado exista
        $form->handleRequest($request);
        $projectId = $session->getProjectId();
        $project = $entityManager->getRepository(Project::class)->find($projectId);
        $employes = $project->getEmploye();
        // dd($employes);
        if ($form->isSubmitted() && $form->isValid()) {
            $selectedUser = $form->get('employe')->getData();
            // dd($selectedUser);
            $task->setEmploye($selectedUser);
            $entityManager->flush();
            $this->addFlash('success', 'La tâche a éte modifiée avec succéss!');
            if ($employe != $selectedUser) {
                $notification->createNotification($selectedUser, "La tâche: " . $task->getTitle() . ", a éte Ajoutée a votre profil.");
            } else {
                $notification->createNotification($selectedUser, "La tâche: " . $task->getTitle() . ", a éte Modifiée.");
            }

            return $this->redirectToRoute('app_task_index', [], Response::HTTP_SEE_OTHER);
        }
        // dd($task);

        return $this->render('task/editTask.html.twig', [
            'task' => $task,
            'form' => $form,
            'email' => $email,
            'employe' => null,
            'employes' => $employes
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
