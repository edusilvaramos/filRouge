<?php

namespace App\Form;

use App\Entity\Task;
use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Classes\SessionManager;

class TaskType extends AbstractType
{


    public function buildForm(FormBuilderInterface $builder, array $options,): void
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
            ->add('employe', EntityType::class, [
                'class' => User::class,
                'choice_label' => function (User $user) {
                    return $user->getemail();
                }, // a coluna onde eu vou ir buscar as coisas hehe
                'multiple' => true, // Permite múltiplas escolhas
                'expanded' => false, // Exibe como checkboxes
                'label' => 'Associar Empregados', // para colocar um label
                'attr' => ['class' => 'form-check'], // Estilo para os checkboxes
                'required' => false,
            ])
        ;
    }
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Task::class,
            'csrf_token_id' => 'task_form',
        ]);
    }
}
