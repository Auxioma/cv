<?php

namespace App\Controller\Api;

use App\Repository\SliderRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class SliderController extends AbstractController
{
    #[Route('/api/slider', name: 'app_api_slider')]
    public function index(SliderRepository $slider): JsonResponse
    {
        return $this->json([
            'message' => $slider->findBy([],['id' => 'DESC'],1),
        ]);
    }
}
