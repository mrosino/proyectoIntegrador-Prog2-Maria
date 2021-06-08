-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2021 a las 03:30:52
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `base_proyecto`
--

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
(28, 1, NULL, 'Sillon esquinero Callow.png', 'Sillon Callow', '2021-04-08', 'Sillon Callow esquinero, de la Línea Chelsea, fabricado en tres cuerpos.\r\n', NULL),
(80, 1, NULL, 'Modular Rack 126 Blanco.png', 'Biblioteca Rack L Wengue', '2020-12-08', 'Mueble fabricado en melamina sobre MDP 15 mm. 12 espacios abiertos. 4 cajones de 43 x 34 x 13 cm. con correderas metalicas. Amplitud para TV de 55pulgadas y 2 orificios para el pasaje de los cables.Peso: 56Kg.Ancho: 180cm. Profundo: 45cm. Alto: 183cm. Bul', NULL),
(122, 2, NULL, 'Juego Comedor Aimaretti Combinado Marsella Novo.png', 'Juego Comedor Aimaretti Combinado Marsella Novo', '2020-12-08', 'Mueble mesa de 150 x 0,50 + 6 sillas. Mesa melamina simil madera - Chasis silla estructura caño - Pintura epoxi termoconvertible - Tapizado chenille', NULL),
(123, 2, NULL, 'Biblioteca Juvenil Wengue Cubos Blanco.png', 'Biblioteca Rack 126 Blanco', '2014-04-17', 'Mueble fabricado en melamina sobre MDP 15 mm. combinado con 5 cubos color blanco. Diseño contemporaneo de amplia funcionalidad.Peso: 55Kg.Ancho: 74,3cm. Profundo: 35,5cm. Alto: 212cm. Bultos: 1.Este producto se entrega en caja para armar. Incluye instruct', NULL),
(124, 3, NULL, 'Modulo Rack L Wengue.jpg', 'Biblioteca melamina cubos', '2016-06-03', 'Mueble fabricado en melamina sobre MDP 15 mm. combinado con 5 cubos color blanco. Diseño contemporaneo de amplia funcionalidad.Peso: 55Kg.Ancho: 74,3cm. Profundo: 35,5cm. Alto: 212cm. Bultos: 1.Este producto se entrega en caja para armar. Incluye instruct', NULL),
(125, 18, NULL, 'Ropero Reflex.png', 'ropero de vidrio', '2009-07-20', 'Ropero Reflex DL352, 4 puertas, 8 espejos', '2001-06-05'),
(126, 5, NULL, 'Chifonier Super Express Chocolate.png', 'Super Chifonier Express Chocolate Cajones ', '2020-08-25', 'El chifonier Super Express de Mosconi esta fabricado en MDP de 15 mm de grosor y revestido en pintura UV, para mayor proteccion. Posee 5 cajones con correderas plasticas, que te permitiran organizar de manera ordenada ropa, juguetes y otros objetos.Peso: ', NULL),
(127, 5, NULL, 'Cucheta.png', 'Cucheta Gabinete Triliche Caoba ', '2015-10-17', 'Cama Cucheta confeccionada en MDP 15 mm, con terminacion en pintura UV y largueros en MDF 22 mm. La misma cuenta con escalera fabricada en madera y PVC de alta resistencia. A la vez que, cuenta con 1 puerta y 1 cajon que se puede ser armado a la izquierda', NULL),
(128, 1, NULL, 'Mesa Tv 120 Melamina Wengue.jpg', 'Mesa Tv 120 Melamina Wengue (Chocolate)\r\n', '2016-08-30', 'Mueble fabricado en melamina sobre MDP 15 mm. Puerta con bisagras metalicas y estante. Posee ruedas para facilitar su movimiento.Peso: 27Kg.Ancho: 90cm. Profundo: 45cm. Alto: 75cm. Bultos: 1.Este producto se entrega en caja para armar. Incluye instructivo', NULL),
(129, 3, NULL, 'sillon francis.png', 'Sillon Francis', '2021-07-08', 'Sillón Francis, de la Línea Chelsea, fabricado en tres módulos de 90 x 90 cm c/u.\r\nEnvios a todo el pais.', NULL),
(130, 2, NULL, 'sillon watts.png', 'Sillon Watts', '2017-04-09', 'Sillón Watts de la línea Camdem de tres cuerpos con esqueleto y patas cónicas de 14 cm.\r\n', NULL),
(131, 1, NULL, 'arbol 2.png', 'Cuadro Arbol de la vida', '2013-04-11', 'Creando un espacio minimalista, dándole un detalle único a tu pared.', NULL),
(132, 4, NULL, 'libreria dis.png', 'Biblioteca Dormitorio Cubos', '2013-04-11', 'Mueble fabricado en melamina sobre MDP 15 mm. combinado con 5 cubos color blanco. Diseño contemporaneo de amplia funcionalidad.Peso: 55Kg.Ancho: 74,3cm. Profundo: 35,5cm. Alto: 212cm. Bultos: 1.Este producto se entrega en caja para armar. Incluye instruct', NULL),
(133, 1, NULL, 'Sillón Esquinero Fitzroy.png', 'Sillon Fitzroy', '0000-00-00', 'Esquinero Fitzroy, de la línea Chelsea, de 2,50  2,50 mts con esqueleto y patas de eucalipto', NULL),
(134, 16, NULL, 'Letter Board blanco.png', 'Cuadro Letter Board Blanco', '2021-05-10', 'Pizarra de fieltro con letras blancas intercambiables.', NULL),
(135, 4, NULL, 'cuadro moderno flores rojas.png', 'Cuadro Triptico De La Vida', '2021-04-12', 'Creando un espacio minimalista, dándole un detalle único a tu pared.', NULL),
(136, 5, NULL, 'inhale ex.png', 'Cuadros Inhale Exhale', '0000-00-00', 'Cuadro doble frases inhale y Exhale, listo para pegar.', NULL),
(143, 18, NULL, 'Ropero Reflex.png', 'ropero de vidrio 123', '2020-03-20', 'roperooooo', '2021-06-05'),
(144, 16, NULL, 'Letter Board blanco.png', 'Cuadro Letter Board Blanco 1', '2021-05-10', 'Pizarra de fieltro con letras blancas intercambiables.', NULL),
(145, 18, NULL, 'Ropero Reflex.png', 'Cuadro Letter Board Blanco Original', '2021-06-05', 'Pizarra de fieltro con letras blancas intercambiable ', '2021-06-08'),
(146, 16, NULL, '', 'aaaaaaa', '2021-06-05', 'aaaaaa', NULL),
(148, 18, NULL, '1623112142499.jpg-newImage', ' Gato  ', '2021-06-07', ' Miausito cuchicu  ', '2021-06-08'),
(160, 18, NULL, 'imagen-1623076447961.jpg', 'vinilo 112', '2021-06-07', 'Producto ', NULL),
(161, 18, NULL, 'image-1623092778756.jpg', 'Gato', '2021-06-07', 'xdgfchjbkl', NULL),
(162, 18, NULL, 'image-1623094241049.jpg', 'Gato', '2021-06-07', 'Gato tricolor con ojos claros. Macho.', NULL),
(163, 18, NULL, 'image-1623094811113.jpg', 'Gato', '2021-06-07', 'me parece que vi un lindo gatito', NULL),
(164, 18, NULL, 'image-1623095019448.jpg', 'Gato', '2021-06-07', 'gato con boca abierta', NULL),
(165, 24, NULL, '1623114506220.jpg-image', 'Gato', '2021-06-08', 'Mi gaturri', NULL),
(166, 24, NULL, '1623115757744.jpg-image', 'Gatito Gatito Gatito Gatito !!', '2021-06-08', 'Fiera', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `created_by` (`created_by`),
  ADD KEY `commented_by` (`commented_by`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=167;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `commented_by` FOREIGN KEY (`commented_by`) REFERENCES `comments` (`creator_id`),
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
