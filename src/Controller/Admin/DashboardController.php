<?php

namespace App\Controller\Admin;

use App\Entity\Task;
use App\Entity\Project;
use App\Entity\Address;
use App\Entity\Team;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use Symfony\Component\Routing\Attribute\Route;


class DashboardController extends AbstractDashboardController
{

    private $adminUrlGenerator;
    public function __construct(AdminUrlGenerator $adminUrlGenerator)
    {
        $this->adminUrlGenerator = $adminUrlGenerator;
    }
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $url = $this->adminUrlGenerator
            ->setController(TaskCrudController::class)
            ->generateUrl();
        return $this->redirect($url);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('FilRouge');
    }

    public function configureMenuItems(): iterable
    {
        configMenuItems:
        yield MenuItem::section('Gestion projets');
        yield MenuItem::linkToDashboard('Menu', 'fa fa-home');
        yield MenuItem::linkToCrud('Utilisateurs', 'fas fa-users', User::class);
        yield MenuItem::linkToCrud('Adresses', 'fas fa-elementor', Address::class);
        yield MenuItem::linkToCrud('Projets', 'fas fa-user-tie', Project::class);
        yield MenuItem::linkToCrud('Team', 'fas fa-user-tie', Team::class);
        yield MenuItem::subMenu('Taches', 'fas fa-bars', Task::class)
            ->setSubItems([
                MenuItem::linkToCrud('Ajouter', 'fas fa-plus', Task::class)
                    ->setAction(Crud::PAGE_NEW),
                MenuItem::linkToCrud('Visualiser', 'fas fa-eye', Task::class)

            ]);


        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }
}
