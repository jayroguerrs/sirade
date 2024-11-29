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
-- Table structure for table `rubrosecto`
--

DROP TABLE IF EXISTS `rubrosecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rubrosecto` (
  `idRubro` int NOT NULL AUTO_INCREMENT,
  `rubro` text NOT NULL,
  `fechaRegistroRub` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estadoRubro` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`idRubro`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rubrosecto`
--

LOCK TABLES `rubrosecto` WRITE;
/*!40000 ALTER TABLE `rubrosecto` DISABLE KEYS */;
INSERT INTO `rubrosecto` VALUES (2,'FINANZAS','2022-03-16 14:44:12',1),(3,'COMERCIO','2022-03-16 14:44:12',1),(4,'MECÁNICA Y MAQUINARIAS','2022-03-16 14:44:12',1),(5,'ENSEÑANZA Y EDUCACIÓN','2022-03-16 14:44:12',1),(6,'INVESTIGACIÓN Y DESARROLLO','2022-03-16 14:44:12',1),(7,'CONSTRUCCIÓN','2022-03-16 14:44:12',1),(8,'OTROS RUBROS','2022-03-16 14:44:12',1),(9,'ADM. PÚBLICA, DEFENSA, SEGURIDAD','2022-03-16 14:44:12',1),(10,'EXPLOT. MINAS, GAS Y PETRÓLEO','2022-03-16 14:44:12',1),(11,'SALUD, VIDA Y BELLEZA','2022-03-16 14:44:12',1),(12,'SERVICIOS LEGALES Y NOTARIALES','2022-03-16 14:44:12',1),(13,'MANUFACTURA','2022-03-16 14:44:12',1),(14,'TRANS, LOGISTICA Y COMUNICACIONES','2022-03-16 14:44:12',1),(15,'ELECTRICIDAD, GAS Y AGUA','2022-03-16 14:44:12',1),(16,'TECNOLOGÍA E INFORMATICA','2022-03-16 14:44:12',1),(17,'AGRICULTURA, CAZA Y FORESTAL','2022-03-16 14:44:12',1),(18,'ACTIVIDADES INMOBILIARIAS','2022-03-16 14:44:12',1),(19,'ENTRETENIMIENTO Y DEPORTES','2022-03-16 14:44:12',1),(20,'HOTELES Y RESTAURANTES','2022-03-16 14:44:12',1),(21,'SERVICIOS SOCIALES Y ONG','2022-03-16 14:44:12',1),(22,'ARTE Y CULTURA','2022-03-16 14:44:12',1),(23,'PESCA','2022-03-16 14:44:12',1),(24,'ORGANIZACIONES INTERNACIONALES','2022-03-16 14:44:12',1),(25,'PROYECTOS','2022-03-16 14:44:12',1),(26,'VENTAS','2022-03-16 14:44:12',1),(27,'APLICACIONES DE NEGOCIOS','2022-03-16 14:44:12',1),(28,'CONSUMO','2022-03-16 14:44:12',1),(29,'BANCA','2022-03-16 14:44:12',1);
/*!40000 ALTER TABLE `rubrosecto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-25 13:34:52
