<?php

namespace App\Service;

use Nucleos\DompdfBundle\Factory\DompdfFactoryInterface;
use Nucleos\DompdfBundle\Wrapper\DompdfWrapperInterface;

use Symfony\Component\HttpFoundation\StreamedResponse;

class PdfGeneratorService
{
    public function __construct(
        private readonly DompdfFactoryInterface $factory,
        private readonly DompdfWrapperInterface $wrapper
    ) {}

    public function getStramReponse(string $html, string $reponse): StreamedResponse
    {
        return $this->wrapper->getStreamResponse($html, $reponse);
    }

    // function plus simples para usar no controller 
    public function getPdf(string $html): string
    {
        return $this->wrapper->getPdf($html);
    }
    // function para usar no controller pede mais parametros 
    public function outputPdf(string $html): string
    {
        $dompdf = $this->factory->create();

        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4');
        $dompdf->render();
        return $dompdf->output();
    }
}
