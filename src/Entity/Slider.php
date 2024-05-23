<?php

namespace App\Entity;

use App\Repository\SliderRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SliderRepository::class)]
class Slider
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Title = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $typed = [];

    #[ORM\Column(type: Types::ARRAY)]
    private array $country = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->Title;
    }

    public function setTitle(string $Title): static
    {
        $this->Title = $Title;

        return $this;
    }

    public function getTyped(): array
    {
        return $this->typed;
    }

    public function setTyped(array $typed): static
    {
        $this->typed = $typed;

        return $this;
    }

    public function getCountry(): array
    {
        return $this->country;
    }

    public function setCountry(array $country): static
    {
        $this->country = $country;

        return $this;
    }
}
