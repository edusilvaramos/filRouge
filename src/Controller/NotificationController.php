<?php

namespace App\Controller;

use App\Entity\Notification;
use App\Repository\NotificationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class NotificationController extends AbstractController
{
    #[Route('/notifications', name: 'notifications')]
    public function getNotifications(NotificationRepository $notificationRepository, Security $security)
    {
        $user = $security->getUser();
        $notifications = $notificationRepository->findBy([
            'user' => $user,
            'isRead' => false,
        ]);

        return $this->render('notification/notification.html.twig', [
            'notifications' => $notifications,
        ]);
    }
    #[Route('/notifications/read/{id}', name: 'notification_read', methods: ['POST'])]
    public function markAsRead(Notification $notification, EntityManagerInterface $entityManager): JsonResponse
    {
        $notification->setIsRead(true);
        $entityManager->flush();
        
        return new JsonResponse(['success' => true]);
    }
}
