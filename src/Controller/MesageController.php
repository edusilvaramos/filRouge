<?php

namespace App\Controller;

use App\DTO\CreateMessage;
use App\Entity\User;
use App\Classes\MessageFactory;
use App\Repository\ConversationsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\Routing\Attribute\Route;
use App\Service\TopicSerice;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;

/**
 * @method User|null getUser();
 */

final class MesageController extends AbstractController
{
    public function __construct(
        private readonly ConversationsRepository $conversationsRepository,
        private readonly MessageFactory $factory,
        private readonly HubInterface $hub,
        private readonly TopicSerice $topicService
    ) {}
    #[Route('/mesages', name: 'app_mesages', methods: ['POST'])]
    public function create(#[MapRequestPayload] CreateMessage $playload): Response
    {

        // dd($playload);
        $conversation = $this->conversationsRepository->find($playload->conversationID);

        if (!$conversation) {
            return new Response(json_encode(['error' => 'Conversation not found']), Response::HTTP_UNPROCESSABLE_ENTITY, ['Content-Type' => 'application/json']);
        }
        $message = $this->factory->create(
            conversation: $conversation,
            author: $this->getUser(),
            content: $playload->content
        );
        $data = [
            'authorId' => $message->getAuthor()->getId(),
            'content' => $message->getContent(),
        ];
        $update = new Update(
            topics: $this->topicService->getTopicUrl($conversation),
            data: json_encode($data),
            private: true
        );

        $this->hub->publish($update);

        return new Response('', Response::HTTP_CREATED);
    }
}
