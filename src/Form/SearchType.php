<?php

namespace App\Form;

use App\Classes\Search;
use App\Entity\Team;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('string', TextType::class, [
                'label' => false,
                'required' => false,
                'attr' => [
                    'placeholder' =>'Votre message de recherche',
                    'class' => 'form-control-sm'
                ]
            ])
            ->add('team', EntityType::class, [ // Novo campo para equipe
                'class' => Team::class, // Assumindo que há uma entidade Team
                'choice_label' => 'name', // Exibir o nome da equipe
                'label' => false,
                'required' => false,
                'placeholder' => 'Toutes les équipes',
                'attr' => ['class' => 'form-select']
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Filtrer',
                'attr' => [
                    'class' => 'btn btn-info btn-block'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Search::class,
            'method' => 'GET',
            'csrf_protection' => false
        ]);
    }
    
    public function getBlockPrefix()
    {
        return '';
    }
}
