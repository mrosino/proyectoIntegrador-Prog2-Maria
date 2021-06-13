-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-06-2021 a las 14:25:21
-- Versión del servidor: 5.7.32
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `base_proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `creator_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `creation_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`id`, `product_id`, `creator_id`, `content`, `creation_date`) VALUES
(130, 168, 31, 'muy lindo ', '2021-06-10'),
(131, 168, 31, 'me interesa', '2021-06-10'),
(133, 169, 32, 'me encanta este sillon ', '2021-06-10'),
(134, 169, 32, 'me gusta mucho el color ', '2021-06-10'),
(135, 170, 32, 'una cama muy comoda parece', '2021-06-10'),
(136, 170, 32, 'cual es su marca', '2021-06-10'),
(137, 174, 33, 'que precio?', '2021-06-10'),
(138, 174, 33, 'podria elegir otros colores?', '2021-06-10'),
(139, 172, 33, 'me gusta el gris ', '2021-06-10'),
(140, 172, 33, 'esta disponible?', '2021-06-10'),
(141, 168, 33, 'cuantos metros tiene?\'', '2021-06-10'),
(142, 175, 34, 'me interesa', '2021-06-10'),
(143, 175, 34, 'vienen en ese color?', '2021-06-10'),
(144, 173, 34, 'vienen en marrron y blanco?', '2021-06-10'),
(145, 170, 34, 'me encatan esos sillones', '2021-06-10'),
(146, 170, 34, 'los vendes por separado?', '2021-06-10'),
(147, 178, 35, 'que medidas tiene', '2021-06-10'),
(148, 177, 35, 'que medida tienen los cajones', '2021-06-10'),
(149, 175, 35, 'que tamaño tiene', '2021-06-10'),
(150, 179, 36, 'me gusta el sillon ', '2021-06-10'),
(151, 179, 36, 'que precio tiene ', '2021-06-10'),
(152, 180, 36, 'de que año es el mueble', '2021-06-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `follower`
--

CREATE TABLE `follower` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_follower` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `created_by` int(10) DEFAULT NULL,
  `commented_by` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `creation_date` date DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `update_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `created_by`, `commented_by`, `image`, `product_name`, `creation_date`, `description`, `update_date`) VALUES
(168, 26, NULL, '1623269588932.jpeg-image', 'mesa Ramo', '2021-06-09', 'mesa de comedor grande ', NULL),
(169, 31, NULL, '1623331143838.jpeg-image', 'Sillon merlin gris ', '2021-06-10', 'Sillon grande gris equipado con dos almohadones', NULL),
(170, 31, NULL, '1623331261399.jpeg-image', 'Cama lorun ', '2021-06-10', 'Cama de dos plazas grande con silloncitos incluidos', NULL),
(172, 32, NULL, '1623331547739.jpeg-image', 'Almohadones neutros ', '2021-06-10', 'almohadones de color neutros elegi tu color!', NULL),
(173, 32, NULL, '1623331591961.jpeg-image', 'Almohadones morenos', '2021-06-10', 'almohadones combinados para tu eleccion!', NULL),
(174, 32, NULL, '1623331639205.jpeg-image', 'Almohadones indios ', '2021-06-10', 'Almohadones decorados de la india ', NULL),
(175, 33, NULL, '1623331881556.jpeg-image', 'Mesa Blanca', '2021-06-10', 'Mesa blanca con sillas nude', NULL),
(176, 33, NULL, '1623331920810.jpeg-image', 'Mesa Flord', '2021-06-10', 'Mesa Amplia de 8 personas blancas', NULL),
(177, 34, NULL, '1623332160385.jpeg-image', 'Mueble Roble ', '2021-06-10', 'Mueble roble con 6 cajones 3 grandes y 3 chicos ', NULL),
(178, 34, NULL, '1623332208913.jpeg-image', 'Mueble cantel', '2021-06-10', 'Mueble cante grande impecable para tu dormitorio ', NULL),
(179, 35, NULL, '1623333003189.jpeg-image', 'sillon vinatge rosa', '2021-06-10', 'Sillon vinatge de gamuza rosa', NULL),
(180, 35, NULL, '1623333034395.jpeg-image', 'Mueble vintage blanco ', '2021-06-10', 'Mueble vinatage blanco en perfecto estado', NULL),
(181, 36, NULL, '1623333287341.jpeg-image', 'Mantel tematico', '2021-06-10', 'Manteles con diseños divinos!', NULL),
(182, 36, NULL, '1623333342896.jpeg-image', 'Manteles neutros', '2021-06-10', 'Manteles colores neutros, el que mas te guste!', NULL),
(183, 39, NULL, '1623592140406.jpg-image', 'Vinilo puente de brooklyn', '2021-06-13', 'Vinilo adhesivo a la pared 40 x 20. ', NULL),
(184, 39, NULL, '1623592180993.jpg-image', 'Vinilo ciudad atardecer', '2021-06-13', 'Vinilo adhesivo a la pared 50 x 30', NULL),
(185, 39, NULL, '1623592208994.jpg-image', 'Vinilo times square', '2021-06-13', 'Vinilo 40 x 30. Auto adhesivo', NULL),
(186, 39, NULL, '1623592238171.jpg-image', 'Vinilo empire state ', '2021-06-13', 'Vinilo adhesivo a la pared 40 x 20. ', NULL),
(187, 39, NULL, '1623592268644.jpg-image', 'Vinilo NYC nocturno', '2021-06-13', 'Vinilo adhesivo a la pared 40 x 20. ', NULL),
(188, 39, NULL, '1623592319633.jpg-image', 'Vinilo vista muelle ', '2021-06-13', 'Vinilo adhesivo a la pared 60 x 80', NULL),
(189, 38, NULL, '1623594131225.jpeg-image', 'Sillon blanco 3 cuerpos', '2021-06-13', 'Sillon 3 cuerpos con detalles en metal', NULL),
(190, 38, NULL, '1623594166212.jpeg-image', 'Juego comedor madera eucalipto', '2021-06-13', 'Juego comedor para 6 personas, ideal para living comedor', NULL),
(191, 38, NULL, '1623594198565.jpeg-image', 'Reposeras exterior ', '2021-06-13', 'Juego de reposeras para piletas, aptas para exterior e interior', NULL),
(192, 38, NULL, '1623594225262.jpeg-image', 'Sommier 2 plazas', '2021-06-13', 'Sommier 2 plazas, alta densidad ', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `profile_pic` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `document` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `registration_date` date DEFAULT NULL,
  `userUpdate_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`, `profile_pic`, `province`, `document`, `gender`, `birthday`, `phone`, `registration_date`, `userUpdate_date`) VALUES
(7, 'adela', 'buye', 'adela.buye@gmail.com', '$2a$10$ALfwR6osp4x3Y18y0OqiR.Q.gDK6M86AbO1qnib8.F.UOx6t.rW3O', NULL, 'Chubut', 40937113, 'femenino', '2000-12-03', 1130180066, NULL, NULL),
(8, 'adela', 'buye', 'guido@mail.com', '$2a$10$SE3U7Wmy8.oTQujMXmNx5ODDG0B81Y4/O97kEdo08mTiL54/Pc0c6', NULL, 'Chubut', 40937113, 'masculino', '2021-04-28', 1130180066, NULL, NULL),
(9, 'marcela', 'perez', 'marcela@gmail.com', '$2a$10$qlm4to8cxRwLE4R7zuZVIOfzZuDcFuSSrW.fihjrb.JTI7wVRviti', NULL, 'Buenos Aires', 40937113, 'femenino', '2021-05-04', 1130180044, NULL, NULL),
(16, 'violeta', 'olascoaga', 'viole123@yahoo.com', '$2a$10$nY2WreEc7ScUmJggaVTbbenO6bFBtzthB9vKQ6o0fo02SUKztXSP2', NULL, 'Salta', 0, 'femenino', '2021-05-14', 11736253, NULL, NULL),
(18, 'Mariano', 'biocca', 'mariano.biocca@gmail.com', '$2a$10$21jtMQzmAuif89m3B9aNXeTEZzASvzNz/VlAAk6BgmOSc6dPcem4e', NULL, 'Buenos Aires', 37844449, 'masculino', '1995-11-02', 114567890, NULL, '2021-06-05'),
(21, 'juan', 'buye', 'juantri@yahoo.com', '$2a$10$bwHHtuA786ELjUTYLgzycucDIfK9XL0hf2Qbeaip1C9KWsCWb69OG', NULL, 'CABA', 0, 'masculino', '2021-06-01', 1130180066, NULL, NULL),
(22, 'pablo', 'buye', 'pablogh@gmail.com', '$2a$10$wTxF6iwU6vZotzt.jWKxFODX3McJJfxjd/L5dhU24Za8WjpFbNNHS', NULL, 'CABA', 40937113, 'masculino', '2021-06-01', 1130180066, NULL, NULL),
(23, 'Maria', 'Gomez omil', 'mvgomez@hotmail.com', '$2a$10$HmDF.87AwgrjFujfXJ39rOuArtZUmlVDAVSqDodH8f3ruMk0Uqncu', NULL, 'Tucuman', 23456789, 'femenino', '2021-05-31', 12345, '2021-06-05', '2021-06-05'),
(24, 'adela', 'buye', 'adela.buye@gjnmail.com', '$2a$10$MxVKUcF2TcQhE8IvvcWQ4Owr83ILC7HUSF6gu95x1I3eiU2wF8IWm', NULL, 'CABA', 0, 'masculino', '2021-06-03', 1130180066, '2021-06-07', '2021-06-07'),
(25, 'augusto', 'BUYE', 'abuye@gmail.com', '$2a$10$SMyyBV1O8zrvub6sBKemvegWrHuH4uVYElPwHRen1VHAzWI2Ijj/i', 'pp-1623094194351.jpg', 'CABA', 8252075, 'masculino', '1963-01-13', 1130180066, '2021-06-07', '2021-06-07'),
(26, 'olivia', 'rozze', 'olirozze@gmail.com', '$2a$10$9RnKn1dYTAi0oNxmzZvkG./DCa/ezqHdAUR6RAZDE1acDMoKInl9y', '1623261319687.png-pp', 'CABA', 23434643, 'femenino', '2021-06-01', 345235245, '2021-06-09', '2021-06-09'),
(31, 'marilu', 'londres', 'marilulondres@gmail.com', '$2a$10$dUbWBnB1DtQFYrApMgsKMulKRO99de0yeItYwCvd.A503FWkrmHxO', '1623330224249.jpeg-pp', 'CABA', 23434642, 'femenino', '2020-06-29', 345235246, '2021-06-10', '2021-06-10'),
(32, 'Mateo', 'Casasnovas', 'casasnovasmateo@gmail.com', '$2a$10$AaghvX1b3gpI.XWppU7R8uCS1tcuVftlAZDw4xUcTOx3zusbiR4uS', '1623330405306.jpeg-pp', 'Buenos Aires', 8252077, 'masculino', '2021-06-01', 67257645, '2021-06-10', '2021-06-10'),
(33, 'mariano', 'lauren', 'marianolauren@gmail.com', '$2a$10$5uc.D5ny1Ndw4UgW.VRX5O8Qzky33JTejUiUKwzAWecAsVqHEtsjy', '1623330541153.jpeg-pp', 'CABA', 8254075, 'masculino', '2018-06-06', 345235286, '2021-06-10', '2021-06-10'),
(34, 'marianela', 'martinez', 'marianelamarti@gmail.com', '$2a$10$7MIUPsLIWihAbV079vKXGOyuA53ug5S9heLbCOUjxOiuk5keRFKju', '1623330605330.jpeg-pp', 'CABA', 384754356, 'masculino', '2020-06-09', 345235784, '2021-06-10', '2021-06-10'),
(35, 'gustavo', 'rodriguez', 'gusrodriguez@gmail.com', '$2a$10$12DCl60QruTizoFKh0OYzezc0WdTreUy4W9p3k/zk5fMe92FxuaEy', '1623330652951.jpeg-pp', 'CABA', 346534585, 'masculino', '2018-02-08', 347585246, '2021-06-10', '2021-06-10'),
(36, 'martin', 'pereyra', 'martinpere@gmail.com', '$2a$10$bzVKIrt4/uKKfgXy31HXn.jfgxyvb0XhgbqzIkVkQdLa79MasefUi', '1623330820003.jpeg-pp', 'CABA', 234783453, 'masculino', '2017-07-13', 564235246, '2021-06-10', '2021-06-10'),
(37, 'miranda', 'doral', 'miridoral@gmail.com', '$2a$10$8aD5ngfetRLJlKvLqD/IqukQkmrzcWoJzR5heG4ymDKAYnwKTFB0.', '1623330866903.jpeg-pp', 'CABA', 756840345, 'femenino', '2017-02-08', 345289746, '2021-06-10', '2021-06-10'),
(38, 'milagros', 'sanju', 'milusanju@gmail.com', '$2a$10$dMe.eUCW84FMiVGprhdIS.qSB4Luddj/DXYHcRgeM71sf6a1Y8lJ2', '1623330913808.jpeg-pp', 'CABA', 237543532, 'femenino', '2017-09-12', 345235057, '2021-06-10', '2021-06-10'),
(39, 'Maria ', 'Rosino', 'mvrosino@hotmail.com', '$2a$10$8Dp27Q3BKIrtooR.TtZuaej6H2M6XkAnx7onMrWlopRUnbsfH9biq', '1623592063107.jpg-pp', 'Buenos Aires', 41375125, 'femenino', '1998-07-03', 381639879, '2021-06-13', '2021-06-13');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `creator_id` (`creator_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `follower`
--
ALTER TABLE `follower`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_follow` (`id_follower`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `created_by` (`created_by`),
  ADD KEY `commented_by` (`commented_by`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `commented_by` FOREIGN KEY (`commented_by`) REFERENCES `comments` (`creator_id`),
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);




