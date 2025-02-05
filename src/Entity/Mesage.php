<?php

namespace App\Entity;

use App\Repository\MesageRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MesageRepository::class)]
class Mesage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\ManyToOne(inversedBy: 'mesages')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $author = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $creatadAt = null;

    #[ORM\ManyToOne(inversedBy: 'mesages')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Conversations $consersation = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): static
    {
        $this->author = $author;

        return $this;
    }

    public function getCreatadAt(): ?\DateTimeImmutable
    {
        return $this->creatadAt;
    }

    public function setCreatadAt(\DateTimeImmutable $creatadAt): static
    {
        $this->creatadAt = $creatadAt;

        return $this;
    }

    public function getConsersation(): ?Conversations
    {
        return $this->consersation;
    }

    public function setConsersation(?Conversations $consersation): static
    {
        $this->consersation = $consersation;

        return $this;
    }
}
