<?php

namespace App\Controller;

use App\Classes\Search;
use App\Entity\User;
use App\Entity\Team;
use App\Form\UserType;
use App\Form\SearchType;
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

        return $this->render('user/indexUser.html.twig');
    }


    #[Route('/searchUser', name: 'app_user_search', methods: ['GET'])]
    public function searchUser(Request $request, UserRepository $userRepository): Response
    {
        $search = new Search();
        $form = $this->createForm(SearchType::class, $search);
        $form->handleRequest($request);
        $users = [];
        $users = $userRepository->findAll();
    
        if ($form->isSubmitted() && $form->isValid()) {
            $users = $userRepository->searchUsers($search->string, null, null, $search->team);
        }
    
        return $this->render('user/searchUser.html.twig', [
            'users' => $users,
            'searchForm' => $form->createView(),
        ]);
    }
    
    

    #[Route('/new', name: 'app_user_new', methods: ['GET', 'POST'])]
    public function new(
        Request $request,
        EntityManagerInterface $entityManager,
        UserPasswordHasherInterface $hasher
    ): Response {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Recuperar a equipe selecionada no formulário
            $teamName = $form->get('team')->getData();
            // Buscar a equipe no banco de dados
            $team = $entityManager->getRepository(Team::class)->findOneBy(['name' => $teamName]);
            if (!$team) {
                // Criar uma nova equipe se não existir
                $team = new Team();
                $team->setName($teamName);
                $entityManager->persist($team);
            }
            // Associar o usuário à equipe
            $user->setTeam($team);
            // Hash do password
            $password = $hasher->hashPassword($user, $user->getPassword());
            $user->setPassword($password);
            // Salvar foto do usuário (se aplicável)
            $path = "assets/images/user";
            $file = $form->get('photoUser')->getData();
            if ($file) {
                $file->move($path, $file->getClientOriginalName());
                $user->setPhotoUser($path . '/' . $file->getClientOriginalName());
            }
            // Persistir o usuário
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('app_login', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('user/newUser.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
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
        // nom de l'image actuelle
        $originalImage = $user->getphotoUser();
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

            if ($file) {
                $file->move($chamin, $file->getClientOriginalName());
                $user->setPhotoUser("assets/images/user/" . $file->getClientOriginalName());
            } else {
                $user->setPhotoUser($originalImage);
            }
            $entityManager->flush();

            return $this->redirectToRoute('app_login', [], Response::HTTP_SEE_OTHER);
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
