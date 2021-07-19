-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: 209.209.40.88:39296
-- Generation Time: Jul 19, 2021 at 11:10 AM
-- Server version: 8.0.25
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datex`
--

-- --------------------------------------------------------

--
-- Table structure for table `conversations`
--

CREATE TABLE `conversations` (
  `conversation_id` varchar(255) NOT NULL,
  `user_one` varchar(255) DEFAULT NULL,
  `user_two` varchar(255) DEFAULT NULL,
  `conversation_type` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `conversations`
--

INSERT INTO `conversations` (`conversation_id`, `user_one`, `user_two`, `conversation_type`) VALUES
('8ce0dea7-a2ed-4998-bc62-ccf6850e13b1', 'yo', 'heeyy', 'message'),
('blabla', 'heeyy', 'whatsup', 'message'),
('lalala', 'yo', 'whatsup', 'message');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `message_id` varchar(100) NOT NULL,
  `conversation_id` varchar(255) NOT NULL,
  `sender_id` varchar(300) NOT NULL,
  `message` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`message_id`, `conversation_id`, `sender_id`, `message`) VALUES
('1bc6c0a8-f082-4b15-b254-55bf372a1018', '8ce0dea7-a2ed-4998-bc62-ccf6850e13b1', 'heeyy', 'database post request test');

-- --------------------------------------------------------

--
-- Table structure for table `userAuth`
--

CREATE TABLE `userAuth` (
  `user_id` varchar(255) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `passw` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `userAuth`
--

INSERT INTO `userAuth` (`user_id`, `username`, `email`, `passw`) VALUES
('heeyy', 'hope', 'compounddork@gmail.com', 'hellow there'),
('whatsup', 'augustine', 'augustine@gmail.com', 'hello'),
('yo', 'sammy', 'sammy@gmail.com', 'hello');

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE `user_profile` (
  `profile_id` varchar(255) NOT NULL,
  `name` varchar(60) NOT NULL,
  `gender` char(1) NOT NULL,
  `picture` blob NOT NULL,
  `phone_number` int NOT NULL,
  `login_status` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conversations`
--
ALTER TABLE `conversations`
  ADD PRIMARY KEY (`conversation_id`),
  ADD KEY `user_one` (`user_one`),
  ADD KEY `user_two` (`user_two`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `conversation_id` (`conversation_id`);

--
-- Indexes for table `userAuth`
--
ALTER TABLE `userAuth`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`profile_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `conversations`
--
ALTER TABLE `conversations`
  ADD CONSTRAINT `conversations_ibfk_1` FOREIGN KEY (`user_one`) REFERENCES `userAuth` (`user_id`),
  ADD CONSTRAINT `conversations_ibfk_2` FOREIGN KEY (`user_two`) REFERENCES `userAuth` (`user_id`);

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`conversation_id`) REFERENCES `conversations` (`conversation_id`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`sender_id`) REFERENCES `userAuth` (`user_id`),
  ADD CONSTRAINT `messages_ibfk_3` FOREIGN KEY (`conversation_id`) REFERENCES `conversations` (`conversation_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD CONSTRAINT `user_profile_ibfk_1` FOREIGN KEY (`profile_id`) REFERENCES `userAuth` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
