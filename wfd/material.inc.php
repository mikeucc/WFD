<?php
/**
 *------
 * BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
 * WFD implementation : © <Your name here> <Your email address here>
 * 
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * material.inc.php
 *
 * WFD game material description
 *
 * Here, you can describe the material of your game with PHP variables.
 *   
 * This file is loaded in your game logic class constructor, ie these variables
 * are available everywhere in your game logic code.
 *
 */


/*

Example:

$this->card_types = array(
    1 => array( "card_name" => ...,
                ...
              )
);

*/

$this->gen1_basic_moves = array(
    1 => array( 'card_name' => "Punch" ,			'card_type_arg' =>  0, 'card_type' =>'Strike', 	'strike' => 1, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  0),
	2 => array( 'card_name' => "Headbutt" ,			'card_type_arg' =>  1, 'card_type' =>'Strike',	'strike' => 3, 'xthrow' => 0, 'hold' => -2 , 'alignment' =>  0),
	3 => array( 'card_name' => "Eye Rake" ,			'card_type_arg' =>  2, 'card_type' =>'Strike',	'strike' => 1, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  -1),
	4 => array( 'card_name' => "European Uppercut",	'card_type_arg' =>  3, 'card_type' =>'Strike',	'strike' => 1, 'xthrow' => 0, 'hold' => 1 , 'alignment' =>  0),
	5 => array( 'card_name' => "Kick",				'card_type_arg' =>  4, 'card_type' =>'Strike',	'strike' => 2, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  0),
	6 => array( 'card_name' => "Offer Hand Shake",	'card_type_arg' =>  5, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  2),
	7 => array( 'card_name' => "Show Mercy",		'card_type_arg' =>  6, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  1),
	8 => array( 'card_name' => "Abdominal Stretch",	'card_type_arg' =>  7, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 2 , 'alignment' =>  0),
	9 => array( 'card_name' => "Arm Bar",			'card_type_arg' =>  8, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 1 , 'alignment' =>  0),
	10 => array( 'card_name' => "Hidden Chokehold" ,'card_type_arg' =>  9, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 1 , 'alignment' =>  -1),
	11 => array( 'card_name' => "Test of Strength",	'card_type_arg' =>  10, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 1 , 'alignment' =>  1),
	12 => array( 'card_name' => "Head Scissors",	'card_type_arg' =>  11, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 1 , 'alignment' =>  0),
	13 => array( 'card_name' => "Beg for Mercy",	'card_type_arg' =>  12, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  -1),
	14 => array( 'card_name' => "Eye Poke",			'card_type_arg' =>  13, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  -2),
	15 => array( 'card_name' => "Arm Drag",			'card_type_arg' =>  14, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 1, 'hold' => 0 , 'alignment' =>  0),
	16 => array( 'card_name' => "Bulldog",			'card_type_arg' =>  15, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 2, 'hold' => 0 , 'alignment' =>  0),
	17 => array( 'card_name' => "Hip Toss",			'card_type_arg' =>  16, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 1, 'hold' => 0 , 'alignment' =>  0),
	18 => array( 'card_name' => "Gut Buster",		'card_type_arg' =>  17, 'card_type' =>'Throw',		'strike' => 1, 'xthrow' => 1, 'hold' => 0 , 'alignment' =>  0),
	19 => array( 'card_name' => "Neck Breaker",		'card_type_arg' =>  18, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 1, 'hold' => 1 , 'alignment' =>  0)            
              
);

$this->gen1_advanced_moves = array(
    1 => array( 'card_name' => "Drop Kick" ,			'card_type_arg' =>  0, 'card_type' =>'Strike', 		'strike' => 3, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>3,'reqThrow' =>0,'reqHold' =>0,'reqAlignment' =>0),
	2 => array( 'card_name' => "Flying Head Scissors" ,	'card_type_arg' =>  1, 'card_type' =>'Strike',		'strike' => 2, 'xthrow' => 0, 'hold' => 2 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>2,'reqThrow' =>0,'reqHold' =>1,'reqAlignment' =>0),
	3 => array( 'card_name' => "Karate Kick" ,			'card_type_arg' =>  2, 'card_type' =>'Strike',		'strike' => 4, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>4,'reqThrow' =>0,'reqHold' =>0,'reqAlignment' =>0),
	4 => array( 'card_name' => "Elbow Smash",			'card_type_arg' =>  3, 'card_type' =>'Strike',		'strike' => 2, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>1,'reqThrow' =>0,'reqHold' =>0,'reqAlignment' =>0),
	5 => array( 'card_name' => "The Legdrop",			'card_type_arg' =>  4, 'card_type' =>'Strike',		'strike' => 2, 'xthrow' => 0, 'hold' => 2 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>1,'reqThrow' =>0,'reqHold' =>2,'reqAlignment' =>0),
	6 => array( 'card_name' => "Salt in the Eyes",		'card_type_arg' =>  5, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  -2, 'reqType'=>'value', 'reqStrike' =>0,'reqThrow' =>0,'reqHold' =>0,'reqAlignment' =>-2),
	7 => array( 'card_name' => "Hair pull",				'card_type_arg' =>  6, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 2 , 'alignment' =>  -1, 'reqType'=>'value', 'reqStrike' =>0,'reqThrow' =>0,'reqHold' =>1,'reqAlignment' =>0),
	8 => array( 'card_name' => "Backbreaker",			'card_type_arg' =>  7, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 2, 'hold' => 0 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>0,'reqThrow' =>2,'reqHold' =>0,'reqAlignment' =>0),
	9 => array( 'card_name' => "Shoulder breaker",		'card_type_arg' =>  8, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 2, 'hold' => 1 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>0,'reqThrow' =>1,'reqHold' =>1,'reqAlignment' =>0),
	10 => array( 'card_name' => "Armbreaker" ,			'card_type_arg' =>  9, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 2, 'hold' => 2 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>0,'reqThrow' =>0,'reqHold' =>2,'reqAlignment' =>0),
	11 => array( 'card_name' => "Arm Drag",				'card_type_arg' =>  10, 'card_type' =>'Throw',		'strike' => 2, 'xthrow' => 2, 'hold' => 0 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>3,'reqThrow' =>0,'reqHold' =>0,'reqAlignment' =>0),
	12 => array( 'card_name' => "Atomic Drop",			'card_type_arg' =>  11, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 2, 'hold' => 1 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>0,'reqThrow' =>0,'reqHold' =>1,'reqAlignment' =>0),
	13 => array( 'card_name' => "Authority Figure",		'card_type_arg' =>  12, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  4, 'reqType'=>'value', 'reqStrike' =>1,'reqThrow' =>1,'reqHold' =>1,'reqAlignment' =>0),
	14 => array( 'card_name' => "Longshot",				'card_type_arg' =>  13, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  4, 'reqType'=>'lowestTotal', 'reqStrike' =>0,'reqThrow' =>0,'reqHold' =>0,'reqAlignment' =>0),
	15 => array( 'card_name' => "Indian Death Lock",	'card_type_arg' =>  14, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 3 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>0,'reqThrow' =>0,'reqHold' =>2,'reqAlignment' =>0),
	16 => array( 'card_name' => "Front Facelock",		'card_type_arg' =>  15, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 1, 'hold' => 2 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>0,'reqThrow' =>0,'reqHold' =>1,'reqAlignment' =>0),
	17 => array( 'card_name' => "Figure-four Armlock",	'card_type_arg' =>  16, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 3 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>0,'reqThrow' =>0,'reqHold' =>2,'reqAlignment' =>0),
	18 => array( 'card_name' => "Chickenwing",			'card_type_arg' =>  17, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 4 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>0,'reqThrow' =>0,'reqHold' =>3,'reqAlignment' =>0),
	19 => array( 'card_name' => "Ankle Lock",			'card_type_arg' =>  18, 'card_type' =>'Hold',		'strike' => 1, 'xthrow' => 0, 'hold' => 2 , 'alignment' =>  0, 'reqType'=>'value', 'reqStrike' =>0,'reqThrow' =>0,'reqHold' =>1,'reqAlignment' =>0)            
              
);






$this->token_types = array(

  'slot_action_2' => array('type' => 'slot_action','name' => clienttranslate("2 Gray Track Advancements"),  'tooltip' => clienttranslate("This action gives you two advancements of gray track. You cannot use this action if you cannot complete all advancements."),  'o'=>"1,0,0,gg")
  );


