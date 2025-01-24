<?php

namespace App\Form;

use App\Entity\Address;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;


class AddressType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder

            ->add('fName', TextType::class, [
                'label' => 'Prénom',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Son Prénom',]
            ])
            ->add('lName', TextType::class, [
                'label' => 'Nom',
                'attr' => ['class' => 'form-control mb-5', 'placeholder' => 'Son Nom']
            ])
            ->add('title', TextType::class, [
                'label' => 'Title (Maison, Travail, etc.)',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Title']
            ])
            ->add('numberDoor', TextType::class, [
                'label' => 'Numero',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Numero de la maison']
            ])
            ->add('streetName', TextType::class, [
                'label' => 'Rue',
                'attr' => ['class' => 'form-control']
            ])
            
            ->add('postalCode', TextType::class, [
                'label' => 'Code',
                'attr' => ['class' => 'form-control']
            ])
            ->add('city', TextType::class, [
                'label' => 'Ville',
                'attr' => ['class' => 'form-control']
            ])
            ->add('country', CountryType::class, [
                'label' => 'Pays',
                'attr' => ['class' => 'form-control'],
                'placeholder' => 'Son Pays de residence'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Address::class,
        ]);
    }
}
