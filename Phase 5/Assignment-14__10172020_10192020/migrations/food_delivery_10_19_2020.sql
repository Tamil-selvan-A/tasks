-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2020 at 08:25 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food_delivery`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `img` varchar(255) NOT NULL COMMENT 'image link',
  `name` varchar(50) NOT NULL,
  `qty` int(10) UNSIGNED DEFAULT NULL COMMENT 'quantity',
  `price` int(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `img`, `name`, `qty`, `price`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
(3, 'assets/images/juice.jpeg', 'JUICE', 1, 40, '2020-10-19 05:56:50', NULL, '2020-10-19 11:39:51', NULL),
(2, 'assets/images/idle.jpeg', 'IDLE', 15, 10, '2020-10-19 05:57:25', NULL, '2020-10-19 11:27:25', NULL),
(4, 'assets/images/full-meals.jpeg', 'FULL MEALS', 1, 50, '2020-10-19 06:22:49', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'cart item id',
  `img` varchar(255) NOT NULL COMMENT 'image link',
  `name` varchar(50) NOT NULL,
  `price` int(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `img`, `name`, `price`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
(1, 'assets/images/dosa.jpeg', 'DOSA', 20, '2020-10-18 15:52:39', NULL, '2020-10-18 21:22:39', NULL),
(2, 'assets/images/idle.jpeg', 'IDLE', 10, '2020-10-18 15:52:51', NULL, '2020-10-18 21:22:51', NULL),
(3, 'assets/images/juice.jpeg', 'JUICE', 40, '2020-10-18 15:52:59', NULL, '2020-10-18 21:22:59', NULL),
(4, 'assets/images/full-meals.jpeg', 'FULL MEALS', 50, '2020-10-18 15:53:08', NULL, '2020-10-18 21:23:08', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'cart item id', AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
