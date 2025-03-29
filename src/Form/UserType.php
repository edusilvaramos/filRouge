<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('matricule', TextType::class, [
                'label' => 'Matricule',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Matricule']
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Email']
            ])
            ->add('password', RepeatedType::class, [
                'type' => PasswordType::class,
                'invalid_message' => 'Le mot de passe et la confirmation doivent correspondre.',
                'label' => 'Mot de Passe',
                'required' => true,
                'first_options' => ['label' => 'Mot de Passe', 'attr' => ['class' => 'form-control', 'placeholder' => 'Mot de Passe']],
                'second_options' => ['label' => 'Confirmer le mot de passe', 'attr' => ['placeholder' => 'confirmer le mot de Passe', 'class' => 'form-control mb-5',]],
            ])
            ->add('firstName', TextType::class, [
                'label' => 'Prénom',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Son Prénom']
            ])
            ->add('lastName', TextType::class, [
                'label' => 'Nom',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Son Nom']
            ])
            ->add('birthday', DateType::class, [
                'widget' => 'single_text',
                'label' => 'Date de Naissance',
                'html5' => true,
                'attr' => [
                    'class' => 'form-control',
                    'max' => (new \DateTime('now'))->format('Y-m-d'),
                ],
            ])

            ->add('telephone', TextType::class, [
                'label' => 'Téléphone',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Téléphone']
            ])
            ->add('team', ChoiceType::class, [
                'label' => 'Equipe',
                'choices' => [
                    'Support' => 'support',
                    'Frontend' => 'frontend',
                    'Backend' => 'backend',
                    'DevOps' => 'devops',
                    'QA (Quality Assurance)' => 'qa',
                    'Design' => 'design',
                    'Product Management' => 'product_management',
                    'Marketing' => 'marketing',
                    'Sales' => 'sales',
                    'Data Science' => 'data_science',
                    'Machine Learning' => 'machine_learning',
                    'Customer Success' => 'customer_success',
                    'Cybersecurity' => 'cybersecurity',
                    'IT Operations' => 'it_operations',
                ],
                'placeholder' => 'Choisissez une équipe',
                'required' => true,
                'mapped' => false,
                'attr' => ['class' => 'form-control'],
            ])


            ->add('service', TextType::class, [
                'label' => 'Service',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Service']
            ])
            ->add('nameUser', TextType::class, [
                'label' => 'Nom d\'Utilisateur',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Nom d\'Utilisateur']
            ])
            ->add('photoUser', FileType::class, [
                'label' => 'Photo',
                'required' => false,
                'data_class' => null,
                'attr' => ['class' => 'form-control']
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
