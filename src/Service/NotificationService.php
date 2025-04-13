<?php

namespace App\Service;

use App\Entity\Notification;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

class NotificationService
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function createNotification(User $user, string $message): void
    {
        $notification = new Notification();
        $notification->setUser($user);
        $notification->setMessage($message);

        $this->entityManager->persist($notification);
        $this->entityManager->flush();
    }
}
//injetar NotificationService e chamar createNotification($user, "Sua mensagem aqui");.