<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }
    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->add('index', Action::DETAIL);
    }

    public function configureFields(string $pageName): iterable
    {

        $password = "password";
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('email'),
            TextField::new('password'),
            ChoiceField::new('roles')
                ->setChoices([
                    'User' => 'ROLE_USER',
                    'Admin' => 'ROLE_ADMIN',
                    'Manager' => 'ROLE_MANAGER',
                ])
                ->allowMultipleChoices(),
            TextField::new('matricule'),
            TextField::new('firstName'),
            TextField::new('lastName'),
            DateField::new('birthday'),
            TextField::new('telephone'),
            TextField::new('service'),
            TextField::new('nameUser'),
            // ImageField::new('photoUser')
            //     ->setUploadDir('public/assets/images/user/')
            //     ->setUploadedFileNamePattern('assets/images/user/' . '[randomhash].[extension]')
            //     ->setRequired(false),
        ];
    }
}
