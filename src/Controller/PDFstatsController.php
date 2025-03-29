<?php

namespace App\Controller;

use App\Service\PdfGeneratorService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\UserRepository;


final class PDFstatsController extends AbstractController
{
    #[Route('/outputPdf', name: 'outputPdf')]
    public function outputPdf(PdfGeneratorService $pdf, UserRepository $userRepository): Response
    {
        // ------------------ data -------------
        $users = $userRepository->findAll();
        $tasks = $userRepository->findAll();

        // ------------------------------------------------------------------------------


        $html = $this->renderView('statistiques/pdf_stats.html.twig', [
            'users' => $users,
            'tasks' => $tasks
        ]);
        // crieu varias funcoes, so escolher hehe 
        $content = $pdf->getPdf($html);
        // dd($content);

        return new Response($content, 200, [
            'Content-Type' => 'application/pdf',
            'users' => $users
        ]);
    }
    #[Route('/streamPdf', name: 'streamPdf')]
    public function streamPdf(PdfGeneratorService $pdf): Response
    {
        $html = $this->renderView('statistiques/pdf_stats.html.twig');
        return $pdf->getStramReponse($html, 'Rapport');
    }
}
