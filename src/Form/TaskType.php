<?php

namespace App\Form;

use App\Entity\Task;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class TaskType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre de la tâche',
                'attr' => ['class' => 'form-control']
            ])
            ->add('descriptionTask', TextareaType::class, [
                'label' => 'Description de la tâche',
                'attr' => ['class' => 'form-control', 'rows' => '4']
            ])
            ->add('initDate', null, [
                'widget' => 'single_text',
                'data' => new \DateTime('now', new \DateTimeZone('Europe/Paris')),
                'label' => 'Date de début',
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
            ->add('flagTask', ChoiceType::class, [
                'label' => 'État de la tâche',
                'choices' => [
                    'En cours' => 'in_progress',
                    'Terminée' => 'completed',
                    'En attente' => 'pending',
                ],
                'attr' => ['class' => 'form-select'],
                'placeholder' => 'Sélectionnez une option',
            ])
            ->add('matricule', TextType::class, [
                'label' => 'Matricule de l\'utilisateur',
                'mapped' => false,
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Entrez le matricule'
                ],
                'required' => true
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Task::class,
            'csrf_token_id' => 'task_form',
        ]);
    }
}
