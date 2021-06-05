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
	<div><button>Hide Board</button></div>
</div>



<div id="advancedMoves_wrap" class="whiteblock">
    <h3>Advanced Moves</h3>
    <div id="advancedMoves">
    </div>
</div>





<div id="playertables">

    <!-- BEGIN player -->
    <div class="playertable whiteblock circle">
        <div class="playertablename" style="color:#{PLAYER_COLOR}">
            {PLAYER_NAME}
        </div>
        <div class="playertablecard_1" id="playertablecard_{PLAYER_ID}_1"></div>
		<div class="playertablecard_2" id="playertablecard_{PLAYER_ID}_2"></div>
		<div class="playertablecard_3" id="playertablecard_{PLAYER_ID}_3"></div>
		<div class="playertablecard_4" id="playertablecard_{PLAYER_ID}_4"></div>    
    </div>
    <!-- END player -->

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

<script type="text/javascript">


var jstpl_cardontable1 = '<div class="cardontable" id="cardontable_${player_id}_1" style="background-position:-${x}px -${y}px">\</div>';
var jstpl_cardontable2 = '<div class="cardontable" id="cardontable_${player_id}_2" style="background-position:-${x}px -${y}px">\</div>';
var jstpl_cardontable3 = '<div class="cardontable" id="cardontable_${player_id}_3" style="background-position:-${x}px -${y}px">\</div>';
var jstpl_cardontable4 = '<div class="cardontable" id="cardontable_${player_id}_4" style="background-position:-${x}px -${y}px">\</div>';


var jstpl_player_board = '\<div class="cp_board">\
    <div id="stoneicon_p${id}" class="gmk_stoneicon gmk_stoneicon_${color}">\
	<div class="str_p${id}">STR</div><span id="strcount_p${id}">0</span>\
	<div class="trw_p${id}">TRW</div><span id="trwcount_p${id}">0</span>\
	<div class="hld_p${id}">HLD</div><span id="hldcount_p${id}">0</span>\
	<div class="alg_p${id}">ALG</div><span id="algcount_p${id}">0</span>\
	</div></div>';


</script>  

{OVERALL_GAME_FOOTER}
