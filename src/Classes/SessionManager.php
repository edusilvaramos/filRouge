<?php

namespace App\Classes;

use Symfony\Component\HttpFoundation\RequestStack;

class SessionManager
{
    private $session;

    public function __construct(RequestStack $requestStack)
    {
        $this->session = $requestStack->getSession();
    }

    public function setProjectId(int $projectId): void
    {
        $this->session->set('project_id', $projectId);
    }

    public function getProjectId(): ?int
    {
        return $this->session->get('project_id');
    }

    public function clearProjectId(): void
    {
        $this->session->remove('project_id');
    }

    public function getEmailTask(): ?string
    {
        return $this->session->get('task_email');
    }
}

