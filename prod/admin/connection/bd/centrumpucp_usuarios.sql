-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 3.215.99.5    Database: centrumpucp
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `codPucp` tinytext NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidoPaterno` tinytext NOT NULL,
  `apellidoMaterno` tinytext NOT NULL,
  `rol` tinytext NOT NULL,
  `emailPucp` tinytext NOT NULL,
  `cambiar_clave` varchar(3) DEFAULT NULL,
  `token_clave` text,
  `clave` varchar(255) DEFAULT NULL,
  `fechaRegistro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estadoUsuario` int NOT NULL DEFAULT '1',
  `img` varchar(60) DEFAULT '/assets/media/avatars/blank.png',
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'20121673','JAYRO','GUERREROS','ECHIA','ADMINISTRADOR','jguerreros@pucp.edu.pe','SI','2d698d5454d623e28c127da0654bedf5722052062f5f6bb5','$2y$12$FxIN0N/Pscc.7As2/ukKeOOvnLpu7r3OqsV0YUTHpzKm97v7xTFEC','2022-10-26 20:40:59',1,'/assets/media/avatars/1.jpg'),(4,'H0001365','IVANNA CECILIA','RIVERO','MOREY','ADMINISTRADOR','ivanna.rivero@pucp.edu.pe','NO',NULL,'$2y$12$er45lIBKLGsoyHZK3GCxC.dIFpHZwbkWmPa/7OEf/aVB27J8MBL4S','2023-01-24 21:11:17',1,'/assets/media/avatars/blank.png'),(5,'02009158','IVETTE MILAGROS','CARDENAS','MARQUINA','ADMINISTRADOR','ivette.cardenas@pucp.pe','NO',NULL,'$2y$12$yXXwSmkc3/agRFjm9n.leuhux8uCQUZWCqBJVjp7bGvZvjuSdDC6q','2022-10-19 15:40:54',1,'/assets/media/avatars/blank.png'),(6,'00002297','LUIS','PEREZ','DEL SOLAR','ADMINISTRADOR','lperezdelsolar@pucp.pe',NULL,NULL,NULL,'2022-10-14 07:58:24',1,'/assets/media/avatars/blank.png'),(7,'20043224','CLARA','WIESSE','MORALES BERMUDEZ','ADMINISTRADOR','clara.wiese@pucp.pe','NO',NULL,'$2y$12$62vN8htu6PH0jWLKS9I/LehHNrV5Jv9hVadb6iszjSyt6MKzwkyo2','2022-10-26 21:06:47',1,'/assets/media/avatars/blank.png');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-25 13:35:32
