<?php

namespace App\Form;

use App\Entity\Project;
use App\Entity\User;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class ProjectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('projectName', TextType::class, [
                'label' => 'Nom du Projet',
                'attr' => ['class' => 'form-control']
            ])
            ->add('initDate', null, [
                'widget' => 'single_text',
                'data' => new \DateTime('now', new \DateTimeZone('Europe/Paris')),
                'label' => 'Date de debut',
                'attr' => ['class' => 'form-control'],
            ])

            ->add('finishDate', null, [
                'widget' => 'single_text',
                'html5' => true,
                'attr' => [
                    'min' => (new \DateTime('now'))->format('Y-m-d'),
                    'class' => 'form-control',
                ],
                'label' => 'Date de fin',
            ])
            ->add('imageProject', FileType::class, [
                'label' => 'Photo',
                'required' => false,
                'data_class' => null,
                'attr' => ['class' => 'form-control']
            ])
            ->add('description', TextAreaType::class, [
                'label' => 'Donnez une description',
                'attr' => ['class' => 'form-control']
            ])
            ->add('Employe', CollectionType::class, [
                // 'entry_type' define o tipo de campo para cada item na coleção.
                'entry_type' => TextType::class, // O usuário ainda digita matrículas manualmente
                'allow_add' => true,
                'allow_delete' => true,
                'prototype' => true, // 'prototype' permite que um protótipo de item seja gerado para facilitar a adição de novos elementos via JavaScript.
                'by_reference' => false, // 'by_reference' indica se a coleção deve ser manipulada por referência ou por cópia.
                'mapped' => false, // Impede mapear diretamente para a entidade
                // 'entry_options' define opções para os campos individuais dentro da coleção.
                'entry_options' => [
                    'attr' => ['class' => 'form-control', 'placeholder' => 'Entrer une Matricule']
                ],
            ])





        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Project::class,
            'csrf_token_id' => 'project_form',
        ]);
    }
}
