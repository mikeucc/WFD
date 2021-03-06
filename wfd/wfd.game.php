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
  * wfd.game.php
  *
  * This is the main file for your game logic.
  *
  * In this PHP file, you are going to defines the rules of the game.
  *
  */


require_once( APP_GAMEMODULE_PATH.'module/table/table.game.php' );


class WFD extends Table
{
	function __construct( )
	{
        // Your global variables labels:
        //  Here, you can assign labels to global variables you are using for this game.
        //  You can use any number of global variables with IDs between 10 and 99.
        //  If your game has options (variants), you also have to associate here a label to
        //  the corresponding ID in gameoptions.inc.php.
        // Note: afterwards, you can get/set the global variables with getGameStateValue/setGameStateInitialValue/setGameStateValue
        parent::__construct();
        
        self::initGameStateLabels( array( 
            //    "my_first_global_variable" => 10,
            //    "my_second_global_variable" => 11,
            //      ...
            //    "my_first_game_variant" => 100,
            //    "my_second_game_variant" => 101,
            //      ...
			
			"cardsDrafted" => 10
        ) );
		$this->cards = self::getNew( "module.common.deck" );
        $this->cards->init( "deck" );
		
		$this->advancedCards = self::getNew( "module.common.deck" );
		$this->advancedCards->init( "advancedDeck" );
		
		
	}
	
    protected function getGameName( )
    {
		// Used for translations and stuff. Please do not modify.
        return "wfd";
    }	

    /*
        setupNewGame:
        
        This method is called only once, when a new game is launched.
        In this method, you must setup the game according to the game rules, so that
        the game is ready to be played.
    */
    protected function setupNewGame( $players, $options = array() )
    {    
        // Set the colors of the players with HTML color code
        // The default below is red/green/blue/orange/brown
        // The number of colors defined here must correspond to the maximum number of players allowed for the gams
        $gameinfos = self::getGameinfos();
        $default_colors = $gameinfos['player_colors'];
 
        // Create players
        // Note: if you added some extra field on "player" table in the database (dbmodel.sql), you can initialize it there.
        $sql = "INSERT INTO player (player_id, player_color, player_canal, player_name, player_avatar) VALUES ";
        $values = array();
        foreach( $players as $player_id => $player )
        {
            $color = array_shift( $default_colors );
            $values[] = "('".$player_id."','$color','".$player['player_canal']."','".addslashes( $player['player_name'] )."','".addslashes( $player['player_avatar'] )."')";
        }
        $sql .= implode( $values, ',' );
        self::DbQuery( $sql );
        self::reattributeColorsBasedOnPreferences( $players, $gameinfos['player_colors'] );
        self::reloadPlayersBasicInfos();
        
        /************ Start the game initialization *****/

        // Init global values with their initial values
        //self::setGameStateInitialValue( 'my_first_global_variable', 0 );
		
		self::setGameStateInitialValue( "cardsDrafted"     , 1 );
        
        // Init game statistics
        // (note: statistics used in this file must be defined in your stats.inc.php file)
        //self::initStat( 'table', 'table_teststat1', 0 );    // Init a table statistics
        //self::initStat( 'player', 'player_teststat1', 0 );  // Init a player statistics (for all players)

        // TODO: setup the initial game situation here
		
		
		
		$cards = array();
        foreach ($this->gen1_basic_moves as $card) {
            $cards[] = array('type' => $card["card_name"], 'type_arg' => $card["card_type_arg"], 'nbr' => 1);
        }
        $this->cards->createCards( $cards, 'deck' );
		
		
		
		$cards = array();
        foreach ($this->gen1_advanced_moves as $card) {
            $cards[] = array('type' => $card["card_name"], 'type_arg' => $card["card_type_arg"], 'nbr' => 1);
        }
        $this->advancedCards->createCards( $cards, 'advancedDeck' );
        
		
        // Activate first player (which is in general a good idea :) )
        $this->activeNextPlayer();

        /************ End of the game initialization *****/
    }

    /*
        getAllDatas: 
        
        Gather all informations about current game situation (visible by the current player).
        
        The method is called each time the game interface is displayed to a player, ie:
        _ when the game starts
        _ when a player refreshes the game page (F5)
    */
    protected function getAllDatas()
    {
        $result = array();
    
        $current_player_id = self::getCurrentPlayerId();    // !! We must only return informations visible by this player !!
    
        // Get information about players
        // Note: you can retrieve some extra field you added for "player" table in "dbmodel.sql" if you need it.
        $sql = "SELECT player_id id, player_score score,strike str, throw trw,hold hld,alignment alg FROM player ";
        $result['players'] = self::getCollectionFromDb( $sql );
  
        // TODO: Gather all information about current game situation (visible by player $current_player_id).
				
		// Cards in player hand
        $result['hand'] = $this->cards->getCardsInLocation( 'hand', $current_player_id );
        
		
		$players = self::loadPlayersBasicInfos();
        foreach ( $players as $player_id => $player ) 
		{
			$result['cardsontable_'.$player_id] = $this->cards->getCardsInLocation( 'cardsontable_'.$player_id );   
        }
        // Cards played on the table
			
		$result['advancedMoves']=$this->advancedCards->getCardsInLocation('advancedMoves');
					
        return $result;
    }

    /*
        getGameProgression:
        
        Compute and return the current game progression.
        The number returned must be an integer beween 0 (=the game just started) and
        100 (= the game is finished or almost finished).
    
        This method is called each time we are in a game state with the "updateGameProgression" property set to true 
        (see states.inc.php)
    */
    function getGameProgression()
    {
        // TODO: compute and return the game progression

        return 0;
    }


//////////////////////////////////////////////////////////////////////////////
//////////// Utility functions
////////////    

    /*
        In this space, you can put any utility methods useful for your game logic
    */
	function getCardsAvailable()
		{
			return $this->gen1_basic_moves;
		}
		
	function getAdvancedCardsAvailable()
		{
			return $this->gen1_advanced_moves;
		}
		
	function nextPlayer($currentPlayer)
	{
		
		$sql = "SELECT player_no num FROM player where player_id=$currentPlayer";
        //$playersIds = self::getObjectListFromDB( $sql );
		$playerNum = self::getUniqueValueFromDB( $sql );
		
		$playerNum++;
		
		if($playerNum>$this->getPlayersNumber())
		{
			$playerNum=1;
			$sql = "SELECT player_id id FROM player where player_no=$playerNum";
			return self::getUniqueValueFromDB( $sql );
		}
		else
		{
			$sql = "SELECT player_id id FROM player where player_no=$playerNum";
			return self::getUniqueValueFromDB( $sql );
		}
	}
			
		
	

	function getPlayers()
    {
        $playersIds = array();
		$sql = "SELECT player_id id, player_name playerName , player_color playerColor FROM player";
        //$playersIds = self::getObjectListFromDB( $sql );
		$playersIds = self::getCollectionFromDB( $sql );	
		return $playersIds;
    }
	
	function updatePlayerStats ( $playerId , $card_id )
    {
		
		
		$sql = "SELECT card_type_arg crdargs FROM deck WHERE card_id=$card_id";
		$card_args=self::getUniqueValueFromDB( $sql );
		
		$playersStats = array();
		$sql = "SELECT strike str, throw trw,hold hld,alignment alg FROM player WHERE player_id=$playerId";
        $playersStats = self::getObjectFromDB( $sql );
		//$playerStats = self::getUniqueValueFromDB( $sql );
		
		$str=$playersStats['str'];
		$trw=$playersStats['trw'];
		$hld=$playersStats['hld'];
		$alg=$playersStats['alg'];
		
		//'strike' => 1, 'xthrow' => 0, 'hold' => 0 , 'alignment' =>  0
		$cards = $this->getCardsAvailable();
		foreach ($cards as $card) {
            if ($card['card_type_arg']==$card_args)
			{
				$str+=$card['strike'];
				$trw+=$card['xthrow'];
				$hld+=$card['hold'];
				$alg+=$card['alignment'];
				
			}
        }
		
		
		$sql = "UPDATE player SET strike=$str,throw=$trw,hold=$hld,alignment=$alg WHERE player_id=$playerId";
        self::DbQuery( $sql ); 
		
		// Notify all players about the card played
        self::notifyAllPlayers( 'playCard', clienttranslate( 'Card Played' ), array(
            "player_id" => $playerId,
            "card_id" => $card_id,
			"card_args" => $card_args) );
			
			
			
		
		
    }

//////////////////////////////////////////////////////////////////////////////
//////////// Player actions
//////////// 

    /*
        Each time a player is doing some game action, one of the methods below is called.
        (note: each method below must match an input method in wfd.action.php)
    */

    
	
	function playCard( $card_id )
    {
        // Check that this is the player's turn and that it is a "possible action" at this game state (see states.inc.php)
        
        
		$this->checkAction('playCard');
		$sql = "SELECT card_location_arg loc FROM deck WHERE card_id=$card_id";
		$player_id=self::getUniqueValueFromDB( $sql );
		
		
		$this->cards->moveCard($card_id, 'cardsontable_'.$player_id, $player_id);
		 
        // Add your game logic to play a card there 
        
        
		$this->updatePlayerStats ( $player_id , $card_id );
		
		$this->gamestate->setPlayerNonMultiactive($player_id, 'loopback'); // deactivate player; if none left, transition to 'next' state
          
		//the updatePlayerStats send the notification to the JS
    }
	
	
    
//////////////////////////////////////////////////////////////////////////////
//////////// Game state arguments
////////////

    /*
        Here, you can create methods defined as "game state arguments" (see "args" property in states.inc.php).
        These methods function is to return some additional information that is specific to the current
        game state.
    */

    
	
	function argScores()
    {
		$result = array( 'players' => array() );
   
        $sql = "SELECT player_id id, strike str,hold hld,throw trw,alignment alg from player ";
		
        $result['players'] = self::getCollectionFromDb( $sql ); //fields of all players are visible 
		
		return array(
            'argScores' => $result
        );
    }
	
	function argDraftPicks()
	{
		$result = array( 'cardsDrafted' => self::getGameStateValue('cardsDrafted') );
		
		return array(
            'argDraftPicks' => $result
        );
	}
	
	

//////////////////////////////////////////////////////////////////////////////
//////////// Game state actions
////////////

    /*
        Here, you can create methods defined as "game state actions" (see "action" property in states.inc.php).
        The action method of state X is called everytime the current game state is set to X.
    */
    
    /*
    
    Example for game state "MyGameState":

    function stMyGameState()
    {
        // Do some stuff ...
        
        // (very often) go to another gamestate
        $this->gamestate->nextState( 'some_gamestate_transition' );
    }    
    */
	
	// this will make all players multiactive just before entering the state
   function st_MultiPlayerInit() 
   {
       $this->gamestate->setAllPlayersMultiactive();
   }
	
	
	
	function stNewHand()
	{
		//shuffle 
		$this->cards->moveAllCardsInLocation(null, "deck");
        $this->cards->shuffle( 'deck' );
		
		$this->advancedCards->moveAllCardsInLocation(null, "deck");
        $this->advancedCards->shuffle( 'advancedDeck' );
		
		$advCards=$this->advancedCards->pickCardsForLocation(6,'deck','advancedMoves',0,false);
	   
	   
	    // Deal 4 cards to each players
        $players = self::loadPlayersBasicInfos();
        foreach ( $players as $player_id => $player ) {
            $cards = $this->cards->pickCards(5, 'deck', $player_id);
			self::notifyPlayer($player_id, 'newHand', '', array ('cards' => $cards,
																 'advancedCards'=>$advCards ));
        }
		
		$this->gamestate->nextState("");
		
		
	}
	
   
	function stUpdateStats()
    {
	   
	   //setGameStateInitialValue( $value_label, $value_value )

		//Initialize your global value. Must be called before any use of your global, so you should call this method from your "setupNewGame" method.

		//getGameStateValue( $value_label )

		//Retrieve the current value of a global.
		
		$updateValue=self::getGameStateValue('cardsDrafted');
		$updateValue++;
	   
	   self::setGameStateInitialValue( 'cardsDrafted', $updateValue);
	   
	   
	   if($updateValue>4)
	   {
		   self::notifyAllPlayers( 'consoleOutput',"" , $updateValue.' Cards Drafted ha ha');
		   $this->gamestate->nextState("FinalScore");
		   
	   }
	   else
	   {
	   
	   
		   $result = array();
		   $updates =array();
		   
		   $players = self::loadPlayersBasicInfos();
		   
		   foreach ( $players as $player_id => $player )
		   {   
			$sql = "SELECT card_id id, card_location_arg owner from deck where card_location_arg=$player_id and card_location='hand'";
			$result[$player_id] = self::getCollectionFromDb( $sql ); 
		   }
		   
		   
		   foreach ( $result as $player_id => $cards )
		   {
			   
			   //$message="Update card set card_location_arg="+$player_id+" where card_id="+$result[$player_id];
			   
			   foreach ($cards as $card_id=>$card)
			   {
				   
				   $nextPlayerId=$this->nextPlayer($player_id);
				   $message="Update deck set card_location_arg=$nextPlayerId where card_id=".$card_id;
				   array_push($updates,$message);
				   
			   }
			   
			   
			  
			  
		   }
		   self::notifyAllPlayers( 'consoleOutput',"" , 'Update scripts');
		   
		   
			  
		   
		   foreach($updates as $sql)
		   {
			   $this->DbQuery( $sql );
		   }
		   
		   
		   foreach ( $players as $player_id => $player )
		   {   
					
			$result['cards'] = $this->cards->getCardsInLocation( 'hand', $player_id );
			self::notifyPlayer($player_id, 'newHand', '',$result );
		   } 
		   
		   self::notifyAllPlayers( 'consoleOutput',"" , 'PHP State transition to draftCard');
		   $this->gamestate->nextState("draftCard");
	   }
    }
	
	function stGameEndScoring()
	{
		$newScores = self::getCollectionFromDb("SELECT player_id, player_score FROM player", true );
        self::notifyAllPlayers( "newScores", '', array( 'newScores' => $newScores ) );
		$this->gamestate->nextState("");
		
	}

//////////////////////////////////////////////////////////////////////////////
//////////// Zombie
////////////

    /*
        zombieTurn:
        
        This method is called each time it is the turn of a player who has quit the game (= "zombie" player).
        You can do whatever you want in order to make sure the turn of this player ends appropriately
        (ex: pass).
        
        Important: your zombie code will be called when the player leaves the game. This action is triggered
        from the main site and propagated to the gameserver from a server, not from a browser.
        As a consequence, there is no current player associated to this action. In your zombieTurn function,
        you must _never_ use getCurrentPlayerId() or getCurrentPlayerName(), otherwise it will fail with a "Not logged" error message. 
    */

    function zombieTurn( $state, $active_player )
    {
    	$statename = $state['name'];
    	
        if ($state['type'] === "activeplayer") {
            switch ($statename) {
                default:
                    $this->gamestate->nextState( "zombiePass" );
                	break;
            }

            return;
        }

        if ($state['type'] === "multipleactiveplayer") {
            // Make sure player is in a non blocking status for role turn
            $this->gamestate->setPlayerNonMultiactive( $active_player, '' );
            
            return;
        }

        throw new feException( "Zombie mode not supported at this game state: ".$statename );
    }
    
///////////////////////////////////////////////////////////////////////////////////:
////////// DB upgrade
//////////

    /*
        upgradeTableDb:
        
        You don't have to care about this until your game has been published on BGA.
        Once your game is on BGA, this method is called everytime the system detects a game running with your old
        Database scheme.
        In this case, if you change your Database scheme, you just have to apply the needed changes in order to
        update the game database and allow the game to continue to run with your new version.
    
    */
    
    function upgradeTableDb( $from_version )
    {
        // $from_version is the current version of this game database, in numerical form.
        // For example, if the game was running with a release of your game named "140430-1345",
        // $from_version is equal to 1404301345
        
        // Example:
//        if( $from_version <= 1404301345 )
//        {
//            // ! important ! Use DBPREFIX_<table_name> for all tables
//
//            $sql = "ALTER TABLE DBPREFIX_xxxxxxx ....";
//            self::applyDbUpgradeToAllDB( $sql );
//        }
//        if( $from_version <= 1405061421 )
//        {
//            // ! important ! Use DBPREFIX_<table_name> for all tables
//
//            $sql = "CREATE TABLE DBPREFIX_xxxxxxx ....";
//            self::applyDbUpgradeToAllDB( $sql );
//        }
//        // Please add your future database scheme changes here
//
//


    }    
}
