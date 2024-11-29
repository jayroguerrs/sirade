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
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresas` (
  `idempresas` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(240) NOT NULL,
  `fechaRegistro` datetime DEFAULT CURRENT_TIMESTAMP,
  `estado` int DEFAULT '1',
  PRIMARY KEY (`idempresas`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas`
--

LOCK TABLES `empresas` WRITE;
/*!40000 ALTER TABLE `empresas` DISABLE KEYS */;
INSERT INTO `empresas` VALUES (1,'PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ','2022-07-15 04:11:22',1),(2,'KOMATSU-MITSUI MAQUINARIAS PERÚ S.A.','2022-07-15 04:12:20',1),(3,'FERREYROS S.A.','2022-07-15 04:13:58',1),(4,'BANCO DE CRÉDITO DEL PERÚ S.A.','2022-07-15 04:15:39',1),(5,'BANCO BBVA PERÚ','2022-07-15 04:17:24',1),(6,'BANCO INTERNACIONAL DEL PERÚ S.A.A. - INTERBANK','2022-07-15 04:19:42',1),(7,'CLÍNICA ADMNISTRADORA RICARDO PALMA','2022-07-15 04:20:32',1),(8,'UNIÓN DE CERVECERÍAS PERUANAS BACKUS Y JOHNSTON','2022-07-15 04:21:23',1),(9,'CLÍNICA INTERNACIONAL S.A.','2022-07-15 04:27:23',1),(10,'DERCO PERÚ S.A.','2022-07-15 04:33:11',1),(11,'AUTOMOTORES GILDEMEISTER-PERÚ S.A.','2022-07-15 04:33:53',1);
/*!40000 ALTER TABLE `empresas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-25 13:35:18