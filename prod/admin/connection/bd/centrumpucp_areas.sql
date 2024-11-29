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
-- Table structure for table `areas`
--

DROP TABLE IF EXISTS `areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `areas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `area` varchar(60) DEFAULT NULL,
  `fechareg` datetime DEFAULT CURRENT_TIMESTAMP,
  `estado` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areas`
--

LOCK TABLES `areas` WRITE;
/*!40000 ALTER TABLE `areas` DISABLE KEYS */;
INSERT INTO `areas` VALUES (2,'ADMINISTRACIÓN DE EMPRESAS Y AFINES','2022-09-05 07:15:12',1),(3,'AERONÁUTICA Y METEOROLOGÍA','2022-09-05 07:15:12',1),(4,'AGROPECUARIA','2022-09-05 07:15:12',1),(5,'AMBIENTAL / FORESTAL','2022-09-05 07:15:12',1),(6,'ARQUITECTURA','2022-09-05 07:15:12',1),(7,'ARTES ESCÉNICAS','2022-09-05 07:15:12',1),(8,'ARTISTICO / PLÁSTICA','2022-09-05 07:15:12',1),(9,'BELLEZA Y ESTÉTICA','2022-09-05 07:15:13',1),(10,'BIBLIOTECA Y ARCHIVO','2022-09-05 07:15:13',1),(11,'BIOLOGÍA','2022-09-05 07:15:13',1),(12,'BIOQUÍMICA','2022-09-05 07:15:13',1),(13,'CALL CENTER/ TELECOBRANZAS','2022-09-05 07:15:13',1),(14,'CHOFER/ GESTORÍA','2022-09-05 07:15:13',1),(15,'COMERCIO EXTERIOR','2022-09-05 07:15:13',1),(16,'COMPRAS','2022-09-05 07:15:13',1),(17,'COMUNICACIÓN AUDIOVISUAL','2022-09-05 07:15:14',1),(18,'CONSTRUCCIÓN CIVIL','2022-09-05 07:15:14',1),(19,'CONSULTORÍA','2022-09-05 07:15:14',1),(20,'CONTABILIDAD Y AUDITORÍA','2022-09-05 07:15:14',1),(21,'DEPORTES','2022-09-05 07:15:14',1),(22,'DISEÑO DE INTERIORES/ TEXTIL','2022-09-05 07:15:14',1),(23,'DISEÑO GRÁFICO / INDUSTRIAL','2022-09-05 07:15:14',1),(24,'ECONOMÍA','2022-09-05 07:15:14',1),(25,'EDUCACIÓN','2022-09-05 07:15:14',1),(26,'ELECTRICIDAD DEL AUTOMÓVIL','2022-09-05 07:15:15',1),(27,'ELECTRICIDAD/ ELECTROMECÁNICA','2022-09-05 07:15:15',1),(28,'ELECTRÓNICA Y AFINES','2022-09-05 07:15:15',1),(29,'FARMACIA','2022-09-05 07:15:15',1),(30,'FINANZAS/TESORERÍA/ CAJA','2022-09-05 07:15:15',1),(31,'FOTOGRAFÍA','2022-09-05 07:15:15',1),(32,'FUERZAS ARMADAS','2022-09-05 07:15:15',1),(33,'GASTRONOMIA','2022-09-05 07:15:15',1),(34,'GEOLOGÍA','2022-09-05 07:15:16',1),(35,'GERENCIA DE EMPRESAS','2022-09-05 07:15:16',1),(36,'GERENCIA DE PROYECTOS (GENERAL)','2022-09-05 07:15:16',1),(37,'HOTELERÍA / VIAJES / TURISMO','2022-09-05 07:15:16',1),(38,'INFORMÁTICA/ INTERNET/ WEB','2022-09-05 07:15:16',1),(39,'INGENIERÍA CIVIL','2022-09-05 07:15:16',1),(40,'INGENIERÍA INDUSTRIAL','2022-09-05 07:15:16',1),(41,'JURÍDICA Y LEGALES','2022-09-05 07:15:16',1),(42,'LITERATURA','2022-09-05 07:15:17',1),(43,'LOGÍSTICA/ DEPÓSITO','2022-09-05 07:15:17',1),(44,'MARKETING (O MERCADEO)','2022-09-05 07:15:17',1),(45,'MATEMÁTICA','2022-09-05 07:15:17',1),(46,'MECÁNICA DEL AUTOMÓVIL/ MOTOS','2022-09-05 07:15:17',1),(47,'MECÁNICA INDUSTRIAL','2022-09-05 07:15:17',1),(48,'METALÚRGICA','2022-09-05 07:15:17',1),(49,'MICROBIOLOGÍA DE ALIMENTOS','2022-09-05 07:15:17',1),(50,'MÚSICA','2022-09-05 07:15:18',1),(51,'NAVEGACIÓN Y PUERTOS','2022-09-05 07:15:18',1),(52,'OFICIOS / MANDOS MEDIOS VARIOS','2022-09-05 07:15:18',1),(53,'ORGANIZACIÓN Y MÉTODOS','2022-09-05 07:15:18',1),(54,'PERIODISMO','2022-09-05 07:15:18',1),(55,'PRODUCCIÓN Y AFINES','2022-09-05 07:15:18',1),(56,'PSICOLOGÍA','2022-09-05 07:15:18',1),(57,'PUBLICIDAD','2022-09-05 07:15:18',1),(58,'QUÍMICA','2022-09-05 07:15:18',1),(59,'RECURSOS HUMANOS','2022-09-05 07:15:19',1),(60,'RELACIONES PÚBLICAS','2022-09-05 07:15:19',1),(61,'SALUD Y NUTRICIÓN','2022-09-05 07:15:19',1),(62,'SECRETARÍA/RECEPCIÓN/ATENCIÓN AL CLIENTE','2022-09-05 07:15:19',1),(63,'SEGURIDAD','2022-09-05 07:15:19',1),(64,'SEGUROS','2022-09-05 07:15:19',1),(65,'SERVICIO SOCIAL','2022-09-05 07:15:19',1),(66,'SERVICIOS MINISTERIALES/ RELIGIOSOS','2022-09-05 07:15:19',1),(67,'TELECOMUNICACIONES','2022-09-05 07:15:20',1),(68,'TRADUCTOR DE IDIOMAS','2022-09-05 07:15:20',1),(69,'VENTAS/ COMERCIO/ TELEMARKETING','2022-09-05 07:15:20',1),(70,'VETERINARIA','2022-09-05 07:15:20',1);
/*!40000 ALTER TABLE `areas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-25 13:35:35
