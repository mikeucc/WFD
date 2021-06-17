-- ------
-- BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
-- WFD implementation : © <Your name here> <Your email address here>
-- 
-- This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
-- See http://en.boardgamearena.com/#!doc/Studio for more information.
-- -----

CREATE TABLE IF NOT EXISTS `deck` (
  `card_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `card_type` varchar(25) NOT NULL,
  `card_type_arg` int(11) NOT NULL,
  `card_location` varchar(25) NOT NULL,
  `card_location_arg` int(11) NOT NULL,
   PRIMARY KEY (`card_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `advancedDeck` (
  `card_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `card_type` varchar(25) NOT NULL,
  `card_type_arg` int(11) NOT NULL,
  `card_location` varchar(25) NOT NULL,
  `card_location_arg` int(11) NOT NULL,
   PRIMARY KEY (`card_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `setupDeck` (
  `card_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `card_type` varchar(25) NOT NULL,
  `card_type_arg` int(11) NOT NULL,
  `card_location` varchar(25) NOT NULL,
  `card_location_arg` int(11) NOT NULL,
   PRIMARY KEY (`card_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `finisherDeck` (
  `card_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `card_type` varchar(25) NOT NULL,
  `card_type_arg` int(11) NOT NULL,
  `card_location` varchar(25) NOT NULL,
  `card_location_arg` int(11) NOT NULL,
   PRIMARY KEY (`card_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `eventDeck` (
  `card_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `card_type` varchar(25) NOT NULL,
  `card_type_arg` int(11) NOT NULL,
  `card_location` varchar(25) NOT NULL,
  `card_location_arg` int(11) NOT NULL,
   PRIMARY KEY (`card_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `draftPicks` (
 `player_id` int(10) unsigned NOT NULL,
 `card_id` int(10) unsigned NOT NULL,
 PRIMARY KEY (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

 ALTER TABLE `player` ADD `player_first` BOOLEAN NOT NULL DEFAULT '0';
 ALTER TABLE `player` ADD `strike` int NOT NULL DEFAULT '0';
 ALTER TABLE `player` ADD `throw` int NOT NULL DEFAULT '0';
 ALTER TABLE `player` ADD `hold` int NOT NULL DEFAULT '0';
 ALTER TABLE `player` ADD `face` int NOT NULL DEFAULT '0';
 ALTER TABLE `player` ADD `heel` int NOT NULL DEFAULT '0';
 ALTER TABLE `player` ADD `strikePower` int NOT NULL DEFAULT '0';
 ALTER TABLE `player` ADD `throwPower` int NOT NULL DEFAULT '0';
 ALTER TABLE `player` ADD `holdPower` int NOT NULL DEFAULT '0';
 ALTER TABLE `player` ADD `facePower` int NOT NULL DEFAULT '0';
 ALTER TABLE `player` ADD `heelPower` int NOT NULL DEFAULT '0';
 
