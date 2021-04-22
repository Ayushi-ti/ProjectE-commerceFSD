-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_price` int NOT NULL,
  `total_quantity` int NOT NULL,
  `imageid` int NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (55,'Books','written by Jay Shetty','Think like a Monk',500,10,56),(57,'Clothing','casual wear','Black ribbed Dress',1500,20,58),(59,'Clothing','casual set wear','SkyBlue  set',3000,20,60),(61,'Clothing','cocktail dress ','Black slit-cut Dress',4000,7,62),(66,'Clothing','casual wear','Peach Top',799,10,67),(68,'Clothing','winter wear','Purple hoodie',1500,5,69),(70,'Clothing','casual wear','NavyBlue Dress',1500,10,71),(74,'Clothing','winter wear','Brown Hoodie',1500,20,75),(76,'Clothing','office wear','Navy Blue Suit ',4000,10,77),(78,'Clothing','winter wear','Red Sweatshirt',2000,15,79),(83,'Clothing','office wear','Men\'s Shirt',2000,20,84),(87,'Books','lifestyle wellness book','IKIAGI',1200,50,88),(89,'Clothing','thinking ideologies','Psyclogy of Money',500,10,90),(91,'Books','Investment theory','Intelligent Investor',1000,10,92),(95,'Clothing','by Paulo Coelho','The Alchemist',500,10,96),(97,'Clothing','Educational','Indian Polity',1000,10,98),(99,'Books','educational','Concept of Physics',1500,10,100),(101,'Books','peace','The Monk ',500,20,102),(103,'Books','psycological','Power of Mind',1500,10,104),(107,'Bags and Luggage','Blue color','Calvien klien Trolley',10000,10,108),(109,'Bags and Luggage','office purpose','Laptop Bag',20000,10,110),(111,'Bags and Luggage','travel purpose','Leather Bag',30000,10,112),(113,'Bags and Luggage','travel purpose','Black trolley Set',10000,5,114),(117,'Accesories','fashion wear','Golden Earrings',3000,6,118),(119,'Accesories','fashion wear','Earring set of 3',1000,10,120),(121,'Accesories','traditional jewel','Choker Necklace',12000,12,124),(125,'Accesories','fashion wear','Choker Layers',1200,4,126),(127,'Accesories','fashion wear','oxidised necklace',1200,10,128),(129,'Electronics','mobile','I Phone 12 ',120000,25,130),(131,'Electronics','washing machine','IFB washer',30000,10,132),(133,'Electronics','smart home','Alexa ',80000,10,134),(135,'Electronics','entertainment','Android TV',60000,10,136),(137,'Electronics','jabra 360','Gamer\'s Headphone',30000,8,138),(139,'Footwear','comfortable','Black flats',1500,10,140),(141,'Footwear','sportswear','Ferrari shoes Nike',8000,10,142),(143,'Footwear','heels','White boots',3000,6,144),(145,'Footwear','casual wear','pink shoes',3000,10,146),(147,'Make-up','party Look','Mac peach Lipstick',3000,10,148),(149,'Make-up','rainbow colors','Eyeshadow palette',5000,10,150),(151,'Make-up','skincare','Innisfree Serum',3000,20,152),(153,'Make-up','Lip care','Innisfree Lipbam',700,37,154),(155,'Make-up','Eye makeup','Lakme Mascara',1200,10,156);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-22 12:20:53
