{OVERALL_GAME_HEADER}

<!-- 
--------
-- BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
-- DraftFederations implementation : © <Your name here> <Your email address here>
-- 
-- This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
-- See http://en.boardgamearena.com/#!doc/Studio for more information.
-------

    wdf_wdf.tpl
    
    This is the HTML template of your game.
    
    Everything you are writing in this file will be displayed in the HTML page of your game user interface,
    in the "main game zone" of the screen.
    
    You can use in this template:
    _ variables, with the format {MY_VARIABLE_ELEMENT}.
    _ HTML block, with the BEGIN/END format
    
    See your "view" PHP file to check how to set variables and control blocks
    
    Please REMOVE this comment before publishing your game on BGA
	
		
	
-->

<div id="myhand_wrap" class="whiteblock">
    <h3>{MY_HAND}</h3>
    <div id="myhand">
    </div>
</div>



<div id="advancedMoves_wrap" class="whiteblock">
    <h3>Advanced Moves</h3>
    <div id="advancedMoves"></div>
</div>

<div id="setupMoves_wrap" class="whiteblock">
    <h3>Setup Moves</h3>
    <div id="setupMoves"></div>
</div>

<div id="finisherMoves_wrap" class="whiteblock">
    <h3>Finisher Moves</h3>
    <div id="finisherMoves"></div>
</div>




<div id="playertables">

    <!-- BEGIN player -->
    <div class="playertable whiteblock circle">
        <div class="playertablename" style="color:#{PLAYER_COLOR}">
            {PLAYER_NAME}
        </div>
		<div id="myBoard{PLAYER_ID}"></div>
		<div id="myAdvancedBoard{PLAYER_ID}"></div>
		<div id="mySetupBoard{PLAYER_ID}"></div>
		<div id="myFinisherBoard{PLAYER_ID}"></div>
    </div>
    <!-- END player -->

</div>

<!--

<div id="scoring_sheet">
                <div>
                    <div id="score_sheet_player_1" class="score-sheet-player"></div>
                    <div id="score_sheet_player_2" class="score-sheet-player"></div>
                    <div id="score_sheet_player_3" class="score-sheet-player"></div>
                    <div id="score_sheet_player_4" class="score-sheet-player"></div>
					<div id="score_sheet_player_5" class="score-sheet-player"></div>
                </div>

                <div>
                    <div class="score-sheet-tile reverse" style="background-position: 44.5% 33.5%;"></div>
                    <div class="score-sheet-tile reverse" style="background-position: 11.3% 22.5%;"><span id="score_strike_1"></span></div>
                    <div class="score-sheet-tile reverse" style="background-position: 0.7% 22.5%;"><span id="score_strike_2"></span></div>
                    <div class="score-sheet-tile reverse" style="background-position: 11.3% 55.5%;"><span id="score_strike_3"></span></div>
                    <div class="score-sheet-tile reverse" style="background-position: 0.7% 55.5%;"><span id="score_strike_4"></span></div>
					<div class="score-sheet-tile reverse" style="background-position: 0.7% 55.5%;"><span id="score_strike_5"></span></div>
                </div>

                <div>
                    <div class="score-sheet-tile reverse" style="background-position: 44.3% 22.5%;"></div>
                    <div class="score-sheet-tile reverse" style="background-position: 11.3% 0.5%;"><span id="score_hold_1"></span></div>
                    <div class="score-sheet-tile reverse" style="background-position: 0.7% 0.5%;"><span id="score_hold_2"></span></div>
                    <div class="score-sheet-tile reverse" style="background-position: 11.3% 11.5%;"><span id="score_hold_3"></span></div>
                    <div class="score-sheet-tile reverse" style="background-position: 0.7% 11.5%;"><span id="score_hold_4"></span></div>
					<div class="score-sheet-tile reverse" style="background-position: 0.7% 11.5%;"><span id="score_hold_5"></span></div>
                </div>

                <div>
                    <div class="score-sheet-tile" style="background-position: 99.8% 0.5%;"></div>
                    <div class="score-sheet-tile" style="background-position: 22.7% 0.5%;"><span id="score_throw_1"></span></div>
                    <div class="score-sheet-tile" style="background-position: 33.3% 0.5%;"><span id="score_throw_2"></span></div>
                    <div class="score-sheet-tile" style="background-position: 0.7% 99.5%;"><span id="score_throw_3"></span></div>
                    <div class="score-sheet-tile" style="background-position: 11.3% 99.5%;"><span id="score_throw_4"></span></div>
					<div class="score-sheet-tile" style="background-position: 11.3% 99.5%;"><span id="score_throw_4"></span></div>
                </div>

                <div>
                    <div class="score-sheet-tile reverse" style="background-position: 66.5% 0.5%;"></div>
                    <div class="score-sheet-tile reverse" style="background-position: 11.3% 66.5%;"><span id="score_alignment_1"></span></div>
                    <div class="score-sheet-tile reverse" style="background-position: 0.7% 66.5%;"><span id="score_alignment_2"></span></div>
                    <div class="score-sheet-tile reverse" style="background-position: 11.3% 77.5%;"><span id="score_alignment_3"></span></div>
                    <div class="score-sheet-tile reverse" style="background-position: 0.7% 77.5%;"><span id="score_alignment_4"></span></div>
					<div class="score-sheet-tile reverse" style="background-position: 0.7% 77.5%;"><span id="score_alignment_5"></span></div>
                </div>

                <div>
                    <div class="score-sheet-tile" style="background-position: 99.8% 22.5%;"></div>
                    <div class="score-sheet-tile" style="background-position: 22.5% 11.5%;"><span id="score_finisher_1"></span></div>
                    <div class="score-sheet-tile" style="background-position: 33.1% 11.5%;"><span id="score_finisher_2"></span></div>
                    <div class="score-sheet-tile" style="background-position: 22.5% 11.5%;"><span id="score_finisher_3"></span></div>
                    <div class="score-sheet-tile" style="background-position: 33.1% 11.5%;"><span id="score_finisher_4"></span></div>
					<div class="score-sheet-tile" style="background-position: 33.1% 11.5%;"><span id="score_finisher_5"></span></div>
                </div>

              
                <div>
                    
                    <div id="score_sheet_final_1" class="score-sheet-total">
                        <span id="score_sheet_bonus_1" class="score-sheet-bonus"></span>
                        <span id="score_sheet_total_1"></span>
                    </div>
                    <div id="score_sheet_final_2" class="score-sheet-total">
                        <span id="score_sheet_bonus_2" class="score-sheet-bonus"></span>
                        <span id="score_sheet_total_2"></span>
                    </div>
                    <div id="score_sheet_final_3" class="score-sheet-total">
                        <span id="score_sheet_bonus_3" class="score-sheet-bonus"></span>
                        <span id="score_sheet_total_3"></span></div>
                    <div id="score_sheet_final_4" class="score-sheet-total">
                        <span id="score_sheet_bonus_4" class="score-sheet-bonus"></span>
                        <span id="score_sheet_total_4"></span></div>
					<div id="score_sheet_final_5" class="score-sheet-total">
                        <span id="score_sheet_bonus_5" class="score-sheet-bonus"></span>
                        <span id="score_sheet_total_5"></span></div>
                </div>

</div>






<div id="board" class="board4p">
	<div class="slot_action_1 slot_action">Finisher</div>
	<div class="slot_action_2 slot_action">Finisher</div>
	<div class="slot_action_3 slot_action">Finisher</div>
	<div class="slot_action_4 slot_action">Finisher</div>
	<div class="slot_action_5 slot_action">Finisher</div>
	
	<div class="slot_action_6 slot_action">Setup</div>
	<div class="slot_action_7 slot_action">Setup</div>
	<div class="slot_action_8 slot_action">Setup</div>
	<div class="slot_action_9 slot_action">Setup</div>
	<div class="slot_action_10 slot_action">Setup</div>
	
	<div class="slot_action_11 slot_action">Advanced Move</div>
	<div class="slot_action_12 slot_action">Advanced Move</div>
	<div class="slot_action_13 slot_action">Advanced Move</div>
	<div class="slot_action_14 slot_action">Advanced Move</div>
	<div class="slot_action_15 slot_action">Advanced Move</div>
</div>
-->


<script type="text/javascript">


var jstpl_cardontable1 = '<div class="cardontable" id="cardontable_${player_id}_1" style="background-position:-${x}px -${y}px">\</div>';
var jstpl_cardontable2 = '<div class="cardontable" id="cardontable_${player_id}_2" style="background-position:-${x}px -${y}px">\</div>';
var jstpl_cardontable3 = '<div class="cardontable" id="cardontable_${player_id}_3" style="background-position:-${x}px -${y}px">\</div>';
var jstpl_cardontable4 = '<div class="cardontable" id="cardontable_${player_id}_4" style="background-position:-${x}px -${y}px">\</div>';


var jstpl_advancedCardOnTable1 = '<div class="advancedCardOnTable" id="advancedCardOnTable_${player_id}_1" style="background-position:-${x}px -${y}px">\</div>';
var jstpl_advancedCardOnTable2 = '<div class="advancedCardOnTable" id="advancedCardOnTable_${player_id}_2" style="background-position:-${x}px -${y}px">\</div>';
var jstpl_advancedCardOnTable3 = '<div class="advancedCardOnTable" id="advancedCardOnTable_${player_id}_3" style="background-position:-${x}px -${y}px">\</div>';
var jstpl_advancedCardOnTable4 = '<div class="advancedCardOnTable" id="advancedCardOnTable_${player_id}_4" style="background-position:-${x}px -${y}px">\</div>';





var jstpl_player_board = '\<div class="cp_board">\
    <div id="stoneicon_p${id}" class="gmk_stoneicon gmk_stoneicon_${color}">\
	<div class="str_p${id}">Strike <span id="strcount_p${id}">0</span> Strike Power <span id="strPowerCount_p${id}">0</span></div>\
	<div class="trw_p${id}">Throw <span id="trwcount_p${id}">0</span> Throw Power <span id="trwPowerCount_p${id}">0</span></div>\
	<div class="hld_p${id}">Hold <span id="hldcount_p${id}">0</span> Hold Power <span id="hldPowerCount_p${id}">0</span></div>\
	<div class="fce_p${id}">Face <span id="fcecount_p${id}">0</span> Face Power <span id="fcePowerCount_p${id}">0</span></div>\
	<div class="hel_p${id}">Heel <span id="helcount_p${id}">0</span> Face Power <span id="helPowerCount_p${id}">0</span></div>\
	</div></div>';


</script>  

{OVERALL_GAME_FOOTER}
