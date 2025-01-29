-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 29, 2025 at 05:14 PM
-- Server version: 5.7.44
-- PHP Version: 8.3.14

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
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `f_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `l_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number_door` int(11) NOT NULL,
  `postal_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `user_id`, `title`, `f_name`, `l_name`, `street_name`, `number_door`, `postal_code`, `city`, `country`) VALUES
(1, 5, 'Teste', 'Teste', 'Teste', 'La Paix', 4, '77127', 'Mellun', 'France'),
(2, 7, 'erfer', 'sefe', 'sfer', 'erfersefrfd', 77887, '68787', 'paris', 'BG'),
(3, 5, 'Apartament', 'Eduardo', 'Ramos', 'Avanue Pasteur', 143, '77127', 'Moissy', 'FR'),
(4, 3, 'Apartament', 'eduro', 'edu', 'Rue de la Paix', 55, '33224', 'Missonn', 'BR');

-- --------------------------------------------------------

--
-- Table structure for table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
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
('DoctrineMigrations\\Version20250128223549', '2025-01-28 22:35:56', 62);

-- --------------------------------------------------------

--
-- Table structure for table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint(20) NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `available_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `delivered_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `messenger_messages`
--

INSERT INTO `messenger_messages` (`id`, `body`, `headers`, `queue_name`, `created_at`, `available_at`, `delivered_at`) VALUES
(1, 'O:36:\\\"Symfony\\\\Component\\\\Messenger\\\\Envelope\\\":2:{s:44:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0stamps\\\";a:1:{s:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\";a:1:{i:0;O:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\":1:{s:55:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\0busName\\\";s:21:\\\"messenger.bus.default\\\";}}}s:45:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0message\\\";O:51:\\\"Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\\":2:{s:60:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0message\\\";O:39:\\\"Symfony\\\\Bridge\\\\Twig\\\\Mime\\\\TemplatedEmail\\\":5:{i:0;s:29:\\\"emails/confirmation.html.twig\\\";i:1;N;i:2;a:1:{s:4:\\\"user\\\";a:4:{s:9:\\\"firstName\\\";s:5:\\\"gmail\\\";s:8:\\\"lastName\\\";s:5:\\\"gmail\\\";s:5:\\\"email\\\";s:22:\\\"duardosramos@gmail.com\\\";s:4:\\\"team\\\";s:16:\\\"customer_success\\\";}}i:3;a:6:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;a:0:{}i:5;a:2:{i:0;O:37:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\\":2:{s:46:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0headers\\\";a:3:{s:4:\\\"from\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:4:\\\"From\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:25:\\\"edusilvaramos@hotmail.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}}}s:2:\\\"to\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:2:\\\"To\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:22:\\\"duardosramos@gmail.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}}}s:7:\\\"subject\\\";a:1:{i:0;O:48:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:7:\\\"Subject\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:55:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\0value\\\";s:35:\\\"Confirmation de création de compte\\\";}}}s:49:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0lineLength\\\";i:76;}i:1;N;}}i:4;N;}s:61:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0envelope\\\";N;}}', '[]', 'default', '2025-01-29 15:07:33', '2025-01-29 15:07:33', NULL),
(2, 'O:36:\\\"Symfony\\\\Component\\\\Messenger\\\\Envelope\\\":2:{s:44:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0stamps\\\";a:1:{s:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\";a:1:{i:0;O:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\":1:{s:55:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\0busName\\\";s:21:\\\"messenger.bus.default\\\";}}}s:45:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0message\\\";O:51:\\\"Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\\":2:{s:60:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0message\\\";O:39:\\\"Symfony\\\\Bridge\\\\Twig\\\\Mime\\\\TemplatedEmail\\\":5:{i:0;s:29:\\\"emails/confirmation.html.twig\\\";i:1;N;i:2;a:1:{s:4:\\\"user\\\";a:4:{s:9:\\\"firstName\\\";s:5:\\\"gmail\\\";s:8:\\\"lastName\\\";s:5:\\\"gmail\\\";s:5:\\\"email\\\";s:28:\\\"edusilvaramos.1998@gmail.com\\\";s:4:\\\"team\\\";s:16:\\\"customer_success\\\";}}i:3;a:6:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;a:0:{}i:5;a:2:{i:0;O:37:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\\":2:{s:46:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0headers\\\";a:3:{s:4:\\\"from\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:4:\\\"From\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:25:\\\"edusilvaramos@hotmail.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}}}s:2:\\\"to\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:2:\\\"To\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:28:\\\"edusilvaramos.1998@gmail.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}}}s:7:\\\"subject\\\";a:1:{i:0;O:48:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:7:\\\"Subject\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:55:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\0value\\\";s:35:\\\"Confirmation de création de compte\\\";}}}s:49:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0lineLength\\\";i:76;}i:1;N;}}i:4;N;}s:61:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0envelope\\\";N;}}', '[]', 'default', '2025-01-29 15:10:50', '2025-01-29 15:10:50', NULL),
(3, 'O:36:\\\"Symfony\\\\Component\\\\Messenger\\\\Envelope\\\":2:{s:44:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0stamps\\\";a:1:{s:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\";a:1:{i:0;O:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\":1:{s:55:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\0busName\\\";s:21:\\\"messenger.bus.default\\\";}}}s:45:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0message\\\";O:51:\\\"Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\\":2:{s:60:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0message\\\";O:39:\\\"Symfony\\\\Bridge\\\\Twig\\\\Mime\\\\TemplatedEmail\\\":5:{i:0;s:29:\\\"emails/confirmation.html.twig\\\";i:1;N;i:2;a:1:{s:4:\\\"user\\\";a:4:{s:9:\\\"firstName\\\";s:5:\\\"gmail\\\";s:8:\\\"lastName\\\";s:5:\\\"gmail\\\";s:5:\\\"email\\\";s:28:\\\"edusilvaramos.1998@gmail.com\\\";s:4:\\\"team\\\";s:16:\\\"customer_success\\\";}}i:3;a:6:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;a:0:{}i:5;a:2:{i:0;O:37:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\\":2:{s:46:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0headers\\\";a:3:{s:4:\\\"from\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:4:\\\"From\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:25:\\\"edusilvaramos@hotmail.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}}}s:2:\\\"to\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:2:\\\"To\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:28:\\\"edusilvaramos.1998@gmail.com\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}}}s:7:\\\"subject\\\";a:1:{i:0;O:48:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\\":5:{s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:7:\\\"Subject\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";s:55:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\0value\\\";s:35:\\\"Confirmation de création de compte\\\";}}}s:49:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0lineLength\\\";i:76;}i:1;N;}}i:4;N;}s:61:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0envelope\\\";N;}}', '[]', 'default', '2025-01-29 15:12:37', '2025-01-29 15:12:37', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `project_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `init_date` date NOT NULL,
  `finish_date` date NOT NULL,
  `image_project` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_finish` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `project_name`, `init_date`, `finish_date`, `image_project`, `description`, `is_finish`) VALUES
(1, 'Teste 1', '2025-01-24', '2025-01-25', 'assets/images/project/symfony.jpg', 'primeiro teste de imagem para o projet', 0),
(2, 'Teste 2', '2025-01-24', '2025-01-30', 'assets/images/project/developments.jpg', 'teste numero 2 para vrificar os projetas', 0),
(3, 'Texte do projets si do edu', '2025-01-25', '2025-01-30', 'assets/images/project/Screenshot 2025-01-25 at 11.55.49-2986785E-16A6-48A0-8001-72FD2633DD67.png', 'Cri do il projeté atraves do user EDu', 0),
(4, 'teste integraçoao com os users', '2025-01-25', '2025-01-30', 'assets/images/project/S8-bmw-i.jpg', 'teste integraçoao com os users', 0),
(5, 'teste', '2025-01-25', '2025-01-31', 'assets/images/project/ford-ranger-eu-Wildtrak_Ext_Full_Fr_3_4-21x9-2160x925-billboard-overview-award.jpg.renditions.original.png.jpeg', 'email@email.com', 0),
(6, 'Próximos passos para garantir que funciona', '2025-01-29', '2025-01-31', 'assets/images/project/Solution-Microsoft-teams.jpg', 'Próximos passos para garantir que funciona', 0),
(7, 'and plus users', '2025-01-29', '2025-01-31', '/private/var/folders/yd/m0_9k4gs4b585d479g3b3lfc0000gn/T/php08vieqrotvedfGbRDPH', 'and plus users', 0),
(8, 'teams', '2025-01-29', '2025-01-30', 'assets/images/project/679a26b6b300c.jpg', 'teams', 0);

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
(4, 1),
(4, 8),
(4, 9),
(5, 8),
(6, 1),
(7, 1),
(7, 3),
(7, 4),
(7, 5),
(8, 5),
(8, 8),
(8, 9);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_task` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `init_date` date NOT NULL,
  `finish_date` date NOT NULL,
  `flag_task` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employe_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `project_id`, `title`, `description_task`, `init_date`, `finish_date`, `flag_task`, `employe_id`) VALUES
(1, 2, 'teste tache  - eduardo@edu.com', 'teste tache', '2025-01-24', '2025-02-12', 'pending', 3),
(2, 1, 'teste tache', 'user eduardo@edu.com', '2025-01-24', '2025-01-30', 'completed', 3),
(3, 1, 'teste tache 2', 'user eduardo@edu.com', '2025-01-24', '2025-01-30', 'completed', 3),
(4, 2, 'teste id project', 'teste', '2025-01-25', '2025-01-26', 'pending', 3),
(5, 1, 'tache', 'cdcezcde', '2025-01-31', '2025-01-30', 'completed', 5),
(6, 1, 'Tache a partir do user edu', 'Tache a partir do user edu', '2025-01-30', '2025-01-31', 'in_progress', 5),
(7, 5, 'email@email.com', 'email@email.com', '2025-01-25', '2025-01-30', 'completed', 8),
(8, 5, 'email@email.com', 'email@email.com', '2025-01-27', '2035-01-20', 'completed', 8),
(9, 4, 'email@email.com', 'email@email.com', '2025-01-25', '2025-02-20', 'in_progress', 8),
(10, 5, 'tes', 'tes', '2025-01-27', '2025-01-29', 'completed', 8),
(11, 5, 'Eduardo Ramos', 'Eduardo Ramos', '2025-01-27', '2025-01-30', 'completed', 1),
(12, 5, '12?', '12?', '2025-01-27', '2025-01-30', 'pending', 1),
(13, 5, 'teste', 'teste', '2025-01-27', '2025-01-29', 'pending', 12),
(14, 5, 'teste', 'teste', '2025-01-15', '2025-01-30', 'in_progress', 10),
(15, 5, 'tache', 'tache', '2025-01-30', '2025-01-30', 'completed', 4),
(16, 5, 'teste', 'teset', '2025-01-01', '2025-12-31', 'in_progress', 11),
(17, 4, 'teste tache normal', 'teste tache normal', '2026-01-28', '2025-06-06', 'completed', 10),
(18, 4, 'teste user nulle', 'teste user nulle', '2025-01-28', '2025-01-30', 'in_progress', 10),
(19, 5, 'jbhkjn', 'jnnjlbkh', '2025-01-28', '2025-01-31', 'completed', 10),
(20, 5, 'bn,n;,:', 'nbbb', '2025-01-28', '2025-01-30', 'completed', 10),
(21, 5, 'teste matricla', 'teste matricla', '2025-01-29', '2025-01-31', 'in_progress', 8);

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `name`) VALUES
(4, 'customer_success'),
(1, 'design'),
(2, 'frontend'),
(3, 'machine_learning'),
(5, 'qa');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `matricule` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `telephone` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `service` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_user` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_user` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `team_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `matricule`, `first_name`, `last_name`, `birthday`, `telephone`, `service`, `name_user`, `photo_user`, `team_id`) VALUES
(1, 'Edu@edu.com', '[]', '$2y$13$BkYTsr76OGibeDnxQEb6meF4WXBE4hcwUC611zP1eBCFJVVs4uJqO', 'C0001282', 'Eduardo', 'Ramos', '1998-08-21', '0764529588', 'front', 'Eduardo Ramos', 'assets/images/user/1.png', 1),
(3, 'eduardo@edu.com', '[]', '$2y$13$zsav82Mthm86nrn2A8g1ROblR4hf.48oW8NP.wUfQx7aTuYuSBT.2', 'dzez', 'eduro', 'edu', '2025-01-08', '0762549588', 'dscdsc', 'sdc sd cds', 'assets/images/user/2.png', 1),
(4, 'eduardor@edu.com', '[]', '$2y$13$A2Qi0taKopOvwzFYydKhre.W2h/4lGYltx5VvM8Kv5LAfEtf5/4j.', 'erfveverfve', 'dcdec', 'edcedc', '2025-01-08', '076452944', 'fvgf', 'v fdvd', 'assets/images/user/3.png', 2),
(5, 'teste@teste.com', '[]', '$2y$13$IvSUGjrtX2cHQaMN6GkyW.q0AIzhTudpa5lApglDvNsknCqiB2Q3K', 'teste', 'Eduardo', 'Ramos', '2025-01-10', '23455', 'teste', 'Eduardo Ramos', 'assets/images/user/avatar.jpg', 2),
(7, 'edu@eddddu.com', '[]', '$2y$13$Y0S8c3HGiX0G2WpY15soxuqd1pXF2pYoZVnO5.S.tH/3wIgS3iot6', '0000001', 'Eduardo', 'Ramos', '1998-08-21', '938373637', 'Testeur', 'Eduardo Ramos', 'assets/images/user/edu432.jpg', 2),
(8, 'email@email.com', '[]', '$2y$13$RCHpTpDdmgDf1GQOGxHc/eNnKOUcxQwNx8oNCqBD/twPZfheWULVK', '7654665545', 'afael', 'Marques', '2025-01-09', '045757474', 'developper', 'Rafael Marques', 'assets/images/user/raf.webp', 1),
(9, 'team@team.com', '[]', '$2y$13$yhY7M0LfyLj6.TpdBLXcyOjbkjWbwJN46tuYrIvWZCDZGMums24Xa', '98765', 'Eduardo', 'Silva', '2025-01-01', '876543', 'PHP', 'Eduardo Ramos', 'assets/images/user/7FBB64059B18F161EFADFF3C0B41F906F3D4AE2B.jpeg', 2),
(10, 'e@e.com', '[]', '$2y$13$C8aOV3y5W8ogy87DR3wkpe6rZdrIXcCxxrNpaLzMg0pmDRCFDFx/6', '09876', 'e', 'e', '2025-01-09', '0987', 'z', 'z', 'assets/images/user/S8-bmw-i.jpg', 2),
(11, 'teste@team', '[]', '$2y$13$rzHqVn.LYSLXZnIQRoFGT.PTTCu7B1roN2TP4q4iSXcECpdkyU/q6', '001', 'team', 'team', '2025-01-09', '09876', 'team', 'team', 'assets/images/user/7FBB64059B18F161EFADFF3C0B41F906F3D4AE2B.jpeg', 1),
(12, 'edusilvaramos@hotmail.com', '[]', '$2y$13$3CkMtwtXdv1IcZX2zCk2Puu1jZ1EOOvsIhOwl2YelOltmFuyTR5MO', '0', 'Eduardo', 'Ramos', '1998-08-21', '0764529588', 'Get data', 'Eduardo Ramos', 'assets/images/user/Unknown-2.jpg', 3),
(22, 'edusilvaramos.1998@gmail.com', '[]', '$2y$13$vYsdFHpwAk94IhP7GP5Zd.nz21.QH8xmgqDi4xS/8H2dJHLVEb.vO', '56789', 'edusilvaramos.1998@gmail.com', 'edusilvaramos.1998@gmail.com', '2025-01-09', '6789876', 'edusilvaramos.1998@gmail.com', 'edusilvaramos.1998@gmail.com', 'assets/images/user/developments.jpg', 5);

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
-- Indexes for table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `FK_D4E6F81A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `project_user`
--
ALTER TABLE `project_user`
  ADD CONSTRAINT `FK_B4021E51166D1F9C` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_B4021E51A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

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
