<?php

namespace App\Form;
use App\Entity\User;
use App\Model\SearshData;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SeachUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('name', TextType::class, [
            'label' => 'Cherche le Nom de l\'utilisateur',
            'attr' => ['class' => 'form-control', 'placeholder' => 'Nom de l\'utilisateur', 'max' => 30, 'style' => 'margin: 10px;'],
        ]);
        
    }
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SearshData::class,
            'method' => 'GET',
            'csrf_protection' => false
        ]);
    }
}
