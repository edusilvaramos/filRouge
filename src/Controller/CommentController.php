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
use App\Utils\SessionManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\User;


final class CommentController extends AbstractController
{
    #[Route('/comment', name: 'app_comment_index', methods: ['GET'])]
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
    public function new(Request $request, EntityManagerInterface $entityManager, Security $security, SessionManager $session): JsonResponse
    {
        $user = $security->getUser();


        // decode JSON da requisição !!!!!!!!!!!!!!!
        // o json_decode faz to string e o true transforma em array (para evitar que seja um objeto)
        $data = json_decode($request->getContent(), true);
        // dd($data);
        //tentar resolver o problema do projeto se ele nao for selecionado ??
        $projectId = $session->getProjectId();
        $project = $entityManager->getRepository(Project::class)->find($projectId);

        // Criar e salvar 
        $comment = new Comment();
        $comment->setUser($user);
        $comment->setProject($project);
        $comment->setContent(trim($data['content']));
        $comment->setDate(new \DateTime('now', new \DateTimeZone('Europe/Paris')));

        $entityManager->persist($comment);
        $entityManager->flush();

        // resposta JSON pro view/frontend
        $user = $entityManager->getRepository(User::class)->find($user);
        return new JsonResponse([
            'success' => true,
            'username' => $user->getNameUser(),
            'content' => $comment->getContent(),
            'date' => $comment->getDate()->format('Y-m-d H:i'),
            'photoUrl' => $user->getPhotoUser() ? '/' . $user->getPhotoUser() : 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
        ]);
    }
}
