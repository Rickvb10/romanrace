-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 28 mei 2018 om 10:02
-- Serverversie: 5.7.14
-- PHP-versie: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `romanrace`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `groep`
--

CREATE TABLE `groep` (
  `nummer` int(11) NOT NULL,
  `tussenvoegsel` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `groep`
--

INSERT INTO `groep` (`nummer`, `tussenvoegsel`) VALUES
(1, 'a'),
(2, ''),
(3, ''),
(4, ''),
(5, ''),
(6, ''),
(7, ''),
(8, '');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `groep-per-leerkracht`
--

CREATE TABLE `groep-per-leerkracht` (
  `id` int(11) NOT NULL,
  `groep_nummer` int(11) NOT NULL,
  `leerkracht_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `groep-per-leerkracht`
--

INSERT INTO `groep-per-leerkracht` (`id`, `groep_nummer`, `leerkracht_id`) VALUES
(1, 6, 2),
(2, 6, 1),
(3, 1, 3),
(4, 1, 4),
(5, 5, 8),
(6, 5, 9),
(7, 8, 11),
(8, 8, 12);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `leerkracht`
--

CREATE TABLE `leerkracht` (
  `id` int(11) NOT NULL,
  `voornaam` varchar(65) NOT NULL,
  `achternaam` varchar(65) NOT NULL,
  `groep_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `leerkracht`
--

INSERT INTO `leerkracht` (`id`, `voornaam`, `achternaam`, `groep_id`) VALUES
(1, 'Wim', 'Tijl', 6),
(2, 'Nienke', 'Bos', 6),
(3, 'Wilma', 'de Boer', 1),
(4, 'Laura', 'de Jong', 1),
(5, 'Sophie', 'Visser', 2),
(6, 'Maaike', 'Bos', 3),
(7, 'Fleur', 'Kok', 4),
(8, 'Milou', 'Verhoeven', 5),
(9, 'Jasmijn', 'Huisman', 5),
(10, 'Sanne', 'Schouten', 7),
(11, 'Tobias', 'van Vliet', 8),
(12, 'Lina', 'Driessen', 8);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `leerling`
--

CREATE TABLE `leerling` (
  `id` int(11) NOT NULL,
  `voornaam` varchar(65) NOT NULL,
  `achternaam` varchar(65) NOT NULL,
  `leeftijd` int(10) NOT NULL,
  `groep_id` int(11) NOT NULL,
  `voortgang_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `leerling`
--

INSERT INTO `leerling` (`id`, `voornaam`, `achternaam`, `leeftijd`, `groep_id`, `voortgang_id`) VALUES
(1, 'Rickert', 'van Buuren', 10, 6, 1),
(2, 'Ismailert', 'Hussein', 10, 6, 1),
(3, 'Nienke', ':) als achternaam', 21, 8, 3),
(4, 'Noah', 'van der Linden', 7, 5, 1),
(5, 'Sem', 'Joram', 4, 1, 1),
(6, 'Emma', 'Joost', 12, 8, 3),
(7, 'Lucas', 'Basques', 10, 6, 2),
(8, 'Lucas', 'van Hoorn', 10, 6, 2),
(9, 'Milan', 'Jansen', 9, 5, 1),
(10, 'Sophie', 'Haarlem', 11, 7, 2),
(11, 'James', 'Rodriguez', 11, 7, 1),
(12, 'Laurentien', 'Prins', 7, 3, 1),
(13, 'Lotte', 'Zalm', 10, 6, 2);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `voortgang`
--

CREATE TABLE `voortgang` (
  `voortgang_nummer` int(11) NOT NULL,
  `niveau` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `voortgang`
--

INSERT INTO `voortgang` (`voortgang_nummer`, `niveau`) VALUES
(1, 1),
(2, 2),
(3, 3);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `groep`
--
ALTER TABLE `groep`
  ADD PRIMARY KEY (`nummer`);

--
-- Indexen voor tabel `groep-per-leerkracht`
--
ALTER TABLE `groep-per-leerkracht`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groep_nummer` (`groep_nummer`),
  ADD KEY `leerkracht_id` (`leerkracht_id`),
  ADD KEY `leerkracht_id_2` (`leerkracht_id`);

--
-- Indexen voor tabel `leerkracht`
--
ALTER TABLE `leerkracht`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groep_id` (`groep_id`),
  ADD KEY `groep_id_2` (`groep_id`);

--
-- Indexen voor tabel `leerling`
--
ALTER TABLE `leerling`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `voortgang`
--
ALTER TABLE `voortgang`
  ADD PRIMARY KEY (`voortgang_nummer`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `groep`
--
ALTER TABLE `groep`
  MODIFY `nummer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT voor een tabel `groep-per-leerkracht`
--
ALTER TABLE `groep-per-leerkracht`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT voor een tabel `leerkracht`
--
ALTER TABLE `leerkracht`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT voor een tabel `leerling`
--
ALTER TABLE `leerling`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT voor een tabel `voortgang`
--
ALTER TABLE `voortgang`
  MODIFY `voortgang_nummer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `groep-per-leerkracht`
--
ALTER TABLE `groep-per-leerkracht`
  ADD CONSTRAINT `groep-per-leerkracht_ibfk_1` FOREIGN KEY (`groep_nummer`) REFERENCES `groep` (`nummer`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;