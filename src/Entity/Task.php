<?php

namespace App\Entity;

use App\Repository\TaskRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TaskRepository::class)]
class Task
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(length: 500, nullable: true)]
    private ?string $descriptionTask = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $initDate = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $finishDate = null;

    #[ORM\Column(length: 30, nullable: true)]
    private ?string $flagTask = null;


    #[ORM\ManyToOne(inversedBy: 'tasks')]
    private ?Project $Project = null;

    #[ORM\ManyToOne(inversedBy: 'task')]
    #[ORM\JoinColumn(nullable: true)]
    private ?User $employe = null;

    public function __toString()
    {
        return $this->title;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getDescriptionTask(): ?string
    {
        return $this->descriptionTask;
    }

    public function setDescriptionTask(?string $descriptionTask): static
    {
        $this->descriptionTask = $descriptionTask;

        return $this;
    }

    public function getInitDate(): ?\DateTimeInterface
    {
        return $this->initDate;
    }

    public function setInitDate(\DateTimeInterface $initDate): static
    {
        $this->initDate = $initDate;

        return $this;
    }

    public function getFinishDate(): ?\DateTimeInterface
    {
        return $this->finishDate;
    }

    public function setFinishDate(\DateTimeInterface $finishDate): static
    {
        $this->finishDate = $finishDate;

        return $this;
    }

    public function getFlagTask(): ?string
    {
        return $this->flagTask;
    }

    public function setFlagTask(?string $flagTask): static
    {
        $this->flagTask = $flagTask;

        return $this;
    }

    public function getProject(): ?Project
    {
        return $this->Project;
    }

    public function setProject(?Project $Project): static
    {
        $this->Project = $Project;

        return $this;
    }

    public function getEmploye(): ?User
    {
        return $this->employe;
    }

    public function setEmploye(?User $employe): static
    {
        $this->employe = $employe;

        return $this;
    }
}
