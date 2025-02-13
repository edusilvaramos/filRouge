<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
//interface pra exceções HTTP (como 404, 403, etc.)
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Throwable;

class ErrorController extends AbstractController
{
    #[Route('/error', name: 'error_page')]
    public function show(Throwable $exception): Response
    {

        // if is a HttpExceptionInterface
        //  * - Caso contrário, o código 500 (Erro Interno do Servidor) será usado como padrão.
        $statusCode = $exception instanceof HttpExceptionInterface ? $exception->getStatusCode() : 500;
        return $this->render("bundles/TwigBundle/Exception/error{$statusCode}.html.twig");
    }
}
