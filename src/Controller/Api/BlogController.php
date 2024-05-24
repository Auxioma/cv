<?php

namespace App\Controller\Api;

use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class BlogController extends AbstractController
{
    #[Route('/api/blog', name: 'app_api_blog')]
    public function index(CategoryRepository $Category, ArticleRepository $Article): JsonResponse
    {
        return $this->json([
            'articles' => $Article->findBy([],['id' => 'DESC'],3),
        ], 200, [], ['groups' => 'blog']);
    }
}
