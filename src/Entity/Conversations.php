<?php

namespace App\Entity;

use App\Repository\ConversationsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConversationsRepository::class)]
class Conversations
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'conversations')]
    private Collection $users;

    /**
     * @var Collection<int, Mesage>
     */
    #[ORM\OneToMany(targetEntity: Mesage::class, mappedBy: 'consersation')]
    private Collection $mesages;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->mesages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): static
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
        }

        return $this;
    }

    public function removeUser(User $user): static
    {
        $this->users->removeElement($user);

        return $this;
    }

    /**
     * @return Collection<int, Mesage>
     */
    public function getMesages(): Collection
    {
        return $this->mesages;
    }

    public function addMesage(Mesage $mesage): static
    {
        if (!$this->mesages->contains($mesage)) {
            $this->mesages->add($mesage);
            $mesage->setConsersation($this);
        }

        return $this;
    }

    public function removeMesage(Mesage $mesage): static
    {
        if ($this->mesages->removeElement($mesage)) {
            // set the owning side to null (unless already changed)
            if ($mesage->getConsersation() === $this) {
                $mesage->setConsersation(null);
            }
        }

        return $this;
    }
}
