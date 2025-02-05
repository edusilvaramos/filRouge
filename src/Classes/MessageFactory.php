<?php 

namespace App\Classes;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Conversations;
use App\Entity\Mesage;
use App\Entity\User;

class MessageFactory {

    public function __construct(
        private readonly EntityManagerInterface $em
    ) {}

    public function create(Conversations $conversation, User $author, string $content): Mesage   
    {
        $message = new Mesage();
        $message->setConsersation($conversation);
        $message->setAuthor($author);
        $message->setContent($content);
        $message->setCreatadAt(new \DateTimeImmutable());

        $this->em->persist($message);
        $this->em->flush();

        return $message;
    }
}
