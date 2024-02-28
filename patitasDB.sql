CREATE SCHEMA patitasDB;
USE patitasDB;
CREATE TABLE `marcas` (
   `id` INT NOT NULL,
   `marca` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id`)
);

INSERT INTO `marcas` VALUES (1,'Generico'),(2,'Mpets Ecozany'),(3,'Catit'),(4,'Cancat'),(5,'Pro Plan'),(6,'Purina Cat Chow'),(7,'Purina One'),(8,'Sanicat'),(9,'Vesper Catit'),(10,'Gigwi'),(11,'Royal Canin'),(12,'Eukanuba'),(13,'Osspret'),(14,'King air dog'),(15,'Iki'),(16,'Cat-It');


CREATE TABLE `categorias` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `categoria` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

INSERT INTO `categorias` VALUES (1,'comida'),(2,'accesorio'),(3,'higiene'),(4,'juguete');


CREATE TABLE `tipos_mascota` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `mascota` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

INSERT INTO `tipos_mascota` VALUES (1,'Gato'),(2,'Perro');


CREATE TABLE `descuentos` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(100),
   `descripcion` TEXT, 
   `fecha_inicio` DATE,
   `fecha_final` DATE,
   PRIMARY KEY (`id`)
);

INSERT INTO `descuentos` VALUES (1,NULL,NULL,NULL,NULL),(2,'oferta','Aprovecha el descuento, por tiempo limitado!','2024-03-04','2024-03-27');


CREATE TABLE `permisos` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `titulo` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

INSERT INTO `permisos` VALUES (1,'Administrador'),(2,'Invitado');

CREATE TABLE `productos` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(100) NOT NULL,
   `descripcion` TEXT,
   `color` VARCHAR(50),
   `peso` DECIMAL,
   `precio` DECIMAL NOT NULL,
   `imagen` VARCHAR(100),
   `tipo_mascota_id` INT NOT NULL,
   `marca_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);


INSERT INTO `productos` VALUES (1,'Arnes Pretalreggatos Anti Escape + Correa 10m','Arnés pretal para gatos con sistema anti escape y correa de 10 metros.',NULL,NULL,8.99,'arnes-pretalreggatos-anti-escape+correa10m.jpg',1,1),(2,'Cañita Pluma Cancat Pez Marrón','Juguete interactivo con cañita y pluma en forma de pez marrón para gatos.','Marrón',NULL,27.99,'cañita-pluma-cancat-pez-marron.jpg',1,1),(3,'Collar Elastizado Gatos','Collar elastizado para gatos.',NULL,NULL,10.99,'collar-elastizado-gatos.jpg',1,1),(4,'Collar Mpets Ecozany Celeste y Negro','Collar Mpets Ecozany en colores celeste y negro para gatos.','Celeste, Negro',NULL,17.99,'collar-mpets-ecozany-celesteynegro.jpg',1,2),(5,'Comedero Gatos','Comedero para gatos.',NULL,NULL,10.99,'comedero-gatos.jpg',1,1),(6,'Fuente Catit Flor','Fuente Catit en forma de flor para gatos.',NULL,NULL,14.99,'fuente-catit-flor.jpg',1,3),(7,'Mochila Transportadora Gatos','Mochila transportadora para gatos.',NULL,NULL,24.99,'mocila-transportadora-gatos.jpg',1,1),(8,'Peluche Cancat Cilíndrico','Peluche cilíndrico para gatos de la marca_id Cancat.',NULL,NULL,29.99,'peluche-cancat-cilindrico.jpg',1,4),(9,'Adulto Pollo Alimento Húmedo Frente Pro Plan','Alimento húmedo para gatos adultos sabor pollo de la marca_id Pro Plan.',NULL,1,18.99,'adulto-pollo-alimento-humedo-frente-pro-plan.jpg',1,5),(10,'Adulto Salmón Alimento Húmedo Frente Pro Plan','Alimento húmedo para gatos adultos sabor salmón de la marca_id Pro Plan.',NULL,1,20.99,'adulto-salmon-alimento-humedo-frente-pro-plan.jpg',1,5),(11,'Kitten Pollo Alimento Húmedo Frente Pro Plan','Alimento húmedo para gatitos sabor pollo de la marca_id Pro Plan.',NULL,2,16.99,'kitten-pollo-alimento-humedo-frente-pro-plan.jpg',1,5),(12,'Purina Cat Chow Adulto','Alimento seco para gatos adultos de la marca_id Purina Cat Chow.',NULL,3,22.99,'purina-cat-chow-adulto.jpg',1,6),(13,'Purina One Pollo y Carne','Alimento seco para gatos sabor pollo y carne de la marca_id Purina One.',NULL,1,26.99,'purina-one-polloycarne.jpg',1,7),(14,'Purina One Pollo y Salmón','Alimento seco para gatos sabor pollo y salmón de la marca_id Purina One.',NULL,1,28.99,'purina-one-polloysalmon.jpg',1,7),(15,'Purina Proplan Adulto','Alimento seco para gatos adultos de la marca_id Purina Proplan.',NULL,2,30.99,'Purina-Proplan-adulto.jpg',1,5),(16,'Purina Proplan Adulto +7','Alimento seco para gatos adultos mayores de 7 años de la marca_id Purina Proplan.',NULL,2,32.99,'Purina-Proplan-adulto+7.jpg',1,5),(17,'Purina Proplan Kitten','Alimento seco para gatitos de la marca_id Purina Proplan.',NULL,1,19.99,'Purina-Proplan-kitten.jpg',1,5),(18,'Purina Proplan Reducido Calorías','Alimento seco reducido en calorías para gatos de la marca_id Purina Proplan.',NULL,1,39.99,'Purina-Proplan-reducido-calorias.jpg',1,5),(19,'Arena Aglomerante Sanicat Strong Clumps 7Kg','Arena aglomerante de la marca_id Sanicat, formato de 7 kg.',NULL,NULL,19.99,'arena-aglomerante-sanicat-strong-clumps-7Kg.jpg',1,8),(20,'Bandeja Sanitaria Litera','Bandeja sanitaria tipo litera para gatos.',NULL,NULL,23.99,'Bandeja-Sanitaria-Litera.jpg',1,1),(21,'Bandeja Sanitaria Litera Baño Cerrada Para Gato','Bandeja sanitaria tipo litera con baño cerrado para gatos, color gris.',NULL,NULL,29.99,'Bandeja-Sanitaria-Litera-Baño-Cerrada-Para-Gato-Color-Gris.jpg',1,1),(22,'Cardina Cepillo Saca Pelo Mascota Premium Autolimpiante Aseo','Cardina cepillo saca pelo para mascotas premium, autolimpiante para el cuidado del aseo.',NULL,NULL,16.99,'cardina-cepillo-saca-pelo-mascota-premium-autolimpiante-aseo.jpg',1,1),(23,'Cat-It Alfombra Para Baño Sanitario Grande 60x90cm','Alfombra para baño sanitario grande de la marca_id Cat-It, dimensiones 60x90 cm, color gris.',NULL,NULL,34.99,'Cat-It-Alfombra-Para-Baño-Sanitario-Grande-60x90cm-Color-Gris.jpg',1,16),(24,'Cepillo de Dientes','Cepillo de dientes para gatos.',NULL,NULL,5.99,'cepillo-de-dientes.jpg',1,1),(25,'Cepillo Peine Rastrillo','Cepillo peine rastrillo para el cuidado del pelaje de tu gato.',NULL,NULL,8.99,'cepillo-peine-rastrillo.jpg',1,1),(26,'Kit Sanitario Gato Bandeja Comedero Palita Piedras Cepillo','Kit sanitario para gatos que incluye bandeja, comedero, palita, piedras y cepillo.',NULL,NULL,42.99,'kit-sanitario-gato-bandeja-comedero-palita-piedras-cepillo.jpg',1,1),(27,'Litera Catit Filtro Anti-Olor Baño Cerrado Color Gris Claro','Litera Catit con filtro anti-olor para baño cerrado, color gris claro.',NULL,NULL,39.99,'Litera-Catit-Filtro-Anti-Olor-Baño-Cerrado-Color-Gris-Claro.jpg',1,1),(28,'Piedras para Gatos Sílica de Gel Neutras Clásica Cancat 3.8 litros','Piedras para gatos de sílica de gel neutras clásica de la marca_id Cancat, formato de 3.8 litros.',NULL,NULL,15.99,'Bandeja-Sanitaria-Litera-Baño-Cerrada-Para-Gato-Color-Gris.jpg',1,4),(29,'Piedras Sanitarias','Piedras sanitarias para gatos.',NULL,NULL,12.99,'Bandeja-Sanitaria-Litera-Baño-Cerrada-Para-Gato-Color-Gris.jpg',1,1),(30,'Cañita Alambre Resistente Largo','Cañita de alambre resistente y largo para juegos con gatos.',NULL,NULL,10.99,'cañita-alambre-resistente-largo.jpg',1,1),(31,'Juguete Droid para Gatos Doble 3 Sensores Gigwi Movimiento','Juguete droid interactivo con doble sensor de movimiento para gatos.',NULL,NULL,24.99,'juguete-droid-para-gatos-doble-3-sensores-gigwi-movimiento.jpg',1,10),(32,'Juguete Interactivo Dispenser de Comida Pelotas','Juguete interactivo con dispenser de comida y pelotas para gatos.',NULL,NULL,18.99,'juguete-interactivo-dispenser-de-comida-pelotas.jpg',1,1),(33,'Juguete Interactivo Gatos','Juguete interactivo para la diversión de los gatos.',NULL,NULL,14.99,'juguete-interactivo-gatos.jpg',1,1),(34,'Juguete Interactivo Para Gatos Torre Con Pelotas 3 Niveles','Juguete interactivo para gatos con torre y pelotas en 3 niveles.',NULL,NULL,29.99,'juguete-interactivo-para-gatos-torre-con-pelotas-3-niveles.jpg',1,1),(35,'Pelota Jaula Con Raton','Pelota con jaula y ratón para el entretenimiento de tu gato.',NULL,NULL,9.99,'pelota-jaula-con-raton.jpg',1,1),(36,'Pelota Multicolor Arcoiris Gatos Goma Eva','Pelota multicolor con diseño de arcoiris para gatos de goma Eva.',NULL,NULL,7.99,'pelota-multicolor-arcoiris-gatos-goma-eva.jpg',1,1),(37,'Raton a Cuerda','Ratón de juguete para gatos con cuerda para mayor diversión.',NULL,NULL,5.99,'raton-a-cuerda.jpg',1,1),(38,'Túnel Interactivo Gatos Plegable Con Cama Vesper Catit Color Gris','Túnel interactivo para gatos plegable con cama en color gris de la marca Vesper Catit.',NULL,NULL,19.99,'Túnel-Interactivo-Gatos-Plegable-Con-Cama-Vesper-Catit-Color-Gris.jpg',1,9),(39,'Pechera Verde','Pechera para perros en color verde.','Verde',NULL,19.99,'pechera-verde.jpeg',2,1),(40,'Pechera Perros Chicos','Pechera para perros de tamaño pequeño.',NULL,NULL,27.99,'pechera-perros-chicos.jpg',2,1),(41,'Correa Retráctil','Correa retráctil para paseos cómodos.',NULL,NULL,7.99,'correa-retractil.jpg',2,1),(42,'Correa Marrón','Correa resistente en color marrón.','Marrón',NULL,13.99,'correa-marron.png',2,1),(43,'Correa Marrón 2','Correa resistente en color marrón.','Marrón',NULL,13.99,'correa-marron.png',2,1),(44,'Collar Rojo','Collar elegante en color rojo.','Rojo',NULL,19.99,'collar-rojo.jpeg',2,1),(45,'Collar Bandana','Collar con diseño de bandana.',NULL,NULL,29.99,'collar-bandana.jpg',2,1),(46,'Collar Arcoíris','Collar con los colores del arcoiris.','Rojo, Naranja, Amarillo, Verde, Azul, Violeta',NULL,27.99,'collar-arcoiris.webp',2,1),(47,'Collar Amarillo Broche','Collar en color amarillo con broche especial.','Amarillo',NULL,27.99,'collar-amarillo-broche.jpg',2,1),(48,'Cinturón para Perros','Cinturón ajustable para perros.',NULL,NULL,20.99,'cinturon-para-perros.jpeg',2,1),(49,'Royal Canin Cachorro Medium','Alimento para cachorros de tamaño mediano.',NULL,1,24.99,'royalcanin-cachorro-medium.jpg',2,11),(50,'Royal Canin Adulto Mini','Alimento para perros adultos de tamaño mini.',NULL,2,29.99,'royalcanin-adulto-mini.jpg',2,11),(51,'Royal Canin Adulto Mediano','Alimento para perros adultos de tamaño mediano.',NULL,2,34.99,'royalcanin-adulto-mediano.jpg',2,11),(52,'Royal Canin Adulto Más de 10 Años Mediano','Alimento para perros adultos mayores de 10 años de tamaño mediano.',NULL,2,39.99,'royalcanin-adulto-mas10años-mediano.jpg',2,11),(53,'Royal Canin Adulto Más de 7 Años Mediano','Alimento para perros adultos mayores de 7 años de tamaño mediano.',NULL,1,38.99,'royalcanin-adulto-mas7años-mediano.jpg',2,11),(54,'Eukanuba Cachorro Grande','Alimento para cachorros de tamaño grande.',NULL,3,42.99,'eukanuba-cachorro-grande.jpg',2,12),(55,'Eukanuba Adulto Mediano','Alimento para perros adultos de tamaño mediano.',NULL,2,36.99,'eukanuba-adultomeidano.jpg',2,12),(56,'Eukanuba Adulto Grande','Alimento para perros adultos de tamaño grande.',NULL,3,39.99,'eukanuba-adulto-grande.jpg',2,12),(57,'Eukanuba Adulto Chico Oferta','Oferta en alimento para perros adultos de tamaño chico.',NULL,1,27.99,'eukanuba-adulto-chico-oferta.jpg',2,12),(58,'Eukanuba Adulto Chico','Alimento para perros adultos de tamaño chico.',NULL,1,32.99,'eukanuba-adulto-chico.jpg',2,12),(59,'Pack de Cepillos','Paquete de cepillos para el cuidado diario de tu mascota.',NULL,NULL,15.99,'pack-de-cepillos.jpg',2,1),(60,'Osspret Shampoo Antiséptico pH Controlado Cachorro','Shampoo antiséptico pH controlado para cachorros.',NULL,NULL,12.99,'osspret-shampoo-antiséptico-phcontrolado-cachorro.jpg',2,13),(61,'Osspret Shampoo Antisárnico Garrapaticida','Shampoo antisárnico garrapaticida para perros.',NULL,NULL,14.99,'osspret-shampoo-antisárnico-garrapaticida.png',2,13),(62,'Osspret 2 en 1 Pulguicida Garrapaticida','Producto 2 en 1 pulguicida y garrapaticida para perros.',NULL,NULL,18.99,'osspret-2en1-pulguicida-garrapaticida.jpg',2,13),(63,'Iki Enjuague Bucal Spray Adulto y Cachorro','Enjuague bucal en spray para adultos y cachorros.',NULL,NULL,9.99,'iki-enjuegue-bucal-spray-adulto-y-cachorro.jpg',2,15),(64,'Enjuague Bucal para Agua','Enjuague bucal para mezclar con agua para perros.',NULL,NULL,7.99,'enjuague-bucal-para-agua.png',2,1),(65,'Cortauñas y Lima','Cortauñas con lima para el cuidado de las uñas de tu mascota.',NULL,NULL,6.99,'cortauñas-y-lima.jpeg',2,1),(66,'Cortauñas','Cortauñas para el cuidado de las uñas de tu mascota.',NULL,NULL,4.99,'cortauñas.jpeg',2,1),(67,'Cepillo Pelo Largo','Cepillo especial para perros de pelo largo.',NULL,NULL,11.99,'cepillo-pelo-largo.jpg',2,1),(68,'Cepillo Pelo Corto','Cepillo para perros de pelo corto.',NULL,NULL,10.99,'cepillo-pelo-corto.jpeg',2,1),(69,'Soga Celeste Blanca Negra','Soga de colores celeste, blanca y negra para juegos divertidos.',NULL,NULL,8.99,'soga-celeste-blanca-negra.jpg',2,1),(70,'Soga','Soga resistente para juegos y ejercicios con tu mascota.',NULL,NULL,6.99,'soga.jpg',2,1),(71,'Juguete Verde','Juguete de color verde para horas de diversión.',NULL,NULL,5.99,'juguete-verde.jpg',2,1),(72,'Hueso Saborizado Carne','Hueso saborizado con delicioso sabor a carne.',NULL,NULL,7.99,'hueso-saborizado-carne.jpg',2,4),(73,'Hueso Saborizado','Hueso saborizado para el entretenimiento de tu mascota.',NULL,NULL,6.99,'hueso-saborizado.jpg',2,4),(74,'Hueso Rojo con Comida','Hueso rojo relleno con deliciosa comida para perros.',NULL,NULL,9.99,'hueso-rojo-con-comida.jpg',2,1),(75,'Hueso Pelota de Tenis','Hueso con forma de pelota de tenis para juegos divertidos.',NULL,NULL,8.99,'hueso-pelota-de-tenis.jpg',2,14),(76,'Hueso Goma Violeta','Hueso de goma en color violeta para masticación.',NULL,NULL,7.99,'hueso-goma-violeta.jpg',2,1),(77,'Hueso Goma Rojo','Hueso de goma en color rojo para masticación.',NULL,NULL,7.99,'hueso-goma-rojo.jpg',2,1),(78,'Hueso Goma Naranja','Hueso de goma en color naranja para masticación.',NULL,NULL,7.99,'hueso-goma-naranja.jpg',2,1);


CREATE TABLE `producto_categoria` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `producto_id` INT NOT NULL,
   `categoria_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

INSERT INTO `producto_categoria` VALUES (1,1,2),(2,2,2),(3,3,2),(4,4,2),(5,5,2),(6,6,2),(7,7,2),(8,8,2),(9,9,1),(10,10,1),(11,11,1),(12,12,1),(13,13,1),(14,14,1),(15,15,1),(16,16,1),(17,17,1),(18,18,1),(19,19,3),(20,20,3),(21,21,3),(22,22,3),(23,23,3),(24,24,3),(25,25,3),(26,26,3),(27,27,3),(28,28,3),(29,29,3),(30,30,4),(31,31,4),(32,32,4),(33,33,4),(34,34,4),(35,35,4),(36,36,4),(37,37,4),(38,38,4),(39,39,2),(40,40,2),(41,41,2),(42,42,2),(43,43,2),(44,44,2),(45,45,2),(46,46,2),(47,47,2),(48,48,2),(49,49,1),(50,50,1),(51,51,1),(52,52,1),(53,53,1),(54,54,1),(55,55,1),(56,56,1),(57,57,1),(58,58,1),(59,59,2),(60,60,3),(61,61,3),(62,62,3),(63,63,3),(64,64,3),(65,65,3),(66,66,3),(67,67,3),(68,68,3),(69,69,4),(70,70,4),(71,71,4),(72,72,4),(73,73,4),(74,74,4),(75,75,4),(76,76,4),(77,77,4),(78,78,4);

CREATE TABLE `producto_descuento` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `producto_id` INT NOT NULL,
   `descuento_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

INSERT INTO `producto_descuento` VALUES (1,1,1),(2,2,1),(3,3,1),(4,4,1),(5,5,1),(6,6,1),(7,7,2),(8,8,2),(9,9,1),(10,10,2),(11,11,1),(12,12,1),(13,13,1),(14,14,1),(15,15,2),(16,16,1),(17,17,1),(18,18,2),(19,19,1),(20,20,2),(21,21,1),(22,22,1),(23,23,1),(24,24,2),(25,25,1),(26,26,1),(27,27,2),(28,28,1),(29,29,1),(30,30,2),(31,31,2),(32,32,1),(33,33,1),(34,34,1),(35,35,1),(36,36,1),(37,37,1),(38,38,1),(39,39,2),(40,40,1),(41,41,1),(42,42,1),(43,43,1),(44,44,2),(45,45,1),(46,46,2),(47,47,1),(48,48,1),(49,49,1),(50,50,1),(51,51,1),(52,52,2),(53,53,2),(54,54,1),(55,55,1),(56,56,2),(57,57,1),(58,58,1),(59,59,1),(60,60,1),(61,61,1),(62,62,1),(63,63,1),(64,64,1),(65,65,1),(66,66,1),(67,67,1),(68,68,1),(69,69,1),(70,70,1),(71,71,1),(72,72,1),(73,73,1),(74,74,1),(75,75,1),(76,76,1),(77,77,1),(78,78,1);

CREATE TABLE `usuarios` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(100) NOT NULL,
   `apellido` VARCHAR(100) NOT NULL,
   `email` VARCHAR(150) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `imagen` VARCHAR(255),
   `permiso_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

INSERT INTO `usuarios` VALUES (1,'Agustin','Macko','mackoaa@gmail.com','$2a$10$05/5nMBCj5udyfv/Yk3CF.QIMUF.aqSAbp/E8q67TUMczXBKM7Erq','/img/default.jpg',1),(2,'Rodrigo','Stochetta','rodrigo-eze87@hotmail.com','$2a$10$MDwItBJrEKgheu44iCLI0eKUJoy3E5gmKlxFNe2XJANf9..Y7K0Sa','/img/default.jpg',1),(3,'Nicolas','Villamil','nicolasvillamil1997@gmail.com','$2a$10$CyufKAyWsgou1V5rhNG2BuolTNWoA5FRYORxcvDdA64vKELqgnDQa','/img/default.jpg',1),(4,'Rodrigo','Stochetta','rodrigo-eze87@hotmail.com','$2a$10$8CE7gHB6Bpm3qNKVMtHpquKBR/3.LL1xzswiohVjx13Y8r7QFC2Wa','/img/default.jpg',2);

ALTER TABLE `productos` ADD CONSTRAINT `FK_2cff834f-b3d1-4694-b500-66d714c4bc44` FOREIGN KEY (`tipo_mascota_id`) REFERENCES `tipos_mascota`(`id`) ON DELETE CASCADE ;

ALTER TABLE `productos` ADD CONSTRAINT `FK_dbf4426e-0efc-4b3c-8894-164bfaea40fd` FOREIGN KEY (`marca_id`) REFERENCES `marcas`(`id`) ON DELETE CASCADE ;

ALTER TABLE `usuarios` ADD CONSTRAINT `FK_0825a258-5f1a-453c-a63c-bfbdc7e318c7` FOREIGN KEY (`permiso_id`) REFERENCES `permisos`(`id`) ON DELETE CASCADE ;

ALTER TABLE `producto_categoria` ADD CONSTRAINT `FK_5e1f8f3c-9818-4f83-ae8a-c3e6c63118ce` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`id`) ON DELETE CASCADE ;

ALTER TABLE `producto_categoria` ADD CONSTRAINT `FK_22701410-6247-49d0-934c-92a0c4929cbb` FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`id`) ON DELETE CASCADE ;

ALTER TABLE `producto_descuento` ADD CONSTRAINT `FK_1d60b8c7-db2f-44a3-b073-32a5c22d4fee` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE ;

ALTER TABLE `producto_descuento` ADD CONSTRAINT `FK_02a688fc-bdec-4f12-bc80-7a59fa846c6c` FOREIGN KEY (`descuento_id`) REFERENCES `descuentos`(`id`) ON DELETE CASCADE ;
