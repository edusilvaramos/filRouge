<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Entity\Project;
use App\Form\CommentType;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\SecurityBundle\Security;
use App\Classes\SessionManager;
use Symfony\Component\HttpFoundation\JsonResponse;


final class CommentController extends AbstractController
{
    #[Route('/comment',name: 'app_comment_index', methods: ['GET'])]
    public function comment(CommentRepository $commentRepository, SessionManager $session, EntityManagerInterface $entityManager): Response
    {
        $projectId = $session->getProjectId();
        // dd($projectId);
        $project = $entityManager->getRepository(Project::class)->find($projectId);
        // dd($user);
        $comment = $commentRepository->findcomments($project);
        // dd($comment);

        return $this->render('comment/indexComment.html.twig', [
            'comments' => $comment,
        ]);
    }

    #[Route('/comment/new', name: 'app_comment_new', methods: ['POST'])]
    public function new( $commentContent,Request $request, EntityManagerInterface $entityManager, Security $security, SessionManager $session): JsonResponse
    {
        dd($commentContent);
        $user = $security->getUser();
        $projectId = $session->getProjectId();
        $project = $entityManager->getRepository(Project::class)->find($projectId);
        $date = new \DateTime('now', new \DateTimeZone('Europe/Paris'));
        
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $comment->setUser($user);
            $comment->setProject($project);
            $comment->setDate($date);

            $entityManager->persist($comment);
            $entityManager->flush();

            return $this->redirectToRoute('app_comment_index', [], Response::HTTP_SEE_OTHER);
        }
        return $this->render('comment/newComment.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
