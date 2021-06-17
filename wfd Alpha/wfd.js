/**
 *------
 * BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
 * WFD implementation : © <Your name here> <Your email address here>
 *
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * wfd.js
 *
 * WFD user interface script
 * 
 * In this file, you are describing the logic of your user interface, in Javascript language.
 *
 */

define([
    "dojo","dojo/_base/declare",
    "ebg/core/gamegui",
    "ebg/counter",
	"ebg/stock"
],
function (dojo, declare) {
    return declare("bgagame.wfd", ebg.core.gamegui, {
        constructor: function(){
            console.log('wfd constructor');
              
            // Here, you can init the global variables of your user interface
            // Example:
            // this.myGlobalValue = 0;
            this.cardwidth = 160;
            this.cardheight = 225;
			this.draftCardSelected=1;
			this.myHand;
			this.player_ids;
			this.basicPlayerBoards=[];
			this.advancedPlayerBoards=[];
			this.setupPlayerBoards=[];
			this.finisherPlayerBoards=[];
			this.setupMoveStock=[];
			this.legalCards=[];
			

        },
        
        /*
            setup:
            
            This method must set up the game user interface according to current game situation specified
            in parameters.
            
            The method is called each time the game interface is displayed to a player, ie:
            _ when the game starts
            _ when a player refreshes the game page (F5)
            
            "gamedatas" argument contains all datas retrieved by your "getAllDatas" PHP method.
        */
        
        setup: function( gamedatas )
        {
            console.log( "Starting game setup" );
			
			this.cardsAvailable = gamedatas.cardsAvailable;
			
            
            // Setting up player boards
            for( var player_id in gamedatas.players )
            {
                var player = gamedatas.players[player_id];
				console.log(player);
                         
                
				
				this.basicPlayerBoards.push(new ebg.stock());
				this.advancedPlayerBoards.push(new ebg.stock());
				this.setupPlayerBoards.push(new ebg.stock());
				this.finisherPlayerBoards.push(new ebg.stock());
				
				
				
			}
			
			
			
			for( var player_id in gamedatas.players )
            {
                
				
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].create(this, $('myBoard'+player_id), this.cardwidth, this.cardheight );
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].image_items_per_row = 7;
				
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(0, 1, g_gamethemeurl + 'img/Gen1Basic.jpg', 0);	
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(1, 2, g_gamethemeurl + 'img/Gen1Basic.jpg', 1);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(2, 3, g_gamethemeurl + 'img/Gen1Basic.jpg', 2);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(3, 4, g_gamethemeurl + 'img/Gen1Basic.jpg', 3);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(4, 5, g_gamethemeurl + 'img/Gen1Basic.jpg', 4);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(5, 6, g_gamethemeurl + 'img/Gen1Basic.jpg', 5);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(6, 7, g_gamethemeurl + 'img/Gen1Basic.jpg', 6);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(7, 8, g_gamethemeurl + 'img/Gen1Basic.jpg', 7);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(8, 9, g_gamethemeurl + 'img/Gen1Basic.jpg', 8);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(9, 10, g_gamethemeurl + 'img/Gen1Basic.jpg', 9);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(10, 11, g_gamethemeurl + 'img/Gen1Basic.jpg', 10);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(11, 12, g_gamethemeurl + 'img/Gen1Basic.jpg', 11);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(12, 13, g_gamethemeurl + 'img/Gen1Basic.jpg', 12);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(13, 14, g_gamethemeurl + 'img/Gen1Basic.jpg', 13);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(14, 15, g_gamethemeurl + 'img/Gen1Basic.jpg', 14);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(15, 16, g_gamethemeurl + 'img/Gen1Basic.jpg', 15);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(16, 17, g_gamethemeurl + 'img/Gen1Basic.jpg', 16);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(17, 18, g_gamethemeurl + 'img/Gen1Basic.jpg', 17);
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].addItemType(18, 19, g_gamethemeurl + 'img/Gen1Basic.jpg', 18);
				
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].create(this, $('myAdvancedBoard'+player_id), this.cardwidth, this.cardheight );
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].image_items_per_row = 7;
				
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(0, 1, g_gamethemeurl + 'img/Gen1Advanced.jpg', 0);	
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(1, 2, g_gamethemeurl + 'img/Gen1Advanced.jpg', 1);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(2, 3, g_gamethemeurl + 'img/Gen1Advanced.jpg', 2);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(3, 4, g_gamethemeurl + 'img/Gen1Advanced.jpg', 3);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(4, 5, g_gamethemeurl + 'img/Gen1Advanced.jpg', 4);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(5, 6, g_gamethemeurl + 'img/Gen1Advanced.jpg', 5);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(6, 7, g_gamethemeurl + 'img/Gen1Advanced.jpg', 6);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(7, 8, g_gamethemeurl + 'img/Gen1Advanced.jpg', 7);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(8, 9, g_gamethemeurl + 'img/Gen1Advanced.jpg', 8);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(9, 10, g_gamethemeurl + 'img/Gen1Advanced.jpg', 9);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(10, 11, g_gamethemeurl + 'img/Gen1Advanced.jpg', 10);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(11, 12, g_gamethemeurl + 'img/Gen1Advanced.jpg', 11);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(12, 13, g_gamethemeurl + 'img/Gen1Advanced.jpg', 12);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(13, 14, g_gamethemeurl + 'img/Gen1Advanced.jpg', 13);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(14, 15, g_gamethemeurl + 'img/Gen1Advanced.jpg', 14);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(15, 16, g_gamethemeurl + 'img/Gen1Advanced.jpg', 15);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(16, 17, g_gamethemeurl + 'img/Gen1Advanced.jpg', 16);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(17, 18, g_gamethemeurl + 'img/Gen1Advanced.jpg', 17);
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addItemType(18, 19, g_gamethemeurl + 'img/Gen1Advanced.jpg', 18);	
				
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].create(this, $('mySetupBoard'+player_id), this.cardwidth, this.cardheight );
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].image_items_per_row = 7;
				
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(0, 1, g_gamethemeurl + 'img/Gen1Setup.jpg', 0);	
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(1, 2, g_gamethemeurl + 'img/Gen1Setup.jpg', 1);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(2, 3, g_gamethemeurl + 'img/Gen1Setup.jpg', 2);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(3, 4, g_gamethemeurl + 'img/Gen1Setup.jpg', 3);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(4, 5, g_gamethemeurl + 'img/Gen1Setup.jpg', 4);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(5, 6, g_gamethemeurl + 'img/Gen1Setup.jpg', 5);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(6, 7, g_gamethemeurl + 'img/Gen1Setup.jpg', 6);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(7, 8, g_gamethemeurl + 'img/Gen1Setup.jpg', 7);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(8, 9, g_gamethemeurl + 'img/Gen1Setup.jpg', 8);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(9, 10, g_gamethemeurl + 'img/Gen1Setup.jpg', 9);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(10, 11, g_gamethemeurl + 'img/Gen1Setup.jpg', 10);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(11, 12, g_gamethemeurl + 'img/Gen1Setup.jpg', 11);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(12, 13, g_gamethemeurl + 'img/Gen1Setup.jpg', 12);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(13, 14, g_gamethemeurl + 'img/Gen1Setup.jpg', 13);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(14, 15, g_gamethemeurl + 'img/Gen1Setup.jpg', 14);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(15, 16, g_gamethemeurl + 'img/Gen1Setup.jpg', 15);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(16, 17, g_gamethemeurl + 'img/Gen1Setup.jpg', 16);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(17, 18, g_gamethemeurl + 'img/Gen1Setup.jpg', 17);
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].addItemType(18, 19, g_gamethemeurl + 'img/Gen1Setup.jpg', 18);	

				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].create(this, $('myFinisherBoard'+player_id), this.cardwidth, this.cardheight );
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].image_items_per_row = 7;
				
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(0, 1, g_gamethemeurl + 'img/Gen1Finisher.jpg', 0);	
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(1, 2, g_gamethemeurl + 'img/Gen1Finisher.jpg', 1);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(2, 3, g_gamethemeurl + 'img/Gen1Finisher.jpg', 2);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(3, 4, g_gamethemeurl + 'img/Gen1Finisher.jpg', 3);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(4, 5, g_gamethemeurl + 'img/Gen1Finisher.jpg', 4);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(5, 6, g_gamethemeurl + 'img/Gen1Finisher.jpg', 5);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(6, 7, g_gamethemeurl + 'img/Gen1Finisher.jpg', 6);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(7, 8, g_gamethemeurl + 'img/Gen1Finisher.jpg', 7);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(8, 9, g_gamethemeurl + 'img/Gen1Finisher.jpg', 8);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(9, 10, g_gamethemeurl + 'img/Gen1Finisher.jpg', 9);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(10, 11, g_gamethemeurl + 'img/Gen1Finisher.jpg', 10);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(11, 12, g_gamethemeurl + 'img/Gen1Finisher.jpg', 11);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(12, 13, g_gamethemeurl + 'img/Gen1Finisher.jpg', 12);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(13, 14, g_gamethemeurl + 'img/Gen1Finisher.jpg', 13);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(14, 15, g_gamethemeurl + 'img/Gen1Finisher.jpg', 14);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(15, 16, g_gamethemeurl + 'img/Gen1Finisher.jpg', 15);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(16, 17, g_gamethemeurl + 'img/Gen1Finisher.jpg', 16);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(17, 18, g_gamethemeurl + 'img/Gen1Finisher.jpg', 17);
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addItemType(18, 19, g_gamethemeurl + 'img/Gen1Finisher.jpg', 18);	
				
            }
			
			
			
			
			
			
			
			this.player_ids=gamedatas.players;
			
			
			
			
			
            
            // This will load the Basic moves (Which you get from the Hand draft phase
				// Player hand
				this.playerHand = new ebg.stock(); // new stock object for hand
				this.playerHand.create( this, $('myhand'), this.cardwidth, this.cardheight );
				
				this.playerHand.image_items_per_row = 7; // 7 images per row
				
				//type id, the weight of the card , the URL of our CSS sprite,position of our card image in the CSS sprite.
							
				this.playerHand.addItemType(0, 1, g_gamethemeurl + 'img/Gen1Basic.jpg', 0);	
				this.playerHand.addItemType(1, 2, g_gamethemeurl + 'img/Gen1Basic.jpg', 1);
				this.playerHand.addItemType(2, 3, g_gamethemeurl + 'img/Gen1Basic.jpg', 2);
				this.playerHand.addItemType(3, 4, g_gamethemeurl + 'img/Gen1Basic.jpg', 3);
				this.playerHand.addItemType(4, 5, g_gamethemeurl + 'img/Gen1Basic.jpg', 4);
				this.playerHand.addItemType(5, 6, g_gamethemeurl + 'img/Gen1Basic.jpg', 5);
				this.playerHand.addItemType(6, 7, g_gamethemeurl + 'img/Gen1Basic.jpg', 6);
				this.playerHand.addItemType(7, 8, g_gamethemeurl + 'img/Gen1Basic.jpg', 7);
				this.playerHand.addItemType(8, 9, g_gamethemeurl + 'img/Gen1Basic.jpg', 8);
				this.playerHand.addItemType(9, 10, g_gamethemeurl + 'img/Gen1Basic.jpg', 9);
				this.playerHand.addItemType(10, 11, g_gamethemeurl + 'img/Gen1Basic.jpg', 10);
				this.playerHand.addItemType(11, 12, g_gamethemeurl + 'img/Gen1Basic.jpg', 11);
				this.playerHand.addItemType(12, 13, g_gamethemeurl + 'img/Gen1Basic.jpg', 12);
				this.playerHand.addItemType(13, 14, g_gamethemeurl + 'img/Gen1Basic.jpg', 13);
				this.playerHand.addItemType(14, 15, g_gamethemeurl + 'img/Gen1Basic.jpg', 14);
				this.playerHand.addItemType(15, 16, g_gamethemeurl + 'img/Gen1Basic.jpg', 15);
				this.playerHand.addItemType(16, 17, g_gamethemeurl + 'img/Gen1Basic.jpg', 16);
				this.playerHand.addItemType(17, 18, g_gamethemeurl + 'img/Gen1Basic.jpg', 17);
				this.playerHand.addItemType(18, 19, g_gamethemeurl + 'img/Gen1Basic.jpg', 18);
				
				
				//Add cards to the player stock		
				for (var card_id in gamedatas.hand) {
					
					var card=gamedatas.hand[card_id];
                    
                    this.playerHand.addToStockWithId(card.type_arg, card.id);
					
                }
				//Call the function onPlayerHandSelectionChanged when a card is selected in hand
				dojo.connect( this.playerHand, 'onChangeSelection', this, 'onPlayerHandSelectionChanged' );
			
			
			
			
			
			//Play cards that to the table that have already been played
			for(var card_id in gamedatas.myBoard)
			{
				var card=gamedatas.myBoard[card_id];
				
				this.basicPlayerBoards[this.getPlayerIndex(card.location_arg)].addToStockWithId(card.type_arg, card.id);
			}
			
			//Play cards that to the table that have already been played(Advanced Moves)
			for(var card_id in gamedatas.myAdvancedBoard)
			{
				var card=gamedatas.myAdvancedBoard[card_id];
				
				this.advancedPlayerBoards[this.getPlayerIndex(card.location_arg)].addToStockWithId(card.type_arg, card.id);
			}
			
			console.log(gamedatas.mySetupBoard);
			for(var card_id in gamedatas.mySetupBoard)
			{
				var card=gamedatas.mySetupBoard[card_id];
				
				this.setupPlayerBoards[this.getPlayerIndex(card.location_arg)].addToStockWithId(card.type_arg, card.id);
			}
			
			for(var card_id in gamedatas.myFinisherBoard)
			{
				var card=gamedatas.myFinisherBoard[card_id];
				
				this.finisherPlayerBoards[this.getPlayerIndex(card.location_arg)].addToStockWithId(card.type_arg, card.id);
			}
			
			
			
            
			
			//This section is for the Advanced Moves
			
			this.advancedMoveStock = new ebg.stock(); // new stock object for hand
			this.advancedMoveStock.create( this, $('advancedMoves'), this.cardwidth, this.cardheight );
			this.advancedMoveStock.image_items_per_row = 7; // 7 images per row
			
			this.advancedMoveStock.addItemType(0, 1, g_gamethemeurl + 'img/Gen1Advanced.jpg', 0);	
			this.advancedMoveStock.addItemType(1, 2, g_gamethemeurl + 'img/Gen1Advanced.jpg', 1);
			this.advancedMoveStock.addItemType(2, 3, g_gamethemeurl + 'img/Gen1Advanced.jpg', 2);
			this.advancedMoveStock.addItemType(3, 4, g_gamethemeurl + 'img/Gen1Advanced.jpg', 3);
			this.advancedMoveStock.addItemType(4, 5, g_gamethemeurl + 'img/Gen1Advanced.jpg', 4);
			this.advancedMoveStock.addItemType(5, 6, g_gamethemeurl + 'img/Gen1Advanced.jpg', 5);
			this.advancedMoveStock.addItemType(6, 7, g_gamethemeurl + 'img/Gen1Advanced.jpg', 6);
			this.advancedMoveStock.addItemType(7, 8, g_gamethemeurl + 'img/Gen1Advanced.jpg', 7);
			this.advancedMoveStock.addItemType(8, 9, g_gamethemeurl + 'img/Gen1Advanced.jpg', 8);
			this.advancedMoveStock.addItemType(9, 10, g_gamethemeurl + 'img/Gen1Advanced.jpg', 9);
			this.advancedMoveStock.addItemType(10, 11, g_gamethemeurl + 'img/Gen1Advanced.jpg', 10);
			this.advancedMoveStock.addItemType(11, 12, g_gamethemeurl + 'img/Gen1Advanced.jpg', 11);
			this.advancedMoveStock.addItemType(12, 13, g_gamethemeurl + 'img/Gen1Advanced.jpg', 12);
			this.advancedMoveStock.addItemType(13, 14, g_gamethemeurl + 'img/Gen1Advanced.jpg', 13);
			this.advancedMoveStock.addItemType(14, 15, g_gamethemeurl + 'img/Gen1Advanced.jpg', 14);
			this.advancedMoveStock.addItemType(15, 16, g_gamethemeurl + 'img/Gen1Advanced.jpg', 15);
			this.advancedMoveStock.addItemType(16, 17, g_gamethemeurl + 'img/Gen1Advanced.jpg', 16);
			this.advancedMoveStock.addItemType(17, 18, g_gamethemeurl + 'img/Gen1Advanced.jpg', 17);
			this.advancedMoveStock.addItemType(18, 19, g_gamethemeurl + 'img/Gen1Advanced.jpg', 18);
			
			
			
			
			for( var card_id in gamedatas.advancedMoves )
            {
                
				var card=gamedatas.advancedMoves[card_id];
				
				this.advancedMoveStock.addToStockWithId(card.type_arg, card.id);       
                
            }
			
			this.setupMoveStock=new ebg.stock();
			this.setupMoveStock.create(this, $('setupMoves'), this.cardwidth, this.cardheight );
			this.setupMoveStock.image_items_per_row = 7;
			
			this.setupMoveStock.addItemType(0, 1, g_gamethemeurl + 'img/Gen1Setup.jpg', 0);	
			this.setupMoveStock.addItemType(1, 2, g_gamethemeurl + 'img/Gen1Setup.jpg', 1);
			this.setupMoveStock.addItemType(2, 3, g_gamethemeurl + 'img/Gen1Setup.jpg', 2);
			this.setupMoveStock.addItemType(3, 4, g_gamethemeurl + 'img/Gen1Setup.jpg', 3);
			this.setupMoveStock.addItemType(4, 5, g_gamethemeurl + 'img/Gen1Setup.jpg', 4);
			this.setupMoveStock.addItemType(5, 6, g_gamethemeurl + 'img/Gen1Setup.jpg', 5);
			this.setupMoveStock.addItemType(6, 7, g_gamethemeurl + 'img/Gen1Setup.jpg', 6);
			this.setupMoveStock.addItemType(7, 8, g_gamethemeurl + 'img/Gen1Setup.jpg', 7);
			this.setupMoveStock.addItemType(8, 9, g_gamethemeurl + 'img/Gen1Setup.jpg', 8);
			this.setupMoveStock.addItemType(9, 10, g_gamethemeurl + 'img/Gen1Setup.jpg', 9);
			this.setupMoveStock.addItemType(10, 11, g_gamethemeurl + 'img/Gen1Setup.jpg', 10);
			this.setupMoveStock.addItemType(11, 12, g_gamethemeurl + 'img/Gen1Setup.jpg', 11);
			this.setupMoveStock.addItemType(12, 13, g_gamethemeurl + 'img/Gen1Setup.jpg', 12);
			this.setupMoveStock.addItemType(13, 14, g_gamethemeurl + 'img/Gen1Setup.jpg', 13);
			this.setupMoveStock.addItemType(14, 15, g_gamethemeurl + 'img/Gen1Setup.jpg', 14);
			this.setupMoveStock.addItemType(15, 16, g_gamethemeurl + 'img/Gen1Setup.jpg', 15);
			this.setupMoveStock.addItemType(16, 17, g_gamethemeurl + 'img/Gen1Setup.jpg', 16);
			this.setupMoveStock.addItemType(17, 18, g_gamethemeurl + 'img/Gen1Setup.jpg', 17);
			this.setupMoveStock.addItemType(18, 19, g_gamethemeurl + 'img/Gen1Setup.jpg', 18);
			
			for( var card_id in gamedatas.setupMoves )
            {
                
				var card=gamedatas.setupMoves[card_id];
				
				this.setupMoveStock.addToStockWithId(card.type_arg, card.id);       
                
            }
			
			
				this.finisherMoveStock=new ebg.stock();
				this.finisherMoveStock.create(this, $('finisherMoves'), this.cardwidth, this.cardheight );
				this.finisherMoveStock.image_items_per_row = 7;
				
				this.finisherMoveStock.addItemType(0, 1, g_gamethemeurl + 'img/Gen1Finisher.jpg', 0);	
				this.finisherMoveStock.addItemType(1, 2, g_gamethemeurl + 'img/Gen1Finisher.jpg', 1);
				this.finisherMoveStock.addItemType(2, 3, g_gamethemeurl + 'img/Gen1Finisher.jpg', 2);
				this.finisherMoveStock.addItemType(3, 4, g_gamethemeurl + 'img/Gen1Finisher.jpg', 3);
				this.finisherMoveStock.addItemType(4, 5, g_gamethemeurl + 'img/Gen1Finisher.jpg', 4);
				this.finisherMoveStock.addItemType(5, 6, g_gamethemeurl + 'img/Gen1Finisher.jpg', 5);
				this.finisherMoveStock.addItemType(6, 7, g_gamethemeurl + 'img/Gen1Finisher.jpg', 6);
				this.finisherMoveStock.addItemType(7, 8, g_gamethemeurl + 'img/Gen1Finisher.jpg', 7);
				this.finisherMoveStock.addItemType(8, 9, g_gamethemeurl + 'img/Gen1Finisher.jpg', 8);
				this.finisherMoveStock.addItemType(9, 10, g_gamethemeurl + 'img/Gen1Finisher.jpg', 9);
				this.finisherMoveStock.addItemType(10, 11, g_gamethemeurl + 'img/Gen1Finisher.jpg', 10);
				this.finisherMoveStock.addItemType(11, 12, g_gamethemeurl + 'img/Gen1Finisher.jpg', 11);
				this.finisherMoveStock.addItemType(12, 13, g_gamethemeurl + 'img/Gen1Finisher.jpg', 12);
				this.finisherMoveStock.addItemType(13, 14, g_gamethemeurl + 'img/Gen1Finisher.jpg', 13);
				this.finisherMoveStock.addItemType(14, 15, g_gamethemeurl + 'img/Gen1Finisher.jpg', 14);
				this.finisherMoveStock.addItemType(15, 16, g_gamethemeurl + 'img/Gen1Finisher.jpg', 15);
				this.finisherMoveStock.addItemType(16, 17, g_gamethemeurl + 'img/Gen1Finisher.jpg', 16);
				this.finisherMoveStock.addItemType(17, 18, g_gamethemeurl + 'img/Gen1Finisher.jpg', 17);
				this.finisherMoveStock.addItemType(18, 19, g_gamethemeurl + 'img/Gen1Finisher.jpg', 18);
			
			for( var card_id in gamedatas.finisherMoves )
            {
                
				var card=gamedatas.finisherMoves[card_id];
				this.finisherMoveStock.addToStockWithId(card.type_arg, card.id);       
                
            }
			
			
            
			
			
            // Setup game notifications to handle (see "setupNotifications" method below)
            this.setupNotifications();
			
			
			for( var player_id in gamedatas.players )
            {
                var player = gamedatas.players[player_id];
                         
                // Setting up players boards if needed
                var player_board_div = $('player_board_'+player_id);
                dojo.place( this.format_block('jstpl_player_board', player ), player_board_div );
				
				this.basicPlayerBoards.push(new ebg.stock());
				this.advancedPlayerBoards.push(new ebg.stock());
				
				//this.setupPlayBoards(player_id);
            }
			
			
			for( var player_id in gamedatas.players )
            {
                var player = gamedatas.players[player_id];
                         
                // TODO: Setting up players boards if needed
				
				
				dojo.byId("strcount_p"+player_id).innerHTML=player['str'];
				dojo.byId("trwcount_p"+player_id).innerHTML=player['trw'];
				dojo.byId("hldcount_p"+player_id).innerHTML=player['hld'];
				dojo.byId("fcecount_p"+player_id).innerHTML=player['fce'];
				dojo.byId("helcount_p"+player_id).innerHTML=player['hel'];
				dojo.byId("strPowerCount_p"+player_id).innerHTML=player['strp'];
				dojo.byId("trwPowerCount_p"+player_id).innerHTML=player['trwp'];
				dojo.byId("hldPowerCount_p"+player_id).innerHTML=player['hldp'];
				dojo.byId("fcePowerCount_p"+player_id).innerHTML=player['fcep'];
				dojo.byId("helPowerCount_p"+player_id).innerHTML=player['help'];
				dojo.byId("player_score_"+player_id).innerHTML=player['score'];
				
            }
			
			
			
            console.log( "Ending game setup" );
        },
       

        ///////////////////////////////////////////////////
        //// Game & client states
        
        // onEnteringState: this method is called each time we are entering into a new game state.
        //                  You can use this method to perform some user interface changes at this moment.
        //
        onEnteringState: function( stateName, args )
        {
            console.log( 'Entering state: '+stateName );
            
            switch( stateName )
            {
            
            /* Example:
            
            case 'myGameState':
            
                // Show some HTML block at this game state
                dojo.style( 'my_html_block_id', 'display', 'block' );
                
                break;
           */
		   case 'draftCard' :
		   
				
				this.draftCardSelected=args.args.argDraftPicks['cardsDrafted'];
				for( var player_id in args.args.argDraftPicks['players'] )
				{
					var player = args.args.argDraftPicks['players'][player_id];
					
					dojo.byId("strcount_p"+player_id).innerHTML=player['str'];
					dojo.byId("trwcount_p"+player_id).innerHTML=player['trw'];
					dojo.byId("hldcount_p"+player_id).innerHTML=player['hld'];
					dojo.byId("fcecount_p"+player_id).innerHTML=player['fce'];
					dojo.byId("helcount_p"+player_id).innerHTML=player['hel'];
					dojo.byId("strPowerCount_p"+player_id).innerHTML=player['strp'];
					dojo.byId("trwPowerCount_p"+player_id).innerHTML=player['trwp'];
					dojo.byId("hldPowerCount_p"+player_id).innerHTML=player['hldp'];
					dojo.byId("fcePowerCount_p"+player_id).innerHTML=player['fcep'];
					dojo.byId("helPowerCount_p"+player_id).innerHTML=player['help'];
					dojo.byId("player_score_"+player_id).innerHTML=player['score'];
					dojo.style( 'myBoard'+player_id, 'display', 'block' );
					dojo.style( 'myAdvancedBoard'+player_id, 'display', 'none' );
					dojo.style( 'mySetupBoard'+player_id, 'display', 'none' );
					dojo.style( 'myFinisherBoard'+player_id, 'display', 'none' );
					
					
				}
				
				dojo.style( 'myhand_wrap', 'display', 'block' );
				dojo.style( 'advancedMoves_wrap', 'display', 'block' );
				dojo.style( 'setupMoves_wrap', 'display', 'none' );
				dojo.style( 'finisherMoves_wrap', 'display', 'none' );
				
						
				
			break;
           
		   
			case  'gameUpdateStats' :
			
				
				for( var player_id in args.args.argScores['players'] )
				{
					var player = args.args.argScores['players'][player_id];
					
					dojo.byId("strcount_p"+player_id).innerHTML=player['str'];
					dojo.byId("trwcount_p"+player_id).innerHTML=player['trw'];
					dojo.byId("hldcount_p"+player_id).innerHTML=player['hld'];
					dojo.byId("fcecount_p"+player_id).innerHTML=player['fce'];
					dojo.byId("helcount_p"+player_id).innerHTML=player['hel'];
					dojo.byId("strPowerCount_p"+player_id).innerHTML=player['strp'];
					dojo.byId("trwPowerCount_p"+player_id).innerHTML=player['trwp'];
					dojo.byId("hldPowerCount_p"+player_id).innerHTML=player['hldp'];
					dojo.byId("fcePowerCount_p"+player_id).innerHTML=player['fcep'];
					dojo.byId("helPowerCount_p"+player_id).innerHTML=player['help'];
					dojo.byId("player_score_"+player_id).innerHTML=player['score'];
					
				}
			break;
			
			
			case 'checkEndOfPhase' :
				for( var player_id in args.args.argScores['players'] )
				{
					var player = args.args.argScores['players'][player_id];
					
					dojo.byId("strcount_p"+player_id).innerHTML=player['str'];
					dojo.byId("trwcount_p"+player_id).innerHTML=player['trw'];
					dojo.byId("hldcount_p"+player_id).innerHTML=player['hld'];
					dojo.byId("fcecount_p"+player_id).innerHTML=player['fce'];
					dojo.byId("helcount_p"+player_id).innerHTML=player['hel'];
					dojo.byId("strPowerCount_p"+player_id).innerHTML=player['strp'];
					dojo.byId("trwPowerCount_p"+player_id).innerHTML=player['trwp'];
					dojo.byId("hldPowerCount_p"+player_id).innerHTML=player['hldp'];
					dojo.byId("fcePowerCount_p"+player_id).innerHTML=player['fcep'];
					dojo.byId("helPowerCount_p"+player_id).innerHTML=player['help'];
					dojo.byId("player_score_"+player_id).innerHTML=player['score'];
					
					
					
				}
				
				
			break;
			
			case 'playerTurn' :
			
				dojo.style( 'myhand_wrap', 'display', 'none' );
				dojo.style( 'advancedMoves_wrap', 'display', 'block' );
				dojo.style( 'setupMoves_wrap', 'display', 'block' );
				dojo.style( 'finisherMoves_wrap', 'display', 'none' );
			
			
			for( var player_id in args.args.argScoresDraft['players'] )
				{
					var player = args.args.argScoresDraft['players'][player_id];
					
					dojo.byId("strcount_p"+player_id).innerHTML=player['str'];
					dojo.byId("trwcount_p"+player_id).innerHTML=player['trw'];
					dojo.byId("hldcount_p"+player_id).innerHTML=player['hld'];
					dojo.byId("fcecount_p"+player_id).innerHTML=player['fce'];
					dojo.byId("helcount_p"+player_id).innerHTML=player['hel'];
					dojo.byId("strPowerCount_p"+player_id).innerHTML=player['strp'];
					dojo.byId("trwPowerCount_p"+player_id).innerHTML=player['trwp'];
					dojo.byId("hldPowerCount_p"+player_id).innerHTML=player['hldp'];
					dojo.byId("fcePowerCount_p"+player_id).innerHTML=player['fcep'];
					dojo.byId("helPowerCount_p"+player_id).innerHTML=player['help'];
					dojo.byId("player_score_"+player_id).innerHTML=player['score'];
					dojo.style( 'myBoard'+player_id, 'display', 'none' );
					dojo.style( 'myAdvancedBoard'+player_id, 'display', 'block' );
					dojo.style( 'mySetupBoard'+player_id, 'display', 'none' );
					dojo.style( 'myFinisherBoard'+player_id, 'display', 'none' );
						
				}
				
				dojo.connect( this.advancedMoveStock, 'onChangeSelection', this, 'onAdvancedMoveStockChanged' );
				this.draftCardSelected=args.args.argScoresDraft['cardsDrafted'];
				
				this.legalCards=args.args.argScoresDraft['legalCards'];
				
				var cardsToHighlight=[];
				
				if(this.isCurrentPlayerActive())
				{
					var availableAdvancedMoves=this.advancedMoveStock.getAllItems()
					console.log(availableAdvancedMoves);
					for (var i=0;i< availableAdvancedMoves.length;i++)
					{
						
						if(this.legalCards.find(function(ele){ 	return ele.card_id===availableAdvancedMoves[i].id;}))
						{
							cardsToHighlight.push(availableAdvancedMoves[i].id);
														
							dojo.style('advancedMoves_item_'+availableAdvancedMoves[i].id,'border-style', 'solid');
							dojo.style('advancedMoves_item_'+availableAdvancedMoves[i].id,'border-color', 'green');
							dojo.style('advancedMoves_item_'+availableAdvancedMoves[i].id,'border-width', '3px');
						}
						else
						{
							dojo.style('advancedMoves_item_'+availableAdvancedMoves[i].id,'border-style', 'solid');
							dojo.style('advancedMoves_item_'+availableAdvancedMoves[i].id,'border-color', 'red');
							dojo.style('advancedMoves_item_'+availableAdvancedMoves[i].id,'border-width', '3px');
						}
						
					}
				}
				
				
			break;
			
			case 'playerTurnPickSetup' :
				
				dojo.style( 'myhand_wrap', 'display', 'none' );
				dojo.style( 'advancedMoves_wrap', 'display', 'none' );
				dojo.style( 'setupMoves_wrap', 'display', 'block' );
				dojo.style( 'finisherMoves_wrap', 'display', 'block' );
				
				for( var player_id in args.args.argScoresDraft['players'] )
				{
					var player = args.args.argScoresDraft['players'][player_id];
					
					
                    dojo.style( 'myBoard'+player_id, 'display', 'none' );
					dojo.style( 'myAdvancedBoard'+player_id, 'display', 'none' );
					dojo.style( 'mySetupBoard'+player_id, 'display', 'block' );
					dojo.style( 'myFinisherBoard'+player_id, 'display', 'none' );
					
					dojo.byId("strcount_p"+player_id).innerHTML=player['str'];
					dojo.byId("trwcount_p"+player_id).innerHTML=player['trw'];
					dojo.byId("hldcount_p"+player_id).innerHTML=player['hld'];
					dojo.byId("fcecount_p"+player_id).innerHTML=player['fce'];
					dojo.byId("helcount_p"+player_id).innerHTML=player['hel'];
					dojo.byId("strPowerCount_p"+player_id).innerHTML=player['strp'];
					dojo.byId("trwPowerCount_p"+player_id).innerHTML=player['trwp'];
					dojo.byId("hldPowerCount_p"+player_id).innerHTML=player['hldp'];
					dojo.byId("fcePowerCount_p"+player_id).innerHTML=player['fcep'];
					dojo.byId("helPowerCount_p"+player_id).innerHTML=player['help'];
					dojo.byId("player_score_"+player_id).innerHTML=player['score'];
				}
				
				dojo.connect( this.setupMoveStock, 'onChangeSelection', this, 'onSetupSelectionChanged' );
				
				this.legalCards=args.args.argScoresDraft['legalCards'];
				
				var cardsToHighlight=[];
				
				if(this.isCurrentPlayerActive())
				{
					var availableSetupMoves=this.setupMoveStock.getAllItems()
					console.log(availableSetupMoves);
					for (var i=0;i< availableSetupMoves.length;i++)
					{
						
						if(this.legalCards.find(function(ele){ 	return ele.card_id===availableSetupMoves[i].id;}))
						{
							cardsToHighlight.push(availableSetupMoves[i].id);
														
							dojo.style('setupMoves_item_'+availableSetupMoves[i].id,'border-style', 'solid');
							dojo.style('setupMoves_item_'+availableSetupMoves[i].id,'border-color', 'green');
							dojo.style('setupMoves_item_'+availableSetupMoves[i].id,'border-width', '3px');
						}
						else
						{
							dojo.style('setupMoves_item_'+availableSetupMoves[i].id,'border-style', 'solid');
							dojo.style('setupMoves_item_'+availableSetupMoves[i].id,'border-color', 'red');
							dojo.style('setupMoves_item_'+availableSetupMoves[i].id,'border-width', '3px');
						}
						
					}
				}
				
					
			break;
			
			case 'playerTurnPickFinisher' :
				
				dojo.style( 'myhand_wrap', 'display', 'none' );
				dojo.style( 'advancedMoves_wrap', 'display', 'none' );
				dojo.style( 'setupMoves_wrap', 'display', 'none' );
				dojo.style( 'finisherMoves_wrap', 'display', 'block' );
				
				for( var player_id in args.args.argScoresDraft['players'] )
				{
					var player = args.args.argScoresDraft['players'][player_id];
					
                    dojo.style( 'myBoard'+player_id, 'display', 'none' );
					dojo.style( 'myAdvancedBoard'+player_id, 'display', 'none' );
					dojo.style( 'mySetupBoard'+player_id, 'display', 'none' );
					dojo.style( 'myFinisherBoard'+player_id, 'display', 'block' );
					dojo.byId("strcount_p"+player_id).innerHTML=player['str'];
					dojo.byId("trwcount_p"+player_id).innerHTML=player['trw'];
					dojo.byId("hldcount_p"+player_id).innerHTML=player['hld'];
					dojo.byId("fcecount_p"+player_id).innerHTML=player['fce'];
					dojo.byId("helcount_p"+player_id).innerHTML=player['hel'];
					dojo.byId("strPowerCount_p"+player_id).innerHTML=player['strp'];
					dojo.byId("trwPowerCount_p"+player_id).innerHTML=player['trwp'];
					dojo.byId("hldPowerCount_p"+player_id).innerHTML=player['hldp'];
					dojo.byId("fcePowerCount_p"+player_id).innerHTML=player['fcep'];
					dojo.byId("helPowerCount_p"+player_id).innerHTML=player['help'];
					dojo.byId("player_score_"+player_id).innerHTML=player['score'];
				}
				
				dojo.connect( this.finisherMoveStock, 'onChangeSelection', this, 'onFinisherSelectionChanged' );
				
					
			break;
           
            case 'dummmy':
                break;
            }
        },

        // onLeavingState: this method is called each time we are leaving a game state.
        //                 You can use this method to perform some user interface changes at this moment.
        //
        onLeavingState: function( stateName )
        {
            console.log( 'Leaving state: '+stateName );
            
            switch( stateName )
            {
            
            /* Example:
            
            case 'myGameState':
            
                // Hide the HTML block we are displaying only during this game state
                dojo.style( 'my_html_block_id', 'display', 'none' );
                
                break;
           */
		   
		   case 'playerTurn':
		   
		   if(this.isCurrentPlayerActive())
				{
					var availableAdvancedMoves=this.advancedMoveStock.getAllItems()
					
					for (var i=0;i< availableAdvancedMoves.length;i++)
					{				
							dojo.style('advancedMoves_item_'+availableAdvancedMoves[i].id,'border-style', 'none');
							dojo.style('advancedMoves_item_'+availableAdvancedMoves[i].id,'border-color', 'none');
							dojo.style('advancedMoves_item_'+availableAdvancedMoves[i].id,'border-width', '0px');
	
					}
				}
			
				
		   break;
		   
           
           
            case 'dummmy':
                break;
            }               
        }, 

        // onUpdateActionButtons: in this method you can manage "action buttons" that are displayed in the
        //                        action status bar (ie: the HTML links in the status bar).
        //        
        onUpdateActionButtons: function( stateName, args )
        {
            console.log( 'onUpdateActionButtons: '+stateName );
                      
            if( !this.isSpectator )
            {       

				//!this.isSpectator for multiplayeractive mode
			
                switch( stateName )
                {
					
					
				case 'playerTurn':
				
					if(this.isCurrentPlayerActive())
					{
						this.addActionButton( 'increaseStrike', _('Strike +1'),'onIncreaseStrike');
						this.addActionButton( 'increaseThrow', _('Throw +1'),'onIncreaseThrow');
						this.addActionButton( 'increaseHold', _('Hold +1'),'onIncreaseHold');
						this.addActionButton( 'increaseFace', _('Face +1'),'onIncreaseFace');
						this.addActionButton( 'increaseHeel', _('Heel +1'),'onIncreaseHeel');
					}
				break;
				
				
				case 'playerTurnPickSetup':
					if(this.isCurrentPlayerActive())
					{
						this.addActionButton( 'increaseStrikePower', _('Strike Power + 1 Strike + 5'),'onIncreaseStrikePower');
						this.addActionButton( 'increaseThrowPower', _('Throw Power + 1 Throw + 5'),'onIncreaseThrowPower');
						this.addActionButton( 'increaseHoldPower', _('Hold Power + 1 Hold + 5'),'onIncreaseHoldPower');
						this.addActionButton( 'increaseFacePower', _('Face Power + 1 Face Power + 5'),'onIncreaseFacePower');
						this.addActionButton( 'increaseHeelPower', _('Heel Power + 1 Heel + 5'),'onIncreaseHeelPower');
					}
/*               
                 Example:
 
                 case 'myGameState':
                    
                    // Add 3 action buttons in the action status bar:
                    
                    this.addActionButton( 'button_1_id', _('Button 1 label'), 'onMyMethodToCall1' ); 
                    this.addActionButton( 'button_2_id', _('Button 2 label'), 'onMyMethodToCall2' ); 
                    this.addActionButton( 'button_3_id', _('Button 3 label'), 'onMyMethodToCall3' ); 
                    break;
*/
                }
            }
        },        

        ///////////////////////////////////////////////////
        //// Utility methods
        
        /*
        
            Here, you can defines some utility methods that you can use everywhere in your javascript
            script.
        
        */
		
		getPlayerIndex  : function(player_idx){
			
			
			for( var player_id in this.gamedatas.players )
            {	
				if(player_id==player_idx)
				{
					var player = this.gamedatas.players[player_id];
					
					return player.playerNum-1;
				}
			}
			
			
		},
		
		
		
		playCardOnTable : function(player_id,card_id,card_args,x) {
            
			

            if (player_id != this.player_id) 
			{
                // Some opponent played a card
                // Move card from player panel
				
                this.basicPlayerBoards[x-1].addToStockWithId(card_args,card_id);
            } 
			else 
			{
                // You played a card. If it exists in your hand, move card from there and remove
                // corresponding item

                if ($('myhand_item_' + card_id)) 
				{
					
                    this.basicPlayerBoards[x-1].addToStockWithId(card_args,card_id,'myhand_item_' + card_id);
                    this.playerHand.removeFromStockById(card_id);
                }
            }

            // In any case: move it to its final destination
			
        },
		
		
		
		pickCardFromTable : function(player_id, card_id, card_args, newCard_id, newCard_args)
		{
			//this.advancedMoveStock.removeFromStockById(removedCard);
			//this.advancedMoveStock.addToStockWithId(newCard_args, newCard_id);
			
			//this.pickCardFromTable(notif.args.player_id, notif.args.card_id,notif.args.card_args, notif.args.newCard_id, notif.args.newCard_args);
			
			
			
			
			if (player_id != this.player_id) 
			{
                // Some opponent played a card
                // Move card from player panel
				
                this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addToStockWithId(card_args,card_id);
            } 
			else 
			{
                // You played a card. If it exists in your hand, move card from there and remove
                // corresponding item
				//advancedMoves_item_4
                if ($('advancedMoves_item_' + card_id)) 
				{
					
                    this.advancedPlayerBoards[this.getPlayerIndex(player_id)].addToStockWithId(card_args,card_id,'advancedMoves_item_' + card_id);
					
                    					
					
                }
            }
			this.advancedMoveStock.removeFromStockById(card_id);
			this.advancedMoveStock.addToStockWithId(newCard_args, newCard_id);



					
                    
			
		},
		
		pickSetupCardFromTable : function(player_id, card_id, card_args, newCard_id, newCard_args)
		{
			//this.advancedMoveStock.removeFromStockById(removedCard);
			//this.advancedMoveStock.addToStockWithId(newCard_args, newCard_id);
			
			//this.pickCardFromTable(notif.args.player_id, notif.args.card_id,notif.args.card_args, notif.args.newCard_id, notif.args.newCard_args);
			
			
			
			
			if (player_id != this.player_id) 
			{
                // Some opponent played a card
                // Move card from player panel
				
                this.setupPlayerBoards[this.getPlayerIndex(player_id)].addToStockWithId(card_args,card_id);
            } 
			else 
			{
                // You played a card. If it exists in your hand, move card from there and remove
                // corresponding item
				//advancedMoves_item_4
                if ($('setupMoves_item_' + card_id)) 
				{
					
                    this.setupPlayerBoards[this.getPlayerIndex(player_id)].addToStockWithId(card_args,card_id,'setupMoves_item_' + card_id);
					
                    					
					
                }
            }
			this.setupMoveStock.removeFromStockById(card_id);
			this.setupMoveStock.addToStockWithId(newCard_args, newCard_id);



					
                    
			
		},
		
		pickFinisherCardFromTable : function(player_id, card_id, card_args, newCard_id, newCard_args)
		{
						
			
			if (player_id != this.player_id) 
			{
                // Some opponent played a card
                // Move card from player panel
				
                this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addToStockWithId(card_args,card_id);
            } 
			else 
			{
                // You played a card. If it exists in your hand, move card from there and remove
                // corresponding item
				//finisherMoves_item_4
                if ($('finisherMoves_item_' + card_id)) 
				{
					
                    this.finisherPlayerBoards[this.getPlayerIndex(player_id)].addToStockWithId(card_args,card_id,'finisherMoves_item_' + card_id);
					
                    					
					
                }
            }
			this.finisherMoveStock.removeFromStockById(card_id);
			this.finisherMoveStock.addToStockWithId(newCard_args, newCard_id);
	
                		
		},
		
		
		hideBoard : function() 
		{
			  var x = document.getElementById("board");
			  if (x.style.display === "none") {
				x.style.display = "block";
			  } else {
				x.style.display = "none";
			  }
		},
		
				
        ///////////////////////////////////////////////////
        //// Player's action
        
        /*
        
            Here, you are defining methods to handle player's action (ex: results of mouse click on 
            game objects).
            
            Most of the time, these methods:
            _ check the action is possible at this game state.
            _ make a call to the game server
        
        */
		onPlayerHandSelectionChanged : function() {
            var items = this.playerHand.getSelectedItems();
			var action='draftCard'
			
			
							
			

				if (items.length > 0) {
					if (this.checkAction('playCard', true)) {
						// Can play a card
						
						dojo.style('myhand_item_'+items[0].id,'border-style', 'solid');
						dojo.style('myhand_item_'+items[0].id,'border-color', 'green');
						dojo.style('myhand_item_'+items[0].id,'border-width', '3px');

						var card_id = items[0].id;
						var card_type=items[0].type;
						
						
						this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+action+".html",{
                        id : card_id,
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
					

						//this.playerHand.unselectAll();
					}  else {
						this.playerHand.unselectAll();
					}
				}
			
        },
	
	
		onAdvancedMoveStockChanged : function(){
			var items = this.advancedMoveStock.getSelectedItems();
			var action='pickCard'
			var check=false;
			
			
			
			if (items.length > 0) 
			{
				
				if(this.legalCards.find(function(ele){ 	return ele.card_id===items[0].id;}))
				{
						check=true;
						console.log('Array Find function success');
				}
				
				
				
				
				if (this.checkAction('pickCard', true)&& check) 
				{
						// Can play a card
					var card_id = items[0].id;
					var card_type=items[0].type;
						
					console.log('Advanced Move selection AJAX call with card type='+card_type);
					this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+action+".html",
					{id : card_id,
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
					

						this.advancedMoveStock.unselectAll();
				}
				else
				{
					this.showMessage( "Don't meet the moves requirments", "error" )
					this.advancedMoveStock.unselectAll();
				}
					
			}
			else 
			{
				
				this.advancedMoveStock.unselectAll();
			}
			
		},
		
		onSetupSelectionChanged : function(){
			
			var items = this.setupMoveStock.getSelectedItems();
			var action='pickSetupCard'
			var check=false;
			
			if (items.length > 0) 
			{
				
				if(this.legalCards.find(function(ele){ 	return ele.card_id===items[0].id;}))
				{
						check=true;
						console.log('Array Find function success');
				}
				
				
				
				
				if (this.checkAction('pickSetupCard', true)&& check) 
				{
						// Can play a card
					var card_id = items[0].id;
					var card_type=items[0].type;
						
					console.log('Advanced Move selection AJAX call with card type='+card_id);
					this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+action+".html",
					{id : card_id,
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });	

						this.setupMoveStock.unselectAll();
				}
				else
				{
					this.showMessage( "Don't meet the moves requirments", "error" )
					this.setupMoveStock.unselectAll();
				}
					
			}
			else 
			{
				
				this.setupMoveStock.unselectAll();
			}
			
		},
		
		onFinisherSelectionChanged : function() {
			
			var items = this.finisherMoveStock.getSelectedItems();
			var action='pickFinisherCard'
			var check=false;
			
			if (items.length > 0) 
			{
				
				
				check=true;
				
				
				if (this.checkAction('pickFinisherCard', true)&& check) 
				{
						// Can play a card
					var card_id = items[0].id;
					var card_type=items[0].type;
						
					console.log('Advanced Move selection AJAX call with card type='+card_type);
					this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+action+".html",
					{id : card_id,
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
					

						this.finisherMoveStock.unselectAll();
				}
				else
				{
					this.showMessage( "It's not rour turn", "error" )
					this.finisherMoveStock.unselectAll();
				}
					
			}
			else 
			{
				
				this.finisherMoveStock.unselectAll();
			}
			
		},
		
		
		/*
		this.addActionButton( 'increaseStrike', _('Strike +1','onIncreaseStrike');
					this.addActionButton( 'increaseThrow', _('Throw +1','onIncreaseThrow');
					this.addActionButton( 'increaseHold', _('Hold +1','onIncreaseHold');
					this.addActionButton( 'increaseFace', _('Face +1','onIncreaseFace');
					this.addActionButton( 'increaseHeel', _('Heel +1','onIncreaseHeel');
		
        */
        
		onIncreaseStrike : function(){
				this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+"increaseStat.html",{
                        type : 'strike',
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
			
		},
		
		onIncreaseThrow : function(){
			this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+"increaseStat.html",{
                        type : 'throw',
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
			
		},
		
		onIncreaseHold : function(){
			this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+"increaseStat.html",{
                        type : 'hold',
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
			
		},
		
		onIncreaseFace : function(){
			this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+"increaseStat.html",{
                        type : 'face',
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
			
		},
		
		onIncreaseHeel : function(){
			this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+"increaseStat.html",{
                        type : 'heel',
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
			
		},
		
		
		
      
		onIncreaseStrikePower : function(){
				this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+"increasePowerStat.html",{
                        type : 'strike',
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
			
		},
		
		onIncreaseThrowPower : function(){
			this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+"increasePowerStat.html",{
                        type : 'throw',
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
			
		},
		
		onIncreaseHoldPower : function(){
			this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+"increasePowerStat.html",{
                        type : 'hold',
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
			
		},
		
		onIncreaseFacePower : function(){
			this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+"increasePowerStat.html",{
                        type : 'face',
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
			
		},
		
		onIncreaseHeelPower : function(){
			this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+"increasePowerStat.html",{
                        type : 'heel',
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
			
		},
		
        
        ///////////////////////////////////////////////////
        //// Reaction to cometD notifications

        /*
            setupNotifications:
            
            In this method, you associate each of your game notifications with your local method to handle it.
            
            Note: game notification names correspond to "notifyAllPlayers" and "notifyPlayer" calls in
                  your wfd.game.php file.
        
        */
        
		
		setupNotifications : function() {
            console.log('notifications subscriptions setup');

            dojo.subscribe('newHand', this, "notif_newHand");
            dojo.subscribe('playCard', this, "notif_playCard");
			dojo.subscribe('pickCard', this, "notif_pickCard");
			dojo.subscribe('pickSetupCard', this, "notif_pickSetupCard");
			dojo.subscribe('pickFinisherCard', this, "notif_pickFinisherCard");
			dojo.subscribe('consoleOutput',this, "notif_consoleOutput");
			dojo.subscribe( 'newScores', this, "notif_newScores" );
			dojo.subscribe( 'setupMovesGenerated', this, "notif_setupMovesGenerated" );
			dojo.subscribe( 'finisherMovesGenerated', this, "notif_finisherMovesGenerated" );
			dojo.subscribe( 'newRoundGenerated', this, "notif_newRoundGenerated" );
			 

        },
		
		
		notif_newRoundGenerated : function(notif) {
			
			
			
			for( var player_id in this.gamedatas.players )
            {
				this.basicPlayerBoards[this.getPlayerIndex(player_id)].removeAll();
				this.advancedPlayerBoards[this.getPlayerIndex(player_id)].removeAll();
				this.finisherPlayerBoards[this.getPlayerIndex(player_id)].removeAll();
				this.setupPlayerBoards[this.getPlayerIndex(player_id)].removeAll();
			}
			
			this.advancedMoveStock.removeAll();
			this.setupMoveStock.removeAll();
			this.finisherMoveStock.removeAll();
		},
		
		
		notif_finisherMovesGenerated : function(notif) {
		console.log(notif.args);
			
			for (var i in notif.args)
			{
				console.log(i);
				console.log(notif.args[i]);
				this.finisherMoveStock.addToStockWithId(notif.args[i].type_arg,notif.args[i].id)
			}	
		},
		
		notif_setupMovesGenerated : function(notif) {
			
			console.log(notif.args);
			
			for (var i in notif.args)
			{
				console.log(i);
				console.log(notif.args[i]);
				this.setupMoveStock.addToStockWithId(notif.args[i].type_arg,notif.args[i].id)
			}
			
			
		},
		
		
		notif_consoleOutput : function(notif) {
            
            console.log(notif.args);
			//console.log(notif.args.hand);
        },
		

        notif_newHand : function(notif) {
			
			console.log("new hand notify called")
            // We received a new full hand of 13 cards.
            
			this.playerHand.removeAll();
			
			
			
			
            		
			for (var i in notif.args.cards) {
                    var card = notif.args.cards[i];
                    this.playerHand.addToStockWithId(card.type_arg, card.id);
					
                }
			for (var i in notif.args.advancedCards) {
                    var card = notif.args.advancedCards[i];
                    this.advancedMoveStock.addToStockWithId(card.type_arg, card.id);
					
                }
			
			
        },

        notif_playCard : function(notif) {
            // Play a card on the table
			//playCardOnTable : function(player_id,card_id,card_type)
			//console.log('Player '+notif.args.player_id+' has played card'+ notif.args.card_id ');
            this.playCardOnTable(notif.args.player_id, notif.args.card_id, notif.args.card_args,notif.args.playerNum);
        },
		
		notif_pickCard : function(notif) {
			
			this.pickCardFromTable(notif.args.player_id, notif.args.card_id,notif.args.card_args, notif.args.newCard_id, notif.args.newCard_args);
		
		
		},
		
		notif_pickSetupCard : function(notif) {
			
			this.pickSetupCardFromTable(notif.args.player_id, notif.args.card_id,notif.args.card_args, notif.args.newCard_id, notif.args.newCard_args);
		
		
		},
		
		notif_pickFinisherCard : function(notif) {
			
			this.pickFinisherCardFromTable(notif.args.player_id, notif.args.card_id,notif.args.card_args, notif.args.newCard_id, notif.args.newCard_args);
		
		
		},
		
		
		
		notif_newScores : function(notif) {
           // Update players' scores
           for ( var player_id in notif.args.newScores) {
               this.scoreCtrl[player_id].toValue(notif.args.newScores[player_id]);
           }
       },
		
		
		
		
		
        
        // TODO: from this point and below, you can write your game notifications handling methods
        
        /*
        Example:
        
        notif_cardPlayed: function( notif )
        {
            console.log( 'notif_cardPlayed' );
            console.log( notif );
            
            // Note: notif.args contains the arguments specified during you "notifyAllPlayers" / "notifyPlayer" PHP call
            
            // TODO: play the card in the user interface.
        },    
        
        */
   });             
});
