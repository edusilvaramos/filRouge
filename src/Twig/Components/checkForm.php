<?php

namespace App\Twig\Components;

use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent ( name: 'checkForm')] 
class checkForm extends AbstractController
{
    use ComponentWithFormTrait;
    use DefaultActionTrait;
    #[LiveProp]
    public bool $isSuccessful = false;

    #[LiveProp]
    public ?string $newUserEmail = null;

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(UserType::class);
    }

    public function hasValidationErrors(): bool
    {
        return $this->getForm()->isSubmitted() && !$this->getForm()->isValid();
    }

    #[LiveAction]
    public function saveRegistration()
    {
        $this->submitForm();

        // save to the database
        // or, instead of creating a LiveAction, allow the form to submit
        // to a normal controller: that's even better.
        // $newUser = $this->getFormInstance()->getData();

        $this->newUserEmail = $this->getForm()
            ->get('email')
            ->getData();
        $this->isSuccessful = true;
    }
    #[LiveProp(writable: true)]
    public ?string $email = null;

    #[LiveProp]
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
}
