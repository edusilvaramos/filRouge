-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 07, 2025 at 05:21 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `filRouge`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `f_name` varchar(255) NOT NULL,
  `l_name` varchar(255) NOT NULL,
  `street_name` varchar(255) NOT NULL,
  `number_door` int(11) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20250122131603', '2025-01-22 13:19:58', 61),
('DoctrineMigrations\\Version20250123111450', '2025-01-23 11:15:12', 89),
('DoctrineMigrations\\Version20250124094251', '2025-01-24 09:44:42', 68),
('DoctrineMigrations\\Version20250124141857', '2025-01-24 14:19:12', 160),
('DoctrineMigrations\\Version20250124153941', '2025-01-24 15:39:50', 106),
('DoctrineMigrations\\Version20250124160934', '2025-01-24 16:09:37', 37),
('DoctrineMigrations\\Version20250124165953', '2025-01-24 17:00:01', 179),
('DoctrineMigrations\\Version20250125180218', '2025-01-25 18:02:30', 261),
('DoctrineMigrations\\Version20250125192831', '2025-01-25 19:28:40', 120),
('DoctrineMigrations\\Version20250127130439', '2025-01-27 13:04:48', 99),
('DoctrineMigrations\\Version20250127153502', '2025-01-27 15:35:12', 81),
('DoctrineMigrations\\Version20250128223549', '2025-01-28 22:35:56', 62),
('DoctrineMigrations\\Version20250206174733', '2025-02-06 17:50:24', 330),
('DoctrineMigrations\\Version20250207113741', '2025-02-07 11:37:58', 42),
('DoctrineMigrations\\Version20250207124914', '2025-02-07 12:49:51', 48);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `message` varchar(255) NOT NULL,
  `is_read` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `user_id`, `message`, `is_read`, `created_at`) VALUES
(1, 5, 'Une nouvelle tâche a éte Ajoutée a votre profil.', 1, '2025-02-06 18:09:32'),
(2, 5, 'Une nouvelle tâche a éte Ajoutée a votre profil.', 1, '2025-02-06 19:15:23'),
(3, 25, 'Une nouvelle tâche a éte Ajoutée a votre profil.', 1, '2025-02-06 19:25:40'),
(4, 5, 'Une nouvelle tâche a éte Ajoutée a votre profil.', 1, '2025-02-06 19:45:03'),
(5, 5, 'La tâche: \"La tâche: \" . $task->getName() . \" a éte a éte Ajoutée a votre profil.', 1, '2025-02-06 20:57:17'),
(6, 5, 'La tâche: \"La tâche: \" . $task->getName() . \" a éte a éte Ajoutée a votre profil.', 1, '2025-02-06 20:57:19'),
(7, 5, 'La tâche: teste Titre da tache a éte Ajoutée a votre profil.', 1, '2025-02-06 20:58:15'),
(8, 5, 'La tâche: teste Titre da tache, a éte Ajoutée a votre profil.', 1, '2025-02-07 09:30:22'),
(9, 25, 'La tâche: teste troca users, a éte Ajoutée a votre profil.', 1, '2025-02-07 09:30:57'),
(10, 5, 'La tâche: teste troca users, a éte Ajoutée a votre profil.', 1, '2025-02-07 09:31:09'),
(11, 25, 'Le Project: notify, project, a éte Ajoutée a votre profil.', 1, '2025-02-07 11:46:36'),
(12, 5, 'Le Project: notify, project, a éte Ajoutée a votre profil.', 1, '2025-02-07 11:46:36'),
(13, 25, 'Le Project: notify, project, a éte Ajoutée a votre profil.', 1, '2025-02-07 11:46:50'),
(14, 5, 'Le Project: notify, project, a éte Ajoutée a votre profil.', 1, '2025-02-07 11:46:50'),
(15, 5, 'La tâche: dscd, a éte Ajoutée a votre profil.', 1, '2025-02-07 11:48:27'),
(16, 5, 'Le Project: Teste Project motif, a éte Ajoutée a votre profil.', 1, '2025-02-07 11:53:11'),
(19, 8, 'La tâche: teste notif, a éte Ajoutée a votre profil.', 1, '2025-02-07 11:54:51'),
(20, 5, 'Le Project: Teste Project motif, a éte modifiée.', 1, '2025-02-07 11:57:47'),
(21, 8, 'Le Project: Teste Project motif, a éte modifiée.', 1, '2025-02-07 11:57:47'),
(23, 5, 'Le Project: Projeto A, a éte modifiée.', 0, '2025-02-07 16:55:46'),
(24, 7, 'Le Project: Projeto A, a éte modifiée.', 0, '2025-02-07 16:55:46'),
(25, 8, 'Le Project: Projeto A, a éte modifiée.', 1, '2025-02-07 16:55:46'),
(26, 25, 'Le Project: Projeto A, a éte modifiée.', 0, '2025-02-07 16:55:46'),
(27, 5, 'Le Project: Projeto B, a éte modifiée.', 0, '2025-02-07 16:57:53'),
(28, 7, 'Le Project: Projeto B, a éte modifiée.', 0, '2025-02-07 16:57:53'),
(29, 8, 'Le Project: Projeto B, a éte modifiée.', 1, '2025-02-07 16:57:53'),
(30, 25, 'Le Project: Projeto B, a éte modifiée.', 0, '2025-02-07 16:57:53'),
(31, 5, 'Le Project: Projeto C, a éte modifiée.', 0, '2025-02-07 16:58:24'),
(32, 7, 'Le Project: Projeto C, a éte modifiée.', 0, '2025-02-07 16:58:24'),
(33, 8, 'Le Project: Projeto C, a éte modifiée.', 1, '2025-02-07 16:58:24'),
(34, 25, 'Le Project: Projeto C, a éte modifiée.', 0, '2025-02-07 16:58:24');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `init_date` date NOT NULL,
  `finish_date` date NOT NULL,
  `image_project` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `is_finish` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `project_name`, `init_date`, `finish_date`, `image_project`, `description`, `is_finish`) VALUES
(1, 'Projeto A', '2025-02-07', '2025-06-19', 'assets/images/project/user-plus.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, modi iste praesentium facilis aperiam id minima earum ipsum ullam nemo deserunt voluptas consequuntur! Quia quam pariatur, adipisci veniam vero minus!', 0),
(6, 'Projeto B', '2025-02-07', '2025-06-12', 'assets/images/project/symfony.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, modi iste praesentium facilis aperiam id minima earum ipsum ullam nemo deserunt voluptas consequuntur! Quia quam pariatur, adipisci veniam vero minus!', 0),
(8, 'Projeto C', '2025-02-07', '2025-04-30', 'assets/images/project/developments.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, modi iste praesentium facilis aperiam id minima earum ipsum ullam nemo deserunt voluptas consequuntur! Quia quam pariatur, adipisci veniam vero minus!', 0),
(10, 'Projeto D', '2025-02-05', '2025-04-10', 'assets/images/project/679a7642b46ff.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, modi iste praesentium facilis aperiam id minima earum ipsum ullam nemo deserunt voluptas consequuntur! Quia quam pariatur, adipisci veniam vero minus!', 0),
(16, 'Projeto E', '2025-02-05', '2025-05-16', 'assets/images/project/67a0b9ec87b56.webp', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, modi iste praesentium facilis aperiam id minima earum ipsum ullam nemo deserunt voluptas consequuntur! Quia quam pariatur, adipisci veniam vero minus!', 0);

-- --------------------------------------------------------

--
-- Table structure for table `project_user`
--

CREATE TABLE `project_user` (
  `project_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project_user`
--

INSERT INTO `project_user` (`project_id`, `user_id`) VALUES
(1, 5),
(1, 7),
(1, 8),
(1, 25),
(6, 5),
(6, 7),
(6, 8),
(6, 25),
(8, 5),
(8, 7),
(8, 8),
(8, 25),
(10, 5),
(10, 7),
(10, 8),
(10, 25),
(16, 5),
(16, 7),
(16, 8),
(16, 25);

-- --------------------------------------------------------

--
-- Table structure for table `reset_password_request`
--

CREATE TABLE `reset_password_request` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `selector` varchar(20) NOT NULL,
  `hashed_token` varchar(100) NOT NULL,
  `requested_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `expires_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description_task` varchar(500) DEFAULT NULL,
  `init_date` date NOT NULL,
  `finish_date` date NOT NULL,
  `flag_task` varchar(30) DEFAULT NULL,
  `employe_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `project_id`, `title`, `description_task`, `init_date`, `finish_date`, `flag_task`, `employe_id`) VALUES
(1, 1, 'Créer un module d\'inscription', 'Description de la tâche 1 pour le projet 1', '2025-02-07', '2025-02-14', '0', 5),
(2, 1, 'Gérer les permissions', 'Description de la tâche 2 pour le projet 1', '2025-02-07', '2025-02-20', '0', 5),
(3, 1, 'Authentification sécurisée', 'Description de la tâche 3 pour le projet 1', '2025-02-07', '2025-02-25', '0', 5),
(4, 1, 'Créer un module d\'inscription', 'Description de la tâche 1 pour le projet 1', '2025-02-07', '2025-02-14', '0', 7),
(5, 1, 'Gérer les permissions', 'Description de la tâche 2 pour le projet 1', '2025-02-07', '2025-02-20', '0', 7),
(6, 1, 'Authentification sécurisée', 'Description de la tâche 3 pour le projet 1', '2025-02-07', '2025-02-25', '0', 7),
(7, 1, 'Créer un module d\'inscription', 'Description de la tâche 1 pour le projet 1', '2025-02-07', '2025-02-14', '0', 8),
(8, 1, 'Gérer les permissions', 'Description de la tâche 2 pour le projet 1', '2025-02-07', '2025-02-20', '0', 8),
(9, 1, 'Authentification sécurisée', 'Description de la tâche 3 pour le projet 1', '2025-02-07', '2025-02-25', '0', 8),
(10, 1, 'Créer un module d\'inscription', 'Description de la tâche 1 pour le projet 1', '2025-02-07', '2025-02-14', '0', 25),
(11, 1, 'Gérer les permissions', 'Description de la tâche 2 pour le projet 1', '2025-02-07', '2025-02-20', '0', 25),
(12, 1, 'Authentification sécurisée', 'Description de la tâche 3 pour le projet 1', '2025-02-07', '2025-02-25', '0', 25),
(13, 6, 'Configurer Symfony', 'Description de la tâche 1 pour le projet 6', '2025-02-07', '2025-02-14', '0', 5),
(14, 6, 'Développer un CRUD', 'Description de la tâche 2 pour le projet 6', '2025-02-07', '2025-02-20', '0', 5),
(15, 6, 'Sécuriser les routes', 'Description de la tâche 3 pour le projet 6', '2025-02-07', '2025-02-25', '0', 5),
(16, 6, 'Configurer Symfony', 'Description de la tâche 1 pour le projet 6', '2025-02-07', '2025-02-14', '0', 7),
(17, 6, 'Développer un CRUD', 'Description de la tâche 2 pour le projet 6', '2025-02-07', '2025-02-20', '0', 7),
(18, 6, 'Sécuriser les routes', 'Description de la tâche 3 pour le projet 6', '2025-02-07', '2025-02-25', '0', 7),
(19, 6, 'Configurer Symfony', 'Description de la tâche 1 pour le projet 6', '2025-02-07', '2025-02-14', '0', 8),
(20, 6, 'Développer un CRUD', 'Description de la tâche 2 pour le projet 6', '2025-02-07', '2025-02-20', '0', 8),
(21, 6, 'Sécuriser les routes', 'Description de la tâche 3 pour le projet 6', '2025-02-07', '2025-02-25', '0', 8),
(22, 6, 'Configurer Symfony', 'Description de la tâche 1 pour le projet 6', '2025-02-07', '2025-02-14', '0', 25),
(23, 6, 'Développer un CRUD', 'Description de la tâche 2 pour le projet 6', '2025-02-07', '2025-02-20', '0', 25),
(24, 6, 'Sécuriser les routes', 'Description de la tâche 3 pour le projet 6', '2025-02-07', '2025-02-25', '0', 25),
(25, 8, 'Créer un modèle IA', 'Description de la tâche 1 pour le projet 8', '2025-02-07', '2025-02-14', '0', 5),
(26, 8, 'Tester l\'IA', 'Description de la tâche 2 pour le projet 8', '2025-02-07', '2025-02-20', '0', 5),
(27, 8, 'Déployer une API IA', 'Description de la tâche 3 pour le projet 8', '2025-02-07', '2025-02-25', '0', 5),
(28, 8, 'Créer un modèle IA', 'Description de la tâche 1 pour le projet 8', '2025-02-07', '2025-02-14', '0', 7),
(29, 8, 'Tester l\'IA', 'Description de la tâche 2 pour le projet 8', '2025-02-07', '2025-02-20', '0', 7),
(30, 8, 'Déployer une API IA', 'Description de la tâche 3 pour le projet 8', '2025-02-07', '2025-02-25', '0', 7),
(31, 8, 'Créer un modèle IA', 'Description de la tâche 1 pour le projet 8', '2025-02-07', '2025-02-14', '0', 8),
(32, 8, 'Tester l\'IA', 'Description de la tâche 2 pour le projet 8', '2025-02-07', '2025-02-20', '0', 8),
(33, 8, 'Déployer une API IA', 'Description de la tâche 3 pour le projet 8', '2025-02-07', '2025-02-25', '0', 8),
(34, 8, 'Créer un modèle IA', 'Description de la tâche 1 pour le projet 8', '2025-02-07', '2025-02-14', '0', 25),
(35, 8, 'Tester l\'IA', 'Description de la tâche 2 pour le projet 8', '2025-02-07', '2025-02-20', '0', 25),
(36, 8, 'Déployer une API IA', 'Description de la tâche 3 pour le projet 8', '2025-02-07', '2025-02-25', '0', 25),
(37, 10, 'Créer des cas de test', 'Description de la tâche 1 pour le projet 10', '2025-02-07', '2025-02-14', '0', 5),
(38, 10, 'Automatiser les tests', 'Description de la tâche 2 pour le projet 10', '2025-02-07', '2025-02-20', '0', 5),
(39, 10, 'Corriger les anomalies', 'Description de la tâche 3 pour le projet 10', '2025-02-07', '2025-02-25', '0', 5),
(40, 10, 'Créer des cas de test', 'Description de la tâche 1 pour le projet 10', '2025-02-07', '2025-02-14', '0', 7),
(41, 10, 'Automatiser les tests', 'Description de la tâche 2 pour le projet 10', '2025-02-07', '2025-02-20', '0', 7),
(42, 10, 'Corriger les anomalies', 'Description de la tâche 3 pour le projet 10', '2025-02-07', '2025-02-25', '0', 7),
(43, 10, 'Créer des cas de test', 'Description de la tâche 1 pour le projet 10', '2025-02-07', '2025-02-14', '0', 8),
(44, 10, 'Automatiser les tests', 'Description de la tâche 2 pour le projet 10', '2025-02-07', '2025-02-20', '0', 8),
(45, 10, 'Corriger les anomalies', 'Description de la tâche 3 pour le projet 10', '2025-02-07', '2025-02-25', '0', 8),
(46, 10, 'Créer des cas de test', 'Description de la tâche 1 pour le projet 10', '2025-02-07', '2025-02-14', '0', 25),
(47, 10, 'Automatiser les tests', 'Description de la tâche 2 pour le projet 10', '2025-02-07', '2025-02-20', '0', 25),
(48, 10, 'Corriger les anomalies', 'Description de la tâche 3 pour le projet 10', '2025-02-07', '2025-02-25', '0', 25),
(49, 16, 'Modéliser la base de données', 'Description de la tâche 1 pour le projet 16', '2025-02-07', '2025-02-14', '0', 5),
(50, 16, 'Optimiser les requêtes', 'Description de la tâche 2 pour le projet 16', '2025-02-07', '2025-02-20', '0', 5),
(51, 16, 'Mise en place d\'une sauvegarde', 'Description de la tâche 3 pour le projet 16', '2025-02-07', '2025-02-25', '0', 5),
(52, 16, 'Modéliser la base de données', 'Description de la tâche 1 pour le projet 16', '2025-02-07', '2025-02-14', '0', 7),
(53, 16, 'Optimiser les requêtes', 'Description de la tâche 2 pour le projet 16', '2025-02-07', '2025-02-20', '0', 7),
(54, 16, 'Mise en place d\'une sauvegarde', 'Description de la tâche 3 pour le projet 16', '2025-02-07', '2025-02-25', '0', 7),
(55, 16, 'Modéliser la base de données', 'Description de la tâche 1 pour le projet 16', '2025-02-07', '2025-02-14', 'pending', 8),
(56, 16, 'Optimiser les requêtes', 'Description de la tâche 2 pour le projet 16', '2025-02-07', '2025-02-20', 'completed', 8),
(57, 16, 'Mise en place d\'une sauvegarde', 'Description de la tâche 3 pour le projet 16', '2025-02-07', '2025-02-25', 'in_progress', 8),
(58, 16, 'Modéliser la base de données', 'Description de la tâche 1 pour le projet 16', '2025-02-07', '2025-02-14', '0', 25),
(59, 16, 'Optimiser les requêtes', 'Description de la tâche 2 pour le projet 16', '2025-02-07', '2025-02-20', '0', 25),
(60, 16, 'Mise en place d\'une sauvegarde', 'Description de la tâche 3 pour le projet 16', '2025-02-07', '2025-02-25', '0', 25);

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `name`) VALUES
(4, 'customer_success'),
(1, 'design'),
(2, 'frontend'),
(6, 'it_operations'),
(3, 'machine_learning'),
(5, 'qa');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) NOT NULL,
  `roles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`roles`)),
  `password` varchar(255) NOT NULL,
  `matricule` varchar(30) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `telephone` varchar(30) NOT NULL,
  `service` varchar(255) NOT NULL,
  `name_user` varchar(255) NOT NULL,
  `photo_user` varchar(255) DEFAULT NULL,
  `team_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `matricule`, `first_name`, `last_name`, `birthday`, `telephone`, `service`, `name_user`, `photo_user`, `team_id`) VALUES
(5, 'teste@teste.com', '[]', '$2y$13$IvSUGjrtX2cHQaMN6GkyW.q0AIzhTudpa5lApglDvNsknCqiB2Q3K', 'teste', 'Eduardo', 'Ramos', '2025-01-10', '23455', 'teste', 'Eduardo Ramos', 'assets/images/user/avatar.jpg', 2),
(7, 'edu@eddddu.com', '[]', '$2y$13$Y0S8c3HGiX0G2WpY15soxuqd1pXF2pYoZVnO5.S.tH/3wIgS3iot6', '0000001', 'Eduardo', 'Ramos', '1998-08-21', '938373637', 'Testeur', 'Eduardo Ramos', 'assets/images/user/edu432.jpg', 2),
(8, 'email@email.com', '[]', '$2y$13$RCHpTpDdmgDf1GQOGxHc/eNnKOUcxQwNx8oNCqBD/twPZfheWULVK', '7654665545', 'Rafael', 'Marques', '2025-01-09', '045757474', 'developper', 'Rafael Marques', 'assets/images/user/raf.webp', 1),
(25, 'boss@LittleBoss.com', '[]', '$2y$13$e3zue5UGir.JJfIj9xeVjOBAhsth6oVOTMkzn6144Mk4zALtZpIb.', '0001', 'Boss', 'Little boss', '2024-12-03', '001', 'Chefe de project', 'Little boss', 'assets/images/user/images.jpeg', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D4E6F81A76ED395` (`user_id`);

--
-- Indexes for table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_BF5476CAA76ED395` (`user_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_user`
--
ALTER TABLE `project_user`
  ADD PRIMARY KEY (`project_id`,`user_id`),
  ADD KEY `IDX_B4021E51166D1F9C` (`project_id`),
  ADD KEY `IDX_B4021E51A76ED395` (`user_id`);

--
-- Indexes for table `reset_password_request`
--
ALTER TABLE `reset_password_request`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_7CE748AA76ED395` (`user_id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_527EDB25166D1F9C` (`project_id`),
  ADD KEY `IDX_527EDB251B65292` (`employe_id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_C4E0A61F5E237E06` (`name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_IDENTIFIER_EMAIL` (`email`),
  ADD KEY `IDX_8D93D649296CD8AE` (`team_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `reset_password_request`
--
ALTER TABLE `reset_password_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `FK_D4E6F81A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `FK_BF5476CAA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `project_user`
--
ALTER TABLE `project_user`
  ADD CONSTRAINT `FK_B4021E51166D1F9C` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_B4021E51A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reset_password_request`
--
ALTER TABLE `reset_password_request`
  ADD CONSTRAINT `FK_7CE748AA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `FK_527EDB25166D1F9C` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`),
  ADD CONSTRAINT `FK_527EDB251B65292` FOREIGN KEY (`employe_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_8D93D649296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
