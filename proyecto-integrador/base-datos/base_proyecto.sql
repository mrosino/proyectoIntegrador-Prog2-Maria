-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-04-2021 a las 15:00:56
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
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `creator_id` int(11) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `creation_date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`id`, `product_id`, `creator_id`, `content`, `creation_date`) VALUES
(1, 28, 1, 'Me sorprendió la calidad, esperaba menos.\r\nMuy recomendable.', '2013-04-18'),
(3, 28, 1, 'Buen sillón, acorde con su precio, bien el tapizado y la estructura.', '2021-02-02'),
(4, 122, 5, 'Queda barbaro para el cuarto de los chicos. ', '2021-04-05'),
(5, 123, 2, 'Malo, esperaba mejor calidad para el precio.', '2021-02-09'),
(6, 124, 4, 'Geniales, hermosos y muy cómodos, la mesa es media livianita lo único, blanda, no es de la calidad de los sillones.\r\n\r\n', '2016-04-19'),
(7, 125, 3, 'La parte para colgar no estaba a la altura para que el cuadro quede bien armado, tuve que poner cada clavito calculando que quede bien la altura, medi uno por uno, seria bueno que el colgante ya venga en el lugar que marcará que el cuadro quede como corresponde. La imagen no esta bien definida pero de lejos no se nota tanto.\r\n', '2021-02-02'),
(8, 126, 5, 'Lindo y buen producto. Una pena que separen países por ahorrar material (rusia está cortada) no dan instrucciones claras, sería más simple con un afiche troquelado, el precio es alto, no creo q modifique mucho hacerlo, pero por como cortan se nota que buscan ahorrar y no que al el cliente se le facilite la cuestión.', '2021-02-11'),
(9, 127, 1, 'Simplemente espectaculares!!! por ahí, la mesa es más frágil de lo que debería..\r\n', '2021-04-15'),
(10, 128, 2, 'Fácil de armar. Queda muy estética y ocupa poco lugar. La recomiendo. Me sirvió para solucionar varios problemas de guardado con mis cd´s y películas.', '2021-02-09'),
(13, 129, 1, 'Me encanta la cama pero deberían incluir en el precio el armado, y no ponerlo opcional, ya que es imposible armarla uno mismo, del resto todo perfecto!.', '2019-04-25'),
(14, 130, 2, 'Todo perfecto!.', '2017-04-23'),
(15, 131, 1, 'Lo pedi en negro. Me encanta, super comodo y entran un monton de objetos. \r\n', '2012-04-04'),
(16, 132, 4, 'El producto no era lo qué esperaba y tenia saltaduras en los bordes del enchapado y con las indicaciones del armado confusas ya que los perfiles no estaban señalizados a lo que indicaba el folleto de armado. \r\n\r\n', '2021-01-14'),
(17, 28, 4, 'Se nota fuerte y robusta la unidad. El color negro esta espectacular. Las piezas encajan casi perfectamente, digo casi, porque algunos tornillos sobresalen apenas uno o dos milímetros, lo que puede ocasionar que se rayen las superficies si se frotan. Y algunos paneles también sobresalen por uno o dos milímetros. Pero muy buen material, no me arrepiento de esta compra.\r\n\r\n', '2016-06-16'),
(18, 80, 4, 'Al principio es medio trambolico para armar jaja pero una vez que le agarras la mano listo. Se recomienda destornillador electrico ya que llevan varios tornillos. \r\n', '2015-06-26'),
(19, 122, 3, 'La mesa tiene una mano muy finita de pintura y el aglomerado se hizo globosy saltó la pintura, además una pata se mueve y la tabla que es para alargar se le salió una visagra el primer dia. Las sillas están muy bien solo que es bueno comprarle almohadoncitos ya que se inclina para atrás y es muy cómodo pero de usar todo el tiempo duele la cintura un poco, pero son muy buenas.\r\n\r\n', '2023-04-14'),
(21, 123, NULL, 'Muy bonito. Pero muchos detalles malos que te das cuenta con el armado. Desnivel del encastre en la extension del medio de la mesa. \r\n', '2020-05-08'),
(22, 124, 5, 'Excelente producto, precio calidad de la mano, recomendable!!!. \r\n', '2021-05-01'),
(24, 125, 1, 'Lo compre desarmado y en vez de disfrutarlo, estuve una semana volviendome loco porque el instructivo era inentendible. El rack en si es muy lindo, pero que te lo traigan todo desarmado y con un mal manual es una falta de respeto. Repito, en vez de disfrutar su llegada, la pase mal. \r\n', '0000-00-00'),
(29, 126, 3, 'La calidad es bastante regular, no es el color de las fotos, no lo recomiendo, el armado es sencillo.\r\n', '2017-06-29'),
(30, 127, 4, 'El mueble es tal cual se lo ve en la foto. Buena calidad y buenas terminaciones. Lo único que cuesta muchísimo realizar el armado. Lleva mucho tiempo y más cuando no tenes las herramientas ideales. \r\n', '2017-04-14'),
(31, 128, 1, 'No hay buena relación precio calidad. Se salta toda la melamina de los bordes; vino mal pegada. Podrían mejorar la calidad de relleno de los almohadones.', '2018-05-23'),
(32, 129, 1, 'Excelente calidad a muy buen precio. El color justo como se ven en las fotos. Cómodos. Muy buenas terminaciones.', '2018-12-31'),
(33, 130, 1, 'Excelente, muy conforme con los sillones y es acorde a lo esperado. Lo recomiendo.', '2018-04-19'),
(34, 131, 1, 'Son hermosos y muy buena calidad, superaron mis expectativas!.', '2018-07-08'),
(35, 132, 3, 'Es bastante mullido, el color en la foto se ve entero sin embargo es mitad negro y mitad uva, pero en si es confortable.', '2018-07-29'),
(36, 28, 3, 'Queda muy bien en ambientes monocromáticos. Se podrían añadir tapas plásticas para esconder los tornillos, o en su defecto autoadhesivos, ya que en el color blanco son realmente muy notorios. \r\n\r\n', '2019-06-06'),
(37, 80, 5, 'El producto es el esperado. El unico tema es la empresa que lo enteega elegi un horario y dia y lo trajeron cuando les quedo comodo a ellos. ', '2021-07-15'),
(38, 122, 3, 'Muy conforme lo volvería a comprar la verdad precio y calidad excelente muchas gracias.', '2021-01-13'),
(39, 123, 3, 'Mas de lo que esperaba,excelente producto! muy comod y amplio sillon,buenas terminaciones,me recomendaron la tela tupungato, ya que tengo dos mascotas, y resiste bastante bien las rascaduras de mis gatos! super recomendable!!.', '2020-03-17'),
(40, 124, 3, 'Muy buenos y facheros los sillones. Tal cual se ven en la foto, quedaron muy bien. El único detalle es que son muy duros, no se si con el tiempo hablanden. Muy conforme.', '2019-08-07'),
(41, 125, 4, 'Por el precio bien,pero las maderitas finas se salen,pense q venian pegadas o atornilladas,pero no, igual le encanto a mi mamá.\r\n\r\n', '2018-02-21'),
(42, 126, 2, 'Muy lindo producto, prolijo y cómodo, le falta un poco de ajuste en una de los apoyos pero es mínimo, lo recomendaría con confianza.\r\n\r\n', '2018-03-21'),
(43, 127, 5, 'Muy básico. Pensé que era otra cosa. No está cepillado y los bordes crudo como la madera. ', '2017-07-15'),
(44, 128, 3, 'Todo lo que le compré estaba flojo, literalmente, bailan.\r\n', '2020-11-13'),
(45, 129, 4, 'Muy conforme con la compra! lo recomiendo! hermosa la tela, cómodo!todo el conjunto .', '2017-11-02'),
(46, 130, 4, 'Muy bueno el producto. Excelente calidad. Las sillas las compre reforzadas que es un adicional económico. Muy recomendable .', '2017-09-09'),
(47, 131, 4, 'El sillon además de hermoso es muy cómodo! los materiales son de muy buena calidad telas y y madera y los almohadones recuperan su forma cuando te levantas. Muy conformes con el producto gracias! feliz! recomiendo!.', '2021-04-01'),
(48, 132, 4, 'Muy bueno, el sillon es acorde a su valor, tener en cuenta que hay sillones de 20 mil pesos, muy prolijo y comodo en esta gama de precio.', '2020-12-28'),
(49, 28, 5, 'Es tal cual lo que esperaba, con las patas metalicas queda aún mejor. Solo pense que el color era mas gaspeado con blanco y no es mas uniforme el gris, pero igual queda bien. Por ahora parece firme si, si bien es cierto que tan solo lo tengo hace un para de semanas. Espero que se mantenga en buenas condiciones y no sea que luego se deteriora facilmente.', '2020-10-05'),
(50, 80, 5, 'El sillón viene muy bien terminado, prolijo, de acuerdo a lo que se ve en la imágen, ni mas ni menos. Es cierto que el respaldo queda un poco atras, y da la impresión que el sillón es muy profundo. Relación precio/calidad mas que perfecta.', '2020-02-10'),
(51, 122, 5, 'La tela antidesgarro se la banca muy bien contra los arañazos del gato. El gato se afila las uñas y la tela no se deshace ni deshilacha. Lo único que no me encantó es que es muy profundo, si te sentás con la espalda contra el respaldo, las piernas casi que no llegan a colgar salvo que seas muy alto, pero lo bueno es que pueden acostarse dos personas de contextura media si se aprietan lo suficiente.', '2020-01-29'),
(52, 123, 5, 'Muy firme e impecables terminaciones.', '2019-06-17'),
(53, 124, 1, 'Excelente producto. La estructura es muy sólida y llega a domicilio correctamente armado. Las patas de soporte parece ser muy resistentes. Las medidas son exactas. El vidrio esmerilado es de muy buena calidad, al igual que las manijas de las puertas. Las terminaciones son bastante prolijas. Mi única crítica sería respecto a la distancia de altura entre los estantes, ya que no permite reacomodar los tarugos de apoyo y no se incluyen agujeros adicionales, por lo cual tuve que hacerlos yo mismo para incluir botellas en uno de los estantes (lavandina, jabón líquido, limpiador de pisos, etc. ). Por todo lo demás, muy recomendable.\r\n\r\n', '2020-10-08'),
(54, 125, 5, 'Está muy bien, es de lindo diseño y es genial que vengan armados, lo único que le faltaría son topes en las puertas para que los golpes no sean bruscos ya que con el vidrio, quedan pesadas.\r\n\r\n', '2021-01-12'),
(55, 126, 1, 'Es linda la cama. La calidad no es mala. Las ruedas del carrito no sirven y rayan pisos de madera. Ojo! tener presente q es xa niños. No creo aguante mucho peso. Lo q es una verdadera pesadilla es el armado. Podrían aprender algo de ikea. Recomiendo buscar un tutorial en youtube, aún así hay mucho de prueba y error o instinto puro.\r\n\r\n', '2016-09-15'),
(56, 127, 5, 'Cuando lo compramos entendimos que era de laca! es fórmica brillante , los bordes son filosos y raspan permanentemente. Siendo cana para chicos me parece peligroso. Saludos.\r\n\r\n', '2015-11-15'),
(57, 128, 3, 'Quedo muy linda la cucheta. Un poco complicado para armar. El material se nota que es bueno. Ahora las maderas para la rejilla de la cama muy ordinario, los machimbre doblados y con manchas de humedad.\r\n\r\n', '2019-01-24'),
(58, 129, 2, 'Increíble mueble bellisimo, eso sí equiparse con atornillador eléctrico para su armado y nada más!.\r\n\r\n', '2021-01-07'),
(59, 130, 1, 'Lo negativo es que los cajones internos no están recubiertos, está la madera pelada y el sistema de los mismos no es de la mejor calidad, vamos a ver en el tiempo, pero se nota que hay que tratarlo con cuidado. Dejando eso, el producto vino armado, sin marcas. Esteticamente está muy bueno, la combinación de coleres entre cajones blancos y el resto en haya queda muy bien. Lo recomiendo.\r\n\r\n', '2020-05-21'),
(60, 131, 2, 'No recomiendo. La foto no es del producto que mandan.\r\n\r\n', '2021-02-10'),
(61, 132, 4, 'Muy bien combinados los colores ,las cajoneras en melamina blanca queda muy fina , terminada muy bien, corren sobre los rieles metálicos perfectamente , sus costados en color haya lo mismo que su parte de arriba combinan realzando la habitacion.\r\n\r\n', '2021-02-10'),
(62, 28, 2, 'Re lindo el cuadro. Quedo pipicucu. Lo unico medio chotin es la tirita para colgarlo que te mira con cara de mirame y no me toques. Lo colgamos sobre el respaldo de la cama. Espero que aguanten bien y no se nos caigan en la cabeza mientras dormimos..', '2019-03-24'),
(63, 80, 2, 'Se ve muy pixelado. Mala calidad.', '2017-04-18'),
(64, 122, 2, 'Se ve bien de lejos pero de cerca se ve muy pixelado, mi primera impresión no fue buena, lo colgue y me fui adaptando, el tamaño esta bien y la calidad del cuadro es buena, quizá es el tipo de imagen, pero si lo detallo mucho se ve pixelado.', '2021-03-18'),
(65, 123, 2, 'No es lo que esperaba, es más oscuro que el de la foto y si bien esta en tela no tiene nada atrás, tampoco viene con ganchos para colgar, solo puede colgarse del marco.', '2021-11-18'),
(71, 124, 4, 'Totalmete insatisfecha, muy mala calidad de impresión del paisaje, predomina el color naranja fuerte y el negro, la calidad de materiales muy mala. Realmente plata tirada. -..', '2019-07-22'),
(72, 125, 4, 'Hermoso, a mi parecer el marco debería ser un poco más grande, es una lástima que se pierda parte del dibujo, en general bueno.', '2021-04-10'),
(73, 126, 4, 'No estoy conforme con el material (tela) donde esta impresa la imagen. Tampoco la calidad de la imagen, se nota que fue \"agigantada\" y perdió resolución, se ve borrosa y pixelada, es decir, esta muy lejos de tener alta definición. Desde lejos, no se ve..', '2020-09-28'),
(75, 127, 3, 'Lindo y prolijo. Un poco frágiles los marcos, pero tampoco es algo que se cambie de lugar constantemente, por lo que estarían bien. El contraste de colores es hermoso.', '2021-11-08'),
(76, 128, 3, 'Lindo y prolijo. Es un poco mas oscuro de lo que se ve en la foto,pero igual me encanta,esta muy bien terminado y se ve de buena calidad,lo recomiendo al 100%. Precioso!!!..', '2021-05-08'),
(77, 129, 3, 'No es lo que esperaba, es más oscuro que el de la foto y si bien esta en tela no tiene nada atrás, tampoco viene con ganchos para colgar, solo puede colgarse del marco.', '2020-12-08'),
(78, 130, 3, 'Le doy cuatro estrellas por que pense que era pintado y es una tela que recubre los marcos. Esta lindo igual!!..', '2019-04-08'),
(79, 131, 4, 'Muy buen producto solo le falta terminacion es una pena que no venga con elementos para sujetar a la pared y una plantilla en papel que indique donde hacer las perforaciones para quede equilibrado-.', '2018-04-13'),
(83, 132, 5, 'Muy lindos!! ah, eh, eh, ah, yo soy sabalero. Ah, eh, eh, ah, sabalero, sabalero. Ah, eh, eh, ah, yo soy sabalero. Ah, eh, eh, ah, sabalero, sabalero.', '2019-09-28'),
(84, 28, 5, 'Excelente calidad de impresión de las láminas y muy prolijo el acabado. Lo único que podría mejorar es el sistema de colgado que es un cordón que sirve pero parece un poco desprolijo e improvisado.', '2019-07-03'),
(85, 80, 5, 'No lo recomiendo. Por el precio esperaba mas calidad. Cuesta desprender la cinta adhesiva sin que se despegue del todo. No tiene el reloj en color blanco como en la foto. Es totalmente negro.', '2020-03-15'),
(86, 122, 5, 'Excelente!!!!!!!muy decorativos ideales para colocar en una pared blanca para que se note mejor el contraste..', '2020-04-09');

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
(28, 1, NULL, 'Sillon Callow', '2021-04-08', 'Sillon Callow esquinero, de la Línea Chelsea, fabricado en tres cuerpos.\r\n'),
(80, 1, NULL, 'Modulo Rack L Wengue', '2020-12-08', 'Mueble fabricado en melamina sobre MDP 15 mm. 12 espacios abiertos. 4 cajones de 43 x 34 x 13 cm. con correderas metalicas. Amplitud para TV de 55pulgadas y 2 orificios para el pasaje de los cables.Peso: 56Kg.Ancho: 180cm. Profundo: 45cm. Alto: 183cm. Bul'),
(122, 2, NULL, 'Juego Comedor Aimaretti Combinado Marsella Novo', '2020-12-08', 'Mesa de 150 x 0,50 + 6 sillas. Mesa melamina simil madera - Chasis silla estructura caño - Pintura epoxi termoconvertible - Tapizado chenille'),
(123, 2, NULL, 'Modular Rack 126 Blanco', '2014-04-17', 'Mueble fabricado en melamina sobre MDP 15 mm. combinado con 5 cubos color blanco. Diseño contemporaneo de amplia funcionalidad.Peso: 55Kg.Ancho: 74,3cm. Profundo: 35,5cm. Alto: 212cm. Bultos: 1.Este producto se entrega en caja para armar. Incluye instruct'),
(124, 3, NULL, 'Biblioteca Juvenil Wengue Cubos Blancos ', '2016-06-03', 'Mueble fabricado en melamina sobre MDP 15 mm. combinado con 5 cubos color blanco. Diseño contemporaneo de amplia funcionalidad.Peso: 55Kg.Ancho: 74,3cm. Profundo: 35,5cm. Alto: 212cm. Bultos: 1.Este producto se entrega en caja para armar. Incluye instruct'),
(125, 4, NULL, 'Ropero Flex', '2029-07-20', 'Ropero Reflex DL352, 4 puertas, 8 espejos, interiores revestidos'),
(126, 5, NULL, 'Chifonier Super Express Chocolate 5 Cajones ', '2020-08-25', 'El chifonier Super Express de Mosconi esta fabricado en MDP de 15 mm de grosor y revestido en pintura UV, para mayor proteccion. Posee 5 cajones con correderas plasticas, que te permitiran organizar de manera ordenada ropa, juguetes y otros objetos.Peso: '),
(127, 5, NULL, 'Pyp Bna Cucheta Gabinete Triliche Caoba ', '2015-10-17', 'Cama Cucheta confeccionada en MDP 15 mm, con terminacion en pintura UV y largueros en MDF 22 mm. La misma cuenta con escalera fabricada en madera y PVC de alta resistencia. A la vez que, cuenta con 1 puerta y 1 cajon que se puede ser armado a la izquierda'),
(128, 1, NULL, 'Mesa Tv 120 Melamina Wengue (Chocolate)\r\n', '2016-08-30', 'Mueble fabricado en melamina sobre MDP 15 mm. Puerta con bisagras metalicas y estante. Posee ruedas para facilitar su movimiento.Peso: 27Kg.Ancho: 90cm. Profundo: 45cm. Alto: 75cm. Bultos: 1.Este producto se entrega en caja para armar. Incluye instructivo'),
(129, 3, NULL, 'Sillon Francis', '2021-07-08', 'Sillón Francis, de la Línea Chelsea, fabricado en tres módulos de 90 x 90 cm c/u.\r\nEnvios a todo el pais.'),
(130, 2, NULL, 'Sillon Watts', '2027-04-09', 'Sillón Watts de la línea Camdem de tres cuerpos con esqueleto y patas cónicas de 14 cm.\r\n'),
(131, 1, NULL, 'Cuadro Arbol de la vida', '2013-04-11', 'Creando un espacio minimalista, dándole un detalle único a tu pared.'),
(132, 4, NULL, 'Biblioteca Juvenil Cubos', '2013-04-11', 'Mueble fabricado en melamina sobre MDP 15 mm. combinado con 5 cubos color blanco. Diseño contemporaneo de amplia funcionalidad.Peso: 55Kg.Ancho: 74,3cm. Profundo: 35,5cm. Alto: 212cm. Bultos: 1.Este producto se entrega en caja para armar. Incluye instruct');

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
  `province` varchar(255) DEFAULT NULL,
  `document` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `phone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`, `province`, `document`, `gender`, `birthday`, `phone`) VALUES
(1, 'Adriana', 'Carrasco', 'acarrasco@gmail.com', 'acarra1', 'Bs.As.', 30937152, 'femenino', '1973-05-28', 1164838871),
(2, 'Agustina', 'Vallejos', 'avallejos@gmail.com', 'avall1', 'Catamarca', 8273646, 'Femenimo', '1944-01-07', 1130298374),
(3, 'Oscar', 'Roxano', 'roxanooscar@yahoo.com.ar', 'roxarockstar', 'Cordoba', 26094827, 'Masculino', '1969-09-28', 1164838872),
(4, 'Analia', 'Tranchin', 'tranchiniok@hotmail.com', 'soycool', 'Salta', 2973646, 'Femenino', '1961-05-03', 118268374),
(5, 'Roberto', 'Gomez', 'robertogomez@live.com.ar', 'pupi33', 'Chubut', 12937152, 'Masculino', '1958-09-22', 1178838871);

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
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `created_by` (`created_by`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;