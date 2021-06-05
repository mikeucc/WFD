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
                         
                // Setting up players boards if needed
                var player_board_div = $('player_board_'+player_id);
                dojo.place( this.format_block('jstpl_player_board', player ), player_board_div );
            }
			
            
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
			for( var player_id in gamedatas.players )
            {
                
				j=1;
				for (i in this.gamedatas['cardsontable_'+player_id]) 
				{
					console.log('reloading cards on table');
					
					var card = this.gamedatas['cardsontable_'+player_id][i];
					console.log(card);
					// Cards type_args is actually the sprite position
					this.playCardOnTable(player_id,card.id,card.type_arg,j);
					j++;
				}
                         
                
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
			
			
			
            
			
			
            // Setup game notifications to handle (see "setupNotifications" method below)
            this.setupNotifications();
			
			for( var player_id in gamedatas.players )
            {
                var player = gamedatas.players[player_id];
                         
                // TODO: Setting up players boards if needed
				
				
				dojo.byId("strcount_p"+player_id).innerHTML=player['str'];
				dojo.byId("trwcount_p"+player_id).innerHTML=player['trw'];
				dojo.byId("hldcount_p"+player_id).innerHTML=player['hld'];
				dojo.byId("algcount_p"+player_id).innerHTML=player['alg'];
				
							
					
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
				
						
				
			break;
           
		   
			case  'gameUpdateStats' :
			
				
				for( var player_id in args.args.argScores['players'] )
				{
					var player = args.args.argScores['players'][player_id];
					
					dojo.byId("strcount_p"+player_id).innerHTML=player['str'];
					dojo.byId("trwcount_p"+player_id).innerHTML=player['trw'];
					dojo.byId("hldcount_p"+player_id).innerHTML=player['hld'];
					dojo.byId("algcount_p"+player_id).innerHTML=player['alg'];
					
					
				}
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
		playCardOnTable : function(player_id,card_id,card_type,slot) {
            // player_id => direction
			var xpos=card_type;
			var ypos=0;
			
			if(card_type>6)
			{
				xpos=card_type-7;
				ypos=1;
			}
			
			if (card_type>13)
			{
				xpos=card_type-14;
				ypos=2;
			}
			
			
			$element='jstpl_cardontable'+slot;
			
            dojo.place(this.format_block($element, {
                x : this.cardwidth*(xpos),
                y : this.cardheight*(ypos),
                player_id : player_id
            }), 'playertablecard_' + player_id+"_"+slot);

            if (player_id != this.player_id) {
                // Some opponent played a card
                // Move card from player panel
				
                this.placeOnObject('cardontable_' + player_id+'_'+slot, 'overall_player_board_' + player_id);
            } else {
                // You played a card. If it exists in your hand, move card from there and remove
                // corresponding item

                if ($('myhand_item_' + card_id)) {
					
                    this.placeOnObject('cardontable_' + player_id+'_'+slot, 'myhand_item_' + card_id);
                    this.playerHand.removeFromStockById(card_id);
                }
            }

            // In any case: move it to its final destination
			
            this.slideToObject('cardontable_' + player_id+'_'+slot, 'playertablecard_' + player_id+"_"+slot).play();
			
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

						var card_id = items[0].id;
						var card_type=items[0].type;
						
						
						this.ajaxcall("/"+this.game_name+"/"+this.game_name+"/"+action+".html",{
                        id : card_id,
                        lock : true
                    }, this, function(result) {
                    }, function(is_error) {
                    });
					

						this.playerHand.unselectAll();
					} else if (this.checkAction('giveCards')) {
						// Can give cards => let the player select some cards
					} else {
						this.playerHand.unselectAll();
					}
				}
			
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
			dojo.subscribe('consoleOutput',this, "notif_consoleOutput");
			dojo.subscribe( 'newScores', this, "notif_newScores" );
			
			 

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
					console.log(card.type+":" +card.id+":" +card.type_arg)
                }
			for (var i in notif.args.advancedCards) {
                    var card = notif.args.advancedCards[i];
                    this.advancedMoveStock.addToStockWithId(card.type_arg, card.id);
					console.log(card.type+":" +card.id+":" +card.type_arg)
                }
			
			
        },

        notif_playCard : function(notif) {
            // Play a card on the table
			//playCardOnTable : function(player_id,card_id,card_type)
			//console.log('Player '+notif.args.player_id+' has played card'+ notif.args.card_id ');
            this.playCardOnTable(notif.args.player_id, notif.args.card_id, notif.args.card_args,this.draftCardSelected);
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
