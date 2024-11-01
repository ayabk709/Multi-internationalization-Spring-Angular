-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 01, 2024 at 01:16 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bank`
--

-- --------------------------------------------------------

--
-- Table structure for table `bank_account`
--

CREATE TABLE `bank_account` (
  `balance` double NOT NULL,
  `interest_rate` double DEFAULT NULL,
  `overdraft` double DEFAULT NULL,
  `type` varchar(4) NOT NULL,
  `creation_date` datetime(6) DEFAULT NULL,
  `custumor_id` bigint(20) DEFAULT NULL,
  `id` varchar(255) NOT NULL,
  `status` enum('CREATED','ACTIVATED','SUSPENDED') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bank_account`
--

INSERT INTO `bank_account` (`balance`, `interest_rate`, `overdraft`, `type`, `creation_date`, `custumor_id`, `id`, `status`) VALUES
(6514.3290559858015, 5.5, NULL, 'SA', '2024-11-01 00:58:50.000000', 2, '1c003c72-df37-485a-84dc-9e87a5da6c8e', 'CREATED'),
(5701.031884564247, 5.5, NULL, 'SA', '2024-11-01 00:58:50.000000', 1, 'e02338a8-d2e1-465e-a370-29390c9e3fc5', 'CREATED'),
(5256.889119725142, NULL, 9000, 'CA', '2024-11-01 00:58:50.000000', 2, 'e3954401-1b37-4af3-86a6-ff51ca34ab0c', 'CREATED'),
(1132.3759209587186, NULL, 9000, 'CA', '2024-11-01 00:58:50.000000', 1, 'fbed2259-3a8c-4497-a28c-d74e8bbb23b9', 'CREATED');

-- --------------------------------------------------------

--
-- Table structure for table `custumor`
--

CREATE TABLE `custumor` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `custumor`
--

INSERT INTO `custumor` (`id`, `email`, `name`) VALUES
(1, 'ayoo@gmail.com', 'ayo'),
(2, 'john@gmail.com', 'john');

-- --------------------------------------------------------

--
-- Table structure for table `operation`
--

CREATE TABLE `operation` (
  `amount` double NOT NULL,
  `id` bigint(20) NOT NULL,
  `operation_date` datetime(6) DEFAULT NULL,
  `bank_account_id` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` enum('CREDIT','DEBIT') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `operation`
--

INSERT INTO `operation` (`amount`, `id`, `operation_date`, `bank_account_id`, `description`, `type`) VALUES
(9767.91614021337, 1, '2024-11-01 00:58:50.000000', 'fbed2259-3a8c-4497-a28c-d74e8bbb23b9', NULL, 'CREDIT'),
(7779.133820041331, 2, '2024-11-01 00:58:50.000000', 'fbed2259-3a8c-4497-a28c-d74e8bbb23b9', NULL, 'DEBIT'),
(10548.165045404063, 3, '2024-11-01 00:58:50.000000', 'fbed2259-3a8c-4497-a28c-d74e8bbb23b9', NULL, 'DEBIT'),
(591.2027357573915, 4, '2024-11-01 00:58:50.000000', 'fbed2259-3a8c-4497-a28c-d74e8bbb23b9', NULL, 'DEBIT'),
(8269.957216817229, 5, '2024-11-01 00:58:50.000000', 'fbed2259-3a8c-4497-a28c-d74e8bbb23b9', NULL, 'CREDIT'),
(6445.440132099111, 6, '2024-11-01 00:58:50.000000', 'fbed2259-3a8c-4497-a28c-d74e8bbb23b9', NULL, 'DEBIT'),
(10192.516804076928, 7, '2024-11-01 00:58:50.000000', 'fbed2259-3a8c-4497-a28c-d74e8bbb23b9', NULL, 'DEBIT'),
(9175.142665320722, 8, '2024-11-01 00:58:50.000000', 'fbed2259-3a8c-4497-a28c-d74e8bbb23b9', NULL, 'CREDIT'),
(122.33503842951832, 9, '2024-11-01 00:58:50.000000', 'fbed2259-3a8c-4497-a28c-d74e8bbb23b9', NULL, 'DEBIT'),
(4177.986734289665, 10, '2024-11-01 00:58:50.000000', 'fbed2259-3a8c-4497-a28c-d74e8bbb23b9', NULL, 'CREDIT'),
(8422.81630326517, 11, '2024-11-01 00:58:50.000000', 'e02338a8-d2e1-465e-a370-29390c9e3fc5', NULL, 'CREDIT'),
(6470.8013532637815, 12, '2024-11-01 00:58:50.000000', 'e02338a8-d2e1-465e-a370-29390c9e3fc5', NULL, 'CREDIT'),
(8799.5711533683, 13, '2024-11-01 00:58:50.000000', 'e02338a8-d2e1-465e-a370-29390c9e3fc5', NULL, 'DEBIT'),
(2646.1456599983208, 14, '2024-11-01 00:58:50.000000', 'e02338a8-d2e1-465e-a370-29390c9e3fc5', NULL, 'DEBIT'),
(6335.355317188369, 15, '2024-11-01 00:58:50.000000', 'e02338a8-d2e1-465e-a370-29390c9e3fc5', NULL, 'DEBIT'),
(10444.928613761876, 16, '2024-11-01 00:58:50.000000', 'e02338a8-d2e1-465e-a370-29390c9e3fc5', NULL, 'DEBIT'),
(6072.869901036174, 17, '2024-11-01 00:58:50.000000', 'e02338a8-d2e1-465e-a370-29390c9e3fc5', NULL, 'CREDIT'),
(4671.016612148598, 18, '2024-11-01 00:58:50.000000', 'e02338a8-d2e1-465e-a370-29390c9e3fc5', NULL, 'DEBIT'),
(7642.863256767964, 19, '2024-11-01 00:58:50.000000', 'e02338a8-d2e1-465e-a370-29390c9e3fc5', NULL, 'CREDIT'),
(8560.506203633517, 20, '2024-11-01 00:58:50.000000', 'e02338a8-d2e1-465e-a370-29390c9e3fc5', NULL, 'CREDIT'),
(11480.047124191518, 21, '2024-11-01 00:58:50.000000', 'e3954401-1b37-4af3-86a6-ff51ca34ab0c', NULL, 'DEBIT'),
(5351.673159865092, 22, '2024-11-01 00:58:50.000000', 'e3954401-1b37-4af3-86a6-ff51ca34ab0c', NULL, 'DEBIT'),
(4965.326131751586, 23, '2024-11-01 00:58:50.000000', 'e3954401-1b37-4af3-86a6-ff51ca34ab0c', NULL, 'DEBIT'),
(11431.95543122805, 24, '2024-11-01 00:58:50.000000', 'e3954401-1b37-4af3-86a6-ff51ca34ab0c', NULL, 'DEBIT'),
(1622.539517835579, 25, '2024-11-01 00:58:50.000000', 'e3954401-1b37-4af3-86a6-ff51ca34ab0c', NULL, 'CREDIT'),
(1486.4936328605224, 26, '2024-11-01 00:58:50.000000', 'e3954401-1b37-4af3-86a6-ff51ca34ab0c', NULL, 'CREDIT'),
(11302.396927039163, 27, '2024-11-01 00:58:50.000000', 'e3954401-1b37-4af3-86a6-ff51ca34ab0c', NULL, 'DEBIT'),
(9765.382319647597, 28, '2024-11-01 00:58:50.000000', 'e3954401-1b37-4af3-86a6-ff51ca34ab0c', NULL, 'DEBIT'),
(8217.924801910463, 29, '2024-11-01 00:58:50.000000', 'e3954401-1b37-4af3-86a6-ff51ca34ab0c', NULL, 'DEBIT'),
(3284.6662285934167, 30, '2024-11-01 00:58:50.000000', 'e3954401-1b37-4af3-86a6-ff51ca34ab0c', NULL, 'DEBIT'),
(3314.0507898303895, 31, '2024-11-01 00:58:50.000000', '1c003c72-df37-485a-84dc-9e87a5da6c8e', NULL, 'CREDIT'),
(10184.133114616187, 32, '2024-11-01 00:58:50.000000', '1c003c72-df37-485a-84dc-9e87a5da6c8e', NULL, 'CREDIT'),
(6208.671899741396, 33, '2024-11-01 00:58:50.000000', '1c003c72-df37-485a-84dc-9e87a5da6c8e', NULL, 'DEBIT'),
(2281.777597984807, 34, '2024-11-01 00:58:50.000000', '1c003c72-df37-485a-84dc-9e87a5da6c8e', NULL, 'DEBIT'),
(411.62656303371523, 35, '2024-11-01 00:58:50.000000', '1c003c72-df37-485a-84dc-9e87a5da6c8e', NULL, 'CREDIT'),
(10990.334384061904, 36, '2024-11-01 00:58:50.000000', '1c003c72-df37-485a-84dc-9e87a5da6c8e', NULL, 'CREDIT'),
(8289.711902392342, 37, '2024-11-01 00:58:50.000000', '1c003c72-df37-485a-84dc-9e87a5da6c8e', NULL, 'DEBIT'),
(5710.506705025192, 38, '2024-11-01 00:58:50.000000', '1c003c72-df37-485a-84dc-9e87a5da6c8e', NULL, 'CREDIT'),
(8382.603504238139, 39, '2024-11-01 00:58:50.000000', '1c003c72-df37-485a-84dc-9e87a5da6c8e', NULL, 'CREDIT'),
(1139.737359919144, 40, '2024-11-01 00:58:50.000000', '1c003c72-df37-485a-84dc-9e87a5da6c8e', NULL, 'CREDIT');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bank_account`
--
ALTER TABLE `bank_account`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK8bhp7uilh8bckxi4oh12bhnud` (`custumor_id`);

--
-- Indexes for table `custumor`
--
ALTER TABLE `custumor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `operation`
--
ALTER TABLE `operation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK8wbq93xk416jfko1h9ho6gwbu` (`bank_account_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `custumor`
--
ALTER TABLE `custumor`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `operation`
--
ALTER TABLE `operation`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bank_account`
--
ALTER TABLE `bank_account`
  ADD CONSTRAINT `FK8bhp7uilh8bckxi4oh12bhnud` FOREIGN KEY (`custumor_id`) REFERENCES `custumor` (`id`);

--
-- Constraints for table `operation`
--
ALTER TABLE `operation`
  ADD CONSTRAINT `FK8wbq93xk416jfko1h9ho6gwbu` FOREIGN KEY (`bank_account_id`) REFERENCES `bank_account` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
