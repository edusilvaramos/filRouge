<?php

namespace App\Controller;

use App\Entity\Project;
use App\Entity\Task;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\User;

class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home')]
    public function index(EntityManagerInterface $em,)
    {
        $user = $this->getUser();

        if ($this->isGranted('ROLE_ADMIN') || $this->isGranted('ROLE_MANAGER')) {
            $projects = $em->getRepository(Project::class)->findAll();
        } else {
            $projects = $em->getRepository(Project::class)->findProjectsByUser($user);
        }

        $tasksByProject = [];

        foreach ($projects as $project) {
            if ($this->isGranted('ROLE_ADMIN') || $this->isGranted('ROLE_MANAGER')) {
                $tasks = $em->getRepository(Task::class)->findBy(['Project' => $project]);
            } else {
                $tasks = $em->getRepository(Task::class)->findBy([
                    'Project' => $project,
                    'employe' => $user
                ]);
            }
            $tasksByProject[$project->getId()] = $tasks;
        }

        return $this->render('home/home.html.twig', [
            'projects' => $projects,
            'tasksByProject' => $tasksByProject,
        ]);
    }
}
