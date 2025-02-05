<?php


namespace App\DTO;
use Symfony\Component\Validator\Constraints as Assert;

final readonly class CreateMessage
{
    public function __construct(
        #[Assert\NotBlank]
        public string $content,

        #[Assert\NotBlank]
        #[Assert\Type(type: "integer", message: "The conversation ID must be an integer.")]
        public int $conversationID
    ) {}
}
