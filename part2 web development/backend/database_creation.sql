-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: cortilabs
-- ------------------------------------------------------
-- Server version	5.7.17

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
-- Table structure for table `calls`
--

DROP TABLE IF EXISTS `calls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `calls` (
  `callId` int(32) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` int(32) unsigned NOT NULL,
  `deviceId` int(32) unsigned NOT NULL,
  `predictionId` int(32) unsigned NOT NULL,
  PRIMARY KEY (`callId`),
  UNIQUE KEY `callId_UNIQUE` (`callId`),
  KEY `deviceId_idx` (`deviceId`),
  KEY `predictionId_idx` (`predictionId`),
  CONSTRAINT `deviceId` FOREIGN KEY (`deviceId`) REFERENCES `devices` (`deviceId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `predictionId` FOREIGN KEY (`predictionId`) REFERENCES `prediction` (`predictionId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `devices`
--

DROP TABLE IF EXISTS `devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `devices` (
  `deviceId` int(32) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` int(32) unsigned NOT NULL,
  PRIMARY KEY (`deviceId`),
  UNIQUE KEY `deviceId_UNIQUE` (`deviceId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `prediction`
--

DROP TABLE IF EXISTS `prediction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prediction` (
  `predictionId` int(32) unsigned NOT NULL AUTO_INCREMENT,
  `ca` tinyint(4) NOT NULL DEFAULT '0',
  `predictionTime` int(32) DEFAULT NULL,
  `device` int(32) unsigned NOT NULL,
  PRIMARY KEY (`predictionId`),
  UNIQUE KEY `idprediction_UNIQUE` (`predictionId`),
  KEY `device_idx` (`device`),
  CONSTRAINT `device` FOREIGN KEY (`device`) REFERENCES `devices` (`deviceId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-13 21:26:53
