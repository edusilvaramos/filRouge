<?php

namespace App\Twig\Components;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent(name: 'CheckForm')]
class CheckForm extends AbstractController
{
    use ComponentWithFormTrait;
    use DefaultActionTrait;

    #[LiveProp]
    public bool $isSuccessful = false;

    #[LiveProp]
    public ?string $newUserEmail = null;

    #[LiveProp(writable: true)]
    public ?string $email = null;

    #[LiveProp(writable: true)]
    public bool $emailExists = false;


    #[LiveAction]
    public function checkEmail(UserRepository $userRepository): void
    {
        if ($this->email) {
            $this->emailExists = (bool) $userRepository->findOneBy(['email' => $this->email]);
        } else {
            $this->emailExists = false;
        }
    }

    protected function instantiateForm(): FormInterface
    {
        $form = $this->createForm(UserType::class);
        // Preenche o campo email apenas, para o formulário refletir visualmente o valor
        if ($this->email) {
            $form->get('email')->setData($this->email);
        }
        return $form;
    }
}
