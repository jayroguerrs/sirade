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
-- Table structure for table `mentorias`
--

DROP TABLE IF EXISTS `mentorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombres` tinytext,
  `apellidoPaterno` tinytext,
  `apellidoMaterno` tinytext,
  `region` tinytext,
  `carreraPregrado` tinytext,
  `fechaAtencion` date DEFAULT NULL,
  `celular` tinytext,
  `correoPersonal` tinytext,
  `correo2` tinytext,
  `mentor` tinytext,
  `correoMentor` tinytext,
  `celularMentor` tinytext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentorias`
--

LOCK TABLES `mentorias` WRITE;
/*!40000 ALTER TABLE `mentorias` DISABLE KEYS */;
INSERT INTO `mentorias` VALUES (1,'XIOMARA ALEXANDRA','MUDARRA','TEJEDA','LA LIBERTAD','INGENIERIA AMBIENTAL','2022-10-04','914147297','xiomaramudarra.7@gmail.com','73060405@pronabec.edu.pe','ADA MORI','adinchen253@icloud.com','948642843'),(2,'XIOMARA ALEXANDRA','MUDARRA','TEJEDA','LA LIBERTAD','INGENIERIA AMBIENTAL','2022-10-04','914147297','xiomaramudarra.7@gmail.com','73060405@pronabec.edu.pe','ADA MORI','adinchen253@icloud.com','948642843'),(3,'ADRIAN LEONARDO','FAUSTINO','ORDINOLA','LIMA','CONTABILIDAD Y ADMINISTRACION','2022-09-29','919532081','adrianleo08@gmail.com','75507084@pronabec.edu.pe','ALBERTO HOLGADO','aholgado@pucp.edu.pe','993311902'),(4,'KEYSI KAROL','SANCHEZ','OLORTEGUI','SAN MARTIN','ARQUITECTURA','2022-09-27','946704465','keysisanchezolortegui@gmail.com','76868835@pronabec.edu.pe','ALEJANDRA SANTILLAN','a.santillan.ro@gmail.com','999220242'),(5,'YOEL BENJAMIN','CAMIZAN','GONZALES','PIURA','ECONOMIA','2022-10-11','935271147','Benjamincamizan05@gmail.com','77474908@pronabec.edu.pe','ALFREDO LOZANO','alfredo.lozano@pucp.pe','999009002'),(6,'DANIEL','DE LA CRUZ','MATAMOROS','LIMA','INGENIERIA AMBIENTAL','2022-10-11','977467603','daniell.ddm7@gmail.com','71926323@pronabec.edu.pe','ANGELICA RISCO','ariscorobalino@gmail.com','992765714'),(7,'LISETH KELLY','CURASI','ORDOÑEZ','CUSCO','EDUCACION SECUNDARIA CON ESPECIALIDAD DE CIENCIAS NATURALES','2022-10-05','940502437','182569@unsaac.edu.pe','77242514@pronabec.edu.pe','DELIA AREVALO','delia.arevalo@pucp.edu.pe','992000713'),(8,'JHONATAN ANGEL','CARHUAPOMA','CASTILLO','CAJAMARCA','INGENIERIA DE INDUSTRIAS ALIMENTARIAS','2022-09-29','918009254','Jhonatanangelcc4@gmail.com ','73109162@pronabec.edu.pe','ERICK RODRIGUEZ','rodriguez.erick@pucp.edu.pe','958342121'),(9,'ROXANA','ARONI','PERALTA','CUSCO','BIOLOGIA','2022-10-14','962716143','181989@unsaac.edu.pe','48395100@pronabec.edu.pe','FARIT ZUÑIGA','f.zuniga@inventum.pe','954719101'),(10,'JHON AXEL','MOCARRO','ENCARNACIÓN','SAN MARTIN','ADMINISTRACION Y NEGOCIOS INTERNACIONALES','2022-09-30','994942866','jhaxencarnacion@gmail.com','77173403@pronabec.edu.pe','FERNANDO PACA ','fernando.paca@pucp.edu.pe','985503696'),(11,'YERSON BRENI','BERROCAL','GAVILAN','AYACUCHO','ECONOMIA','2022-09-29','930506912','yerson.berrocal.09@unsch.edu.pe','72448542@pronabec.edu.pe','FERNANDO TRELLES','fernandotrelles@hotmail.com','987214073'),(12,'ISAIAS JACOB','CARRASCO','RAMOS','ANCASH','CIENCIAS DE LA COMUNICACION','2022-09-29','939650630','iscarrascor@ucvvirtual.edu.pe','71015626@pronabec.edu.pe','GIAN DÁVILA','gpdavila@pucp.edu.pe','980516512'),(13,'DIANA DANIELA','LUCAS','LOYOLA','LIMA','PSICOLOGIA','2022-10-11','941696482','dianadanielalucasloyola@gmail.com ','71058466@pronabec.edu.pe','IVAN ROBLES','ivan.roblesr@pucp.edu.pe','949182519'),(14,'YAZMIN YENNY','HUAMANTALLA','MAZA','LIMA','ADMINISTRACION Y MARKETING','2022-10-03','982711742','jasminmaza16@gmail.com','76644352@pronabec.edu.pe','IVETTE CÁRDENAS','ivette.cardenas@pucp.pe','947402097'),(15,'TANIA ALEXANDRA','VALDIVIA','BEDREGAL','AREQUIPA','INGENIERIA CIVIL','2022-09-27','969230242','tania-2013@hotmail.com','73104750@pronabec.edu.pe','JOEL MALPARTIDA','joel.malpartida.guzman@gmail.com','974326722'),(16,'CRISTINA YESSENIA','PENADILLO','MENDOZA','LIMA','ADMINISTRACION Y NEGOCIOS INTERNACIONALES','2022-09-28','999472595','2018102635@ucss.pe','72218098@pronabec.edu.pe','JORGE CALDAS','jorgelcaldas@gmail.com','943580552'),(17,'RUTH CATHERINE','QUISPE','VALENCIA','CUSCO','EDUCACION SECUNDARIA CON ESPECIALIDAD DE CIENCIAS NATURALES','2022-10-11','966780602','182647@unsaac.edu.pe','73603530@pronabec.edu.pe','JORGE LUIS MONGE','jorge.monge@pucp.edu.pe','923911715'),(18,'VERONICA RUBY','VERAMENDI','CABELLO','LA LIBERTAD','CONTABILIDAD','2022-10-12','912976956','vilu445@gmail.com','76745521@pronabec.edu.pe','JOSE CORNEJO','cornejoarcellc2022@gmail.com','952549242'),(19,'EXON','PFOCCORI','QUISPE','AREQUIPA','INGENIERIA INDUSTRIAL','2022-09-29','977846537','exon.pfoccori@uscp.edu.pe','72312125@pronabec.edu.pe','JOSSUE CRUZ','jossue.cruz@pucp.edu.pe','992710860'),(20,'JHEIDY MILAGRITOS','MENDOZA','GARCIA','LA LIBERTAD','CIENCIAS DE LA COMUNICACION','2022-10-13','901060948','jheidymendoza@gmail.com ','73367491@pronabec.edu.pe','LEYSI FREITAS','lfreitasv@gmail.com','997291634'),(21,'YADIRA','VALVERDE','SUELDO','CUSCO','CIENCIAS ADMINISTRATIVAS','2022-10-10','914392085','192120@unsaac.edu.pe','61949303@pronabec.edu.pe','LUIS MARREROS ','gmarreros@pucp.edu.pe','947377683'),(22,'ROSSENTAL BRAYAN','SULCA','QUISPE','AYACUCHO','INGENIERIA DE MINAS','2022-09-29','940813633','rossentalsulca@gmail.com','72489878@pronabec.edu.pe','LUIS YEPEZ','a20210177@pucp.edu.pe','944081508'),(23,'YASMIN SOFIA','URIBE','BLAZ','LIMA','INGENIERIA DE SISTEMAS','2022-10-03','951528055','blazyasmin@gmail.com','74205233@pronabec.edu.pe','MASSIEL CANALES ','bmcanalesa@gmail.com','984773403'),(24,'JHONY RUBEN','PAREDES','SEVILLANO','LIMA','INGENIERIA MECATRONICA','2022-10-10','963130121','jparedes@uni.pe','70326406@pronabec.edu.pe','PEDRO SANCHEZ','sanchez.pedro@pucp.edu.pe','999299290'),(25,'KARINA LEONELA','CCORAHUA','URACCAHUA','AREQUIPA','INGENIERIA INDUSTRIAL','2022-09-29','915071614','leonelaccorahua@gmail.com','74684982@pronabec.edu.pe','RAUL GARCIA','raulgarciav@gmail.com','946297176'),(26,'FIORELA YAKELIN','ATENCIO','PONCE','PASCO','DERECHO','2022-10-04','925122805','Fiorelaatencioponce11@gmail.com ','76076680@pronabec.edu.pe','ROGER REYES','roger.reyes.lunavictoria@gmail.com','964820047'),(27,'ASUCENA','CORNELIO','GARCIA','PASCO','ECONOMIA','2022-10-12','912333458','asucenagar04@gmail.com','61196683@pronabec.edu.pe','YURI DOLORIER','yuridolorier@gmail.com','966563454');
/*!40000 ALTER TABLE `mentorias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-25 13:35:23
