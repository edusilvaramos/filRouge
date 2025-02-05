<?php

namespace App\Controller\Admin;

use App\Entity\Project;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;

class ProjectCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Project::class;
    }
    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->add('index', Action::DETAIL);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('projectName', 'Nom du Projet'),
            DateField::new('initDate', 'Date de début')->setFormat('yyyy-MM-dd'),
            DateField::new('finishDate', 'Date de fin')->setFormat('yyyy-MM-dd'),
            ImageField::new('imageProject', 'Photo'),

            TextEditorField::new('description', 'Description'),
            CollectionField::new('Employe', 'Employés')
                ->useEntryCrudForm()
                ->setEntryIsComplex(true),
        ];
    }
}
