<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[Route('/user')]
final class UserController extends AbstractController
{
    #[Route(name: 'app_user_index', methods: ['GET'])]
    public function index(UserRepository $userRepository): Response
    {
        // block the page only for users
        // $this->denyAccessUnlessGranted('ROLE_USER');
        $user = $this->getUser();

        return $this->render('user/indexUser.html.twig', [
            
        ]);
    }

    #[Route('/new', name: 'app_user_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, UserPasswordHasherInterface $hasher): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // recuperer le mot de passe du form
            $user = $form->getData();
            $mdp = $user->getPassword();
            // hasher le mot de passe
            $mdp = $hasher->hashPassword($user, $mdp);

            // garder dans la db
            $user->setPassword($mdp);
            // recuperer la photo e reinicier le chemin
            $chamin = "assets/images/user";
            $file = $form->get('photoUser')->getData();
            $file->move($chamin, $file->getClientOriginalName());
            $user->setPhotoUser("assets/images/user/" . $file->getClientOriginalName());

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('app_login', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('user/newUser.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_user_show', methods: ['GET'])]
    public function show(User $user): Response
    {
        return $this->render('user/showUser.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_user_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $user, EntityManagerInterface $entityManager, UserPasswordHasherInterface $hasher): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // recuperer le mot de passe du form
            $user = $form->getData();
            $mdp = $user->getPassword();
            // hasher le mot de passe
            $mdp = $hasher->hashPassword($user, $mdp);

            // garder dans la db
            $user->setPassword($mdp);
            // recuperer la photo e reinicier le chemin
            $chamin = "assets/images/user";
            $file = $form->get('photoUser')->getData();
            $file->move($chamin, $file->getClientOriginalName());
            $user->setPhotoUser("assets/images/user/" . $file->getClientOriginalName());

            $entityManager->flush();

            return $this->redirectToRoute('app_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('user/editUser.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_user_delete', methods: ['POST'])]
    public function delete(Request $request, User $user, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_user_index', [], Response::HTTP_SEE_OTHER);
    }
}
