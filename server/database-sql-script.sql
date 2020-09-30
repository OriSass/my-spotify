CREATE DATABASE  IF NOT EXISTS `newDb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `newDb`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: newDb
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cover_img` longtext NOT NULL,
  `created_at` date NOT NULL,
  `upload_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--


/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,'לילה כיום יאיר','data:image/jpeg;base64,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','2009-06-22','2014-06-22'),(2,'ועכשיו לחלק האומנותי','data:image/jpeg;base64,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','2018-01-01','2020-01-01'),(3,'בור ועם הארץ','https://upload.wikimedia.org/wikipedia/he/thumb/9/97/Boor-ve-am.jpg/375px-Boor-ve-am.jpg','2013-01-01','2020-01-01');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;


--
-- Table structure for table `artist_albums`
--

DROP TABLE IF EXISTS `artist_albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist_albums` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `album_id` int NOT NULL,
  `artist_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist_albums`
--


/*!40000 ALTER TABLE `artist_albums` DISABLE KEYS */;
INSERT INTO `artist_albums` VALUES (1,1,1),(2,2,2),(3,3,2);
/*!40000 ALTER TABLE `artist_albums` ENABLE KEYS */;


--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artists` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cover_img` longtext NOT NULL,
  `upload_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--


/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (1,'אביתר בנאי','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGBgYGBgYGBcYFRcXGBUXFhcVFRUYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcCAQj/xABCEAABAwIEBAMFBgQEBQUBAAABAAIRAyEEBRIxBkFRYSJxgRMykaHwFEJSscHRB2Lh8SNyc5IWM1OCsjQ1wsPSFf/EABgBAAMBAQAAAAAAAAAAAAAAAAECAwAE/8QAIREAAgIDAQEBAAMBAAAAAAAAAAECERIhMQNBUSIyYRP/2gAMAwEAAhEDEQA/AMdXq8C9UQCXqS6AWMetCcaFy0LsOA3IWMc4htgUwpNau0tgKNKwSTg+YRrLsD7S3MfkgOHr6TMSj2TZ9TpulzHQRyg/sllfwMavZIzLK9FNx7JvhwhtBzucqbmfE2Hex1MB5Bb70QJ8t0IybG02U3Mc65KbyddB7JPg7UC5aVLYWOENcCfOPRM1KRadk7JIZqtlNsp9k85pXDqZQoxLoN6rpzRsmcO2T1RrC5aXkBo3SOIoBqUjKksMC4+K1Xh7g2m1uqoJceydzvhek5hAaAYsVqKUzIheo3zWtcO5gAwERcLL8ThixxEXaSrtwHhjVcA6zRfzTwdACfGGeFtOBMrK34gl5JC3nE5MyoyHMjzg/kszzfh0UsQ5n3bEeR79lvQIKwlWQPgpNaiI2RjAZKAu8RlwAIPouSTHUSmVqcFSsL3RGrl90ycLpSuQKPb9UlzpHVJCwUZ4vV4vQF2BPQupgLyFw4rGE55XKSSxhL0Behd02rGPAEjJTzqJHqkxv8t1rDQ22kTy7qRTy55EjqLb7+XmpVN0x4QD6/mDZSMK5/8AN4fOW/0StjKJEdhHNIkEcwTt/ba6smT41oaW14cwSZMXgWAcPKZnmu6RqNhxpl4+69u7XdwJA+HOd7KPWc1xBfTdfVMANMm9xGkOB5jeLgzbKQ2BNdljKgD8M4vB+4ffHhLiAOYgFCjTOxU3B440WFrZ1TqZaPDB8EC4ETz3BHNF8xwRr0m4tjDLifaADY2h0dxv3PdVjKyM/OtojZXkheYAkdVcsiyN1N4JFgveEKI0AkEFXzBYcRYItWItDeEJHJDc+rECGCSrM2gOibfgQTMLUPZktXhlzyXOBk3KI8NH7O/S6x7rRq2AHRVLizK7SBcINVw0UG6ubU2tkuA8yFn2Z4/2+ILwPCPCO46rxmAPIJx2G0jZJO2hkqZMpOgSo+Mr9kwyvy7qS6iXNXO42MBK1QTZQsRWUvMqUOn+nJBMU8gSlxFY9rakhvtz9QktgCyokLpi9rNgrkFdRj2q7kml6vWhYx4AuoToAHl6rxtrrBPBS5ong8HMREwZ7Dt3USiLggTeYIkHzHNHssoDW3U0nmQIku6CB9Slkx4K2c4vLrSBIteP3Ex6KJSwlzIlW9uEc5p03JtaIEcjJ5dULr5eRv8AR8+anZ0YIYw2AP8ARG8noN1RpEgwbd+Si5QZseceaOjDkEFvTl8/NIWjFFhyzLmC2nff+yONySi7djT5gFQMoaCJ+KsGDdyVYpEvRv4V7N+BKFWS0aHR4XDcHlbohfDGXPoTRqtjSS03dBHLSAIdIP0VoOtOYZrS+S0TsDAkdpVUqeiEm6IeGyloALRFkSw9KApuleAJyLPGher1JEB4WobmWFDmkImmqzbLBKdUwQaYhQcfhZCsmY0ryg2KEg3UXYbKscNpduimGiIUHF0rmHbJ7CU3EyobsdM4zTCtI2uqdj8EbytAfhy4IXjcrkLNiS2UH7GOiSuH/wDG8/kkhkLRlGLp81Dei2Kp28kKqroTHkjhPtZaecriiyVIY2+09v36IgOaTZjb1npup9LDh2nmb+Q7m0TAn9ksPh7xI7wJJ25RcduynfYahgAOABNttrnzO/wjkUrY6RGoUdTuQ79B1PfoB1R7KcM8nwkifDaZdO8EcoXlLA6YdpiR6QAATe5Pi37o9k9At0TdzpAEX39534WwefbuptlYxoL5bgC1p1Q0dALNAO3Yd+Z23CFZjhS7U4iGjYRfbd34ezbn1Vtw4EQwywAGZgvJMkgRYX/beVX88xInS3SN99/MDr6Hz5LNaKR6AMsp+PzVzwDAYB3jflZVJhhwMefmrjkp1BvokXSvEE2Ui0gjYm6L0AdwFH0cuqn4Sla+6skQkxwN2XQkFPUwnTTlUJWT2mRKSbwx8IHSydVCLPEkkljCXLxZdhKFjA3GUrKn410SCr5XpSgGNyNj90ko2ayh1a4BMojl1dsbwiz+GKYOyZr5Q1gspvzYykL27YUKtiB1UTE0iJglDqlN0iSVGUWhtML/AGhvVJCtI+v7pJcQ0jNqjRoJQPEtuEbeheYsi66IgkNUmWnr8VNwwM2Ex6j68kxQol7msaCXGGtA5k9FZm5FTpQHucam50RDSP5j36LN0aEHLhHwDy0ajeobfeMeYbEQOtlKriPD4gA2bggmSD4jO5j4SpuGw8N1MeZMtlwaTfcySYMDe3mm67y2A4CbuMkk3kNB5zAiOgU2WxrpPyeiXEayS47SJ2J0mJncm28T1kEMHiGh7oEt92eWkCXPJ57ja3iEIbSZuPFcDUQbgHZg5AkiPIN5JjE4jxEAw0Nc0bwPxX5w2BPV/mgGwzjOJC5pZR8LW7mfEd4vM7D58ryHbX1GT9crFDME6Sd+X6yT8kQrCBFr7fogykeEjGVdLgOo3+HNS8Hn/sWksEnlO23JDa2De5gLt5gDnPkd/SdkxVrUsO4NcPaVDs29u5n8oWSC2XbKeJHPuWuJtLmiQE3jOMa1N+ltJwF7u5gdANj5oX7bFuoGo0BjQQDLtAbPP2bPEQBeS70Var4zEa9bnOcw76p2MuaQCJaCOR8rprYjo13h7iU1W3Hz/orUytI+CxnhjMyXCDAPI9VqZxBZhnVYL4As0EkkkAWCeMhfSC6EqeZsD9BI1G4E3+CeOYt6rKqjHurPxD6wD2ifZiz2iYbadlBxXEdflJHzV/NprZz+scWa8/NG9V0cxAGomB1WJ0c7rOeASd+quVLMXBoaFTFEky/tx45leuzBnULOsbmFWLOUOnja0zq9EcDNmk1M2Z+IKPUzSn+ILL8yo1Hklr3DtNvRQMtqVmGqTLg1nO8TzQcaMn+mr1czpgTKF5hmjDsVUMsxAeACYJIMT1RgYEAxyUJzaQ9DtOqHgj63QzNHgT2Ux9EUvdFuYk/JV3N8RMiYXO5ZGujn7U3+b4JKB7dvQ/AJLYAzKxUAsFDx+HlqkOF0q12lOizCHAOAL8SanKiwv2+9BDfSZPonKVR1eu7oJNuq94EzD2VZ9Of+cwtno6DE9rkKx/wzwTSzEOeJcwkEc5Bi/rPwQl0t5Viin5rQq03B7opgGQCbkjo3mnsXigWC/f8AzefX+ih8U1zVxD3HYWHYBeU8qqvoCtswCB3jmt8Viu7aRKpZtaxId43f5t5Dv5fdjp4uqkvrA0xzLtTiOgNRpIt1dHpq7Kttplzg0bkx9fJGmN0UXQdRc8N2vLXQCPgfii0ImEsCBE87eXKyK4TDh7gCARB/ugzaugRPaR2si2Q17jub+kqbR1RotVXJmmnqYCD/ACudHnEx05KvnhR2vW3RUIIMPIl07nt2F9pWiZOQ5t/rupb8AwnVAkxNpm9pH6p8RXLewBluOAZofReOREam/Pl8NlziMlpOa95pmCzREaZBMxG8yTfuVccPhGRt8b/M3XdfCgi8QOSbAn/0VmZZXw77GgdQNnyPKVdciqtdTNKoNTXCCDzB3QvHPJJYdtU3lR8LWLagaHAHolWmUayjQ3T4M9lUIMES5wIaGtIc7VDQPdA/DyTGZ5F7MEgK/ZZV1s0OFxz7oRxC8NY6dwurz/w4vS72Z9h8G0PmFYaNIG6pWKzkCo4cpViyLNGvgAqktMlAKVMPKQwwHJEGsSeAEtlANjKOnxBAMfTcJLSRqsf28la8xFkIrMC1sDQPyHCEu1G31srdqhslB/ahoDoi14/NeszEOBbO653FydG4eY7FTZCauG1XXmNa5pvtyPNOYGqHTJ2PqUP+VBSsY9m7oPgF6p/s29UlsBsDOMTyKYc5FM/w3sq1Wn+F5jyNx+aFOtCHB2QPbFrpBgggg9CLz8loPDeaimHYuJpVQBXA3pvsNYH4T8j5rPcWy8ojw3nPsXOa6Cx4gg+70v2K0laD5TxlTDT+FzihWqYR5cGuJDXbuBkwHdexTGDzCr9m9i9pb7J0QRBjurtwXl7KbHezJDagktmYcDI8uionEmNqfaHiDp1G0QkWy0o47GsA5rK2owYuAecHVb0B+IRn7MGsgCYHh6+IveJ9T82qt1KJdMXdE+Q32HO3zVqyhhcRUcbuDWQeRMy0cp93ylMyK6V+q7SImY59T/f8kf4cv6/X7oTm2FYwhloAMu57mJHYAf7oXWS5gGOvMWt6pWtFISpmp5bio9Lc4KOYbGknqN/ks9y3NNZkGwIF++wA5f1Vqy3EiwB3v2hGLKySey54apYLrG4prGFx2AJKG4OoeqWat103NPMEfFVvRDHZneX8YNrYp3tGjQXQzppBsT8kfznK6bn069NxEETBtf8ALdZziuF6+GcS1zSwHw6rHyXdfiTHshrTRIjbS4//ADupItdG1ZDir6SZiyXFuW+1YHDf3T3B2P11WU8GcUV6tfS9mkxOpvuW6g7fFbFgQ5zJIgHadz38lbzk7Of1iqsoX/BLDchS8BwsKZ8IhXs0wAodaoAr2c3CFhcvtdOPy0Hkp+GrAqXASsNgJ2UNI2QjG5QByVycRCBZri2tN1grbB9DKmubBaE7g+GaYuGhEMBXaeaJ03AFaxnED1eHqbhBYFCdwvTBkMCuMhNOhazIq3/DzPwBeK0S1JCxtmE/xLw+jFa499v5H+qqTqwIiFo/8UcHNJlT8Jj0Nv2WXPUvSNSNF6OMWLIe8KbUNlBcUEKy78JcRPotaCNTY6w4eRT/ABJmdKsZZS0kxJJvvfZVnJneFT6im+nVGTcTrLmg2F3udc/haNW53AtqgbwPS1uLGMpm/hJ0g+HU47u62E3tueqqPDdQte90fdJm03hoMm3P8+qsWIploAEAuF3EumBO/ikbbc5uJgJhIgPNKupwBNy4THaIA5bCY7qFTpF1QNFmySfVmpvpAF+5XWbhwrAbFsXiPN0Hbn/RS8la2S9x8DZ3+/sNM7x4oH+YbSFhfoUw+oNEQPFAE3ADfESNyJIn6i0cOVZcATcgH0IBHyIQTKxqa57rucSBAs1rGzAG0btC5+3GiS8NguA0M5zFxPMDr0090rRaMi6Z/wATMwtMhpBqmwHTff4H4Kn5jxxiA4GRYNJG8apgEdYbqQWhgqmKqag6SDc3hznSQ1p5iZv/AEKK0eC67CP8UGSHEwA4OA5HomFqUnoi5rm9V1MGoS8vc4QR7pERa/c89lXsEXg+0MgT75aQ2CR4jAvsfrbRaHC1UxNcjpNMaRPkR3+KL4PhzFsLHMNGoywMS228aXSPyQV/gz8/1lJ4U4hfh67RpAt7pa2Tf8XUgHpzut4wOOZVpNqt2cJ7+RlZccGBj20q2HYxlNjnNE2JdB1kgCx0x6Hra44nOaTG6WaQOgsFWLo5fToWxGJhVTPM0c0w1RMbxEDYFBa2YhxmUJz/AAi5IteWZmeasWHxoIWa0cfHNGMuzWeaC9H9NkW/FYuFVsyql7vJOYrHWUE1gs/T4MpUwtllUhH6VVV/CCACiLKsJ4spmmG6VeyVSohFLEXTz8QE1gyRK190kP8AbhJCxs0VTi5za2FqNtMGPOJCxh7l9MnhSnoLRuRC+c+JMvOHxNWifuOI9DcfIhD0dsCVIEvcotRPPXVDDF8nk0Sf0CUUmZObIs4INlbtkdapS6dHnwe4dp3dP4JA/mB39APki1OmXOe8AkAgAQI2cZnlcnbt1Es8PhrakOuIcf8AykHnEXRtlNpMyC27tMtbqcTYNJMecnmUyDVACvlBe+YADi3sxomwJ2uZPU8uqiuo+I6rmCA1vugA2m+lsloAHcnzuGNoOc0OMSZgT4BPOTbkB6IbQyVgaST4dIc5xB0BtiPCLl1wQ3nsQsahrITJdJ2i4jS1ouSDzJOk+Ud1xnNEVHv0nVBA1EbzZrWjtA9ZB2KJU8oLnGqQWtIAaHQC65IboEwBaRc9RdO4WiKBaAZqGLBrnabmAdI87lwvKwA7w9lLKNFoA8RlxcQNzI6bQLeQU+tWEEEQfoQm8Jq0guhp2AmdQHMXuAP7nddvZ7SxEHuI8j5FDZVNAuvnDqQ2M3IvFrn9PmpGX8XumPZXG8X+8W7gdpUXOMvLC1xEmwm5EEEEAeS4y7KnNa2ZJcQLwdi8E25QirBJkTinNPb1W1aYOkMDT1BBL7jkL26i6B1sWVolbhFtWm8NJY4wNUSARGpvKRI+FlQM3y6ph3mnUaWkbTs4TZzTzCLRyz2Cn4gyuhiD1UHFOgpn2vRGjncQi/GHqpOW5nD4ndAqlVeYerDgehWSNRe62P8ACodHNL3UVteWWUDB0i5xJ5IONsLNFweMlo8kQp4gEKpZfiDsijKqtQUGHVIUllYEShVAWTbMQWHstiENawkhX21vVeo4mNGXz9/GrB6MeXDaoxrvUSD+i2vC5414mIWP/wAa8bTrVaRpvYS0OBAMkbbxPRSlJOiyi1Zl7GFzg0blWTB4EBmgc9+5UfJcuPvHd23krzlWSANDn2HzStjQgZk+k6hVLXDuPIo9ReC2Va+L+GPtFDXSb/i0vE0c3sjxN87SO4jms+wGI5JHseP8XQawtQl3huAfFEiAbbj1R9uNFCkHaQ8QBOqHQPwxfpaVW8PiXN6ddhM+cKe2vqadM6d3M3kEXjrETH57ophaLDT4hY4AkGIEyWyYuGtJiAIMkCb+q5qZ20slhaGh14m4AvBPiduOUDnuqzQy03dSLHMduAQP+28XIPRc4zCtaAHnRbTZriABJNxI3vEjfdMLsn4vOzVqNhztDeQ93VJgzvy1SbABF8ge57tTWtgy2d3bgBrXEG9hMAgRF4Egsty6kYc0ki3hdIcYEAQ6A7rz32VtyKq2lS1OnW22zZ25AbmPgiAt2WYbd7osB3IkmA4xeJJkmL8uUp2Dkd3EARE3+8TtaR6obleJ8LtQmwhu+qPFF9+XYXRbB40HWSQTTjUepOwHzH1KIttC9iCQ1w3PhHpPNO1TTYRIaCLNB62/cGe68xNcBzJF9BPOJANu/wDVDMW7VXkmfEHRyENEz8D+a1DKVlqwjjpA5jf+vxBQzNsnbi6TmVRzljhEsd1b27c1zleJFX3SQJgn8QuOXL9IRynRDWw0AeSbpPh8957lVShUdSqCHN+Dhyc08wUIcBstp/iPgW1qLLD2gfDTz0wdQ8tll+J4crDZqAjiV+oIUZzroricsqN3afgoNTBO6LAxDGX4iWKdhXgMNryg2VscbQp1CvEgp49M1oK0sXpgcyi2BqkwqnQcXP8AyVqwIIACslYqD7HiE1VgqE2qRzXTq3dCqCO6W9ElE9p3XqxiUMrGi5LgB94kj4bKhcaUw51JkQbz5Ba26ha1wVlWdM1Zlod91wZHZzTpI8yQuLCmdblaonZHg2jQSJPIK3UMNqgu9By+CjZPl2n3t+nIBG2hNRro8YzTCzHj/ho4et7emP8ABqmTGzHm5B7EyR3kdFqguuX4Zlak+lVGppBDh/Kd46EWM9lnEFmMYdkhP4eg9pBaYRXNMhfhKxpOu3djvxN/cbEf0UrC4aQoNtM6IxTQBe4yZBY482e6fSbT8E017y73iO7bEx1m0q3DAAjaVwMiY7kmyM/Mqz8TUpmWw43ku8Xpf9F4OKHD/mt1D7rW2B394jlta+3krJjsjaGkn5/t1VAzgNDjHWBe/ewTRlZL0hirLRg+O9BB0OlziLmwa6AXdhfbt0Nrdw9xRSfS0UzqqVIkQeQJvPIF7RPQG3TFi0u2CIZd7alenYyHB0XBGxBVLIq2ahW4tHty2s4MfSaabmkxNRwIHTt2ubwomT5y/GVWlhim0mSJGqDDR8yTyuFRKuGqYnEGpVI1VHanwLbAEgctlpvCWEpghrbAbQlb3SK+cfrNEyOmGNAAgI44oTg2BoF1NdU8JdNgJ+CouEp7YBxzPaP6hsgeZuf0+Ci1cCI2UrDUyG3NzJPmTKdLSqrhNvZU8yy/eyC1csHNqv1TCSmH5cOiNINlBo5aATZNYvKxyCvpywTsvRlQJFkKQctFaynh8Bocd0QqZYYtPwVtpYMBSW4UJshNGeVMuqD7spkYWr/05WkPwo6Jn7E3otYbRnn2at/0yvFov2JvRJA2gLhHTTB5xdZdxcXU8e5/RzHj0gj8lqGWe7CpX8RsDDqdUDeWH0uPlKjNFUXFjRAI2IB85uvSovDlTXhKLp2aG/7fD+inOCNGs8pvXLaul2rlzXrmKJUfJWCE81yluKommfebem48jFr9CLH+iotJhpkscCHAwRzBHJaDlVfYTtY+U2PofzKg8YZNMYhguIDx1HJ3mNvLyU/SFq0P4+lPFgShRB2UynQEbJnBiQlmeL0Njrz5bKKOl9K5xZj4aQDACy97tdWT1Vi4nxup0T/VV0GLp4L6c/rLdBmngQOSINLWt2XeEBNOmXNLdbZbOxHVPjBEwgUSXwbyrDlxceatfDr9BkkdEEyp3s3hp3dMdzyCKYXQyodVyeR91vkFhlVGg5Tmuu3RWGlBEHmIWWjMDSqtv4Tz/RXvKMeHtBBVYysh6Q+oedgqg5SOov8AJMmyNMqrqpTbUBBF/mFZOzmaAocug4JqswtcWnkuNSICTZdtAUTWuxUWMEoSlR6dSQvS9Yw4XLnUuNSRcsY71r1Nal4sYG0KAbsgHGuGD8JU/lhw9Df5Sj1CpLQVGzTD+0pVGfiY4fEJZK0OugHgWrOFI/C9w+MH9UbcVVuAan+DVHR4+Yj9FZHVAN1o8GHAbLw0gUyyrPl8lxVx7GXLh6eI/JZ0jEqmC17Ty59wbEK0YchzS035HuCP1CzevxU2fBTJ7vMD/aLn4hSMt4vrNfqdpI2LdIiO3P5oZIDi2E8wwXsHlv3Tdp7dPMbIDnr5adiI9VdqmOo4pga7w8wQRY9QSLIZjeFGutreByPhI/JSl5P4Xh7Kv5dMKztsPlQcBhTVqBv3Rd3l09VseO/hnRqn/nVAfJsfCFBqfwvqUaZ9jVbUcTJDm6HGNmgyR8Y3RUGkTk4tnOWUKdah7J4sBLSN2nYEfshlai+g4CpsZDXjZ37HsncpL6QqCo0seHQWkQRA+vih2OxtStUJPubaeQA5QhKmVUqJOKpTDhu2CFMMOaKnxHQhDKONpl4YJA5AzbtfkpdQFtx7vMfqkKJ2e4zGe0Zp5tMhWPhHOAAGk3CqWPpRdu2/xUHLcYadTz3Q4Bv4zfMPigQvQSDIInp181UMjzkOaAHcp/T6CP4iqBEHny3+v7KqkQcKYXYGVrkEOFt1Gr5U4e6QfkVFp4n73ukfU+SLYHHteAJ8UC36+SrGVkpRoAvKTXqRnGH0PJ+664/UIeHpxSdRqck6HIcyrdPe2WASjUXBqKOaqbc4zIP7LGJetJRdaS1GB2T1pYOyJi6rfDeIDgYPcKwU3oIdlVwOVVcO+sA0FrnS2/KTEqSxryfEQB2H6mVY8U2yBVx4kuIyYUwuXMcL3Pck/mljMpbpsEstr8kXNws4oGTTM1zDLocbJingj3V1zDAydlAZgY5KWLRXJMC4XBvBsSB6hWjLKlZlg8x0MkfApUsMFOpshOrEk0Q6+GxxvSxI8nMpg/7g39E3Sx2PpmKvi/7GwfVoCLMrEJ52MCahL/wqHGDDXomsGhtRkB0GzmkwO4IJ/NUuplj3ANbvv0t+I9lp3EjGmgXRDiWC3OXtkHqI/JVqtjxTYHQPaPgDsGx+VvU/ypXEpGWj3g3gySKmIgi3hIku/wA0+63tueykcXcP+xmpTE0zuPwH/wDP5InkWbggAlWH7S17SDB+oRfmmhc3FmPmCNPw/ZAsyplpV24s4fNCa1IE0Sbjc0yeR/l6FVTGEPZKg006Ze1JWj3hnNTTdc8/RaNleZCtabTy5xf5QsXdUg/W6svDOd6DB8x8luGjJPTNVrPggmYFr/VuspxuIADXAwTsZi8Tt+iA4bMPaDf9tuiX2ncTq5jztNvrmjYcS9YDNW1AGPgk2vsSBy772QvOsMKT7e667f1CA0cRqJk+K229rxbndFqWZtqf4VU+Hk+8tmQDP1+qrGf6Qn51whmsnGYwc1OxmQRTL21Q4NBJkRYbwZKrYrA7EFVJBk4sLg4pBzUXn2g9UTBj2/dJB/tRSWMDuBdj5K4sSSSR4NIk1tkDr7pJImiP4DdWGjskksaRHxaguSSSsKHKfJPNSSWMJ26h10kkwEccT/8AIpf6rPycqNnXvUv9P/7qqSSV8Hhwl5Nv6q4ZfufJeJJ4cFmSMd/6XE/6T/8AwcsbpbH65pJKHt0by4wDj/eTmV+96pJJHwK/sXvKfc+KdO7vP914kpo6ghlnvv8AL9GqYNh/l/QJJJvgrLMz/wBvxH+k/wD8SstyZJJdS+HC/wCzLIzZIpJJ0Y8SSSWMf//Z','2014-01-01 00:00:00'),(2,'רביד פלוטניק','https://medias.timeout.co.il/www/uploads/2015/09/by-tamuz-rachman-5-t-600x600.jpg','2015-01-01 00:00:00');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;


--
-- Table structure for table `interactions`
--

DROP TABLE IF EXISTS `interactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interactions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user` int NOT NULL,
  `song` int NOT NULL,
  `is_liked` tinyint(1) NOT NULL,
  `play_count` int NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_UNIQUE` (`user`),
  UNIQUE KEY `song_UNIQUE` (`song`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interactions`
--


/*!40000 ALTER TABLE `interactions` DISABLE KEYS */;
INSERT INTO `interactions` VALUES (1,1,1,12,14,'2020-02-02 00:00:00');
/*!40000 ALTER TABLE `interactions` ENABLE KEYS */;


--
-- Table structure for table `playlist_songs`
--

DROP TABLE IF EXISTS `playlist_songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist_songs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `song_id` int NOT NULL,
  `playlist_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist_songs`
--


/*!40000 ALTER TABLE `playlist_songs` DISABLE KEYS */;
INSERT INTO `playlist_songs` VALUES (1,1,1),(2,4,1),(3,7,1);
/*!40000 ALTER TABLE `playlist_songs` ENABLE KEYS */;


--
-- Table structure for table `playlists`
--

DROP TABLE IF EXISTS `playlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `cover_img` longtext,
  `created_at` datetime DEFAULT NULL,
  `upload_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlists`
--


/*!40000 ALTER TABLE `playlists` DISABLE KEYS */;
INSERT INTO `playlists` VALUES (1,'Israeli mix','https://www.makorrishon.co.il/wp-content/uploads/2020/09/%D7%96%D7%94-%D7%94%D7%96%D7%9E%D7%9F-%D7%9C%D7%A1%D7%9C%D7%95%D7%97.png','2020-01-01 00:00:00','2000-01-01 00:00:00'),(2,'oldies','fgb.jpg','2000-01-01 00:00:00','2000-01-01 00:00:00');
/*!40000 ALTER TABLE `playlists` ENABLE KEYS */;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `youtube_link` varchar(255) NOT NULL,
  `album` int NOT NULL,
  `artist` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `length` int NOT NULL,
  `track_number` int NOT NULL,
  `lyrics` longtext NOT NULL,
  `created_at` date NOT NULL,
  `upload_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--


/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (1,'/Ibm-DP36Umo',1,1,'אבא',269,1,'אבא, אני רוצה לעמוד מולך להאמין שאתה אבא טוב אבא, אני צריך לדעת שאתה אוהב אותי ככה סתם אבא טוב אבא, אני רוצה להיות בטוח בכל ליבי שלמסע הזה יהיה סוף טוב שכל מה שאני עובר בדרך יהפוך חולשה לעוצמה גדולה אבא, אני רוצה לחזור אלי למצוא אותך שם איתי במקור שלי אני טוב גמור, אבא ושם אני מאמין בעצמי יונתי בחגווי הסלע השמיעיני את קולך תשירי לי שיר חדש, חדש שיאיר ליבי ואת מיתרי','2009-06-22','2012-07-22'),(2,'/_bvyufA3gJk',1,1,'אותיות פורחות באוויר',213,2,'באמצע הלילה אני מתעורר הלב מלא אני מוזר לכולם וזר לעצמי בלי מקום בעולם אולי צריך להיגמר כדי מחר להתחיל במקום אחר הגיעה השעה משליך גפרור בכוונה יומנים נשרפים אותיות פורחות באוויר... אנ\'לא יודע לאן אני ממשיך מכאן פשוט מוכרח ללכת משאיר זאב בודד וערפל כבד תמונות על הקירות מדליק את האש ומבקש לא להביט לאחור עזה כמוות אהבה שלהבתיה יומנים נשרפים...','2009-06-22','2012-07-22'),(3,'/cXIbcvaWIKg',1,1,'לילה כיום יאיר',204,3,'שוב אני נלחם מגנט מושך למטה זה בנקודות הקטנות במילות עידוד הפעם אנ\'לא לבד איזה קרב, אלוהים אדירים, איזה קרב בין הבור למים לפחות יש פה קרב לפחות יש מים פעם היה רק בור לילה כיום יאיר... אני מרתיח את המים זיכרונות צפים מאיימים לשרוף הכל יש מגירות שעדיין אני לא פותח עד שיוסיף בי אור זה בנקודות הקטנות במילות עידוד לשרוך ת\'נעליים לכפתר את חולצת הכפתורים הלבנה להציע לך כוס מים לילה כיום יאיר... לאורך הנחל שנובע בי מבין העצים עומד הבית שלי','2009-06-22','2012-07-22'),(4,'/5SbnVxukAaI',2,2,'עולם ומלואו',365,7,'אולי אני אף אחד בעיניכם או בעיני כולם אני דווקא מאמין שכל אחד עולם ...שכל אחד עולם הם לא מכירים אותי, הם לא מכירים אותי אני לא סינגל ברדיו, הם לא מכירים אותי (אני עולם ומלואו) שלא יגדירו אותי, הם לא מכירים אותי שלא ידירו אותי, שלא יאדירו אותי (הם לא מכירים אותי) אני לא אשא אות קלון או אות קין בפריים טיים בכתבה קורעת לב ומחרישת אוזניים עם תור ארוך של בחורות הן לא קופצות עליי ומשום מה כל המשוגעות באות עליי (הם לא מכירים אותי) כי אני לא על כל המסכים אור הזרקורים לא מפצה על חסכים (הם לא מכירים אותי) אני יודע בדיוק מי אני בתוך תוכי כוחי במתני ולא מקשיב למומחים אני ילד שכל שאיפותיו היו להיות ראפר חולה אני לא טרנד חולף, לא אחד שבא והולך אני לא אולי או למרות או כמו או במקומו אני עולם ומלואו, יצר הבריאה, נוצרתי בצלמו אני רוח סערה, חוט השערה נהר של לבה אש ובערה טוב וצרה מצאתי נחמה זחנתי נקמה אז אני מים רוח אש ואדמה גוף ונשמה בים של מבטים עיניים מסתכלות עלייך ומה שתעשה הזמן חומק מבין אצבעותיך בין אצבעותיך הם לא מכירים אותי, רציתי להיות הבוס להיות בעננים וזה מרגיש מאוד לבד בלב בעניינים חברים מאמריקה התקשרו בסקייפ אמרתי להם אל תאמינו להייפ שעשו לזה הייד, שיעשו לזה לייק אני עדיין יושב לי עם גרביים וכפכפים בבית (הם לא מכירים אותי) מחובר לאדמה הזאת כמו עצי זית ולא מוכן לסגת ללא פייט, לא והם אומרים שהפרסום יוציא אותך מדעתך כי אמן ניזון ממשברים אין לו מנוחה אז מה קורה כשפזמונים הופכים משכורת אם זה מחיר התהילה אז על הזין תהילה וכוסאומו הצלחה (רביד רביד רביד רביד רביד תגיד תגיד רביד זה נכון רביד) (רביד רביד רביד רביד רביד תגיד מי כתב את הפזמון) (רביד דבר דבר תגיד לי מי הלחין את ההמנון רביד) (תגיד תגיד רביד תגיד מי פיצח ת\'אטום רביד) ובמרדף המגוחך להיות גדול פגעתי באנשים שיקרים לי מכל וגם הזנחתי חברים ויצאתי שכוח רסן מנסה להיות אדם טוב אבל הכוונה שלי מתפספסת הרבה שנים שלא עשיתי לאבא קונצים אני ילד מבוגר שעדיין חי בין סטוצים משווה בין זוגיות למציאות שהם משהו בין פנטזיה לא נורמלית לחצי סיוט (הם לא מכירים אותי) אני צועד לעבר השביל מעבר לצליל התדר של הלב יוביל ואז נגשים את הבלתי רגיל (הם לא מכירים אותי) היום אני מבין שזה טבעי כי בסופו של יום העולם לא סובב סביבי (הם לא מכירים אותי) בתכלס לפעמים אני לא מכיר את עצמי אוהב את הסיגריות האלה יותר ממה שאני אוהב את עצמי לרצות שכולם יאהבו אותך זה כמו להמשיך לשתות משקה מצמיא או להצליח עם הרס עצמי אני כותב דרך חרב נפשי, בנפש חופשי אז בעצם אני כותב את עצמי אמרתי שאני כותב דרך חרב נפשי בנפש חופשי אז בעצם אני כותב את עצמי הם לא מכירים אותי בים של מבטים עיניים מסתכלות עלייך ומה שתעשה הזמן חומק מבין אצבעותיך בין אצבעותיך היא לא מכירה אותי הפכתי לגבר חשדן שלא מראה רגשות רק מחרטט שובר לבבות אין שום גבורה בלשחק עם רגשות של בחורות העיקר שהחברה יגידו שאתה מזיין בערימות אה? (הם לא מכירים אותי) והיא אומרת שהז\'אר שלי לא כל כך תופס כי הקהל פה לא מבין אבל בח\"ול יודעים, יודעים וחצי והיא רקדה פעם סלסה וגם קצת ברייק ביט ולה ולבסטי הייתה חוויה לסבית (הם לא מכירים אותי) או איזה מנה ז\'אוטווה עם איזה מגה סלב אבל זה לא הבסיס שלו כי עכשיו הוא מה זה הז בין \"היא שלחה לי הודעה \"השיר שלך המיס אותי והיא באה להופעה להעמיס אותי רמזתי לה שהציניות שלה לא עובדת עליי \"היא ענתה לי \"הצניעות שלך מתנשאת עליי הצביעות שלך לא תופסת עליי טרמפ כי כל גבר הוא חרמן וגם אתה כזה בתכלס באמת אתה לא מכיר אותי אני מחפשת ת\'חלקים החסרים אני מתגעגע לימים שהיינו חברים אתה לא מכיר אותי הייתי נותן לך איברים היום אנחנו עדיין על תקן מכרים כשהשעמום תוקף אין לי זין היום, שתיתי ארבע קפה וגם קופצת לי העין היום לא היה לי כוח לחכות לה שתגיע מחר ובתכלס מאוחר אז הבאתי ביד פעמיים היום קיבלתי את מה שמגיע לי אחרי שנים אני מוקף חברים סטלנים שאוהבים סמים ואולי אבל רק אולי אני חננה מידיי בשביל להרגיש נוח עם ההצלחה הזאת לנקר עיניים ולהרעיש ברעשנים (הם לא מכירים אותי) בורכתי להתפרנס מהדבר שאני הכי אוהב בעולם רסמי אינעל דינק העולם מרגע הלידה עד לנקודה הזאת הכל הלך והתבהר ואני אסיר תודה לבורא עולם, לכם ולקדושה של המסע לבורא עולם, לכם ולקדושה של המסע לבורא עולם, לכם ולקדושה של המסע הם לא מכירים אותי בים של מבטים עיניים מסתכלות עלייך ומה שתעשה הזמן חומק מבין אצבעותיך ניסית להבריק, לפתוח שער אל שמיים עכשיו אין שמיים עכשיו אין שמיים','2018-02-03','2019-06-30'),(5,'/Maf6BaEhCzY',2,2,'נתראה בגלגול הבא',213,8,'מי יודע אם אראה את פנייך שוב הכחשה הולכת, הכחשה תשוב ואם אומרים שיש גורל, אומרים הכל מכתוב אז אולי אין לי סיבה בכלל להיות עצוב אינשאללה תמצאי לך נחלה תמריאי אל מעבר לחלל כי גם הסוף הזה הוא התחלה נתראה בגלגול הבא כבר ארבעה שבועות מאז שטפוני המים לא זורחת השמש, לא דולקים השמיים מעבר לכל החלומות ההזויים אין תרופה שתרפה געגועים בכל יום אני קורא שיר אחד שכתבת אבל רק אחד, בשביל שלא ייגמר לי וזה עולם משוגע, כמו השיר שאהבת והלב שנתפס עדיין לא השתחרר לי','2018-02-03','2019-06-30'),(6,'/TEaLbyPAloY',2,2,'יום כיפור בכפר סירקין',293,9,'ביום כיפור אני חושב איך לספר סיפור בדירה מפוארת יחסית ליחידת דיור שמונה שנים טובות אחרי התחלה מאפס גינה מטופחת, רצפה עקומה, קירות מגבס אבא אומר הבית נבנה על אדמה שזזה לא נרדם עד שאני חוזר הביתה, אסאמאסים באקסטזה כי אבא הוא גם אבא וגם אמא אבא לא רגוע אבל לא פראייר ייתן לך אחת לפנים אם תדבר נגוע אומר תה תראה יהיה לי בית בסביון תהיה לי זולה אני אביא אותה בלוטו אני אזיין את כולם אבא חמום מוח, אבא כריש, אבא בחור רגיש אבא אכבר גבר, עם סטייל של נובוריש ואיך נראים החיים של הילד, אחרי הצלחה בדירה של ארבע אלף שקל, אחרי הנחה ואבא לא היה בחול 30 שנה אמרתי לו אבא - חול זה חול - כלום לא השתנה בוא נצא לשכונה אני ואבא, אבא ואני עדיין לא רואים אחד את השני עדיין מתווכחים כל ראשון-שני עדיין עושים צחוקים, אבא ואני אני ואבא, אבא ואני עדיין לא רואים אחד את השני עדיין מתווכחים כל ראשון-שני עדיין עושים צחוקים, אבא ואני ביום כיפור אני חושב על מה עשיתי רע עם מי יצאתי לא בסדר, מתי אקנה דירה ולמה אבא לא קיבל תמרורי אזהרה החיים הורידו אותו על הברכיים, אבל אבא קם חזרה בין כל המושבניקים אני ואבא כמו שתי גורילות מסתובבים בכפר מזילים ריר על הוילות צי של בתים פרטיים ואנחנו שמקנאים באנשים שלא שוכרים דירה בגיל 59 ובגיל 30 אבא אומר רביד תחסוך את הכסף, הבנת? זה לא הזמן לעבור לתל אביב ולשחק אותה אבו ענטר תסתדר על החיים שלך ותמצא לך אחלה קנטה תצא ווינר כשהיה לך בית, אינשאללה בלי משכנתא אבא ואני דבר והיפוכו אבל זהה זהה 15 שנה שאני אומר לו \"וואלה אבא חכה תראה\" יום יבוא ואני אעשה פה בלאגן, נשבע הכל יקרה ברדיו כל הזמן הזה ואבא תרנגול גאה מספר לכל פ\"ת \"כן זה הילד שלי ועם כל השטויות שאתה עושה אתה לא מגיע לזרת שלי אתה יודע איזה דברים פסיכים עשיתי בחיי? הא? עם איזה בחורות אני הייתי בסיני?\" אשכרה אבא גנוב, גבר של מילה של אמת ערס אשכנזי, מרצדס וגורמט, זה אבא בוס אבא של שעון רולקס 18 אלף שקל ומוניטין שלא הולך ברגל אני ואבא, אבא ואני עדיין לא רואים אחד את השני עדיין מתווכחים כל ראשון-שני עדיין עושים צחוקים, אבא ואני אני ואבא, אבא ואני עדיין לא רואים אחד את השני עדיין מתווכחים כל ראשון-שני עדיין עושים צחוקים, אבא ואני ביום כיפור אני מתיימר לקרוא ספרים ואבא אומר \"החיים טסים אתמול הייתי בן 20 אז תדאג להישאר כמו שאתה, תדאג לאנשים סביבך כי אצלנו לא מוותרים על משפחה\" אמרתי לו אבא, יש מעבר למה שהעיניים רואות המכתוב שלנו כתוב בכוכבים, הנשמות שלנו נצחיות יש מעבר לגלוי ושם הכל קיים הוא אמר לי \"ילד, היו תקופות היה לי כסף כמו חול בים\" איך זה שיום כיפור היום ולא דיברנו מילה איפה התייחסנו לא יפה, התעצבנו וזרקנו קללה לא אמרת את שעל ליבך, אני לא ביקשתי סליחה הוא אמר לי \"לא נורא, תמיד יש את יום כיפור הבא - אני איתך\" אם תרצה להמריא לשמיים איך הם לא יחשבו שתה משוגע כמו התשקפות על המים צלול ונקי תמריא','2018-02-03','2019-06-30'),(7,'/3Fg0wZdOluI',3,2,'בלוז הלב השבור',218,14,'קמתי בבוקר, עייף ועצוב בידיעה שאת עינייה לא אראה יותר שוב מתחיל את היום, אבל אין חשק לזוז כמדומני שחטפתי את שפעת הבלוז בלוז הלב השבור יצאתי מהבית בשעת צהריים בחיפוש אחר הלב שנחצה לו לשניים חצי אחד פה איתי והשני שם איתך שונא את עצמי כי אוהב רק אותך בלוז הלב השבור גברת, קחי את הדברים שלך וצאי לי מהסרט את לא יוצאת לי מהראש, הולכת חוזרת ושוב מבשרת לי ש.. גם הלילה אני לא אלך לישון בשקט מבלי שתיכנסי לי לחלומות כל פעם בדרך או פאזה אחרת גברת, את משהו מתסבך מאוד, שמסתבך בעיקר אותי את כמו מבחן פסיכומטרי מייגע לצעיר עילג שכמותי שלא תגידי שאת גם מרגישה כמוני, כי אני באמת כבר גמור את נקודת התורפה שלי, את - בלוז הלב השבור','2013-02-03','2013-03-03'),(8,'/sXzW-grk41c',3,2,'זמן ומקום',280,15,'אני זוכר איך הכל התחיל, תמונות מאלבומים ישנים הבית הישן, צלצולי פעמונים בין פג\'ה לתקומה, פתח תקווה ותיקים משוגע עם סוס ועגלה מוכר אבטיחים מסתכל אל השמיים מרגיש שזה היה לפני יומיים ועבר כמו שעתיים ביום הראשון של הקיץ דוך לבריכה קופצים ראש למים ילדים רוכבים על אופניים אהבה, אוויר הרים צלול כיין אוכל חם מונח על הכיריים משפחה מושלמת, זה זכרון אותם זמנים הכל היה שונה, הרגיש כל כך נכון כל הסיפור הזה מזמן מאחוריי זוכר בקרים של חורף, נושם אוויר קר, מרגיש חי שלווה ומנוחה גשם שירד היה ברכה, והדלת תמיד פתוחה וזה לא שלא טוב עכשיו פשוט מנחם אותי לדעת שכל הזיכרונות לא לשווא לכל דבר יש זמן ומקום רק חבל שאני לא שם היום פזמון: קפוצ\'ונים על הראש סוחבים חיים על הכתפיים מרגיש כמו ימים ימימה כל העולם קרס עלינו בשנייה שאיבדנו את אמא ואחותי הגדולה עד היום מחפשת את עצמה קשורה לסבתא, אולי רואה את אמא בדמותה אני לא מבין גדול עדיין ואני ממש לא מסכן אבל חוויתי על בשרי דבר או שניים יש אנשים רואים שחור לבן, אני רואה אפור ומרוב כאב כבר לא רוצה לזכור כלום, מרגיש כמו בעל מום בתור ילד הייתי בוכה כל לילה, היום אני לא בוכה מכלום ואבא נשאר אותו דבר, אחד שלא נשאר חייב חי עם לב שבור כי הוא איבד את אהבת חייו אי אפשר למחוק ת\'זכרונות עכשיו מבין למה סבתא לא נרדמת בלילות נזכרת בתקופת המחנות, סיוטי בלהות איך הלכו אחים ואחיות זה לא הוגן, וככה זה לא עסק אבא אחרי ניתוח לב קורע ת\'תחת בשביל להביא הביתה כסף זה לא אמור להיות ככה, איזה סרט הכל היה אמור להיות אחרת, שגרה חוזרת בעתיד יהיה יותר טוב בטוח יותר רגוע, הכל יהיה פחות מתוח תוהים מתי גם לנו יהיה קצת זמן לנוח והחיים עפים כמו עלים ברוח פזמון עם הזמן הכל משתנה, גם השברים ראיתי אחים ובני דודים הופכים להיות זרים גמורים לכל אחד אמת שונה, מיליון פנים ראיתי מה הזקנה עשתה לסבא וסבתא לאורך השנים וסבא שלי הוא מזמנים ישנים היה קצין משטרה בתקופות תמימות של מוסר וערכים תמיד כיבד את האישה, דאג לפרנס ת\'ילדים לא שיקר בחיים, לא רימה אנשים בנאדם קשה, שלרגע לא מסוגל לשבת ולפעמים נראה לי שכל מה שהוא צריך זה אוזן קשבת כי אף אחד לא יודע מה הוא עבר, ומה מחכה מחר אי אפשר לתקן את טעויות עבר וזה רק מכעיס אותו עוד יותר מאז שחיימ\'קה נפטר הוא הרגיש שאין לו בשביל מה לחיות יותר כי לקחו לו את הבן הכי אהוב זה לא בושה שזה אמת, אבל עצוב אני יודע מה זה להרגיש כמו סתם עוד אחד להיות מוקף באנשים ולהרגיש לבד והחיים ממשיכים, גם הסיפור ואין לו סוף עצוב, כי הסוף עוד לא גמור אין טעם להתעכב על העבר, זו הוכחה החיים מורכבים מרגעים של עצב ושמחה אז המשכנו ת\'חיים בתקווה להשגחה בידיעה שאין דבר יותר יקר ממשפחה','2013-02-03','2013-03-03'),(9,'https://WELLFUCK',10,3,'Bizdfbines',200,4,'test test test','2013-02-03','2013-03-03'),(10,'https://WELLFUCK',10,3,'Shnitzel ubanav',200,4,'test test test','2013-02-03','2013-03-03');
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;


--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` tinyint(1) NOT NULL,
  `preferences` json NOT NULL,
  `remember_token` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--


/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'yossi','yos@gmail.com','2000-01-01 00:00:00','123',0,'{}',0),(2,'yossi2','yos2@gmail.com','2000-01-01 00:00:00','123',0,'{}',0),(3,'yossi3','yos3@gmail.com','2000-01-01 00:00:00','123',0,'{}',0),(4,'yossi4','yos4@gmail.com','2000-01-01 00:00:00','123',0,'{}',0),(5,'yossi5','yos5@gmail.com','2000-01-01 00:00:00','123',0,'{}',0),(6,'yossi6','yos6@gmail.com','2000-01-01 00:00:00','123',0,'{}',0),(7,'yossi7','yos7@gmail.com','2000-01-01 00:00:00','123',0,'{}',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;


--
-- Table structure for table `user_playlist`
--

DROP TABLE IF EXISTS `user_playlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_playlist` (
  `idUserAndPlaylist` int NOT NULL,
  `UserId` int DEFAULT NULL,
  `PlaylistId` int DEFAULT NULL,
  PRIMARY KEY (`idUserAndPlaylist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_playlist`
--


/*!40000 ALTER TABLE `user_playlist` DISABLE KEYS */;
INSERT INTO `user_playlist` VALUES (1,1,1),(2,1,2);
/*!40000 ALTER TABLE `user_playlist` ENABLE KEYS */;


--
-- Dumping events for database 'newDb'
--

--
-- Dumping routines for database 'newDb'
--
/*!50003 DROP PROCEDURE IF EXISTS `get_album` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_album`(
	IN albumId INT(100)
)
BEGIN
SELECT albums.name, albums.cover_img, songs.id, songs.title
FROM albums     
INNER JOIN songs
	ON songs.album=albums.id
WHERE albums.id=albumId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_album_artists` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_album_artists`(
	IN albumId INT(100)
)
BEGIN
SELECT artists.name
FROM artists
INNER JOIN artist_albums
 ON artists.id=artist_albums.artist_id
 WHERE artist_albums.album_id=albumId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_artist` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_artist`(
	IN artistId INT(100)
)
BEGIN
SELECT artists.name, artists.cover_img
FROM artists
WHERE artists.id=artistId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_artist_albums` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_artist_albums`(
 IN artistId INT(100)
)
BEGIN
SELECT albums.name 
FROM albums
INNER JOIN artist_albums
	ON artist_albums.album_id=albums.id
WHERE artist_albums.artist_id=artistId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_artist_selected_songs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_artist_selected_songs`(
	IN artistId INT(100)
)
BEGIN
SELECT *
FROM songs
WHERE songs.artist=artistId
LIMIT 10;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_playlist` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_playlist`(
	IN playlistId INT(100)
)
BEGIN
SELECT playlists.name, playlists.cover_img AS img,
       playlists.created_at, playlist_songs.song_id, 
       songs.title
FROM playlists
INNER JOIN playlist_songs
	ON playlist_songs.playlist_id=playlistId     
INNER JOIN songs
	ON songs.id=playlist_songs.song_id
WHERE playlists.id=playlistId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_song` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_song`(
	IN songId INT(100)
)
BEGIN
SELECT songs.id AS id, songs.title AS name,
	   songs.youtube_link AS embedded_link,
       songs.length, songs.lyrics,
	   artists.name AS artist,
       albums.cover_img AS img,
       albums.name AS album_name
FROM songs
INNER JOIN artists ON songs.artist = artists.id
INNER JOIN albums ON songs.album = albums.id
WHERE songs.id=songId; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_top_albums` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_top_albums`()
BEGIN
SELECT albums.id, albums.name, albums.cover_img AS img
FROM albums
LIMIT 20;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_top_artists` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_top_artists`()
BEGIN
SELECT artists.id AS id, artists.name AS name,
		artists.cover_img AS img,
        COUNT(DISTINCT songs.id) AS song_count,
        COUNT(DISTINCT artist_albums.album_id) AS album_count
FROM artists 
LEFT JOIN songs
 ON songs.artist=artists.id
LEFT JOIN artist_albums
ON artist_albums.artist_id=artists.id
GROUP BY artists.id, artists.name,
		artists.cover_img;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_top_playlists` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_top_playlists`()
BEGIN
SELECT playlists.id, playlists.name,
	   playlists.cover_img AS img,
       COUNT(playlist_songs.song_id) AS song_count
FROM playlists
INNER JOIN playlist_songs
	ON playlists.id=playlist_songs.playlist_id
GROUP BY playlists.id
LIMIT 20;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_top_songs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_top_songs`()
BEGIN
SELECT songs.id AS id, songs.title AS name, artists.name AS artist, albums.cover_img AS img
FROM songs
INNER JOIN artists ON songs.artist = artists.id
INNER JOIN albums ON songs.album = albums.id; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-21 23:50:46
