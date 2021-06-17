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
 * states.inc.php
 *
 * WFD game states description
 *
 */

/*
   Game state machine is a tool used to facilitate game developpement by doing common stuff that can be set up
   in a very easy way from this configuration file.

   Please check the BGA Studio presentation about game state to understand this, and associated documentation.

   Summary:

   States types:
   _ activeplayer: in this type of state, we expect some action from the active player.
   _ multipleactiveplayer: in this type of state, we expect some action from multiple players (the active players)
   _ game: this is an intermediary state where we don't expect any actions from players. Your game logic must decide what is the next game state.
   _ manager: special type for initial and final state

   Arguments of game states:
   _ name: the name of the GameState, in order you can recognize it on your own code.
   _ description: the description of the current game state is always displayed in the action status bar on
                  the top of the game. Most of the time this is useless for game state with "game" type.
   _ descriptionmyturn: the description of the current game state when it's your turn.
   _ type: defines the type of game states (activeplayer / multipleactiveplayer / game / manager)
   _ action: name of the method to call when this game state become the current game state. Usually, the
             action method is prefixed by "st" (ex: "stMyGameStateName").
   _ possibleactions: array that specify possible player actions on this step. It allows you to use "checkAction"
                      method on both client side (Javacript: this.checkAction) and server side (PHP: self::checkAction).
   _ transitions: the transitions are the possible paths to go from a game state to another. You must name
                  transitions in order to use transition names in "nextState" PHP method, and use IDs to
                  specify the next game state for each transition.
   _ args: name of the method to call to retrieve arguments for this gamestate. Arguments are sent to the
           client side to be used on "onEnteringState" or to set arguments in the gamestate description.
   _ updateGameProgression: when specified, the game progression is updated (=> call to your getGameProgression
                            method).
*/

//    !! It is not a good idea to modify this file when a game is running !!

 
$machinestates = array(

    // The initial state. Please do not modify.
    1 => array(
        "name" => "gameSetup",
        "description" => "",
        "type" => "manager",
        "action" => "stGameSetup",
        "transitions" => array( "" => 2 )
    ),
    
    // Note: ID=2 => your first state


	2 => array(
        "name" => "newHand",
        "description" => "",
        "type" => "game",
        "action" => "stNewHand",
        "updateGameProgression" => true,   
        "transitions" => array( "" => 3)
    ),    

     3 =>  array (
		   'name' => 'draftCard',
		   'type' => 'multipleactiveplayer',
		   'description' => clienttranslate('Other players must choose one Basic Move'),
		   'descriptionmyturn' => clienttranslate('${you} must choose one Basic Move '),
		   'args' => 'argDraftPicks',
		   'possibleactions' =>     array ('playCard' ),
		   'transitions' =>    array (       'loopback' => 4 ),
		   'action' => 'st_MultiPlayerInit'
	),
	
	
	4 => array(
	   "description" => clienttranslate('Update Stats'),
        "name" => "gameUpdateStats",
        "type" => "game",
		'args' => 'argScores',
        "action" => "stUpdateStats",
        "updateGameProgression" => true,
        "transitions" => array( "draftCard" => 3, "phaseEvent"=>30)
    ),
	
	
	30 => array(
	   "description" => clienttranslate('Phase Event'),
        "name" => "phaseEvent",
        "type" => "game",
		'args' => 'argScores',
        "action" => "stPhaseEvent",
        "updateGameProgression" => true,
        "transitions" => array( "" => 31 )
    ),
	
	
	31 => array(
        "name" => "playerTurn",
        "description" => clienttranslate('${actplayer} must pick an Advanced Move or increase a stat'),
        "descriptionmyturn" => clienttranslate('${you} must pick an Advanced Move or increase a stat'),
        "type" => "activeplayer",
		'args' => 'argScoresDraft',
        "possibleactions" => array( "pickCard","increaseStat" ),
        "transitions" => array( "pickCard" => 32 )
    ), 
	
	
	32 => array(
        "name" => "checkEndOfPhase",
        "description" => "",
        "type" => "game",
		'args' => 'argScores',
        "action" => "stCheckEndOfAdvancedMovePhase",
        "transitions" => array( "nextPlayer" => 31, "setupMovePhase" => 33 )
    ), 
	
	
    33 => array(
        "name" => "playerTurnPickSetup",
        "description" => clienttranslate('${actplayer} must pick a Setup card or increase a power stat/stat'),
        "descriptionmyturn" => clienttranslate('${you} must pick a Setup card or increase a power stat/stat'),
        "type" => "activeplayer",
		'args' => 'argScoresDraft',
        "possibleactions" => array( "pickSetupCard", "increasePowerStat"),
        "transitions" => array( "checkEndOfSetupPhase" => 34 )
    ),
	
	34 => array(
        "name" => "checkEndOfSetupPhase",
        "description" => "",
        "type" => "game",
		'args' => 'argScores',
        "action" => "stCheckEndOfSetupMovePhase",
        "transitions" => array( "playerTurnPickSetup" => 33, "playerTurnPickFinisher" => 35 )
    ), 
	
	35 => array(
        "name" => "playerTurnPickFinisher",
        "description" => clienttranslate('${actplayer} must pick a Finisher card'),
        "descriptionmyturn" => clienttranslate('${you} must pick a Finisher card'),
        "type" => "activeplayer",
		'args' => 'argScoresDraft',
        "possibleactions" => array( "pickFinisherCard"),
        "transitions" => array( "checkEndOfFinisherPhase" => 36 )
    ),
	
	36 => array(
        "name" => "checkEndOfFinisherPhase",
        "description" => "",
        "type" => "game",
		'args' => 'argScores',
        "action" => "stCheckEndOfFinisherMovePhase",
        "transitions" => array( "playerTurnPickFinisher" => 35, "roundScore" => 80 )
    ), 
	 
	80 => array(
	   "description" => clienttranslate('Round Score'),
        "name" => "gameRoundScoring",
        "type" => "game",
        "action" => "stRoundEndScoring",
        "updateGameProgression" => true,
        "transitions" => array( "newHand" => 2, "gameEnd" => 99 )
    ),
	 
	
	
	
/*
    Examples:
    
    2 => array(
        "name" => "nextPlayer",
        "description" => '',
        "type" => "game",
        "action" => "stNextPlayer",
        "updateGameProgression" => true,   
        "transitions" => array( "endGame" => 99, "nextPlayer" => 10 )
    ),
    
    10 => array(
        "name" => "playerTurn",
        "description" => clienttranslate('${actplayer} must play a card or pass'),
        "descriptionmyturn" => clienttranslate('${you} must play a card or pass'),
        "type" => "activeplayer",
        "possibleactions" => array( "playCard", "pass" ),
        "transitions" => array( "playCard" => 2, "pass" => 2 )
    ), 

*/    
   
    // Final state.
    // Please do not modify (and do not overload action/args methods).
    99 => array(
        "name" => "gameEnd",
        "description" => clienttranslate("End of game"),
        "type" => "manager",
        "action" => "stGameEnd",
        "args" => "argGameEnd"
    )

);



