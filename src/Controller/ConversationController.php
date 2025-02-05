<?php

namespace App\Controller;

use App\Entity\User;
use App\Classes\ConversationFactory;

use App\Repository\ConversationsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Service\TopicSerice;
use Symfony\Component\Mercure\Discovery;
use Symfony\Component\Mercure\Authorization;
use Symfony\Component\HttpFoundation\Request;

/**
 * @method User|null getUser();
 */

final class ConversationController extends AbstractController
{

    public function __construct(
        private readonly Authorization $autorization,
        private readonly ConversationsRepository $conversationsRepository,
        private readonly ConversationFactory $factory,
        private readonly TopicSerice $topicService,
        private readonly Discovery $discovery
    ) {}

    #[Route('/conversation/users/{recipients}', name: 'app_conversation')]
    public function show(?User $recipients, Request $request): Response
    {
        $sender = $this->getUser();
        $conversations = $this->conversationsRepository->findByUser($sender, $recipients);
        if (!$conversations) {
            $conversations = $this->factory->create($sender, $recipients);
        }

        $topic = $this->topicService->getTopicUrl($conversations);

        $this->discovery->addLink($request);
        $this->autorization->setCookie($request, [$topic]);
        dump($topic);


        return $this->render('conversation/showConversation.html.twig', [
            'conversation' => $conversations,
            'topic' => $this->topicService->getTopicUrl($conversations)
        ]);
    }
}
