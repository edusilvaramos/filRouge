<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\RequestStack;
use App\Entity\Conversations;

class TopicSerice
{
    public function __construct(
        private readonly RequestStack $requestStack
    ) {}

    public function getTopicUrl(Conversations $conversation): string
    {
        return "{$this->getServerUrl()}/conversations/{$conversation->getId()}";
    }

    private function getServerUrl(): string
    {
        $request = $this->requestStack->getMainRequest();

        $scheme = $request->getScheme();
        $host = $request->getHost();
        $port = $request->getPort();

        $portUrl = $port ? ":$port" : '';

        return $scheme . '://' . $host . $portUrl;
    }
}
