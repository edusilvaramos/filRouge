<?php
namespace App\Classes;

use App\Entity\User;
use App\Entity\Conversations;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ConversationsRepository;

class ConversationFactory
{


    public function __construct(
        private readonly ConversationsRepository $conversationsRepository,
        private readonly EntityManagerInterface $entityManager // Injetando o EntityManager
    ) {}

    public function create(User $sender, User $receiver): Conversations
    {
        $conversation = new Conversations();

        $conversation->addUser($sender);
        $conversation->addUser($receiver);

        // Persistindo e salvando no banco de dados
        $this->entityManager->persist($conversation);
        $this->entityManager->flush();

        return $conversation;
    }
}
