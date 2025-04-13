<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use CMEN\GoogleChartsBundle\GoogleCharts\Charts\PieChart;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Project;
use App\Entity\Task;
use App\Repository\ProjectRepository;
use App\Repository\TaskRepository;
use App\Repository\UserRepository;
use App\Entity\User;

final class StatistiquesController extends AbstractController
{
    #[Route('/statistiques', name: 'app_statistiques')]
    public function index(EntityManagerInterface $entityManager, TaskRepository $taskRepository, ProjectRepository $projectRepository, UserRepository $userRepository): Response
    {
        // -------------------- data --------------------------------
        $user = $this->getUser();

        $projects = $projectRepository->findProjectsByUser($user);
        // dd($projects);
        $tasks = $taskRepository->findTasksByUser($user);
        $totalTasks = 0;
        foreach ($tasks as $task) {
            $totalTasks++;
        }
        // dd($tasks);


        $data = [['Projet', ' Count tâches']];
        foreach ($projects as $project) {
            $taskCount = 0;
            foreach ($tasks as $task) {
                if ($task->getProject() === $project) {
                    $taskCount++;
                }
            }
            $data[] = [$project->getProjectName(), $taskCount];
        }
        // -------------------- PieChart --------------------------------
        $pieChart = new PieChart();
        $pieChart->getData()->setArrayToDataTable($data);
        $pieChart->getOptions()->setTitle('Tâches par Projet');
        $pieChart->getOptions()->getTitleTextStyle()->setBold(true);
        $pieChart->getOptions()->getTitleTextStyle()->setColor('#046409900');
        $pieChart->getOptions()->getTitleTextStyle()->setItalic(true);
        $pieChart->getOptions()->getTitleTextStyle()->setFontSize(40);

        // -------------------- drawChart --------------------------------

        return $this->render('statistiques/statistiques.html.twig', [
            'piechart' => $pieChart,
            'totalTasks' => $totalTasks
        ]);
    }
}


// https: //developers.google.com/chart/interactive/docs/gallery/columnchart

// https://github.com/cmen/CMENGoogleChartsBundle/tree/master?tab=readme-ov-file