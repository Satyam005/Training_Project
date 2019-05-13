-- MySQL dump 10.13  Distrib 5.7.25, for Win64 (x86_64)
--
-- Host: localhost    Database: diy_popups
-- ------------------------------------------------------
-- Server version	5.7.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `advertisements`
--

DROP TABLE IF EXISTS `advertisements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `advertisements` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `vcredits` int(11) NOT NULL,
  `categoryadd` varchar(255) DEFAULT NULL,
  `clicks` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `dop` varchar(255) DEFAULT NULL,
  `eid` bigint(20) NOT NULL,
  `product` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advertisements`
--

LOCK TABLES `advertisements` WRITE;
/*!40000 ALTER TABLE `advertisements` DISABLE KEYS */;
INSERT INTO `advertisements` VALUES (1,'2019-05-03 04:55:03','2019-05-03 06:42:47',3,10,8,'Electronics',0,'India\'s No1 Smart TV Brand','2019-5-3',3,'Mi Android TV','Mi'),(3,'2019-05-03 04:56:55','2019-05-03 06:42:56',3,10,8,'Electronics',0,'One Charge two weeks!!','2019-5-3',3,'Huawei watch GT','Huawei'),(4,'2019-05-03 04:58:27','2019-05-03 06:49:52',3,10,8,'Headphones',0,'Pure Bass Sound Experience Superior JBL Sound with punching out bass that\'s both deep and powerfull!!','2019-5-3',3,'JBL Extra Bass Wireless','JBL'),(5,'2019-05-03 05:03:14','2019-05-03 06:49:56',4,10,8,'Sports & Fitness',0,'Lightweight, foldable, motorized with music console for your energising cardios!! ','2019-5-3',4,'Aerofit Motorized Treadmill','Aerofit'),(6,'2019-05-03 05:04:31','2019-05-03 06:50:00',4,10,8,'Footwear',0,'Cushioned footbed, automatic lace ups!!','2019-5-3',4,'Nike Air Mag','Nike'),(7,'2019-05-03 05:06:06','2019-05-03 05:06:06',4,4,10,'E-reader',0,'All new Kindle. All Book, No Glare, Zero Distractions!!','2019-5-3',4,'Kindle(8th Gen)','Amazon Kindle'),(8,'2019-05-03 05:09:06','2019-05-03 05:09:06',5,5,10,'Watches',0,'Precisely handcrafted to suit every occasion!!','2019-5-3',5,'Fossil Analog Silver Dial','Fossil'),(9,'2019-05-03 05:10:28','2019-05-03 05:10:28',5,5,10,'Gaming Consoles',0,'Amazing HDR Quality graphics, Store your games, apps, screenshots and video!!','2019-5-3',5,'PS4 Slim Console','Sony'),(10,'2019-05-03 05:11:08','2019-05-03 05:11:08',5,5,10,'Bags',0,'Durable and stylish!!','2019-5-3',5,'Skybags check-in luggage','Skybags'),(11,'2019-05-03 06:35:29','2019-05-03 06:35:29',9,9,10,'Gaming Console',0,'loaded with all latest tech','2019-5-3',9,'Xbox 360','Microsoft'),(12,'2019-05-03 06:36:02','2019-05-03 06:39:23',9,9,10,'Watches',0,'sleek','2019-5-3',9,'sonata12345','sonata'),(13,'2019-05-03 06:36:41','2019-05-03 06:36:41',9,9,10,'Clothing',0,'comfortable','2019-5-3',9,'Jeans ','Levis'),(14,'2019-05-03 06:40:25','2019-05-03 06:40:25',9,9,10,'Medical',0,'Made up off Natural Ingridients','2019-5-3',9,'Hair Oil','Patanjali');
/*!40000 ALTER TABLE `advertisements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditcounter`
--

DROP TABLE IF EXISTS `creditcounter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creditcounter` (
  `sln` int(11) NOT NULL,
  `eid` bigint(20) NOT NULL,
  `vid` bigint(20) NOT NULL,
  PRIMARY KEY (`sln`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditcounter`
--

LOCK TABLES `creditcounter` WRITE;
/*!40000 ALTER TABLE `creditcounter` DISABLE KEYS */;
INSERT INTO `creditcounter` VALUES (98,10,1),(99,10,3),(100,10,4),(101,10,5),(102,10,6);
/*!40000 ALTER TABLE `creditcounter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (103),(103);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perdayclicks`
--

DROP TABLE IF EXISTS `perdayclicks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perdayclicks` (
  `sl` bigint(20) NOT NULL,
  `clicklimit` bigint(20) NOT NULL,
  `eid` bigint(20) NOT NULL,
  `sysdate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sl`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perdayclicks`
--

LOCK TABLES `perdayclicks` WRITE;
/*!40000 ALTER TABLE `perdayclicks` DISABLE KEYS */;
INSERT INTO `perdayclicks` VALUES (97,0,10,'2019-05-03');
/*!40000 ALTER TABLE `perdayclicks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_nb4h0p6txrmfc0xbrd1kglp9t` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (2,'ROLE_ADMIN'),(1,'ROLE_USER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`),
  CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (3,1),(4,1),(5,1),(6,1),(7,1),(8,1);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `downcredits` int(11) NOT NULL,
  `upcredits` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `firstname` varchar(40) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `lastname` varchar(40) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `wallet` double NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'2019-05-03 04:52:11','2019-05-03 04:58:27',0,0,'john@gmail.com','John','male','Doe','$2a$10$IiCIsehXlf4JobNVm09aXeI1U.f5mfWQgnYVqsOGA8wpTGyEwyKju','8812312390','buser','john@gmail.com',0),(4,'2019-05-03 05:00:09','2019-05-03 05:06:06',0,0,'kate@gmail.com','Kate','female','Snow','$2a$10$bduwk2FC9oIwOW1IqU48n.zA2srJqKmjW66gu31byjMLI/I817mnq','8012312390','buser','kate@gmail.com',0),(5,'2019-05-03 05:07:39','2019-05-03 05:11:08',0,0,'lisa@gmail.com','Lisa ','female','West','$2a$10$pl78.cXwps1PJKhd6gI8TuBrP3/AuGkkb0gS9Nbz24AHejjyAxu0i','9812312390','buser','lisa@gmail.com',0),(6,'2019-05-03 05:13:49','2019-05-03 05:13:49',0,50,'siaa@gmail.com','Siaa','female','Gali','$2a$10$aeESl5M7PNCag4Ek7hwYQ.8Y6pGPBHRURIOennJCgwnOghFDHLSQi','8945645690','nuser','siaa@gmail.com',0),(7,'2019-05-03 05:52:57','2019-05-03 05:52:57',0,50,'sam@gmil.com','Sam','male','Smith','$2a$10$4k5ZstRm4.Z8ZpuoeBUKo.VLNkpOwmYuMcCUK3QWKrKRMn6dR1B7i','8686123456','nuser','sam@gmil.com',0),(8,'2019-05-03 06:04:44','2019-05-03 06:04:44',0,50,'tony@gmail.com','Tony ','male','Stark','$2a$10$bKghmA11K8tj9JDpvpO.Hu7HBXdjD27aAFyQcfGfmLjPYYD9.1Fuy','7878234567','nuser','tony@gmail.com',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-03 14:44:37
