<?php

namespace App\Form;

use App\Entity\Project;
use App\Entity\Task;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class TaskType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre de la tache',
                'attr' => ['class' => 'form-control']
            ])
            ->add('descriptionTask', TextType::class, [
                'label' => 'Description de la tache',
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
            ->add('flagTask', ChoiceType::class, [
                'label' => 'Etat de la tache',
                'choices' => [
                    'En cours' => 'in_progress',
                    'Terminée' => 'completed',
                    'En attente' => 'pending',
                ],
                'attr' => ['class' => 'form-control'],
                'placeholder' => 'Sélectionnez une option',
            ])
            
            

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Task::class,
        ]);
    }
}
