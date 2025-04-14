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

#[AsLiveComponent(name: 'checkForm')]
class CheckForm extends AbstractController
{
    use ComponentWithFormTrait;
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public ?string $email = null;

    #[LiveProp(writable: true)]
    public bool $emailExists = false;

    #[LiveProp(writable: true)]
    public ?string $birthday = null;

    #[LiveProp]
    public bool $birthdayIsValid = true;


    #[LiveAction]
    public function checkEmail(UserRepository $userRepository): void
    {
        if ($this->email) {
            $this->emailExists = (bool) $userRepository->findOneBy(['email' => $this->email]);
        } else {
            $this->emailExists = false;
        }
    }
    #[LiveAction]
    public function validateBirthday(): void
    {
        try {
            $birthdayDate = new \DateTime($this->birthday);
            $this->birthdayIsValid = true;
        } catch (\Exception) {
            $this->birthdayIsValid = false;
        }
    }



    protected function instantiateForm(): FormInterface
    {
        $form = $this->createForm(UserType::class);

        if ($this->email) {
            $form->get('email')->setData($this->email);
        }

        if ($this->birthday) {
            try {
                $form->get('birthday')->setData(new \DateTime($this->birthday));
            } catch (\Exception) {
                // Se data inválida, não seta nada
            }
        }


        return $form;
    }
}
