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
    1 => array( 'card_name' => "Punch" ,			'card_type_arg' =>  0, 'card_type' =>'Strike', 	'strike' => 1, 'xthrow' => 0, 'hold' => 0 , 'face' =>  0, 'heel' => 0, 'nbr'=>1),
	2 => array( 'card_name' => "Headbutt" ,			'card_type_arg' =>  1, 'card_type' =>'Strike',	'strike' => 3, 'xthrow' => 0, 'hold' => -2 , 'face' =>  0, 'heel' => 0, 'nbr'=>1),
	3 => array( 'card_name' => "Eye Rake" ,			'card_type_arg' =>  2, 'card_type' =>'Strike',	'strike' => 1, 'xthrow' => 0, 'hold' => 0 , 'face' =>  0, 'heel' => 1, 'nbr'=>1),
	4 => array( 'card_name' => "European Uppercut",	'card_type_arg' =>  3, 'card_type' =>'Strike',	'strike' => 1, 'xthrow' => 0, 'hold' => 1 , 'face' =>  0, 'heel' => 0, 'nbr'=>1),
	5 => array( 'card_name' => "Kick",				'card_type_arg' =>  4, 'card_type' =>'Strike',	'strike' => 2, 'xthrow' => 0, 'hold' => 0 , 'face' =>  0, 'heel' => 0, 'nbr'=>1),
	6 => array( 'card_name' => "Offer Hand Shake",	'card_type_arg' =>  5, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'face' =>  2, 'heel' => 0, 'nbr'=>1),
	7 => array( 'card_name' => "Show Mercy",		'card_type_arg' =>  6, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'face' =>  1, 'heel' => 0, 'nbr'=>1),
	8 => array( 'card_name' => "Abdominal Stretch",	'card_type_arg' =>  7, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 2 , 'face' =>  0, 'heel' => 0, 'nbr'=>1),
	9 => array( 'card_name' => "Arm Bar",			'card_type_arg' =>  8, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 1 , 'face' =>  0, 'heel' => 0, 'nbr'=>1),
	10 => array( 'card_name' => "Hidden Chokehold" ,'card_type_arg' =>  9, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 1 , 'face' =>  0, 'heel' => 1, 'nbr'=>1),
	11 => array( 'card_name' => "Test of Strength",	'card_type_arg' =>  10, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 1 , 'face' =>  1, 'heel' => 0, 'nbr'=>1),
	12 => array( 'card_name' => "Head Scissors",	'card_type_arg' =>  11, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 1 , 'face' =>  0, 'heel' => 0, 'nbr'=>1),
	13 => array( 'card_name' => "Beg for Mercy",	'card_type_arg' =>  12, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'face' =>  0, 'heel' => 1, 'nbr'=>1),
	14 => array( 'card_name' => "Eye Poke",			'card_type_arg' =>  13, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'face' =>  0, 'heel' => 2, 'nbr'=>1),
	15 => array( 'card_name' => "Arm Drag",			'card_type_arg' =>  14, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 1, 'hold' => 0 , 'face' =>  0, 'heel' => 0, 'nbr'=>1),
	16 => array( 'card_name' => "Bulldog",			'card_type_arg' =>  15, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 2, 'hold' => 0 , 'face' =>  0, 'heel' => 0, 'nbr'=>1),
	17 => array( 'card_name' => "Hip Toss",			'card_type_arg' =>  16, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 1, 'hold' => 0 , 'face' =>  0, 'heel' => 0, 'nbr'=>1),
	18 => array( 'card_name' => "Gut Buster",		'card_type_arg' =>  17, 'card_type' =>'Throw',		'strike' => 1, 'xthrow' => 1, 'hold' => 0 , 'face' =>  0, 'heel' => 0, 'nbr'=>1),
	19 => array( 'card_name' => "Neck Breaker",		'card_type_arg' =>  18, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 1, 'hold' => 1 , 'face' =>  0, 'heel' => 0, 'nbr'=>1)            
              
);

$this->gen1_advanced_moves = array(
    1 => array( 'card_name' => "Drop Kick" ,			'card_type_arg' =>  0, 'card_type' =>'Strike', 		'strike' => 3, 'xthrow' => 0, 'hold' => 0 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>3,'reqThrow' =>-99,'reqHold' =>-99,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	2 => array( 'card_name' => "Flying Head Scissors" ,	'card_type_arg' =>  1, 'card_type' =>'Strike',		'strike' => 2, 'xthrow' => 0, 'hold' => 2 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>2,'reqThrow' =>-99,'reqHold' =>1,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	3 => array( 'card_name' => "Karate Kick" ,			'card_type_arg' =>  2, 'card_type' =>'Strike',		'strike' => 4, 'xthrow' => 0, 'hold' => 0 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>4,'reqThrow' =>-99,'reqHold' =>-99,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	4 => array( 'card_name' => "Elbow Smash",			'card_type_arg' =>  3, 'card_type' =>'Strike',		'strike' => 2, 'xthrow' => 0, 'hold' => 0 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>1,'reqThrow' =>-99,'reqHold' =>-99,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	5 => array( 'card_name' => "The Legdrop",			'card_type_arg' =>  4, 'card_type' =>'Strike',		'strike' => 2, 'xthrow' => 0, 'hold' => 2 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>1,'reqThrow' =>-99,'reqHold' =>2,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	6 => array( 'card_name' => "Salt in the Eyes",		'card_type_arg' =>  5, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'face' =>  0, 'heel' => 2, 'reqType'=>'value', 'reqStrike' =>-99,'reqThrow' =>-99,'reqHold' =>-99,'reqFace' =>  -99, 'reqHeel' => 2, 'nbr'=>1),
	7 => array( 'card_name' => "Hair pull",				'card_type_arg' =>  6, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 2 , 'face' =>  0, 'heel' => 1, 'reqType'=>'value', 'reqStrike' =>-99,'reqThrow' =>-99,'reqHold' =>1,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	8 => array( 'card_name' => "Backbreaker",			'card_type_arg' =>  7, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 2, 'hold' => 0 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>-99,'reqThrow' =>2,'reqHold' =>-99,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	9 => array( 'card_name' => "Shoulder breaker",		'card_type_arg' =>  8, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 2, 'hold' => 1 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>-99,'reqThrow' =>1,'reqHold' =>1,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	10 => array( 'card_name' => "Armbreaker" ,			'card_type_arg' =>  9, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 2, 'hold' => 2 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>-99,'reqThrow' =>-99,'reqHold' =>2,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	11 => array( 'card_name' => "Arm Drag",				'card_type_arg' =>  10, 'card_type' =>'Throw',		'strike' => 2, 'xthrow' => 2, 'hold' => 0 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>3,'reqThrow' =>-99,'reqHold' =>-99,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	12 => array( 'card_name' => "Atomic Drop",			'card_type_arg' =>  11, 'card_type' =>'Throw',		'strike' => 0, 'xthrow' => 2, 'hold' => 1 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>-99,'reqThrow' =>-99,'reqHold' =>1,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	13 => array( 'card_name' => "Authority Figure",		'card_type_arg' =>  12, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'face' =>  3, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>1,'reqThrow' =>1,'reqHold' =>1,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	14 => array( 'card_name' => "Longshot",				'card_type_arg' =>  13, 'card_type' =>'Alignment',	'strike' => 0, 'xthrow' => 0, 'hold' => 0 , 'face' =>  4, 'heel' => 0, 'reqType'=>'lowestTotal', 'reqStrike' =>-99,'reqThrow' =>-99,'reqHold' =>-99,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	15 => array( 'card_name' => "Indian Death Lock",	'card_type_arg' =>  14, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 3 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>-99,'reqThrow' =>-99,'reqHold' =>2,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	16 => array( 'card_name' => "Front Facelock",		'card_type_arg' =>  15, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 1, 'hold' => 2 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>-99,'reqThrow' =>-99,'reqHold' =>1,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	17 => array( 'card_name' => "Figure-four Armlock",	'card_type_arg' =>  16, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 3 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>-99,'reqThrow' =>-99,'reqHold' =>2,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	18 => array( 'card_name' => "Chickenwing",			'card_type_arg' =>  17, 'card_type' =>'Hold',		'strike' => 0, 'xthrow' => 0, 'hold' => 4 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>-99,'reqThrow' =>-99,'reqHold' =>3,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1),
	19 => array( 'card_name' => "Ankle Lock",			'card_type_arg' =>  18, 'card_type' =>'Hold',		'strike' => 1, 'xthrow' => 0, 'hold' => 2 , 'face' =>  0, 'heel' => 0, 'reqType'=>'value', 'reqStrike' =>-99,'reqThrow' =>-99,'reqHold' =>1,'reqFace' =>  -99, 'reqHeel' => -99, 'nbr'=>1)            
              
);

$this->gen1_setup_moves = array(
	1 => array ( 'card_name' => "Firemans Carry", 					'card_type_arg' => 0, 'card_type' =>'Throw',			'power' => 2,'reqValue'=>5, 'nbr'=>1),
	2 => array ( 'card_name' => "Irish whip", 						'card_type_arg' => 1, 'card_type' =>'Throw',			'power' => 2,'reqValue'=>5, 'nbr'=>1),
	3 => array ( 'card_name' => "Distraction", 						'card_type_arg' => 2, 'card_type' =>'Heel',				'power' => 2,'reqValue'=>5, 'nbr'=>1),
	4 => array ( 'card_name' => "Ref KO'd", 						'card_type_arg' => 3, 'card_type' =>'Heel',				'power' => 2,'reqValue'=>5, 'nbr'=>1),
	5 => array ( 'card_name' => "Throw into the corner turnbuckle", 'card_type_arg' => 4, 'card_type' =>'Strike',			'power' => 2,'reqValue'=>5, 'nbr'=>1),
	6 => array ( 'card_name' => "Great technical knowledge", 		'card_type_arg' => 5, 'card_type' =>'Hold',				'power' => 2,'reqValue'=>5, 'nbr'=>1),
	7 => array ( 'card_name' => "Heel Turn", 						'card_type_arg' => 6, 'card_type' =>'Heel',				'power' => 2,'reqValue'=>5, 'nbr'=>1),
	8 => array ( 'card_name' => "From the middle Turnbuckle", 		'card_type_arg' => 7, 'card_type' =>'Strike',			'power' => 2,'reqValue'=>5, 'nbr'=>1),
	9 => array ( 'card_name' => "From the top rope", 				'card_type_arg' => 8, 'card_type' =>'Strike',			'power' => 2,'reqValue'=>5, 'nbr'=>1),
	10 =>  array ( 'card_name' => "Focus on the joints", 			'card_type_arg' => 9, 'card_type' =>'Hold',				'power' => 2,'reqValue'=>5, 'nbr'=>1),
	11 =>  array ( 'card_name' => "Drain Stanima", 					'card_type_arg' => 10, 'card_type' =>'Hold',			'power' => 2,'reqValue'=>5, 'nbr'=>1),
	12 =>  array ( 'card_name' => "Pinning combination", 			'card_type_arg' => 11, 'card_type' =>'Hold',			'power' => 2,'reqValue'=>5, 'nbr'=>1),
	13 =>  array ( 'card_name' => "Suplex", 						'card_type_arg' => 12, 'card_type' =>'Throw',			'power' => 2,'reqValue'=>5, 'nbr'=>1),
	14 =>  array ( 'card_name' => "Crowd Favourate", 				'card_type_arg' => 13, 'card_type' =>'Face',			'power' => 2,'reqValue'=>5, 'nbr'=>1),
	15 =>  array ( 'card_name' => "Amazing show of Power", 			'card_type_arg' => 14, 'card_type' =>'Throw',			'power' => 2,'reqValue'=>5, 'nbr'=>1),
	16 =>  array ( 'card_name' => "Stunning Blow",	 				'card_type_arg' => 15, 'card_type' =>'Strike',			'power' => 2,'reqValue'=>5, 'nbr'=>1),
	17 =>  array ( 'card_name' => "Face Turn", 						'card_type_arg' => 16, 'card_type' =>'Face',			'power' => 2,'reqValue'=>5, 'nbr'=>1),
	
);

$this->gen1_finishers = array(
	1 => array ('card_name' =>'Sleeper Hold', 						'card_type_arg' => 0, 'card_type' =>	'Hold',			'multiplier1'=>'Hold', 'multiplier2'=>'Alignment'	,'pointScale'=>10, 'nbr'=>1),
	2 => array ('card_name' =>'Top Rope Knee Drop', 				'card_type_arg' => 1, 'card_type' =>	'Strike',		'multiplier1'=>'Strike', 'multiplier2'=>'Throw'	,'pointScale'=>10, 'nbr'=>1),
	3 => array ('card_name' =>'Giant swing', 						'card_type_arg' => 2, 'card_type' =>	'Throw',		'multiplier1'=>'Throw', 'multiplier2'=>'Hold'	,'pointScale'=>10, 'nbr'=>1),
	4 => array ('card_name' =>'Bear Hug	', 							'card_type_arg' => 3, 'card_type' =>	'Hold',			'multiplier1'=>'Hold', 'multiplier2'=>'Hold'	,'pointScale'=>5, 'nbr'=>1),
	5 => array ('card_name' =>'The Karate Chop', 					'card_type_arg' => 4, 'card_type' =>	'Strike',		'multiplier1'=>'Strike', 'multiplier2'=>'Strike'	,'pointScale'=>5, 'nbr'=>1),
	6 => array ('card_name' =>'Irish Cannonball', 					'card_type_arg' => 5, 'card_type' =>	'Strike',		'multiplier1'=>'Strike', 'multiplier2'=>'Throw'	,'pointScale'=>10, 'nbr'=>1),
	7 => array ('card_name' =>'The Piledriver', 					'card_type_arg' => 6, 'card_type' =>	'Throw',		'multiplier1'=>'Throw', 'multiplier2'=>'Hold'	,'pointScale'=>10, 'nbr'=>1),
	8 => array ('card_name' =>'Cobra Twist', 						'card_type_arg' => 7, 'card_type' =>	'Hold',			'multiplier1'=>'Hold', 'multiplier2'=>'Strike'	,'pointScale'=>10, 'nbr'=>1),
	9 => array ('card_name' =>'Crossface Checkenwing', 				'card_type_arg' => 8, 'card_type' =>	'Hold',			'multiplier1'=>'Hold', 'multiplier2'=>'Alignment'	,'pointScale'=>10, 'nbr'=>1),
	10 => array ('card_name' =>'The Powerslam', 					'card_type_arg' => 9, 'card_type' =>	'Throw',		'multiplier1'=>'Throw', 'multiplier2'=>'Throw'	,'pointScale'=>5, 'nbr'=>1),
	11 => array ('card_name' =>'Running Clothesline', 				'card_type_arg' => 10, 'card_type' =>	'Strike',		'multiplier1'=>'Strike', 'multiplier2'=>'Throw'	,'pointScale'=>10, 'nbr'=>1),
	12 => array ('card_name' =>'Flying Headlock', 					'card_type_arg' => 11, 'card_type' =>	'Throw',		'multiplier1'=>'Throw', 'multiplier2'=>'Strike'	,'pointScale'=>10, 'nbr'=>1)
		
);



$this->events= array(

	1=> array( 'card_name' => "Slobbernocker" ,			'card_type_arg' =>	0, 'card_type' =>'Event',		'attribute' =>'strike', 	'multiplier'=>2, 'nbr'=>1, 'text'=>'Your Strike value is doubled'),
	2=> array( 'card_name' => "Slamfest" ,				'card_type_arg' =>	1, 'card_type' =>'Event',		'attribute' =>'throw', 		'multiplier'=>2, 'nbr'=>1, 'text'=>'Your Throw value is doubled'),
	3=> array( 'card_name' => "Submission Match" ,		'card_type_arg' =>	2, 'card_type' =>'Event',		'attribute' =>'hold', 		'multiplier'=>2, 'nbr'=>1, 'text'=>'Your Hold value is doubled'),
	4=> array( 'card_name' => "Crowd Favouites" ,		'card_type_arg' =>	3, 'card_type' =>'Event',		'attribute' =>'face', 		'multiplier'=>2, 'nbr'=>1, 'text'=>'Your Face value is doubled'),
	5=> array( 'card_name' => "Outside Interferance" ,	'card_type_arg' =>	4, 'card_type' =>'Event',		'attribute' =>'heel', 		'multiplier'=>2, 'nbr'=>1, 'text'=>'Your Heel value is doubled')
);
