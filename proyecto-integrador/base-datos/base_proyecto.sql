-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-05-2021 a las 23:04:13
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
  `image` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `creation_date` date DEFAULT current_timestamp(),
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `created_by`, `image`, `product_name`, `creation_date`, `description`) VALUES
(28, 1, 'silloncallow.jpg', 'Sillon Callow', '2021-04-08', 'Sillon Callow esquinero, de la Línea Chelsea, fabricado en tres cuerpos.\r\n'),
(80, 1, 'rack.jpg', 'Modulo Rack L Wengue', '2020-12-08', 'Mueble fabricado en melamina sobre MDP 15 mm. 12 espacios abiertos. 4 cajones de 43 x 34 x 13 cm. con correderas metalicas. Amplitud para TV de 55pulgadas y 2 orificios para el pasaje de los cables.Peso: 56Kg.Ancho: 180cm. Profundo: 45cm. Alto: 183cm. Bul'),
(122, 2, 'aimaretti.jpg', 'Juego Comedor Aimaretti Combinado Marsella Novo', '2020-12-08', 'Mueble mesa de 150 x 0,50 + 6 sillas. Mesa melamina simil madera - Chasis silla estructura caño - Pintura epoxi termoconvertible - Tapizado chenille'),
(123, 2, 'rack.jpg', 'Modular Rack 126 Blanco', '2014-04-17', 'Mueble fabricado en melamina sobre MDP 15 mm. combinado con 5 cubos color blanco. Diseño contemporaneo de amplia funcionalidad.Peso: 55Kg.Ancho: 74,3cm. Profundo: 35,5cm. Alto: 212cm. Bultos: 1.Este producto se entrega en caja para armar. Incluye instruct'),
(124, 3, 'wngue.jpg', 'Biblioteca Juvenil Wengue Cubos Blancos ', '2016-06-03', 'Mueble fabricado en melamina sobre MDP 15 mm. combinado con 5 cubos color blanco. Diseño contemporaneo de amplia funcionalidad.Peso: 55Kg.Ancho: 74,3cm. Profundo: 35,5cm. Alto: 212cm. Bultos: 1.Este producto se entrega en caja para armar. Incluye instruct'),
(125, 4, 'flex.jpg', 'Ropero Flex', '2029-07-20', 'Ropero Reflex DL352, 4 puertas, 8 espejos, interiores revestidos'),
(126, 5, 'chifonier.jpg', 'Chifonier Super Express Chocolate 5 Cajones ', '2020-08-25', 'El chifonier Super Express de Mosconi esta fabricado en MDP de 15 mm de grosor y revestido en pintura UV, para mayor proteccion. Posee 5 cajones con correderas plasticas, que te permitiran organizar de manera ordenada ropa, juguetes y otros objetos.Peso: '),
(127, 5, 'pyp.jpg', 'Pyp Bna Cucheta Gabinete Triliche Caoba ', '2015-10-17', 'Cama Cucheta confeccionada en MDP 15 mm, con terminacion en pintura UV y largueros en MDF 22 mm. La misma cuenta con escalera fabricada en madera y PVC de alta resistencia. A la vez que, cuenta con 1 puerta y 1 cajon que se puede ser armado a la izquierda'),
(128, 1, 'mengue.jpg', 'Mesa Tv 120 Melamina Wengue (Chocolate)\r\n', '2016-08-30', 'Mueble fabricado en melamina sobre MDP 15 mm. Puerta con bisagras metalicas y estante. Posee ruedas para facilitar su movimiento.Peso: 27Kg.Ancho: 90cm. Profundo: 45cm. Alto: 75cm. Bultos: 1.Este producto se entrega en caja para armar. Incluye instructivo'),
(129, 3, 'francis.jpg', 'Sillon Francis', '2021-07-08', 'Sillón Francis, de la Línea Chelsea, fabricado en tres módulos de 90 x 90 cm c/u.\r\nEnvios a todo el pais.'),
(130, 2, 'watts.jpg', 'Sillon Watts', '2027-04-09', 'Sillón Watts de la línea Camdem de tres cuerpos con esqueleto y patas cónicas de 14 cm.\r\n'),
(131, 1, 'arbo.jpg', 'Cuadro Arbol de la vida', '2013-04-11', 'Creando un espacio minimalista, dándole un detalle único a tu pared.'),
(132, 4, 'cubos.jpg', 'Biblioteca Juvenil Cubos', '2013-04-11', 'Mueble fabricado en melamina sobre MDP 15 mm. combinado con 5 cubos color blanco. Diseño contemporaneo de amplia funcionalidad.Peso: 55Kg.Ancho: 74,3cm. Profundo: 35,5cm. Alto: 212cm. Bultos: 1.Este producto se entrega en caja para armar. Incluye instruct');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `created_by` (`created_by`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
