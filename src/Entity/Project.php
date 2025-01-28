<?php

namespace App\Entity;

use App\Repository\ProjectRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProjectRepository::class)]
class Project
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $projectName = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $initDate = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $finishDate = null;

    #[ORM\Column(length: 255)]
    private ?string $imageProject = null;

    #[ORM\Column(length: 500)]
    private ?string $description = null;

    /**
     * @var Collection<int, Task>
     */
    #[ORM\OneToMany(targetEntity: Task::class, mappedBy: 'Project')]
    private Collection $tasks;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'projects')]
    private Collection $Employe;

    #[ORM\Column]
    private ?bool $isFinish = null;

    public function __construct()
    {
        $this->tasks = new ArrayCollection();
        $this->Employe = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->projectName;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProjectName(): ?string
    {
        return $this->projectName;
    }

    public function setProjectName(string $projectName): static
    {
        $this->projectName = $projectName;

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

    public function getImageProject(): ?string
    {
        return $this->imageProject;
    }

    public function setImageProject(?string $imageProject): static
    {
        $this->imageProject = $imageProject;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection<int, Task>
     */
    public function getTasks(): Collection
    {
        return $this->tasks;
    }

    public function addTask(Task $task): static
    {
        if (!$this->tasks->contains($task)) {
            $this->tasks->add($task);
            $task->setProject($this);
        }

        return $this;
    }

    public function removeTask(Task $task): static
    {
        if ($this->tasks->removeElement($task)) {
            // set the owning side to null (unless already changed)
            if ($task->getProject() === $this) {
                $task->setProject(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getEmploye(): Collection
    {
        return $this->Employe;
    }

    public function addEmploye(User $employe): static
    {
        if (!$this->Employe->contains($employe)) {
            $this->Employe->add($employe);
        }

        return $this;
    }

    public function removeEmploye(User $employe): static
    {
        $this->Employe->removeElement($employe);

        return $this;
    }

    public function isFinish(): ?bool
    {
        return $this->isFinish;
    }

    public function setIsFinish(bool $isFinish): static
    {
        $this->isFinish = $isFinish;

        return $this;
    }
}
