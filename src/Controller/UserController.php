<?php

namespace App\Controller;

use App\Utils\Search;
use App\Entity\User;
use App\Entity\Team;
use App\Form\UserType;
use App\Form\SearchType;
use App\Repository\UserRepository;
use App\Service\BrevoMailer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

use Symfony\Bundle\SecurityBundle\Security;


#[Route('/user')]
final class UserController extends AbstractController
{
    public function __construct(private BrevoMailer $brevoMailer) {}

    #[Route(name: 'app_user_index', methods: ['GET'])]
    public function index(UserRepository $userRepository): Response
    {
        // block the page only for users
        // $this->denyAccessUnlessGranted(' _USER');

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
        UserPasswordHasherInterface $hasher,
        MailerInterface $mailer,
        UserRepository $userRepository,
        UserPasswordHasherInterface $passwordHasher,
        Security $security

    ): Response {

        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);


        if ($form->isSubmitted() && $form->isValid()) {
            // Verifica se o usuário conectado é um ROLE_MANAGER
            if ($security->isGranted('ROLE_MANAGER')) {
                // Senha padrão
                $defaultPassword = 'changeme@2025!Rz#8x';
                $hashedPassword = $passwordHasher->hashPassword($user, $defaultPassword);
                $user->setPassword($hashedPassword);
            } else {
                // Pega a senha do formulário
                $plainPassword = $form->get('password')->getData();
                $hashedPassword = $passwordHasher->hashPassword($user, $plainPassword);
                $user->setPassword($hashedPassword);
            }

            $user->setPassword($hashedPassword);
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
            // Salvar foto do usuário
            $path = "assets/images/user";
            $file = $form->get('photoUser')->getData();
            if ($file) {
                $file->move($path, $file->getClientOriginalName());
                $user->setPhotoUser($path . '/' . $file->getClientOriginalName());
            }

            // Persistir o usuário
            $entityManager->persist($user);
            $entityManager->flush();

            // Chamando a função de envio de e-mail
            $this->brevoMailer->sendUserWelcomeEmail($user);

            return $this->redirectToRoute('app_user_search', [], Response::HTTP_SEE_OTHER);
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
