//C  ADVENTURES
//
//C  CURRENT LIMITS:
//C	9650 WORDS OF MESSAGE TEXT (LINES, LINSIZ) .
var LINSIZ  = 9650;
var LINES 	= new Array();

//C	750 TRAVEL OPTIONS (TRAVEL, TRVSIZ) .
var TRVSIZ  = 750;
var TRAVEL 	= new Array();

//C	300 VOCABULARY WORDS (KTAB, ATAB, TABSIZ) .
var TABSIZ  = 300;
var KTAB 	= new Array();
var ATAB 	= new Array();

//C	150 LOCATIONS (LTEXT, STEXT, KEY, COND, ABB, ATLOC, LOCSIZ) .
var LOCSIZ  = 150;	
var LTEXT 	= new Array();
var STEXT 	= new Array();
var KEY 	= new Array();
var COND 	= new Array();
var ABB 	= new Array();  
var ATLOC 	= new Array();

//C	100 OBJECTS (PLAC, PLACE, FIXD, FIXED, LINK (TWICE) , PTEXT, PROP) .
//DIMENSION LINK[200]
var OBJSIZ  = 100;	
var PLAC 	= new Array();
var PLACE 	= new Array();
var FIXD 	= new Array();
var FIXED 	= new Array();
var LINK 	= new Array();
var PTEXT 	= new Array();
var PROP 	= new Array();
var MAXTRS  = 79; // TREASURES ARE OBJECTS 50 THROUGH MAXTRS (CURRENTLY 79)
var TALLY   = 0;  // TALLY KEEPS TRACK OF HOW MANY ARE NOT YET FOUND
var TALLY2  = 0;  // TALLY2 COUNTS HOW MANY CAN NEVER BE FOUND (E.G. IF LOST BIRD OR BRIDGE)

//C	 35 "ACTION" VERBS (ACTSPK, VRBSIZ) .
var VRBSIZ  = 35;
var ACTSPK 	= new Array();

//C	205 RANDOM MESSAGES (RTEXT, RTXSIZ) .
var RTXSIZ  = 205;
var RTEXT 	= new Array();

//C	 12 DIFFERENT PLAYER CLASSIFICATIONS (CTEXT, CVAL, CLSMAX) .
var CLSMAX  = 12;
var CTEXT 	= new Array();
var CVAL 	= new Array();

//C	 20 HINTS, LESS 3 (HINTLC, HINTED, HINTS, HNTSIZ) .
//DIMENSION HINTS[20,4]
var HNTSIZ  = 20;
var HINTLC 	= new Array();
var HINTED 	= new Array();
var HINTS   = new Array();
while (HINTS.push([]) < 20); // make 20 lines
var HNTMAX  = 0; 

//C	 35 MAGIC MESSAGES (MTEXT, MAGSIZ) .
//var MAGSIZ  = 35;
//var MTEXT	= new Array();

//DIMENSION DSEEN[6],DLOC[6],ODLOC[6],HNAME[4]
var DSEEN 	= new Array();
var DLOC 	= new Array();
var ODLOC 	= new Array();
var DFLAG   = 0;
var DALTLC  = 18;
var CHLOC   = 114;
var CHLOC2  = 140;
var DTOTAL  = 0;
var ATTACK  = 0;
var STICK   = 0;

// MNEMONICS
var KEYS, LAMP, GRATE, CAGE, ROD, ROD2, STEPS, BIRD, DOOR, PILLOW, SNAKE;
var FISSUR, TABLET, CLAM, OYSTER, MAGZIN, DWARF, KNIFE, FOOD, BOTTLE;
var WATER, OIL, PLANT, PLANT2, AXE, MIRROR, DRAGON, CHASM, TROLL, TROLL2;
var BEAR, MESSAG, VEND, BATTER, NUGGET, COINS, CHEST, EGGS, TRIDNT, VASE;
var EMRALD, PYRAM, PEARL, RUG, CHAIN, SPICES, BACK, LOOK, CAVE, ENTRNC;
var DPRSSN, ENTER, VERBSAY, LOCK, THROW, FIND, INVENT;

// Global variables
var WZDARK; // SAYS WHETHER THE LOC HE'S LEAVING WAS DARK
var LMWARN; // SAYS WHETHER HE'S BEEN WARNED ABOUT LAMP GOING DIM
var CLOSNG; // SAYS WHETHER ITS CLOSING TIME YET
var PANIC; // SAYS WHETHER HE'S FOUND OUT HE'S TRAPPED IN THE CAVE
var CLOSED; // SAYS WHETHER WE'RE ALL THE WAY CLOSED
var GAVEUP; // SAYS WHETHER HE EXITED VIA "QUIT"
var SCORNG; // SCORNG INDICATES TO THE SCORE ROUTINE WHETHER WE'RE DOING A "SCORE" COMMAND
var DEMO; // TRUE IF THIS IS A PRIME-TIME DEMONSTRATION GAME
var YEA; // RANDOM YES/NO REPLY

// OTHER RANDOM FLAGS AND COUNTERS, AS FOLLOWS:
var TURNS; // TALLIES HOW MANY COMMANDS HE'S GIVEN (IGNORES YES/NO) 
var LIMIT; // LIFETIME OF LAMP (NOT SET HERE) 
var IWEST; // HOW MANY TIMES HE'S SAID "WEST" INSTEAD OF "W"
var KNFLOC; // 0 IF NO KNIFE HERE, LOC IF KNIFE HERE, -1 AFTER CAVEAT
var DETAIL; // HOW OFTEN WE'VE SAID "NOT ALLOWED TO GIVE MORE DETAIL"
var ABBNUM; // HOW OFTEN WE SHOULD PRINT NON-ABBREVIATED DESCRIPTIONS
var MAXDIE; // NUMBER OF REINCARNATION MESSAGES AVAILABLE (UP TO 5) 
var NUMDIE; // NUMBER OF TIMES KILLED SO FAR
var HOLDNG; // NUMBER OF OBJECTS BEING CARRIED
var DKILL; // NUMBER OF DWARVES KILLED (UNUSED IN SCORING, NEEDED FOR MSG) 
var FOOBAR; // CURRENT PROGRESS IN SAYING "FEE FIE FOE FOO".
var BONUS; // USED TO DETERMINE AMOUNT OF BONUS IF HE REACHES CLOSING
var CLOCK1; // NUMBER OF TURNS FROM FINDING LAST TREASURE TILL CLOSING
var CLOCK2; // NUMBER OF TURNS FROM FIRST WARNING TILL BLINDING FLASH
var DETAIL; 

//DATA SETUP/0/,BLKLIN/ true/
var SETUP = 0; // not useful??
var BLKLIN = true;
var LOC;
var NEWLOC;
var OLDLOC;
var OLDLC2;
var IDONDX;
var MXSCOR;
var SCORE = 0;
var TURNS = 0;
var CLSSES;

var HOLDNG;

//used for magic ...
var WKDAY;
var WKEND;
var HOLID;
var HBEGIN;
var HEND;
var HNAME	= new Array();
var SHORT;
var MAGIC;
var MAGNM;
//... until here
var LATNCY;
var SAVED;
var SAVET;
var YES;
var START;

var gameOver = false;


// globals holding 1st 2 words of input
var gWord1 = '';
var gWord2 = '';
var gCommand = -1; // given command (1st word) mod 1000
var gCommType = 0; // type of command (0-3) - int div of 1st word and 1000
var WD1; // 1st 5 chars of word1 in uppercase
var WD2; // 1st 5 chars of word2 in uppercase
var VERB; // 'translated' word1
var OBJ;  // 'translated' word2


var classic = false;

function startup() {
	
	if (classic) {
		// initialize variables for I/O
		commandLine = document.getElementById("commandLine");
		displayText = document.getElementById('displayText');
	    // Install command line listener
	    commandLine.onkeypress = function(event) {
	    	if (event.keyCode == 13) processCommand();
	    };
		
		out('Initializing...');
		// read the database
		initDatabase();
		out('INIT Done');
		
		start();
	}
	else
		startc();
}

function start() {
	
	// START-UP, DWARF STUFF
	// 1
	// DEMO = START(0) -> no demos 
	// CALL MOTD( false) 
	I = RAN(1);
	HINTED[3] = YES(65,1,0); // Check if he wants a hint
	NEWLOC = 1; // Set the new location
	//SETUP = 3
	if (HINTED[3]) LIMIT = 1000;
	else LIMIT = 330; // The limit is 330 moves unless he has taken a hint
	
	// start calling functions
	
	// CAN'T LEAVE CAVE ONCE IT'S CLOSING (EXCEPT BY MAIN OFFICE) .
	// 2 we come back here...
	if (NEWLOC <  9 && NEWLOC != 0 && CLOSNG) {
		RSPEAK(130) ; /* "This exit is closed. Please leave via main office." */
		NEWLOC = LOC;
		if (!PANIC) CLOCK2 = 15;
		PANIC = true;
	}
	// SEE IF A DWARF HAS SEEN HIM AND HAS COME FROM WHERE HE WANTS TO GO.  IF SO,
	// THE DWARF'S BLOCKING HIS WAY.  IF COMING FROM PLACE FORBIDDEN TO PIRATE
	// (DWARVES ROOTED IN PLACE)  LET HIM GET OUT (AND ATTACKED) .
	// 71
	if (NEWLOC != LOC && !FORCED(LOC) && !BITSET(LOC,3)) {
		for (var i = 1; i <= 5; i++) {
			if (ODLOC[i] == NEWLOC && DSEEN[i]) {
				NEWLOC = LOC;
				RSPEAK(2); /* A little dwarf with a big knife blocks your way. */
				break;
			}
		}
	}
	LOC = NEWLOC;
	// DWARF STUFF.  SEE EARLIER COMMENTS FOR DESCRIPTION OF VARIABLES.  REMEMBER
	// SIXTH DWARF IS PIRATE AND IS THUS VERY DIFFERENT EXCEPT FOR MOTION RULES.
	//
	// FIRST OFF, DON'T LET THE DWARVES FOLLOW HIM INTO A PIT OR A WALL.  ACTIVATE
	// THE WHOLE MESS THE FIRST TIME HE GETS AS FAR AS THE HALL OF MISTS (LOC 15) .
	// IF NEWLOC IS FORBIDDEN TO PIRATE (IN PARTICULAR, IF IT'S BEYOND THE TROLL
	// BRIDGE) , BYPASS DWARF STUFF.  THAT WAY PIRATE CAN'T STEAL RETURN TOLL, AND
	// DWARVES CAN'T MEET THE BEAR.  ALSO MEANS DWARVES WON'T FOLLOW HIM INTO DEAD
	// END IN MAZE, BUT C'EST LA VIE.  THEY'LL WAIT FOR HIM OUTSIDE THE DEAD END.

	if (LOC != 0 && !FORCED(LOC) && !BITSET(NEWLOC,3)) {
		if (DFLAG == 0) if (LOC >= 15) DFLAG = 1; // reached hall of mists, activate dwarves
		else if (DFLAG != 1) {
			DTOTAL = 0;
			ATTACK = 0;
			STICK = 0;
			for (var i = 1; i <= 6; i++) moveDwarf(i);
			// NOW WE KNOW WHAT'S HAPPENING.  LET'S TELL THE POOR SUCKER ABOUT IT.
			if (DTOTAL != 0) checkAttack();
		}
		else if (LOC >= 15 && !PCT(95)) { // enter Hall of Mists
			firstDwarf();
		}
	}
	// DESCRIBE THE CURRENT LOCATION AND (MAYBE)  GET NEXT COMMAND.
	// PRINT TEXT FOR CURRENT LOC.
	//
	//2000
	describeLocation();
	//2009
	//K = 54;
	//2010	
	//SPK = K;
	//2011	
	//RSPEAK(SPK);

	//2012
	VERB = 0;
	OBJ = 0;

	// KICK THE RANDOM NUMBER GENERATOR JUST TO ADD VARIETY TO THE CHASE.  ALSO,
	// IF CLOSING TIME, CHECK FOR ANY OBJECTS BEING TOTED WITH PROP < 0 AND SET
	// THE PROP TO -1-PROP.  THIS WAY OBJECTS WON'T BE DESCRIBED UNTIL THEY'VE
	// BEEN PICKED UP AND PUT DOWN SEPARATE FROM THEIR RESPECTIVE PILES.  DON'T
	// TICK CLOCK1 UNLESS WELL INTO CAVE (AND NOT AT Y2) .
	if (CLOSED) { //GOTO 2605
		if (PROP[OYSTER] < 0 && TOTING(OYSTER)) PSPEAK(OYSTER,1);
		/* Interesting.  There seems to be something written on the underside of the oyster. */
		for (var i = 1; i <= 100; i++) {
			if (TOTING(i)  && PROP[i] < 0) PROP[i] = -1-PROP[i];
		}
	}
	//2605



	WZDARK = DARK();
	if (KNFLOC > 0 && KNFLOC !=  LOC) KNFLOC = 0;
	i = RAN(1); 
//		CALL GETIN(WD1,WD1X,WD2,WD2X) 
}

/**
 * getCommand - process the input from the user and store the commands
 * @return true if a know command was given
 */
function getCommand() {
	var text = commandLine.value;
	
	var words = text.match(/\S+/g) || [];
	
	commandLine.value = '';
	out('\n' + '> ' + text);
	
    word1 = (words.length > 0) ? words[0] : '';
    word2 = (words.length > 1) ? words[1] : '';

	WD1 = (word1 == '') ? 0 : word1.substr(0,5).toUpperCase();
	WD2 = (word2 == '') ? 0 : word2.substr(0,5).toUpperCase();
	
	VERB = (WD1 == 0) ? -1 : VOCAB(WD1,-1);
	gCommand = VERB % 1000;
	gCommType = int(VERB / 1000); // make integer
	OBJ = (WD2 == 0) ? -1 : VOCAB(WD2,-1) % 1000; // not sure if %1000

	//Give focus to commandLine if not a touch device.
	if (!isTouch) commandLine.focus();
	
	return (VERB != -1);
}

/**
 * processCommand - main routine, users input is validated and acted upon
 */
function processCommand() {
	
	if (!getCommand()) {
		if (PCT(20)) RSPEAK(61);  /* What? */
		else if (PCT(20)) RSPEAK(13);  /* I don't understand that! */
		else RSPEAK(60);  /* I don't know that word. */
		return;
		//GOTO 2600
	}
	else {
		switch (gCommType) {
			case 0: // motion
				//goto 8
				LOC = processMove();
				//LOC = NEWLOC;
				if (FORCED(LOC)) LOC = processMove();
				else if (DARK()) checkPit();
				describeLocation();
				checkHints();
				break;
			case 1: // object
				processObject();
				break;
			case 2: // action
				//goto 4000
				//VERB = command % 1000;
				if (!processAction(gCommand%1000)) RSPEAK(ACTSPK[VERB]); 
				break;
			case 3: // special
				//goto 2010
				if (gCommand >= 1 && gCommand <= 5) actionFoo();
				else RSPEAK(gCommand);
				break;
			default: throw 'VOCABULARY TYPE (N/1000) NOT BETWEEN 0 AND 3';
		}
	}
	
	//processInput();
	//if (normalInput) processEvents();
	updateStatusBar(SCORE, TURNS);
}

// FIGURE OUT THE NEW LOCATION
//
// GIVEN THE CURRENT LOCATION IN "LOC", AND A MOTION VERB NUMBER IN "K", PUT
// THE NEW LOCATION IN "NEWLOC".  THE CURRENT LOC IS SAVED IN "OLDLOC" IN CASE
// HE WANTS TO RETREAT.  THE CURRENT OLDLOC IS SAVED IN OLDLC2, IN CASE HE
// DIES.  (IF HE DOES, NEWLOC WILL BE LIMBO, AND OLDLOC WILL BE WHAT KILLED
// HIM, SO WE NEED OLDLC2, WHICH IS THE LAST PLACE HE WAS SAFE.)
/**
 * 
 * @param motion
 * 8
 */
function processMove() {
	var travelVerb, 
		commandVerb = gCommand,
		destination, // entry from TRAVEL array
		condition, // destination/1000
		validMove = false, // true when entry found in table
		index, 
		nextLoc,
		newLoc = LOC;

	if (KEY[LOC] == 0) throw 'LOCATION HAS NO TRAVEL ENTRIES'; // BUG(26)
	if (commandVerb == NULL) return;
	if (commandVerb == BACK) { // 20
		commandVerb = goBack();
		if (commandVerb == 0) return newLoc; 
	} 
	if (commandVerb == LOOK) { // 30
		if (DETAIL < 3) RSPEAK(15);
		/* Sorry, but I am not allowed to give more detail.  I will repeat the long description of your location.*/
		DETAIL++;
		WZDARK = false;
		ABB[LOC] = 0;
		return newLoc;
	} 
	if (commandVerb == CAVE) { // 40
		if (LOC < 8) RSPEAK(57); 
		/* I don't know where the cave is, but hereabouts no stream can run on the surface for long.  I would try the stream. */  
		else RSPEAK(58);
		/* I need more detailed instructions to do that. */
		return newLoc;
	} 
	if (WD1 == 'WEST') {
		IWEST++;
		if (IWEST == 10) RSPEAK(17); /* If you prefer, simply type w rather than west. */
	}
	if (WD1 == 'ENTER' && (WD2 == 'STREA' || WD2 == 'WATER')) {
		if (LIQLOC(LOC) == WATER) RSPEAK(70); /* Your feet are now wet. */
		else RSPEAK(43); /* Where? */
		return newLoc;
	}
//	if ((WD1 == 'WATER' || WD1 == 'OIL') && (WD2 == 'PLANT' || WD2 == 'DOOR')) {
//		if (AT[VOCAB(WD2, 1)]) WD2 = 'POUR';
//	}
//	//	if (WD1 == 'ENTER' && WD2 !=  0) GOTO 2800

	OLDLC2 = OLDLOC;
	OLDLOC = LOC;
	
	// find traveloption
	index = KEY[LOC];
	while (true) {
		travelVerb = Math.abs(TRAVEL[index]) % 1000;
        if (commandVerb == travelVerb) {
            validMove = true;
            break;
        }
		if(TRAVEL[index] < 0) break;
		index++;
	}
        
	if (!validMove) {
        RSPEAK(wrongMove(commandVerb));
        return newLoc;
    }

    destination = int(TRAVEL[index]/1000);
    condition = int(destination/1000);

    // 12
    while(!checkCondition(condition)) { // check if conditions are met
        do { // find travel option
            if (TRAVEL[index] < 0) throw 'CONDITIONAL TRAVEL ENTRY WITH NO ALTERNATIVE';
            nextLoc = int(Math.abs(TRAVEL[++index])/1000);
        } while(nextLoc == destination);
        destination = nextLoc;
        condition = int(destination/1000);
    }
    // now we have a location to goto
	newLoc = destination % 1000;
	
	if (newLoc > 300) {
		if (newLoc <= 500) newLoc = specialMotions(newLoc, index);
		else {
			RSPEAK(newLoc - 500);
			newLoc = LOC;
		}
	}
	NEWLOC = newLoc;
	return newLoc;
}

/**
 * checkCondition - validate travel option, see if conditions are met
 * @param condition to check
 * @return true when new destination can be reached (false if not)
 */
function checkCondition(condition) {
    var object = condition % 100;
    if (condition === 0) return true;
    if (condition <= 100) return PCT(condition);
    if (condition <= 200) return TOTING(object);
    if (condition <= 300) return TOTING(object) || AT(object);
    return PROP[object] != int(condition/100)-3;
}
	  
//
//C  SPECIAL MOTIONS COME HERE.  LABELLING CONVENTION: STATEMENT NUMBERS NNNXX
//C  (XX = 00-99)  ARE USED FOR SPECIAL CASE NUMBER NNN (NNN = 301-500) .
/**
 * specialMotions
 * @param newLoc
 * @param index
 * @return
 */
function specialMotions(newLoc, index) {
	
	// TRAVEL 301.  PLOVER-ALCOVE PASSAGE.  CAN CARRY ONLY EMERALD.  NOTE: TRAVEL
	// TABLE MUST INCLUDE "USELESS" ENTRIES GOING THROUGH PASSAGE, WHICH CAN NEVER
	// BE USED FOR ACTUAL MOTION, BUT CAN BE SPOTTED BY "GO BACK".
	if (newLoc == 301) {
		newLoc = 99 + 100 - LOC;
		if (HOLDNG !== 0 && (HOLDNG != 1 || !TOTING(EMRALD))) {
			newLoc = LOC;
			RSPEAK(117);
			/* Something you're carrying won't fit through the tunnel with you.
               You'd best take inventory and drop something.*/
		}
		return newLoc;
	}
	// TRAVEL 302.  PLOVER TRANSPORT.  DROP THE EMERALD (ONLY USE SPECIAL TRAVEL IF
	// TOTING IT) , SO HE'S FORCED TO USE THE PLOVER-PASSAGE TO GET IT OUT.  HAVING
	// DROPPED IT, GO BACK AND PRETEND HE WASN'T CARRYING IT AFTER ALL.
	if (newLoc == 302) {
		var nextLoc,
			destination = int(TRAVEL[index]/1000);
		DROP(EMRALD,LOC);
		do { // find travel option
            if (TRAVEL[index] < 0) throw 'CONDITIONAL TRAVEL ENTRY WITH NO ALTERNATIVE';
            nextLoc = int(Math.abs(TRAVEL[++index])/1000);
        } while(nextLoc == destination);
		return newLoc;
	}
	// TRAVEL 303.  TROLL BRIDGE.  MUST BE DONE ONLY AS SPECIAL MOTION SO THAT
	// DWARVES WON'T WANDER ACROSS AND ENCOUNTER THE BEAR.  (THEY WON'T FOLLOW THE
	// PLAYER THERE BECAUSE THAT REGION IS FORBIDDEN TO THE PIRATE.)   IF
	// PROP[TROLL] = 1, HE'S CROSSED SINCE PAYING, SO STEP OUT AND BLOCK HIM.
	// (STANDARD TRAVEL ENTRIES CHECK FOR PROP[TROLL] = 0.)   SPECIAL STUFF FOR BEAR.
	if (newLoc == 303) {
		if (PROP[TROLL] == 1){
			PSPEAK(TROLL,1);
			PROP[TROLL] = 0;
			MOVE(TROLL2, 0);
			MOVE(TROLL2 + 100, 0);
			MOVE(TROLL, PLAC[TROLL]);
			MOVE(TROLL + 100, FIXD[TROLL]);
			JUGGLE(CHASM);
			newLoc = LOC;
			return newLoc;
		}
		else {
			newLoc = PLAC[TROLL] + FIXD[TROLL] - LOC;
			if (PROP[TROLL] == 0) PROP[TROLL] = 1;
			if (!TOTING(BEAR)) return newLoc;
			RSPEAK(162);
			/* Just as you reach the other side, the bridge buckles beneath the
   		       weight of the bear, which was still following you around.  You
   		       scrabble desperately for support, but as the bridge collapses you
   		        stumble back and fall into the chasm. */ 
			PROP[CHASM] = 1;
			PROP[TROLL] = 2;
			DROP(BEAR, newLoc); 
			FIXED[BEAR] = -1;
			PROP[BEAR] = 3;
			if (PROP[SPICES] < 0) TALLY2++;
			OLDLC2 = newLoc;
			label99dead(); // won't return from here
		}
	}
	throw 'SPECIAL TRAVEL (500>L>300) EXCEEDS GOTO LIST';
}

//C  HANDLE "GO BACK".  LOOK FOR VERB WHICH GOES FROM LOC TO OLDLOC, OR TO OLDLC2
//C  IF OLDLOC HAS FORCED-MOTION.  K2 SAVES ENTRY -> FORCED LOC -> PREVIOUS LOC.
//
/**
 * HANDLE "GO BACK"
 * 20
 */
function goBack() { 
	var backLoc = OLDLOC,
		index, firstIndex = KEY[LOC],
		nextLoc = 0,
		forcedIndex = 0;
	
	if (FORCED(backLoc)) backLoc = OLDLC2;
	OLDLC2 = OLDLOC;
	OLDLOC = LOC;
	 
	if (backLoc == LOC) {
		RSPEAK(91);
		return 0;
	}
	else {
		for (index = firstIndex; TRAVEL[index] > 0; index++) {
			nextLoc = int(Math.abs(TRAVEL[index])/1000)%1000;
			if (nextLoc == backLoc) return Math.abs(travel[index])%1000;
			if (nextLoc <= 300) {
				if (FORCED(nextLoc) && int(Math.abs(TRAVEL[KEY[nextLoc]])/1000)%1000 == backLoc) forcedIndex = index;
			}
		}
		index = forcedIndex;
		if (index != 0) return Math.abs(travel[index])%1000;
		else {
			RSPEAK(140);
			return 0;
		}
	}
}

/**
 * NON-APPLICABLE MOTION.  VARIOUS MESSAGES DEPENDING ON WORD GIVEN.
 * @param motion
 * 50
 */
function wrongMove(motion) {
	if (motion >= 43 && motion <= 50) return 9; /* There is no way to go that direction.*/
	if (motion == 29 || motion == 30) return 9; /* There is no way to go that direction.*/
	if (motion == 7 || motion == 36 || motion == 37) return 10; /* I am unsure how you are facing.  Use compass points or nearby objects. */
	if (motion == 11 || motion == 19) return 11; /* I don't know in from out here.  Use compass points or name something in the general direction you want to go. */
	if (VERB == FIND || VERB == INVENT) return 59; /* I can only tell you what you see as you move about and manipulate things.  I cannot tell you where remote things are. */
	if (motion == 62 || motion == 65) return 42; /* Nothing happens.*/
	if (motion == 17) return 80; /* Which way? */
	return 12; /* I don't know how to apply that word here.*/
}

// ANALYSE A VERB.  REMEMBER WHAT IT WAS, GO BACK FOR OBJECT IF SECOND WORD
// UNLESS VERB IS "SAY", WHICH SNARFS ARBITRARY SECOND WORD.
/**
 * 
 * @param verb
 * 4000
 */
function processAction(verb) {
	var action = function() {};
	VERB = verb;
	
	//if (WD2 != 0 && VERB != SAY)GOTO 2800
	//IF(VERB.EQ.SAY)OBJ=WD2
	//IF(OBJ.NE.0)GOTO 4090
	switch (verb) {
	case 1: // TAKE	
		action = actionTake; break;
	case 2: // DROP	
		action = actionDiscard; break;
	case 3: // SAY	
		action = actionSay; break;
	case 4: // OPEN	
		action = actionLockUnlock; break;
	case 5: // NOTH	
		action = noAction; break;
	case 6: // LOCK	
		action = actionLockUnlock; break;
	case 7: // ON	
		action = actionLightOn; break;
	case 8: // OFF	
		action = actionLightOff; break; // LAMP should be ignored, OFF works ok
	case 9: // WAVE	
		action = actionWave; break;
	case 10: // CALM	
		action = noAction; break;
	case 11: // WALK	
		action = noAction; break;
	case 12: // KILL	
		action = actionAttack; break;
	case 13: // POUR	
		action = actionPour; break;
	case 14: // EAT	
		action = actionEat; break;
	case 15: // DRNK	
		action = actionDrink; break;
	case 16: // RUB	
		action = actionRub; break;
	case 17: // TOSS	
		action = actionThrow; break;
	case 18: // QUIT	
		action = actionQuit; break;
	case 19: // FIND	
		action = actionFind; break;
	case 20: // INVN	
		action = noAction; break;
	case 21: // FEED	
		action = actionFeed; break;
	case 22: // FILL	
		action = actionFill; break;
	case 23: // BLST	
		action = actionBlast; break;
	case 24: // SCOR	
		action = actionScore; break;
	case 25: // FOO	
		action = actionFoo; break;
	case 26: // BRF	
		action = actionBrief; break;
	case 27: // READ	
		action = actionRead; break;
	case 28: // BREK	
		action = actionBreak; break;
	case 29: // WAKE	
		action = actionWake; break;
	case 30: // SUSP	
		action = actionSuspend; break;
	case 31: // HOUR	
		action = actionHours; break;
	}
	return action();
}

// ANALYSE AN OBJECT WORD.  SEE IF THE THING IS HERE, WHETHER WE'VE GOT A VERB
// YET, AND SO ON.  OBJECT MUST BE HERE UNLESS VERB IS "FIND" OR "INVENT(ORY)"
// (AND NO NEW VERB YET TO BE ANALYSED).  WATER AND OIL ARE ALSO FUNNY, SINCE
// THEY ARE NEVER ACTUALLY DROPPED AT ANY LOCATION, BUT MIGHT BE HERE INSIDE
// THE BOTTLE OR AS A FEATURE OF THE LOCATION.
/**
 * 
 * @param object
 * 5000/5100
 */
function processObject(object) { /* needs to be checked on correct processing */
	var canSee = false;
	OBJ = object;
	if (FIXED[object] != LOC && !HERE(object)) {//GOTO 5100
		if (object == GRATE) {
			if (LOC == 1 || LOC == 4 || LOC == 7) {
				processMove(DPRSSN);
				return;
			}
			if (LOC > 9 && LOC < 15) {
				processMove(ENTRNC);
				return;
			}
		}
		if (object == DWARF) {
			for (var i = 1; i <= 5; i++) 
				if (DLOC[i] == LOC && DFLAG >= 2) canSee = true;
		}
		if ((object == LIQ() && HERE(BOTTLE)) || object == LIQLOC(LOC)) canSee = true;
		if (object == PLANT && AT(PLANT2) && PROP[PLANT2] != 0) {
			OBJ = PLANT2;
			canSee = true;
		}
		if (object == KNIFE && KNFLOC == LOC) {
			KNFLOC = -1;
			RSPEAK(116);
			/* The dwarves' knives vanish as they strike the walls of the cave.*/
			return;
		}
		if (object == ROD && HERE(ROD2)) {
			OBJ = ROD2;
			canSee = true;
		}
		//if ((verb == FIND || verb == INVENT) && objWd == ""){}
	}
	
	if (canSee) { 
		if (WD2 != 0) // GOTO 2800 get second word
		if (VERB != 0) // GOTO 4090 processAction
		sayWhatToDo(word1);
	} 
	else sayISeeNo(word1);

}

/**
 * 
 * @param object
 */
function sayISeeNo(object) {
	out('I see no ' + object + ' here.');
}

/**
 * 
 * @param object
 */
function sayWhatToDo(object) {
	out('What do you want to do with the ' + object + '?');
}


//C  DESCRIPTION OF THE DATABASE FORMAT
//C
//C
//C  THE DATA FILE CONTAINS SEVERAL SECTIONS.  EACH BEGINS WITH A LINE CONTAINING
//C  A NUMBER IDENTIFYING THE SECTION, AND ENDS WITH A LINE CONTAINING "-1".
//C
//C  SECTION 1: LONG FORM DESCRIPTIONS.  EACH LINE CONTAINS A LOCATION NUMBER,
//C	A TAB, AND A LINE OF TEXT.  THE SET OF (NECESSARILY ADJACENT)  LINES
//C	WHOSE NUMBERS ARE X FORM THE LONG DESCRIPTION OF LOCATION X.
//C  SECTION 2: SHORT FORM DESCRIPTIONS.  SAME FORMAT AS LONG FORM.  NOT ALL
//C	PLACES HAVE SHORT DESCRIPTIONS.
//C  SECTION 3: TRAVEL TABLE.  EACH LINE CONTAINS A LOCATION NUMBER (X) , A SECOND
//C	LOCATION NUMBER (Y) , AND A LIST OF MOTION NUMBERS (SEE SECTION 4) .
//C	EACH MOTION REPRESENTS A VERB WHICH WILL GO TO Y IF CURRENTLY AT X.
//C	Y, IN TURN, IS INTERPRETED AS FOLLOWS.  LET M = Y/1000, N = Y MOD 1000.
//C		IF N<= 300	IT IS THE LOCATION TO GO TO.
//C		IF 300<N<= 500	N-300 IS USED IN A COMPUTED GOTO TO
//C					A SECTION OF SPECIAL CODE.
//C		IF N>500	MESSAGE N-500 FROM SECTION 6 IS PRINTED,
//C					AND HE STAYS WHEREVER HE IS.
//C	MEANWHILE, M SPECIFIES THE CONDITIONS ON THE MOTION.
//C		IF M = 0		IT'S UNCONDITIONAL.
//C		IF 0<M<100	IT IS DONE WITH M% PROBABILITY.
//C		IF M = 100	UNCONDITIONAL, BUT FORBIDDEN TO DWARVES.
//C		IF 100<M<= 200	HE MUST BE CARRYING OBJECT M-100.
//C		IF 200<M<= 300	MUST BE CARRYING OR IN SAME ROOM AS M-200.
//C		IF 300<M<= 400	PROP[M MOD 100] MUST *NOT* BE 0.
//C		IF 400<M<= 500	PROP[M MOD 100] MUST *NOT* BE 1.
//C		IF 500<M<= 600	PROP[M MOD 100] MUST *NOT* BE 2, ETC.
//C	IF THE CONDITION (IF ANY)  IS NOT MET, THEN THE NEXT *DIFFERENT*
//C	"DESTINATION" VALUE IS USED (UNLESS IT FAILS TO MEET *ITS* CONDITIONS,
//C	IN WHICH CASE THE NEXT IS FOUND, ETC.) .  TYPICALLY, THE NEXT DEST WILL
//C	BE FOR ONE OF THE SAME VERBS, SO THAT ITS ONLY USE IS AS THE ALTERNATE
//C	DESTINATION FOR THOSE VERBS.  FOR INSTANCE:
//C		15	110022	29	31	34	35	23	43
//C		15	14	29
//C	THIS SAYS THAT, FROM LOC 15, ANY OF THE VERBS 29, 31, ETC., WILL TAKE
//C	HIM TO 22 IF HE'S CARRYING OBJECT 10, AND OTHERWISE WILL GO TO 14.
//C		11	303008	49
//C		11	9	50
//C	THIS SAYS THAT, FROM 11, 49 TAKES HIM TO 8 UNLESS PROP[3] = 0, IN WHICH
//C	CASE HE GOES TO 9.  VERB 50 TAKES HIM TO 9 REGARDLESS OF PROP[3].
//C  SECTION 4: VOCABULARY.  EACH LINE CONTAINS A NUMBER (N) , A TAB, AND A
//C	FIVE-LETTER WORD.  CALL M = N/1000.  IF M = 0, THEN THE WORD IS A MOTION
//C	VERB FOR USE IN TRAVELLING (SEE SECTION 3) .  ELSE, IF M = 1, THE WORD IS
//C	AN OBJECT.  ELSE, IF M = 2, THE WORD IS AN ACTION VERB (SUCH AS "CARRY"
//C	OR "ATTACK") .  ELSE, IF M = 3, THE WORD IS A SPECIAL CASE VERB (SUCH AS
//C	"DIG")  AND N MOD 1000 IS AN INDEX INTO SECTION 6.  OBJECTS FROM 50 TO
//C	(CURRENTLY, ANYWAY)  79 ARE CONSIDERED TREASURES (FOR PIRATE, CLOSEOUT) .
//C  SECTION 5: OBJECT DESCRIPTIONS.  EACH LINE CONTAINS A NUMBER (N) , A TAB,
//C	AND A MESSAGE.  IF N IS FROM 1 TO 100, THE MESSAGE IS THE "INVENTORY"
//C	MESSAGE FOR OBJECT N.  OTHERWISE, N SHOULD BE 000, 100, 200, ETC., AND
//C	THE MESSAGE SHOULD BE THE DESCRIPTION OF THE PRECEDING OBJECT WHEN ITS
//C	PROP VALUE IS N/100.  THE N/100 IS USED ONLY TO DISTINGUISH MULTIPLE
//C	MESSAGES FROM MULTI-LINE MESSAGES; THE PROP INFO ACTUALLY REQUIRES ALL
//C	MESSAGES FOR AN OBJECT TO BE PRESENT AND CONSECUTIVE.  PROPERTIES WHICH
//C	PRODUCE NO MESSAGE SHOULD BE GIVEN THE MESSAGE ">$<".
//C  SECTION 6: ARBITRARY MESSAGES.  SAME FORMAT AS SECTIONS 1, 2, AND 5, EXCEPT
//C	THE NUMBERS BEAR NO RELATION TO ANYTHING (EXCEPT FOR SPECIAL VERBS
//C	IN SECTION 4) .
//C  SECTION 7: OBJECT LOCATIONS.  EACH LINE CONTAINS AN OBJECT NUMBER AND ITS
//C	INITIAL LOCATION (ZERO (OR OMITTED)  IF NONE) .  IF THE OBJECT IS
//C	IMMOVABLE, THE LOCATION IS FOLLOWED BY A "-1".  IF IT HAS TWO LOCATIONS
//C	(E.G. THE GRATE)  THE FIRST LOCATION IS FOLLOWED WITH THE SECOND, AND
//C	THE OBJECT IS ASSUMED TO BE IMMOVABLE.
//C  SECTION 8: ACTION DEFAULTS.  EACH LINE CONTAINS AN "ACTION-VERB" NUMBER AND
//C	THE INDEX (IN SECTION 6)  OF THE DEFAULT MESSAGE FOR THE VERB.
//C  SECTION 9: LIQUID ASSETS, ETC.  EACH LINE CONTAINS A NUMBER (N)  AND UP TO 20
//C	LOCATION NUMBERS.  BIT N (WHERE 0 IS THE UNITS BIT)  IS SET IN COND[LOC]
//C	FOR EACH LOC GIVEN.  THE COND BITS CURRENTLY ASSIGNED ARE:
//C		0	LIGHT
//C		1	IF BIT 2 IS ON: ON FOR OIL, OFF FOR WATER
//C		2	LIQUID ASSET, SEE BIT 1
//C		3	PIRATE DOESN'T GO HERE UNLESS FOLLOWING PLAYER
//C	OTHER BITS ARE USED TO INDICATE AREAS OF INTEREST TO "HINT" ROUTINES:
//C		4	TRYING TO GET INTO CAVE
//C		5	TRYING TO CATCH BIRD
//C		6	TRYING TO DEAL WITH SNAKE
//C		7	LOST IN MAZE
//C		8	PONDERING DARK ROOM
//C		9	AT WITT'S END
//C	COND[LOC] IS SET TO 2, OVERRIDING ALL OTHER BITS, IF LOC HAS FORCED
//C	MOTION.
//C  SECTION 10: CLASS MESSAGES.  EACH LINE CONTAINS A NUMBER (N) , A TAB, AND A
//C	MESSAGE DESCRIBING A CLASSIFICATION OF PLAYER.  THE SCORING SECTION
//C	SELECTS THE APPROPRIATE MESSAGE, WHERE EACH MESSAGE IS CONSIDERED TO
//C	APPLY TO PLAYERS WHOSE SCORES ARE HIGHER THAN THE PREVIOUS N BUT NOT
//C	HIGHER THAN THIS N.  NOTE THAT THESE SCORES PROBABLY CHANGE WITH EVERY
//C	MODIFICATION (AND PARTICULARLY EXPANSION)  OF THE PROGRAM.
//C  SECTION 11: HINTS.  EACH LINE CONTAINS A HINT NUMBER (CORRESPONDING TO A
//C	COND BIT, SEE SECTION 9) , THE NUMBER OF TURNS HE MUST BE AT THE RIGHT
//C	LOC(S)  BEFORE TRIGGERING THE HINT, THE POINTS DEDUCTED FOR TAKING THE
//C	HINT, THE MESSAGE NUMBER (SECTION 6)  OF THE QUESTION, AND THE MESSAGE
//C	NUMBER OF THE HINT.  THESE VALUES ARE STASHED IN THE "HINTS" ARRAY.
//C	HNTMAX IS SET TO THE MAX HINT NUMBER (<=  HNTSIZ) .  NUMBERS 1-3 ARE
//C	UNUSABLE SINCE COND BITS ARE OTHERWISE ASSIGNED, SO 2 IS USED TO
//C	REMEMBER IF HE'S READ THE CLUE IN THE REPOSITORY, AND 3 IS USED TO
//C	REMEMBER WHETHER HE ASKED FOR INSTRUCTIONS (GETS MORE TURNS, BUT LOSES
//C	POINTS) .
//C  SECTION 12: MAGIC MESSAGES. IDENTICAL TO SECTION 6 EXCEPT PUT IN A SEPARATE
//C	SECTION FOR EASIER REFERENCE.  MAGIC MESSAGES ARE USED BY THE STARTUP,
//C	MAINTENANCE MODE, AND RELATED ROUTINES.
//C  SECTION 0: END OF DATABASE.
//C  READ THE DATABASE IF WE HAVE NOT YET DONE SO
//
//	if (SETUP != 0) GOTO 1100
//	TYPE 1000
//	1000	FORMAT(' Initializing...') 
//
// CLEAR OUT THE VARIOUS TEXT-POINTER ARRAYS.  ALL TEXT IS STORED IN ARRAY
// LINES; EACH LINE IS PRECEDED BY A WORD POINTING TO THE NEXT POINTER (I.E.
// THE WORD FOLLOWING THE END OF THE LINE) .  THE POINTER IS NEGATIVE IF THIS IS
// FIRST LINE OF A MESSAGE.  THE TEXT-POINTER ARRAYS CONTAIN INDICES OF
// POINTER-WORDS IN LINES.  STEXT[N] IS SHORT DESCRIPTION OF LOCATION N.
// LTEXT[N] IS LONG DESCRIPTION.  PTEXT[N] POINTS TO MESSAGE FOR PROP[N] = 0.
// SUCCESSIVE PROP MESSAGES ARE FOUND BY CHASING POINTERS.  RTEXT CONTAINS
// SECTION 6'S STUFF.  CTEXT[N] POINTS TO A PLAYER-CLASS MESSAGE.  MTEXT IS FOR
// SECTION 12.  WE ALSO CLEAR COND.  SEE DESCRIPTION OF SECTION 9 FOR DETAILS.
//
/**
 *
 */
function initDatabase() {
	
	var sections = new Array();
	var OLDLOC = -1;
    
	// Init tables
	for (var i = 1; i <= 300; i++) {
		if (i <= OBJSIZ) PTEXT[i] = 0;
		if (i <= RTXSIZ) RTEXT[i] = 0;
		if (i <= CLSMAX) CTEXT[i] = 0;
		// if (i <= MAGSIZ) MTEXT[i] = 0;
		if (i <= LOCSIZ) {
			STEXT[i] = 0;
			LTEXT[i] = 0;
			KEY[i] = 0;
			COND[i] = 0;
		};
	};		
	// Line always starts with a number, rest of text starts at position 8
	LINES = readData(); // Store all data in the LINES array
	// scan for sections
	for (var i = 1; i < LINES.length; i++) {
		LOC = parseInt(LINES[i]);
        if (OLDLOC == -1) sections[LOC] = i;
        OLDLOC = LOC;
	};

	// Section 1
	parseText(sections[1], LTEXT);
	// Section 2
	parseText(sections[2], STEXT);
	// Section 5
	parseText(sections[5], PTEXT, true);
	// Section 6
	parseText(sections[6], RTEXT);
	// Section 10
	parseText(sections[10], CTEXT);
	// Section 3
	parseTravel(sections[3]);
	// Section 4
	parseVocab(sections[4]);
	// Section 7
	initObj(sections[7]);
	// Section 8
	defMssg(sections[8]);
	// Section 9
	initCond(sections[9]);
	// Section 11
	initHint(sections[11]);
	
	// FINISH CONSTRUCTING INTERNAL DATA FORMAT
	setupFixedMotion();
	setupAtLoc();
	setupTreasures();
	clearHintStuff();
	defineMnemonics();
	initDwarves();
	initGlobals();
	// FINALLY, SINCE WE'RE CLEARLY SETTING THINGS UP FOR THE FIRST TIME...
	POOF();

}

// SECTIONS 1, 2, 5, 6, 10, 12.  READ MESSAGES AND SET UP POINTERS.
function parseText(ndx, array, condition) {
	var loc, 
		oldloc = 0; 
    condition = typeof condition !== 'undefined' ? condition : false;
	while (++ndx, loc = parseInt(LINES[ndx]), loc != -1) {
		if (loc != oldloc) {
			oldloc = loc;
			if (!condition || (loc > 0 && loc < 100)) array[loc] = ndx;
		}
	}
}

// THE STUFF FOR SECTION 3 IS ENCODED HERE.  EACH "FROM-LOCATION" GETS A
// CONTIGUOUS SECTION OF THE "TRAVEL" ARRAY.  EACH ENTRY IN TRAVEL IS
// NEWLOC*1000 + KEYWORD (FROM SECTION 4, MOTION VERBS) , AND IS NEGATED IF
// THIS IS THE LAST ENTRY FOR THIS LOCATION.  KEY[N] IS THE INDEX IN TRAVEL
// OF THE FIRST OPTION AT LOCATION N.
function parseTravel(ndx) {
	var tk = new Array(),
		loc, 
		newloc = 0, 
		trvs = 1;
	while (++ndx, tk = LINES[ndx].split(/[ ]+/).map(Number), loc = tk.shift(), loc != -1) {
		newloc = tk.shift();
		if (KEY[loc] == 0) KEY[loc] = trvs;
		else TRAVEL[trvs-1] = -TRAVEL[trvs-1];
		for (var t in tk) {
			if (tk[t] != 0) {
				TRAVEL[trvs] = newloc * 1000 + tk[t];
				trvs++;
			}
		}
		TRAVEL[trvs-1] = -TRAVEL[trvs-1];
	}
}

// HERE WE READ IN THE VOCABULARY.  KTAB[N] IS THE WORD NUMBER, ATAB[N] IS
// THE CORRESPONDING WORD.  THE -1 AT THE END OF SECTION 4 IS LEFT IN KTAB
// AS AN END-MARKER. 
function parseVocab(ndx) {
	var TABNDX = 1;
	while (++ndx, KTAB[TABNDX] = parseInt(LINES[ndx]), KTAB[TABNDX] != -1) {
		ATAB[TABNDX++] = LINES[ndx].substr(8, 5).trim();
	}
}

// READ IN THE INITIAL LOCATIONS FOR EACH OBJECT.  ALSO THE IMMOVABILITY INFO.
// PLAC CONTAINS INITIAL LOCATIONS OF OBJECTS.  FIXD IS -1 FOR IMMOVABLE
// OBJECTS (INCLUDING THE SNAKE) , OR  =  SECOND LOC FOR TWO-PLACED OBJECTS.
function initObj(ndx) {
	var line = new Array(),
		obj;
	while (++ndx, line = LINES[ndx].split(/[ ]+/).map(Number), obj = line.shift(), obj != -1) {
		PLAC[obj] = line.shift();
		FIXD[obj] = line.shift();
	}
}

// READ DEFAULT MESSAGE NUMBERS FOR ACTION VERBS, STORE IN ACTSPK.
function defMssg(ndx) {
	var verb;
	while (++ndx, verb = parseInt(LINES[ndx]), verb != -1) {
		ACTSPK[verb] = parseInt(LINES[ndx].substr(8));
	}
}

// READ INFO ABOUT AVAILABLE LIQUIDS AND OTHER CONDITIONS, STORE IN COND.
function initCond(ndx) {
	var tk = new Array(),
		k;
	while (++ndx, tk = LINES[ndx].split(/[ ]+/).map(Number), k = tk.shift(), k != -1) {
        for (var t in tk) {
            if (tk[t] != 0) COND[tk[t]] += (1<<k);
		}
	}
}

// READ DATA FOR HINTS.
function initHint(ndx) {
	var tk = new Array(),
		k;
	while (++ndx, tk = LINES[ndx].split(/[ ]+/).map(Number), k = tk.shift(), k != -1) {
        for (var t = 0; t < 4; t++) {
            HINTS[k][t] = tk[t];
            HNTMAX = Math.max(HNTMAX, k);
		}
	}
}

//C  IF SETUP = 2 WE DON'T NEED TO DO THIS.  IT'S ONLY NECESSARY IF WE HAVEN'T DONE
//C  IT AT ALL OR IF THE PROGRAM HAS BEEN RUN SINCE THEN.
//
//1100	
//	if (SETUP == 2) GOTO 1;
//	if (SETUP == -1) GOTO 8305


// HAVING READ IN THE DATABASE, CERTAIN THINGS ARE NOW CONSTRUCTED.  PROPS ARE
// SET TO ZERO.  WE FINISH SETTING UP COND BY CHECKING FOR FORCED-MOTION TRAVEL
// ENTRIES.  THE PLAC AND FIXD ARRAYS ARE USED TO SET UP ATLOC[N] AS THE FIRST
// OBJECT AT LOCATION N, AND LINK[OBJ] AS THE NEXT OBJECT AT THE SAME LOCATION
// AS OBJ.  (OBJ>100 INDICATES THAT FIXED[OBJ-100] = LOC; LINK[OBJ] IS STILL THE
// CORRECT LINK TO USE.)   ABB IS ZEROED; IT CONTROLS WHETHER THE ABBREVIATED
// DESCRIPTION IS PRINTED.  COUNTS MOD 5 UNLESS "LOOK" IS USED.
function setupFixedMotion() {
	for (var i = 1; i <= 100; i++) { 
		PLACE[i] = 0;
		PROP[i] = 0;
		LINK[i] = 0;
		LINK[i+100] = 0;
	}

	for (var i = 1; i <= LOCSIZ; i++) { 
        if (LTEXT[i] != 0 && KEY[i] != 0) {
        	var k = KEY[i];
            if (Math.abs(TRAVEL[k]) % 1000  == 1) COND[i] = 2;
		};
		ATLOC[i] = 0;
		ABB[i] = 0;
	}
}

// SET UP THE ATLOC AND LINK ARRAYS AS DESCRIBED ABOVE.  WE'LL USE THE DROP
// SUBROUTINE, WHICH PREFACES NEW OBJECTS ON THE LISTS.  SINCE WE WANT THINGS
// IN THE OTHER ORDER, WE'LL RUN THE LOOP BACKWARDS.  IF THE OBJECT IS IN TWO
// LOCS, WE DROP IT TWICE.  THIS ALSO SETS UP "PLACE" AND "FIXED" AS COPIES OF
// "PLAC" AND "FIXD".  ALSO, SINCE TWO-PLACED OBJECTS ARE TYPICALLY BEST
// DESCRIBED LAST, WE'LL DROP THEM FIRST.
function setupAtLoc() {
	for (var i = 1; i <= 100; i++) { 
		var k = 101-i;
		if (FIXD[k] > 0) {
			DROP(k+100, FIXD[k]);
			DROP(k, PLAC[k]);
		}
	}

	for (var i = 1; i <= 100; i++) {
		var k = 101-i;
		FIXED[k] = FIXD[k];
		if (PLAC[k] !=  0 && FIXD[k] <=  0) {
			DROP(k, PLAC[k]);
		}
	}
}

// TREASURES, AS NOTED EARLIER, ARE OBJECTS 50 THROUGH MAXTRS (CURRENTLY 79) .
// THEIR PROPS ARE INITIALLY -1, AND ARE SET TO 0 THE FIRST TIME THEY ARE
// DESCRIBED.  TALLY KEEPS TRACK OF HOW MANY ARE NOT YET FOUND, SO WE KNOW
// WHEN TO CLOSE THE CAVE.  TALLY2 COUNTS HOW MANY CAN NEVER BE FOUND (E.G. IF
// LOST BIRD OR BRIDGE) .
function setupTreasures() {
	MAXTRS = 79;
	TALLY = 0;
	TALLY2 = 0;
	for (var i = 50; i <= MAXTRS; i++) {
		if (PTEXT[i] !=  0) PROP[i] = -1;
		TALLY = TALLY-PROP[i];
	}
}

// CLEAR THE HINT STUFF.  HINTLC[I] IS HOW LONG HE'S BEEN AT LOC WITH COND BIT
// I.  HINTED[I] IS TRUE IFF HINT I HAS BEEN USED.
function clearHintStuff() {
	for (var i = 1; i <= HNTMAX; i++) {
		HINTED[i] = false;
		HINTLC[i] = 0;
	}
}

//C  DEFINE SOME HANDY MNEMONICS.  THESE CORRESPOND TO OBJECT NUMBERS.
function defineMnemonics() {
	KEYS   = VOCAB('KEYS',1);
	LAMP   = VOCAB('LAMP',1);
	GRATE  = VOCAB('GRATE',1);
	CAGE   = VOCAB('CAGE',1);
	ROD    = VOCAB('ROD',1);
	ROD2   = ROD+1;
	STEPS  = VOCAB('STEPS',1);
	BIRD   = VOCAB('BIRD',1);
	DOOR   = VOCAB('DOOR',1);
	PILLOW = VOCAB('PILLO',1);
	SNAKE  = VOCAB('SNAKE',1);
	FISSUR = VOCAB('FISSU',1);
	TABLET = VOCAB('TABLE',1);
	CLAM   = VOCAB('CLAM',1);
	OYSTER = VOCAB('OYSTE',1);
	MAGZIN = VOCAB('MAGAZ',1);
	DWARF  = VOCAB('DWARF',1);
	KNIFE  = VOCAB('KNIFE',1);
	FOOD   = VOCAB('FOOD',1);
	BOTTLE = VOCAB('BOTTL',1);
	WATER  = VOCAB('WATER',1);
	OIL    = VOCAB('OIL',1);
	PLANT  = VOCAB('PLANT',1);
	PLANT2 = PLANT+1;
	AXE    = VOCAB('AXE',1);
	MIRROR = VOCAB('MIRRO',1);
	DRAGON = VOCAB('DRAGO',1);
	CHASM  = VOCAB('CHASM',1);
	TROLL  = VOCAB('TROLL',1);
	TROLL2 = TROLL+1;
	BEAR   = VOCAB('BEAR',1);
	MESSAG = VOCAB('MESSA',1);
	VEND   = VOCAB('VENDI',1);
	BATTER = VOCAB('BATTE',1);
// OBJECTS FROM 50 THROUGH WHATEVER ARE TREASURES.  HERE ARE A FEW.
	NUGGET = VOCAB('GOLD',1);
	COINS  = VOCAB('COINS',1);
	CHEST  = VOCAB('CHEST',1);
	EGGS   = VOCAB('EGGS',1);
	TRIDNT = VOCAB('TRIDE',1);
	VASE   = VOCAB('VASE',1);
	EMRALD = VOCAB('EMERA',1);
	PYRAM  = VOCAB('PYRAM',1);
	PEARL  = VOCAB('PEARL',1);
	RUG    = VOCAB('RUG',1);
	CHAIN  = VOCAB('CHAIN',1);
// THESE ARE MOTION-VERB NUMBERS.
	BACK   = VOCAB('BACK',0);
	LOOK   = VOCAB('LOOK',0);
	CAVE   = VOCAB('CAVE',0);
	NULL   = VOCAB('NULL',0);
	ENTRNC = VOCAB('ENTRA',0);
	DPRSSN = VOCAB('DEPRE',0);
// AND SOME ACTION VERBS.
	SAY    = VOCAB('SAY',2);
	LOCK   = VOCAB('LOCK',2);
	THROW  = VOCAB('THROW',2);
	FIND   = VOCAB('FIND',2);
	INVENT = VOCAB('INVEN',2);
}

//C  INITIALISE THE DWARVES.  DLOC IS LOC OF DWARVES, HARD-WIRED IN.  ODLOC IS
//C  PRIOR LOC OF EACH DWARF, INITIALLY GARBAGE.  DALTLC IS ALTERNATE INITIAL LOC
//C  FOR DWARF, IN CASE ONE OF THEM STARTS OUT ON TOP OF THE ADVENTURER.  (NO 2
//C  OF THE 5 INITIAL LOCS ARE ADJACENT.)   DSEEN IS TRUE IF DWARF HAS SEEN HIM.
//C  DFLAG CONTROLS THE LEVEL OF ACTIVATION OF ALL THIS:
//C	0	NO DWARF STUFF YET (WAIT UNTIL REACHES HALL OF MISTS) 
//C	1	REACHED HALL OF MISTS, BUT HASN'T MET FIRST DWARF
//C	2	MET FIRST DWARF, OTHERS START MOVING, NO KNIVES THROWN YET
//C	3	A KNIFE HAS BEEN THROWN (FIRST SET ALWAYS MISSES) 
//C	3+	DWARVES ARE MAD (INCREASES THEIR ACCURACY) 
//C  SIXTH DWARF IS SPECIAL (THE PIRATE) .  HE ALWAYS STARTS AT HIS CHEST'S
//C  EVENTUAL LOCATION INSIDE THE MAZE.  THIS LOC IS SAVED IN CHLOC FOR REF.
//C  THE DEAD END IN THE OTHER MAZE HAS ITS LOC STORED IN CHLOC2.
function initDwarves() {
	CHLOC = 114;
	CHLOC2 = 140;
	for (var i = 1; i <= 6; i++) DSEEN[i] = false;
	DFLAG = 0;
	DLOC[1] = 19;
	DLOC[2] = 27;
	DLOC[3] = 33;
	DLOC[4] = 44;
	DLOC[5] = 64;
	DLOC[6] = CHLOC;
	DALTLC = 18;
}

function initGlobals() {
	TURNS = 0;
	LMWARN = false;
	IWEST = 0;
	KNFLOC = 0;
	DETAIL = 0;
	ABBNUM = 5;
	for (var i = 1; i <= 4; i++) {
		if (RTEXT[2*i+81] != 0) MAXDIE = i+1; 
	}
	NUMDIE = 0;
	HOLDNG = 0;
	DKILL = 0;
	FOOBAR = 0;
	BONUS = 0;
	CLOCK1 = 30;
	CLOCK2 = 50;
	SAVED = 0;
	CLOSNG =  false;
	PANIC =  false;
	CLOSED =  false;
	GAVEUP =  false;
	SCORNG =  false;
}


function describeLocation() {
	var str;
	if (LOC == 0) { 
		label99dead();
		return;
	}
	str = STEXT[LOC];
	if ((ABB[LOC] % ABBNUM) == 0 || str == 0) str = LTEXT[LOC];
	//out('LOC:'+LOC+', S:'+STEXT[LOC]+', L:'+LTEXT[LOC]+', ABB:'+ABB[LOC]+' ('+ABBNUM+')');
	if (TOTING(BEAR)) RSPEAK(141); /* You are being followed by a very large, tame bear. */
	SPEAK(str);

	if (LOC == 33 && PCT(25) && !CLOSNG) RSPEAK(8); /* A hollow voice says "PLUGH". */
	
	if (!DARK()) describeObjects();
}

/**
 * checkPit - see if he's been crawling in the dark, and has fallen in a pit
 */
function checkPit() {
	if (WZDARK && PCT(35)) {
		// THE EASIEST WAY TO GET KILLED IS TO FALL INTO A PIT IN PITCH DARKNESS.
		RSPEAK(23); /* You fell into a pit and broke every bone in your body! */
		OLDLC2 = LOC;
		label99dead();
	}
	else RSPEAK(16); /* It is now pitch dark.  If you proceed you will likely fall into a pit. */
	return;
}

// PRINT OUT DESCRIPTIONS OF OBJECTS AT THIS LOCATION.  IF NOT CLOSING AND
// PROPERTY VALUE IS NEGATIVE, TALLY OFF ANOTHER TREASURE.  RUG IS SPECIAL
// CASE; ONCE SEEN, ITS PROP IS 1 (DRAGON ON IT)  TILL DRAGON IS KILLED.
// SIMILARLY FOR CHAIN; PROP IS INITIALLY 1 (LOCKED TO BEAR) .  THESE HACKS
// ARE BECAUSE PROP = 0 IS NEEDED TO GET FULL SCORE.
/**
 * 
 */
function describeObjects() {
	ABB[LOC]++;
	var i = ATLOC[LOC];
	while (i != 0) {
		OBJ = i;
		if (OBJ > 100) OBJ -= -100;
		if (!CLOSED && (OBJ != STEPS || !TOTING(NUGGET))) {
			if (PROP[OBJ] <  0) {
				PROP[OBJ] = 0;
				if (OBJ == RUG || OBJ == CHAIN) PROP[OBJ] = 1;
				TALLY--;
				// IF REMAINING TREASURES TOO ELUSIVE, ZAP HIS LAMP.
				if (TALLY == TALLY2 && TALLY !=  0) LIMIT = Math.min(35, LIMIT);
			}
			if (OBJ == STEPS && LOC == FIXED[STEPS]) PSPEAK(OBJ,1);
			else PSPEAK(OBJ, PROP[OBJ]);
		}
		i = LINK[i];
	}
}

//C  CHECK IF THIS LOC IS ELIGIBLE FOR ANY HINTS.  IF BEEN HERE LONG ENOUGH,
//C  BRANCH TO HELP SECTION (ON LATER PAGE) .  HINTS ALL COME BACK HERE EVENTUALLY
//C  TO FINISH THE LOOP.  IGNORE "HINTS" < 4 (SPECIAL STUFF, SEE DATABASE NOTES) .
function checkHints() {
	for (var HINT = 4; HINT <= HNTMAX; HINT++) {
		if (!HINTED[HINT]) {
			if (!BITSET(LOC, HINT)) HINTLC[HINT] = -1;
			HINTLC[HINT]++;
			if (HINTLC[HINT] >=  HINTS[HINT][1]) offerHint();
		}
	}
}



//
//C  KICK THE RANDOM NUMBER GENERATOR JUST TO ADD VARIETY TO THE CHASE.  ALSO,
//C  IF CLOSING TIME, CHECK FOR ANY OBJECTS BEING TOTED WITH PROP < 0 AND SET
//C  THE PROP TO -1-PROP.  THIS WAY OBJECTS WON'T BE DESCRIBED UNTIL THEY'VE
//C  BEEN PICKED UP AND PUT DOWN SEPARATE FROM THEIR RESPECTIVE PILES.  DON'T
//C  TICK CLOCK1 UNLESS WELL INTO CAVE (AND NOT AT Y2) .
//
//	if ( !CLOSED) GOTO 2605
//	if (PROP[OYSTER] < 0 && TOTING(OYSTER) ) 
//	1	CALL PSPEAK(OYSTER,1) 
		for (var I = 1; I <= 100; I++) {
			IDONDX = I;
//2604
	if (TOTING(IDONDX)  && PROP[IDONDX] < 0) PROP[IDONDX] = -1-PROP[IDONDX]; }
//2605	WZDARK = DARK(0) 
//	if (KNFLOC > 0 && KNFLOC ! =  LOC) KNFLOC = 0
//	I = RAN(1) 
//	CALL GETIN(WD1,WD1X,WD2,WD2X) 
//
//C  EVERY INPUT, CHECK "FOOBAR" FLAG.  IF ZERO, NOTHING'S GOING ON.  IF POS,
//C  MAKE NEG.  IF NEG, HE SKIPPED A WORD, SO MAKE IT ZERO.
//
//2608	FOOBAR = MIN0(0,-FOOBAR) 
//	if (TURNS == 0 && WD1 == 'MAGIC' && WD2 == 'MODE') CALL MAINT
//	TURNS = TURNS+1
//	if (DEMO && TURNS >=  SHORT) GOTO 13000
//	if (VERB == SAY && WD2 ! =  0) VERB = 0
//	if (VERB == SAY) GOTO 4090
//	if (TALLY == 0 && LOC >=  15 && LOC ! =  33) CLOCK1 = CLOCK1-1
//	if (CLOCK1 == 0) GOTO 10000
//	if (CLOCK1 < 0) CLOCK2 = CLOCK2-1
//	if (CLOCK2 == 0) GOTO 11000
		
	checkLamp();	
	

//
//C  GET SECOND WORD FOR ANALYSIS.
//
//2800	WD1 = WD2
//	WD1X = WD2X
//	WD2 = 0
//	GOTO 2610
//
//C  GEE, I DON'T UNDERSTAND.
//
//3000	SPK = 60
//	if (PCT(20) ) SPK = 61
//	if (PCT(20) ) SPK = 13
//	CALL RSPEAK(SPK) 
//	GOTO 2600
//
//C  ANALYSE A VERB.  REMEMBER WHAT IT WAS, GO BACK FOR OBJECT IF SECOND WORD
//C  UNLESS VERB IS "SAY", WHICH SNARFS ARBITRARY SECOND WORD.
//
//4000	VERB = K
//	SPK = ACTSPK[VERB]
//	if (WD2 ! =  0 && VERB ! =  SAY) GOTO 2800
//	if (VERB == SAY) OBJ = WD2
//	if (OBJ ! =  0) GOTO 4090
//
//C  ANALYSE AN INTRANSITIVE VERB (IE, NO OBJECT GIVEN YET) .
//
//4080	GOTO(8010,8000,8000,8040,2009,8040,9070,9080,8000,8000,
//	1    2011,9120,9130,8140,9150,8000,8000,8180,8000,8200,
//	2    8000,9220,9230,8240,8250,8260,8270,8000,8000,8300,
//	3    8310) VERB
//C	     TAKE DROP  SAY OPEN NOTH LOCK   ON  OFF WAVE CALM
//C	     WALK KILL POUR  EAT DRNK  RUB TOSS QUIT FIND INVN
//C	     FEED FILL BLST SCOR  FOO  BRF READ BREK WAKE SUSP
//C	     HOUR
//	CALL BUG(23) 
//
//C  ANALYSE A TRANSITIVE VERB.
//
//4090	GOTO(9010,9020,9030,9040,2009,9040,9070,9080,9090,2011,
//	1    2011,9120,9130,9140,9150,9160,9170,2011,9190,9190,
//	2    9210,9220,9230,2011,2011,2011,9270,9280,9290,2011,
//	3    2011) VERB
//C	     TAKE DROP  SAY OPEN NOTH LOCK   ON  OFF WAVE CALM
//C	     WALK KILL POUR  EAT DRNK  RUB TOSS QUIT FIND INVN
//C	     FEED FILL BLST SCOR  FOO  BRF READ BREK WAKE SUSP
//C	     HOUR
//	CALL BUG(24) 
//
/**
 * verb	intrans	trans	function
 * TAKE	8010	9010	actionTake
 * DROP	8000	9020	actionDiscard
 * SAY	8000	9030	actionSay
 * OPEN	8040	9040	actionLockUnlock
 * NOTH	2009	2009	
 * LOCK	8040	9040	actionLockUnlock
 * ON	9070	9070	actionLightOn
 * OFF	9080	9080	actionLightOff
 * WAVE	8000	9090	actionWave
 * CALM	8000	2011	
 * WALK	2011	2011	
 * KILL	9120	9120	actionAttack
 * POUR	9130	9130	actionPour
 * EAT	8140	9140	actionEat
 * DRNK	9150	9150	actionDrink
 * RUB	8000	9160	actionRub
 * TOSS	8000	9170	actionThrow
 * QUIT	8180	2011	actionQuit
 * FIND	8000	9190	actionFind
 * INVN	8200	9190	
 * FEED	8000	9210	actionFeed
 * FILL	9220	9220	actionFill
 * BLST	9230	9230	actionBlast
 * SCOR	8240	2011	actionScore
 * FOO	8250	2011	actionFoo
 * BRF	8260	2011	actionBrief
 * READ	8270	9270	actionRead
 * BREK	8000	9280	actionBreak		in/trans
 * WAKE	8000	9290	actionWake		in/trans
 * SUSP	8300	2011	actionSuspend
 * HOUR	8310	2011	actionHours
 * 		8000			sayWhat()
 * 		2009
 * 		2011
 * 		8200
 */
	
		
		
		
//C  ANALYSE AN OBJECT WORD.  SEE IF THE THING IS HERE, WHETHER WE'VE GOT A VERB
//C  YET, AND SO ON.  OBJECT MUST BE HERE UNLESS VERB IS "FIND" OR "INVENT(ORY) "
//C  (AND NO NEW VERB YET TO BE ANALYSED) .  WATER AND OIL ARE ALSO FUNNY, SINCE
//C  THEY ARE NEVER ACTUALLY DROPPED AT ANY LOCATION, BUT MIGHT BE HERE INSIDE
//C  THE BOTTLE OR AS A FEATURE OF THE LOCATION.
//
//5000	OBJ = K
//	if (FIXED[K] ! =  LOC &&  !HERE(K) ) GOTO 5100
//5010	if (WD2 ! =  0) GOTO 2800
//	if (VERB ! =  0) GOTO 4090
//	CALL A5TOA1(WD1,WD1X,'?',TK,K) 
//	TYPE 5015,(TK[I],I = 1,K) 
//5015	FORMAT(/' What do you want to do with the ',20A1) 
//	GOTO 2600
//
//5100	if (K ! =  GRATE) GOTO 5110
//	if (LOC == 1 || LOC == 4 || LOC == 7) K = DPRSSN
//	if (LOC > 9 && LOC < 15) K = ENTRNC
//	if (K ! =  GRATE) GOTO 8
//5110	if (K ! =  DWARF) GOTO 5120
//	for (var I = 1; I <= 5; I++) {
//		if (DLOC[I] == LOC && DFLAG >=  2) {}//GOTO 5010;
//	}
//5120	if ((LIQ(0)  == K && HERE(BOTTLE) )  || K == LIQLOC(LOC) ) GOTO 5010
//	if (OBJ ! =  PLANT ||  !AT(PLANT2)  || PROP[PLANT2] == 0) GOTO 5130
//	OBJ = PLANT2
//	GOTO 5010
//5130	if (OBJ ! =  KNIFE || KNFLOC ! =  LOC) GOTO 5140
//	KNFLOC = -1
//	SPK = 116
//	GOTO 2011
//5140	if (OBJ ! =  ROD ||  !HERE(ROD2) ) GOTO 5190
//	OBJ = ROD2
//	GOTO 5010
//5190	if ((VERB == FIND || VERB == INVENT)  && WD2 == 0) GOTO 5010
//	CALL A5TOA1(WD1,WD1X,'here.',TK,K) 
//	TYPE 5199,(TK[I],I = 1,K) 
//5199	FORMAT(/' I see no ',20A1) 
//	GOTO 2012

	
//C  "YOU'RE DEAD, JIM."
//C
//C  IF THE CURRENT LOC IS ZERO, IT MEANS THE CLOWN GOT HIMSELF KILLED.  WE'LL
//C  ALLOW THIS MAXDIE TIMES.  MAXDIE IS AUTOMATICALLY SET BASED ON THE NUMBER OF
//C  SNIDE MESSAGES AVAILABLE.  EACH DEATH RESULTS IN A MESSAGE (81, 83, ETC.) 
//C  WHICH OFFERS REINCARNATION; IF ACCEPTED, THIS RESULTS IN MESSAGE 82, 84,
//C  ETC.  THE LAST TIME, IF HE WANTS ANOTHER CHANCE, HE GETS A SNIDE REMARK AS
//C  WE EXIT.  WHEN REINCARNATED, ALL OBJECTS BEING CARRIED GET DROPPED AT OLDLC2
//C  (PRESUMABLY THE LAST PLACE PRIOR TO BEING KILLED)  WITHOUT CHANGE OF PROPS.
//C  THE LOOP RUNS BACKWARDS TO ASSURE THAT THE BIRD IS DROPPED BEFORE THE CAGE.
//C  (THIS KLUGE COULD BE CHANGED ONCE WE'RE SURE ALL REFERENCES TO BIRD AND CAGE
//C  ARE DONE BY KEYWORDS.)   THE LAMP IS A SPECIAL CASE (IT WOULDN'T DO TO LEAVE
//C  IT IN THE CAVE) .  IT IS TURNED OFF AND LEFT OUTSIDE THE BUILDING (ONLY IF HE
//C  WAS CARRYING IT, OF COURSE) .  HE HIMSELF IS LEFT INSIDE THE BUILDING (AND
//C  HEAVEN HELP HIM IF HE TRIES TO XYZZY BACK INTO THE CAVE WITHOUT THE LAMP!) .
//C  OLDLOC IS ZAPPED SO HE CAN'T JUST "RETREAT".
//
//
//C  OKAY, HE'S DEAD.  LET'S GET ON WITH IT.
function label99dead() { }
//99	if (CLOSNG) GOTO 95
//	YEA = YES(81+NUMDIE*2,82+NUMDIE*2,54) 
//	NUMDIE = NUMDIE+1
//	if (NUMDIE == MAXDIE ||  !YEA) GOTO 20000
//	PLACE[WATER] = 0
//	PLACE[OIL] = 0
//	if (TOTING(LAMP) ) PROP[LAMP] = 0
		for (var J = 1; J <= 100; J++) {
//	I = 101-J
//	if ( !TOTING(I) ) GOTO 98
//	K = OLDLC2
//	if (I == LAMP) K = 1
//	CALL DROP(I,K) 
//98		
		}
//	LOC = 3
//	OLDLOC = LOC
//	GOTO 2000
//
//C  HE DIED DURING CLOSING TIME.  NO RESURRECTION.  TALLY UP A DEATH AND EXIT.
//
//95	CALL RSPEAK(131) 
//	NUMDIE = NUMDIE+1
//	GOTO 20000
//C  ROUTINES FOR PERFORMING THE VARIOUS ACTION VERBS
//
//C  STATEMENT NUMBERS IN THIS SECTION ARE 8000 FOR INTRANSITIVE VERBS, 9000 FOR
//C  TRANSITIVE, PLUS TEN TIMES THE VERB NUMBER.  MANY INTRANSITIVE VERBS USE THE
//C  TRANSITIVE CODE, AND SOME VERBS USE CODE FOR OTHER VERBS, AS NOTED BELOW.
//
//C  RANDOM INTRANSITIVE VERBS COME HERE.  CLEAR OBJ JUST IN CASE (SEE "ATTACK") .
//


// 8000
// RANDOM INTRANSITIVE VERBS COME HERE.  CLEAR OBJ JUST IN CASE (SEE "ATTACK") .
function sayWhat() {
	out(word1 + " what?");
	OBJ = 0;
	return true;
	// return to 'check hints' (2600)
}


function actionTake() {
	var spk = ACTSPK[VERB];
	//C  CARRY, NO OBJECT GIVEN YET.  OK IF ONLY ONE OBJECT PRESENT.
	if (OBJ ==  0) { /* Intransitive */
		if (ATLOC[LOC] == 0 || LINK[ATLOC[LOC]] !=  0) {
			return sayWhat(VERB);
		}
		for (var i = 1; i <= 5; i++) {
			if (DLOC[i] == LOC && DFLAG >= 2) { // check dwarves
				return sayWhat(VERB);
			}
		}
		OBJ = ATLOC[LOC]; // The one object present
	}
	// CARRY AN OBJECT.  SPECIAL CASES FOR BIRD AND CAGE (IF BIRD IN CAGE, CAN'T
	// TAKE ONE WITHOUT THE OTHER.  LIQUIDS ALSO SPECIAL, SINCE THEY DEPEND ON
	// STATUS OF BOTTLE.  ALSO VARIOUS SIDE EFFECTS, ETC.
	if (TOTING(OBJ)) { 
		RSPEAK(spk); /* You are already carrying it!*/ 
		return false;
	}
	spk = 25; /* You can't be serious! */ 
	if (OBJ == PLANT && PROP[PLANT] <= 0) spk = 115; 
	/* The plant has exceptionally deep roots and cannot be pulled free.*/
	if (OBJ == BEAR && PROP[BEAR] == 1) spk = 169;
	/* The bear is still chained to the wall.*/
	if (OBJ == CHAIN && PROP[BEAR] !=  0) spk = 170;
	/* The chain is still locked.*/
	if (FIXED[OBJ] != 0) { 
		RSPEAK(spk); 
		return false;
	}
	
	if (OBJ == WATER || OBJ ==  OIL) {
		if (HERE(BOTTLE) && LIQ() == OBJ) OBJ = BOTTLE;
		else {
			if (TOTING(BOTTLE))
				if (PROP[BOTTLE] == 1) { 
					OBJ = BOTTLE;
					return fill();
				}
				else { 
					spk = 105; RSPEAK(spk); return false; 
					/* Your bottle is already full.*/					
				}
			else {
				spk = 104; RSPEAK(spk); return false;
				/* You have nothing in which to carry it. */
			}
		}
	}

	if (HOLDNG >= 7) {
		RSPEAK(92); return false;
	}

	if (OBJ == BIRD) {
		if (PROP[BIRD] == 0) {
			if (TOTING(ROD)) {
				RSPEAK(26); return false;
				/* The bird was unafraid when you entered, but as you approach it becomes 
				disturbed and you cannot catch it. */
			}
			else {
				if (!TOTING(CAGE)) {
					RSPEAK(27); return false;
					/* You can catch the bird, but you cannot carry it. */
				}
				else PROP[BIRD] = 1;
			}
		}
	}
	// 9014
	if ((OBJ == BIRD || OBJ == CAGE) && PROP[BIRD] != 0) CARRY(BIRD + CAGE - OBJ, LOC); 
	CARRY(OBJ,LOC);
	K = LIQ();
	if (OBJ == BOTTLE && K != 0) PLACE[K] = -1;
	RSPEAK(54); /* OK */
	return true;
}



//9016	if (OBJ ! =  BIRD) GOTO 9014
//	if (PROP[BIRD] ! =  0) GOTO 9014
//	if ( !TOTING(ROD) ) GOTO 9013
//	CALL RSPEAK(26) 
//	GOTO 2012
//9013	if (TOTING(CAGE) ) GOTO 9015
//	CALL RSPEAK(27) 
//	GOTO 2012
//9015	PROP[BIRD] = 1
//9014	if ((OBJ == BIRD || OBJ == CAGE)  && PROP[BIRD] ! =  0) 
//	1	CALL CARRY(BIRD+CAGE-OBJ,LOC) 
//	CALL CARRY(OBJ,LOC) 
//	K = LIQ(0) 
//	if (OBJ == BOTTLE && K ! =  0) PLACE[K] = -1
//	GOTO 2009
//
//C  DISCARD OBJECT.  "THROW" ALSO COMES HERE FOR MOST OBJECTS.  SPECIAL CASES FOR
//C  BIRD (MIGHT ATTACK SNAKE OR DRAGON)  AND CAGE (MIGHT CONTAIN BIRD)  AND VASE.
//C  DROP COINS AT VENDING MACHINE FOR EXTRA BATTERIES.

function actionDiscard() {
//9020	if (TOTING(ROD2)  && OBJ == ROD &&  !TOTING(ROD) ) OBJ = ROD2
//	if ( !TOTING(OBJ) ) GOTO 2011
//	if (OBJ ! =  BIRD ||  !HERE(SNAKE) ) GOTO 9024
//	CALL RSPEAK(30) 
//	if (CLOSED) GOTO 19000
//	CALL DSTROY(SNAKE) 
//C  SET PROP FOR USE BY TRAVEL OPTIONS
//	PROP[SNAKE] = 1
//9021	K = LIQ(0) 
//	if (K == OBJ) OBJ = BOTTLE
//	if (OBJ == BOTTLE && K ! =  0) PLACE[K] = 0
//	if (OBJ == CAGE && PROP[BIRD] ! =  0) CALL DROP(BIRD,LOC) 
//	if (OBJ == BIRD) PROP[BIRD] = 0
//	CALL DROP(OBJ,LOC) 
//	GOTO 2012
//
//9024	if (OBJ ! =  COINS ||  !HERE(VEND) ) GOTO 9025
//	CALL DSTROY(COINS) 
//	CALL DROP(BATTER,LOC) 
//	CALL PSPEAK(BATTER,0) 
//	GOTO 2012
//
//9025	if (OBJ ! =  BIRD ||  !AT(DRAGON)  || PROP[DRAGON] ! =  0) GOTO 9026
//	CALL RSPEAK(154) 
//	CALL DSTROY(BIRD) 
//	PROP[BIRD] = 0
//	if (PLACE[SNAKE] == PLAC[SNAKE]) TALLY2 = TALLY2+1
//	GOTO 2012
//
//9026	if (OBJ ! =  BEAR ||  !AT(TROLL) ) GOTO 9027
//	CALL RSPEAK(163) 
//	CALL MOVE(TROLL,0) 
//	CALL MOVE(TROLL+100,0) 
//	CALL MOVE(TROLL2,PLAC[TROLL]) 
//	CALL MOVE(TROLL2+100,FIXD[TROLL]) 
//	CALL JUGGLE(CHASM) 
//	PROP[TROLL] = 2
//	GOTO 9021
//
//9027	if (OBJ == VASE && LOC ! =  PLAC[PILLOW]) GOTO 9028
//	CALL RSPEAK(54) 
//	GOTO 9021
//
//9028	PROP[VASE] = 2
//	if (AT(PILLOW) ) PROP[VASE] = 0
//	CALL PSPEAK(VASE,PROP[VASE]+1) 
//	if (PROP[VASE] ! =  0) FIXED[VASE] = -1
//	GOTO 9021
}

//C  SAY.  ECHO WD2 (OR WD1 IF NO WD2 (SAY WHAT?, ETC.) .)   MAGIC WORDS OVERRIDE.
function actionSay() {
//9030	CALL A5TOA1(WD2,WD2X,'".',TK,K) 
//	if (WD2 == 0) CALL A5TOA1(WD1,WD1X,'".',TK,K) 
//	if (WD2 ! =  0) WD1 = WD2
//	I = VOCAB(WD1,-1) 
//	if (I == 62 || I == 65 || I == 71 || I == 2025) GOTO 9035
//	TYPE 9032,(TK[I],I = 1,K) 
//9032	FORMAT(/' Okay, "',20A1) 
//	GOTO 2012
//
//9035	WD2 = 0
//	OBJ = 0
//	GOTO 2630
//

}

/**
 * actionLockUnlock - 
 * @return {Boolean}
 */
function actionLockUnlock() {
	// LOCK, UNLOCK, NO OBJECT GIVEN.  ASSUME VARIOUS THINGS IF PRESENT.
	if (OBJ == 0) {
		if (HERE(CLAM)) OBJ = CLAM;
		if (HERE(OYSTER)) OBJ = OYSTER;
		if (AT(DOOR)) OBJ = DOOR;
		if (AT(GRATE)) OBJ = GRATE;
		if (OBJ != 0 && HERE(CHAIN)) return sayWhat();
		if (HERE(CHAIN)) OBJ = CHAIN;
		if (OBJ == 0) {
			RSPEAK(28); /* There is nothing here with a lock! */
			return true;
		}
	}	

	// LOCK, UNLOCK OBJECT.  SPECIAL STUFF FOR OPENING CLAM/OYSTER AND FOR CHAIN.
	if (OBJ == CLAM || OBJ == OYSTER) { // CLAM/OYSTER.
		K = 0;
		if (OBJ == OYSTER) K = 1;
		SPK = 124 + K;
        /* A glistening pearl falls out of the clam and rolls away.  
           Goodness, this must really be an oyster.  
           (I never was very good at identifying bivalves.)  
           Whatever it is, it has now snapped shut again.*/
        /* The oyster creaks open, revealing nothing but oyster inside. It
           promptly snaps shut again.*/
		if (TOTING(OBJ)) SPK = 120 + K; /* I advise you to put down the clam/oyster before opening it. */
		if (!TOTING(TRIDNT)) SPK = 122 + K; /* You don't have anything strong enough to open the clam/oyster.*/
		if (VERB == LOCK) SPK = 61;
		if (SPK != 124) {
			RSPEAK(SPK);
			return true;
		}
		DSTROY(CLAM);
		DROP(OYSTER,LOC);
		DROP(PEARL,105);
		RSPEAK(SPK);
		return true;
	}
	if (OBJ == DOOR) SPK = 111; /* The door is extremely rusty and refuses to open.*/
	if (OBJ == DOOR && PROP[DOOR] == 1) SPK = 54; /* OK */
	if (OBJ == CAGE) SPK = 32; /* It has no lock.*/
	if (OBJ == KEYS) SPK = 55; /* You can't unlock the keys.*/
	if (OBJ == GRATE || OBJ == CHAIN) SPK = 31; /* You have no keys!*/
	if (SPK != 31 || !HERE(KEYS)) {
		RSPEAK(SPK);
		return true;
	}
	if (OBJ == CHAIN) { // CHAIN.
		if (VERB == LOCK) {
			SPK = 172;
			if (PROP[CHAIN] !=  0) SPK = 34; /* It was already locked.*/
			if (LOC != PLAC[CHAIN]) SPK = 173; /* There is nothing here to which the chain can be locked.*/
			if (SPK != 172) { 
				RSPEAK(SPK);
				return true;
			}
			PROP[CHAIN] = 2;
			if (TOTING(CHAIN)) DROP(CHAIN,LOC);
			FIXED[CHAIN] = -1;
			RSPEAK(SPK); /* The chain is now locked.*/
			return true;
		}
		else {
			SPK = 171;
			if (PROP[BEAR] == 0) SPK = 41; /* There is no way to get past the bear to unlock the chain, 
            which is probably just as well.*/
			if (PROP[CHAIN] == 0) SPK = 37; /* It was already unlocked.*/
			if (SPK != 171) {
				RSPEAK(SPK);
				return true;
			}
			PROP[CHAIN] = 0;
			FIXED[CHAIN] = 0;
			if (PROP[BEAR] !=  3) PROP[BEAR] = 2;
			FIXED[BEAR] = 2-PROP[BEAR];
			RSPEAK(SPK); /* The chain is now unlocked.*/
			return true;
		}
	}
	if (!CLOSNG) {
		K = 34 + PROP[GRATE];
		PROP[GRATE] = 1;
		if (VERB == LOCK) PROP[GRATE] = 0;
		K = K + 2*PROP[GRATE];
		RSPEAK(K);
		return true;
	}
	K = 130;
	if (!PANIC) CLOCK2 = 15;
	PANIC = true;
	RSPEAK(K);
	// A mysterious recorded voice groans into life and announces:
	//  "This exit is closed.  Please leave via main office."
	return true;
}

/**
 * actionLightOn - LIGHT LAMP
 */
function actionLightOn() {
	if (!HERE(LAMP)) return false;
	SPK = 184;
	if (LIMIT < 0) {
		RSPEAK(SPK); /* Your lamp has run out of power.*/
		return true;
	}
	PROP[LAMP] = 1;
	RSPEAK(39); /* Your lamp is now on.*/
	if (WZDARK) describeLocation();
	return true;
}

/**
 * actionLightOff - LAMP OFF
 */
function actionLightOff() {
	if (!HERE(LAMP)) return false;
	PROP[LAMP] = 0;
	RSPEAK(40); /* Your lamp is now off.*/
	if (DARK()) RSPEAK(16); /* It is now pitch dark. If you proceed you will likely fall into a pit.*/
	return true;
}

function actionWave() {
//C  WAVE.  NO EFFECT UNLESS WAVING ROD AT FISSURE.
//
//9090	if (( !TOTING(OBJ) )  && (OBJ ! =  ROD ||  !TOTING(ROD2) ) ) 
//	1	SPK = 29
//	if (OBJ ! =  ROD ||  !AT(FISSUR)  ||  !TOTING(OBJ) 
//	1	 || CLOSNG) GOTO 2011
//	PROP[FISSUR] = 1-PROP[FISSUR]
//	CALL PSPEAK(FISSUR,2-PROP[FISSUR]) 
//	GOTO 2012
}

function actionAttack() {
//C  ATTACK.  ASSUME TARGET IF UNAMBIGUOUS.  "THROW" ALSO LINKS HERE.  ATTACKABLE
//C  OBJECTS FALL INTO TWO CATEGORIES: ENEMIES (SNAKE, DWARF, ETC.)   AND OTHERS
//C  (BIRD, CLAM) .  AMBIGUOUS IF TWO ENEMIES, OR IF NO ENEMIES BUT TWO OTHERS.
//
//9120
	for (var I = 1; I <= 5; I++) {
			if (DLOC[I] == LOC && DFLAG >=  2) {//GOTO 9122;
//9121	
			}
	}
//	I = 0
//9122	if (OBJ ! =  0) GOTO 9124
//	if (I ! =  0) OBJ = DWARF
//	if (HERE(SNAKE) ) OBJ = OBJ*100+SNAKE
//	if (AT(DRAGON)  && PROP[DRAGON] == 0) OBJ = OBJ*100+DRAGON
//	if (AT(TROLL) ) OBJ = OBJ*100+TROLL
//	if (HERE(BEAR)  && PROP[BEAR] == 0) OBJ = OBJ*100+BEAR
//	if (OBJ > 100) GOTO 8000
//	if (OBJ ! =  0) GOTO 9124
//C  CAN'T ATTACK BIRD BY THROWING AXE.
//	if (HERE(BIRD)  && VERB ! =  THROW) OBJ = BIRD
//C  CLAM AND OYSTER BOTH TREATED AS CLAM FOR INTRANSITIVE CASE; NO HARM DONE.
//	if (HERE(CLAM)  || HERE(OYSTER) ) OBJ = 100*OBJ+CLAM
//	if (OBJ > 100) GOTO 8000
//9124	if (OBJ ! =  BIRD) GOTO 9125
//	SPK = 137
//	if (CLOSED) GOTO 2011
//	CALL DSTROY(BIRD) 
//	PROP[BIRD] = 0
//	if (PLACE[SNAKE] == PLAC[SNAKE]) TALLY2 = TALLY2+1
//	SPK = 45
//9125	if (OBJ == 0) SPK = 44
//	if (OBJ == CLAM || OBJ == OYSTER) SPK = 150
//	if (OBJ == SNAKE) SPK = 46
//	if (OBJ == DWARF) SPK = 49
//	if (OBJ == DWARF && CLOSED) GOTO 19000
//	if (OBJ == DRAGON) SPK = 167
//	if (OBJ == TROLL) SPK = 157
//	if (OBJ == BEAR) SPK = 165+(PROP[BEAR]+1) /2
//	if (OBJ ! =  DRAGON || PROP[DRAGON] ! =  0) GOTO 2011
//C  FUN STUFF FOR DRAGON.  IF HE INSISTS ON ATTACKING IT, WIN!  SET PROP TO DEAD,
//C  MOVE DRAGON TO CENTRAL LOC (STILL FIXED) , MOVE RUG THERE (NOT FIXED) , AND
//C  MOVE HIM THERE, TOO.  THEN DO A NULL MOTION TO GET NEW DESCRIPTION.
//	CALL RSPEAK(49) 
//	VERB = 0
//	OBJ = 0
//	CALL GETIN(WD1,WD1X,WD2,WD2X) 
//	if (WD1 ! =  'Y' && WD1 ! =  'YES') GOTO 2608
//	CALL PSPEAK(DRAGON,1) 
//	PROP[DRAGON] = 2
//	PROP[RUG] = 0
	var K = (PLAC[DRAGON]+FIXD[DRAGON]) /2;
//	CALL MOVE(DRAGON+100,-1) 
//	CALL MOVE(RUG+100,0) 
//	CALL MOVE(DRAGON,K) 
//	CALL MOVE(RUG,K) 
		for (var OBJ = 1; OBJ <= 100; OBJ++) { 
			IDONDX = OBJ;
			if (PLACE[IDONDX] == PLAC[DRAGON] || PLACE[IDONDX] == FIXD[DRAGON]) MOVE(IDONDX,K) ;
//9126
			}
//	LOC = K
//	K = NULL
//	GOTO 8
}

function actionPour() {
//C  POUR.  IF NO OBJECT, OR OBJECT IS BOTTLE, ASSUME CONTENTS OF BOTTLE.
//C  SPECIAL TESTS FOR POURING WATER OR OIL ON PLANT OR RUSTY DOOR.
//
//9130	if (OBJ == BOTTLE || OBJ == 0) OBJ = LIQ(0) 
//	if (OBJ == 0) GOTO 8000
//	if ( !TOTING(OBJ) ) GOTO 2011
//	SPK = 78
//	if (OBJ ! =  OIL && OBJ ! =  WATER) GOTO 2011
//	PROP[BOTTLE] = 1
//	PLACE[OBJ] = 0
//	SPK = 77
//	if ( !(AT(PLANT)  || AT(DOOR) ) ) GOTO 2011
//
//	if (AT(DOOR) ) GOTO 9132
//	SPK = 112
//	if (OBJ ! =  WATER) GOTO 2011
//	CALL PSPEAK(PLANT,PROP[PLANT]+1) 
//	PROP[PLANT] = PROP[PLANT]+2 % 6;
//	PROP[PLANT2] = PROP[PLANT]/2
//	K = NULL
//	GOTO 8
//
//9132	PROP[DOOR] = 0
//	if (OBJ == OIL) PROP[DOOR] = 1
//	SPK = 113+PROP[DOOR]
//	GOTO 2011
}

function actionEat() {
//C  EAT.  INTRANSITIVE: ASSUME FOOD IF PRESENT, ELSE ASK WHAT.  TRANSITIVE: FOOD
//C  OK, SOME THINGS LOSE APPETITE, REST ARE RIDICULOUS.
//
//8140	if ( !HERE(FOOD) ) GOTO 8000
//8142	CALL DSTROY(FOOD) 
//	SPK = 72
//	GOTO 2011
//
//9140	if (OBJ == FOOD) GOTO 8142
//	if (OBJ == BIRD || OBJ == SNAKE || OBJ == CLAM || OBJ == OYSTER
//	1	 || OBJ == DWARF || OBJ == DRAGON || OBJ == TROLL
//	2	 || OBJ == BEAR) SPK = 71
//	GOTO 2011
}

function actionDrink() {
//C  DRINK.  IF NO OBJECT, ASSUME WATER AND LOOK FOR IT HERE.  IF WATER IS IN
//C  THE BOTTLE, DRINK THAT, ELSE MUST BE AT A WATER LOC, SO DRINK STREAM.
//
//9150	if (OBJ == 0 && LIQLOC(LOC)  ! =  WATER && (LIQ(0)  ! =  WATER
//	1	 ||  !HERE(BOTTLE) ) ) GOTO 8000
//	if (OBJ ! =  0 && OBJ ! =  WATER) SPK = 110
//	if (SPK == 110 || LIQ(0)  ! =  WATER ||  !HERE(BOTTLE) ) GOTO 2011
//	PROP[BOTTLE] = 1
//	PLACE[WATER] = 0
//	SPK = 74
//	GOTO 2011
}

/**
 * RUB.  YIELDS VARIOUS SNIDE REMARKS.
 * 9160
 */
function actionRub() {
	if (OBJ == 0) {
		sayWhat();
		return false;
	}
	else if (OBJ !=  LAMP) {
		RSPEAK(76); /* Peculiar. Nothing unexpected happens. */
		return false;
	}
	else
		return true;
}

function actionThrow() {
//C  THROW.  SAME AS DISCARD UNLESS AXE.  THEN SAME AS ATTACK EXCEPT IGNORE BIRD,
//C  AND IF DWARF IS PRESENT THEN ONE MIGHT BE KILLED.  (ONLY WAY TO DO SO!) 
//C  AXE ALSO SPECIAL FOR DRAGON, BEAR, AND TROLL.  TREASURES SPECIAL FOR TROLL.
//
//9170	if (TOTING(ROD2)  && OBJ == ROD &&  !TOTING(ROD) ) OBJ = ROD2
//	if ( !TOTING(OBJ) ) GOTO 2011
//	if (OBJ >=  50 && OBJ <=  MAXTRS && AT(TROLL) ) GOTO 9178
//	if (OBJ == FOOD && HERE(BEAR) ) GOTO 9177
//	if (OBJ ! =  AXE) GOTO 9020
	for (var I = 1; I <= 5; I++) {
		//  NEEDN'T CHECK DFLAG IF AXE IS HERE.
			if (DLOC[I] == LOC) {};//GOTO 9172;
//9171	
			}
//	SPK = 152
//	if (AT(DRAGON)  && PROP[DRAGON] == 0) GOTO 9175
//	SPK = 158
//	if (AT(TROLL) ) GOTO 9175
//	if (HERE(BEAR)  && PROP[BEAR] == 0) GOTO 9176
//	OBJ = 0
//	GOTO 9120
//
//9172	SPK = 48
//C  IF SAVED NOT  =  -1, HE BYPASSED THE "START" CALL.
//	if (RAN(3)  == 0 || SAVED ! =  -1) GOTO 9175
//	DSEEN[I] =  false
//	DLOC[I] = 0
//	SPK = 47
//	DKILL = DKILL+1
//	if (DKILL == 1) SPK = 149
//9175	CALL RSPEAK(SPK) 
//	CALL DROP(AXE,LOC) 
//	K = NULL
//	GOTO 8
//
//C  THIS'LL TEACH HIM TO THROW THE AXE AT THE BEAR!
//9176	SPK = 164
//	CALL DROP(AXE,LOC) 
//	FIXED[AXE] = -1
//	PROP[AXE] = 1
//	CALL JUGGLE(BEAR) 
//	GOTO 2011
//
//C  BUT THROWING FOOD IS ANOTHER STORY.
//9177	OBJ = BEAR
//	GOTO 9210
//
//9178	SPK = 159
//C  SNARF A TREASURE FOR THE TROLL.
//	CALL DROP(OBJ,0) 
//	CALL MOVE(TROLL,0) 
//	CALL MOVE(TROLL+100,0) 
//	CALL DROP(TROLL2,PLAC[TROLL]) 
//	CALL DROP(TROLL2+100,FIXD[TROLL]) 
//	CALL JUGGLE(CHASM) 
//	GOTO 2011
}

/**
 * QUIT.  INTRANSITIVE ONLY.  VERIFY INTENT AND EXIT IF THAT'S WHAT HE WANTS.
 * 8180
 */
function actionQuit() {
	GAVEUP = YES(22,54,54); /* Do you really want to quit now? */
	if (GAVEUP) tallyScore();
	//	GOTO 2012
}

function actionFind() {
//C  FIND.  MIGHT BE CARRYING IT, OR IT MIGHT BE HERE.  ELSE GIVE CAVEAT.
//
//9190	if (AT(OBJ)  || (LIQ(0)  == OBJ && AT(BOTTLE) ) 
//	1	 || K == LIQLOC(LOC) ) SPK = 94
		for (var I = 1; I <= 5; I++) { 
//9192	
	if (DLOC[I] == LOC && DFLAG >=  2 && OBJ == DWARF) SPK = 94;
	}
//	if (CLOSED) SPK = 138
//	if (TOTING(OBJ) ) SPK = 24
//	GOTO 2011
//
//C  INVENTORY.  IF OBJECT, TREAT SAME AS FIND.  ELSE REPORT ON CURRENT BURDEN.
//
//8200	SPK = 98
		for (var I = 1; I <= 100; I++) {
//	IDONDX = I
//	if (IDONDX == BEAR ||  !TOTING(IDONDX) ) GOTO 8201
//	if (SPK == 98) CALL RSPEAK(99) 
//	BLKLIN =  false
//	CALL PSPEAK(IDONDX,-1) 
//	BLKLIN =  true
//	SPK = 0
//8201	
		}
//	if (TOTING(BEAR) ) SPK = 141
//	GOTO 2011
}

function actionFeed() {
//C  FEED.  IF BIRD, NO SEED.  SNAKE, DRAGON, TROLL: QUIP.  IF DWARF, MAKE HIM
//C  MAD.  BEAR, SPECIAL.
//
//9210	if (OBJ ! =  BIRD) GOTO 9212
//	SPK = 100
//	GOTO 2011
//
//9212	if (OBJ ! =  SNAKE && OBJ ! =  DRAGON && OBJ ! =  TROLL) GOTO 9213
//	SPK = 102
//	if (OBJ == DRAGON && PROP[DRAGON] ! =  0) SPK = 110
//	if (OBJ == TROLL) SPK = 182
//	if (OBJ ! =  SNAKE || CLOSED ||  !HERE(BIRD) ) GOTO 2011
//	SPK = 101
//	CALL DSTROY(BIRD) 
//	PROP[BIRD] = 0
//	TALLY2 = TALLY2+1
//	GOTO 2011
//
//9213	if (OBJ ! =  DWARF) GOTO 9214
//	if ( !HERE(FOOD) ) GOTO 2011
//	SPK = 103
//	DFLAG = DFLAG+1
//	GOTO 2011
//
//9214	if (OBJ ! =  BEAR) GOTO 9215
//	if (PROP[BEAR] == 0) SPK = 102
//	if (PROP[BEAR] == 3) SPK = 110
//	if ( !HERE(FOOD) ) GOTO 2011
//	CALL DSTROY(FOOD) 
//	PROP[BEAR] = 1
//	FIXED[AXE] = 0
//	PROP[AXE] = 0
//	SPK = 168
//	GOTO 2011
//
//9215	SPK = 14
//	GOTO 2011
}

function actionFill() {
//C  FILL.  BOTTLE MUST BE EMPTY, AND SOME LIQUID AVAILABLE.  (VASE IS NASTY.) 
//
//9220	if (OBJ == VASE) GOTO 9222
//	if (OBJ ! =  0 && OBJ ! =  BOTTLE) GOTO 2011
//	if (OBJ == 0 &&  !HERE(BOTTLE) ) GOTO 8000
//	SPK = 107
//	if (LIQLOC(LOC)  == 0) SPK = 106
//	if (LIQ(0)  ! =  0) SPK = 105
//	if (SPK ! =  107) GOTO 2011
//	PROP[BOTTLE] = ()COND[LOC] % 4) /2*2
//	K = LIQ(0) 
//	if (TOTING(BOTTLE) ) PLACE[K] = -1
//	if (K == OIL) SPK = 108
//	GOTO 2011
//
//9222	SPK = 29
//	if (LIQLOC(LOC)  == 0) SPK = 144
//	if (LIQLOC(LOC)  == 0 ||  !TOTING(VASE) ) GOTO 2011
//	CALL RSPEAK(145) 
//	PROP[VASE] = 2
//	FIXED[VASE] = -1
//	GOTO 9024
}

function actionBlast() {
//C  BLAST.  NO EFFECT UNLESS YOU'VE GOT DYNAMITE, WHICH IS A NEAT TRICK!
//
//9230	if (PROP[ROD2] < 0 ||  !CLOSED) GOTO 2011
//	BONUS = 133
//	if (LOC == 115) BONUS = 134
//	if (HERE(ROD2) ) BONUS = 135
//	CALL RSPEAK(BONUS) 
//	GOTO 20000
}

/**
 * SCORE.  GO TO SCORING SECTION, WHICH WILL RETURN IF SCORNG IS TRUE.
 * 8240
 */
function actionScore() {
	tallyScoreAndEnd(false);
	out('If you were to quit now, you would score ' + SCORE + ' out of a possible ' + MXSCOR + '.');
	GAVEUP = YES(143,54,54); /* Do you indeed wish to quit now? */
	if (GAVEUP) tallyScoreAndEnd(true);
}

/**
 * FEE FIE FOE FOO (AND FUM). ADVANCE TO NEXT STATE IF GIVEN IN PROPER ORDER.
 * LOOK UP WD1 IN SECTION 3 OF VOCAB TO DETERMINE WHICH WORD WE'VE GOT.  LAST
 * WORD ZIPS THE EGGS BACK TO THE GIANT ROOM (UNLESS ALREADY THERE) .
 * 8250
 */
function actionFoo() {
	var fum = VOCAB(WD1, 3);
	if (fum != FOOBAR + 1) {
		if (FOOBAR != 0) RSPEAK(151); /* What's the matter, can't you read? Now you'd best start over.*/
	}
	else {
		FOOBAR = fum;
		if (FOOBAR == 4) {
			FOOBAR = 0;
			if (PLACE[EGGS] == PLAC[EGGS] || (TOTING(EGGS) && LOC == PLAC[EGGS])) {
				RSPEAK(42); /* Nothing happens. */
			}
			else {
				/* BRING BACK TROLL IF WE STEAL THE EGGS BACK FROM HIM BEFORE CROSSING. */
				if (place[EGGS] == 0 && place[TROLL] == 0 && prop[TROLL] == 0) prop[TROLL] = 1;
				if (LOC == PLAC[EGGS]) PSPEAK(EGGS, 0); /* There is a large nest here, full of golden eggs! */
				else if (HERE(EGGS)) PSPEAK(EGGS, 1); /* The nest of golden eggs has vanished! */
				else PSPEAK(EGGS, 2); /* Done! */
				MOVE(EGGS, PLAC[EGGS]);
			}
		}
		else {
			RSPEAK(54); /* OK */
		}
	}
}

/**
 * BRIEF.  INTRANSITIVE ONLY.  SUPPRESS LONG DESCRIPTIONS AFTER FIRST TIME.
 * 8260
 */
function actionBrief() {
	if (OBJ != 0) return true;
	else {
		ABBNUM = 10000;
		DETAIL = 3;
		RSPEAK(156);
		/* Okay, from now on I'll only describe a place in full the first time
		   you come to it.  To get the full description, say "look".*/
		return false;
	}
}

/**
 * READ.  MAGAZINES IN DWARVISH, MESSAGE WE'VE SEEN, AND . . . OYSTER?
 * 8270/9270
 */
function actionRead() {
	if (HERE(MAGZIN)) OBJ = MAGZIN;
	if (HERE(TABLET)) OBJ = OBJ * 100 + TABLET;
	if (HERE(MESSAG)) OBJ = OBJ * 100 + MESSAG;
	if (CLOSED && TOTING(OYSTER)) OBJ = OYSTER;
	if (OBJ > 100 || OBJ == 0 || DARK(0)) {
		sayWhat();
	}
	else {
		if (DARK()) sayISeeNo(word2);
		else {
			switch (OBJ) {
				case MAGZIN: /* I'm afraid the magazine is written in dwarvish.*/
					RSPEAK(190);
					break;
				case TABLET: /* Congratulations on bringing light into the dark-room! */
					RSPEAK(196);
					break;
				case MESSAG: /* This is not the maze where the pirate leaves his treasure chest. */
					RSPEAK(191);
					break;
				case OYSTER:
					if (HINTED[2] && TOTING(OYSTER)) { 
						RSPEAK(194); /* It says the same thing it did before. */
					}
					else if (!CLOSED) {
						HINTED[2] = YES(192,193,54); 
						/* Hmmm, this looks like a clue, which means it'll cost you 10 points to
						   read it.  Should I go ahead and read it anyway? */
					}
					break;
				default:
					return true;
			}
		}
	}
	return false;
}

/**
 * BREAK.  ONLY WORKS FOR MIRROR IN REPOSITORY AND, OF COURSE, THE VASE.
 * 9280
 */
function actionBreak() {
	if (OBJ == 0) {
		sayWhat();
		return false;
	}
	if (OBJ == MIRROR) {
		RSPEAK(148); /* It is too far up for you to reach.*/
		return false;
	}
	if (OBJ == VASE && PROP[VASE] == 0) {
		if (TOTING(VASE)) DROP(VASE, LOC);
		PROP[VASE] = 2;
		FIXED[VASE] = -1;
		RSPEAK(198); /* You have taken the vase and hurled it delicately to the ground.*/
		return false;
		//	GOTO 2011
	}
	if (OBJ ==  MIRROR && CLOSED) {
		RSPEAK(197);
		wakeDwarves();
		return false;
	}
	return true;
}

/**
 * WAKE.  ONLY USE IS TO DISTURB THE DWARVES.
 * 9290
 */
function actionWake() {
	if (OBJ == 0) {
		sayWhat();
		return false;
	}
	if (OBJ ==  DWARF || CLOSED) {
		RSPEAK(199); 
		/* You prod the nearest dwarf, who wakes up grumpily, takes one look at
		   you, curses, and grabs for his axe. */         
		// OH DEAR, HE'S DISTURBED THE DWARVES.
		wakeDwarves();
		return false;
	}
	return true;
}

function actionSuspend() {
//C  SUSPEND.  OFFER TO EXIT LEAVING THINGS RESTARTABLE, BUT REQUIRING A DELAY
//C  BEFORE RESTARTING (SO CAN'T SAVE THE WORLD BEFORE TRYING SOMETHING RISKY) .
//C  UPON RESTARTING, SETUP = -1 CAUSES RETURN TO 8305 TO PICK UP AGAIN.
//
//8300	SPK = 201
//	if (DEMO) GOTO 2011
//	TYPE 8302,LATNCY
//8302	FORMAT(/' I can suspend your adventure for you so that you can',
//	1	' resume later, but'/' you will have to wait at least',
//	2	I3,' minutes before continuing.') 
//	if ( !YES(200,54,54) ) GOTO 2012
//	CALL DATIME(SAVED,SAVET) 
//	SETUP = -1
//	CALL CIAO
//
//8305	YEA = START(0) 
//	SETUP = 3
//	K = NULL
//	GOTO 8
}

function actionHours() {
//C  HOURS.  REPORT CURRENT NON-PRIME-TIME HOURS.
//
//8310	CALL MSPEAK(6) 
//	CALL HOURS
//	GOTO 2012
}

// COME HERE IF HE'S BEEN LONG ENOUGH AT REQUIRED LOC(S)  FOR SOME UNUSED HINT.
// HINT NUMBER IS IN VARIABLE "HINT".  BRANCH TO QUICK TEST FOR ADDITIONAL
// CONDITIONS, THEN COME BACK TO DO NEAT STUFF.  GOTO 40010 IF CONDITIONS ARE
// MET AND WE WANT TO OFFER THE HINT.  GOTO 40020 TO CLEAR HINTLC BACK TO ZERO,
// 40030 TO TAKE NO ACTION YET.
function offerHint() {
	// NOW FOR THE QUICK TESTS.  SEE DATABASE DESCRIPTION FOR ONE-LINE NOTES.
	var conditions = false;
	switch (HINT) {
		case 4: //CAVE
			conditions = (PROP[GRATE] == 0 && !HERE(KEYS));
			break;
		case 5: //BIRD
			conditions = (HERE(BIRD) && TOTING(ROD) && OBJ == BIRD);
			break;
		case 6: //SNAKE
			conditions = (HERE(SNAKE) && !HERE(BIRD));
			break;
		case 7: //MAZE
			conditions = (ATLOC[LOC] == 0 && ATLOC[OLDLOC] == 0 && ATLOC[OLDLC2] == 0 && HOLDNG > 1);
			break;
		case 8: //DARK
			conditions = (PROP[EMRALD] != -1 && PROP[PYRAM] == -1);
			break;
		case 9: //WITT
			conditions = true;
			break;
		default: throw 'Hint number exceeds list';
	}
	if (conditions) {
		if (YES(HINTS[HINT][3],0,54)) {
			out('I am prepared to give you a hint, but it will cost you ' + HINTS[HINT][2] + ' points.');
			HINTED[HINT] = YES(175,HINTS[HINT][4],54);
			if (HINTED[HINT] && LIMIT > 30) LIMIT = LIMIT + 30*HINTS[HINT][2];
		}
	}
	HINTLC[HINT] = 0;
}	

//C  CAVE CLOSING AND SCORING
//
//
//C  THESE SECTIONS HANDLE THE CLOSING OF THE CAVE.  THE CAVE CLOSES "CLOCK1"
//C  TURNS AFTER THE LAST TREASURE HAS BEEN LOCATED (INCLUDING THE PIRATE'S
//C  CHEST, WHICH MAY OF COURSE NEVER SHOW UP) .  NOTE THAT THE TREASURES NEED NOT
//C  HAVE BEEN TAKEN YET, JUST LOCATED.  HENCE CLOCK1 MUST BE LARGE ENOUGH TO GET
//C  OUT OF THE CAVE (IT ONLY TICKS WHILE INSIDE THE CAVE) .  WHEN IT HITS ZERO,
//C  WE BRANCH TO 10000 TO START CLOSING THE CAVE, AND THEN SIT BACK AND WAIT FOR
//C  HIM TO TRY TO GET OUT.  IF HE DOESN'T WITHIN CLOCK2 TURNS, WE CLOSE THE
//C  CAVE; IF HE DOES TRY, WE ASSUME HE PANICS, AND GIVE HIM A FEW ADDITIONAL
//C  TURNS TO GET FRANTIC BEFORE WE CLOSE.  WHEN CLOCK2 HITS ZERO, WE BRANCH TO
//C  11000 TO TRANSPORT HIM INTO THE FINAL PUZZLE.  NOTE THAT THE PUZZLE DEPENDS
//C  UPON ALL SORTS OF RANDOM THINGS.  FOR INSTANCE, THERE MUST BE NO WATER OR
//C  OIL, SINCE THERE ARE BEANSTALKS WHICH WE DON'T WANT TO BE ABLE TO WATER,
//C  SINCE THE CODE CAN'T HANDLE IT.  ALSO, WE CAN HAVE NO KEYS, SINCE THERE IS A
//C  GRATE (HAVING MOVED THE FIXED OBJECT!)  THERE SEPARATING HIM FROM ALL THE
//C  TREASURES.  MOST OF THESE PROBLEMS ARISE FROM THE USE OF NEGATIVE PROP
//C  NUMBERS TO SUPPRESS THE OBJECT DESCRIPTIONS UNTIL HE'S ACTUALLY MOVED THE
//C  OBJECTS.
//
//C  WHEN THE FIRST WARNING COMES, WE LOCK THE GRATE, DESTROY THE BRIDGE, KILL
//C  ALL THE DWARVES (AND THE PIRATE) , REMOVE THE TROLL AND BEAR (UNLESS DEAD) ,
//C  AND SET "CLOSNG" TO TRUE.  LEAVE THE DRAGON; TOO MUCH TROUBLE TO MOVE IT.
//C  FROM NOW UNTIL CLOCK2 RUNS OUT, HE CANNOT UNLOCK THE GRATE, MOVE TO ANY
//C  LOCATION OUTSIDE THE CAVE (LOC<9) , OR CREATE THE BRIDGE.  NOR CAN HE BE
//C  RESURRECTED IF HE DIES.  NOTE THAT THE SNAKE IS ALREADY GONE, SINCE HE GOT
//C  TO THE TREASURE ACCESSIBLE ONLY VIA THE HALL OF THE MT. KING.  ALSO, HE'S
//C  BEEN IN GIANT ROOM (TO GET EGGS) , SO WE CAN REFER TO IT.  ALSO ALSO, HE'S
//C  GOTTEN THE PEARL, SO WE KNOW THE BIVALVE IS AN OYSTER.  *AND*, THE DWARVES
//C  MUST HAVE BEEN ACTIVATED, SINCE WE'VE FOUND CHEST.
/**
 * closeCave
 * 10000
 */
function closeCave() {
	PROP[GRATE] = 0;
	PROP[FISSUR] = 0;
	for (var i = 1; i <= 6; i++) { 
		DSEEN[I] = false;
		DLOC[I] = 0; 
	}
	MOVE(TROLL, 0);
	MOVE(TROLL + 100, 0); 
	MOVE(TROLL2, PLAC[TROLL]);
	MOVE(TROLL2 + 100, FIXD[TROLL]);
	JUGGLE(CHASM);
	if (PROP[BEAR] != 3) DSTROY(BEAR);
	PROP[CHAIN] = 0;
	FIXED[CHAIN] = 0;
	PROP[AXE] = 0;
	FIXED[AXE] = 0;
	RSPEAK(129);
	/* A sepulchral voice reverberating through the cave, says, "Cave closing
	   soon.  All adventurers exit immediately through main office." */ 
	CLOCK1 = -1;
	CLOSNG = true;
//	GOTO 19999
}

//C  ONCE HE'S PANICKED, AND CLOCK2 HAS RUN OUT, WE COME HERE TO SET UP THE
//C  STORAGE ROOM.  THE ROOM HAS TWO LOCS, HARDWIRED AS 115 (NE)  AND 116 (SW) .
//C  AT THE NE END, WE PLACE EMPTY BOTTLES, A NURSERY OF PLANTS, A BED OF
//C  OYSTERS, A PILE OF LAMPS, RODS WITH STARS, SLEEPING DWARVES, AND HIM.  AND
//C  THE SW END WE PLACE GRATE OVER TREASURES, SNAKE PIT, COVEY OF CAGED BIRDS,
//C  MORE RODS, AND PILLOWS.  A MIRROR STRETCHES ACROSS ONE WALL.  MANY OF THE
//C  OBJECTS COME FROM KNOWN LOCATIONS AND/OR STATES (E.G. THE SNAKE IS KNOWN TO
//C  HAVE BEEN DESTROYED AND NEEDN'T BE CARRIED AWAY FROM ITS OLD "PLACE") ,
//C  MAKING THE VARIOUS OBJECTS BE HANDLED DIFFERENTLY.  WE ALSO DROP ALL OTHER
//C  OBJECTS HE MIGHT BE CARRYING (LEST HE HAVE SOME WHICH COULD CAUSE TROUBLE,
//C  SUCH AS THE KEYS) .  WE DESCRIBE THE FLASH OF LIGHT AND TRUNDLE BACK.
/**
 * enterStorage
 * 11000
 */
function enterStorage() {
	var storageNE = 115, 
		storageSW = 116;
	PROP[BOTTLE] = PUT(BOTTLE, storageNE, 1);
	PROP[PLANT] = PUT(PLANT, storageNE, 0) ;
	PROP[OYSTER] = PUT(OYSTER, storageNE, 0);
	PROP[LAMP] = PUT(LAMP, storageNE, 0);
	PROP[ROD] = PUT(ROD, storageNE, 0);
	PROP[DWARF] = PUT(DWARF, storageNE, 0); 
	LOC = storageNE;
	OLDLOC = storageNE;
	NEWLOC = storageNE;

	// LEAVE THE GRATE WITH NORMAL (NON-NEGATIVE PROPERTY) .
	FOO = PUT(GRATE, storageSW, 0);
	PROP[SNAKE] = PUT(SNAKE, storageSW, 1);
	PROP[BIRD] = PUT(BIRD, storageSW, 1);
	PROP[CAGE] = PUT(CAGE, storageSW, 0);
	PROP[ROD2] = PUT(ROD2, storageSW, 0);
	PROP[PILLOW] = PUT(PILLOW, storageSW, 0);

	PROP[MIRROR] = PUT(MIRROR, storageNE, 0);
	FIXED[MIRROR] = storageSW;

	for (var i = 1; i <= 100; i++) {
		if (TOTING(i)) DSTROY(i);
	}

	RSPEAK(132);
	/* The sepulchral voice entones, "The cave is now closed."  as the echoes
	   fade, there is a blinding flash of light (and a small puff of orange
	   smoke). . . .    as your eyes refocus, you look around and find...*/
	CLOSED = true;
//	GOTO 2
}


//C  ANOTHER WAY WE CAN FORCE AN END TO THINGS IS BY HAVING THE LAMP GIVE OUT.
//C  WHEN IT GETS CLOSE, WE COME HERE TO WARN HIM.  WE GO TO 12000 IF THE LAMP
//C  AND FRESH BATTERIES ARE HERE, IN WHICH CASE WE REPLACE THE BATTERIES AND
//C  CONTINUE.  12200 IS FOR OTHER CASES OF LAMP DYING.  12400 IS WHEN IT GOES
//C  OUT, AND 12600 IS IF HE'S WANDERED OUTSIDE AND THE LAMP IS USED UP, IN WHICH
//C  CASE WE FORCE HIM TO GIVE UP.
/**
 * checkLamp
 * 2608+
 * 12000-12200-12400-12600
 */
function checkLamp() {
	if (PROP[LAMP] == 1) LIMIT--;
	
	if (LIMIT <= 30 && HERE(BATTER) && PROP[BATTER] == 0 && HERE(LAMP)) {
		// 12000
		RSPEAK(188);
		/* Your lamp is getting dim. I'm taking the liberty of replacing the batteries.*/
		PROP[BATTER] = 1;
		if (TOTING(BATTER)) DROP(BATTER,LOC);
		LIMIT += 2500;
		LMWARN = false;
		return;
	}
	if (LIMIT == 0) {
		LIMIT = -1;
		PROP[LAMP] = 0;
		if (HERE(LAMP)) RSPEAK(184); /* Your lamp has run out of power.*/
		return;
	}
	if (LIMIT< 0 && LOC <= 8) {
		RSPEAK(185); 
		/* There's not much point in wandering around out here, and you can't
		   explore the cave without a lamp.  So let's just call it a day.*/
		GAVEUP = true;
		tallyScoreAndEnd(true);
	}
	if (LIMIT <= 30) {
		if (!LMWARN && HERE(LAMP)) {
			LMWARN = true;
			if (PLACE[BATTER] == 0) RSPEAK(183);
			/* Your lamp is getting dim.  You'd best start wrapping this up, unless
		       you can find some fresh batteries.  I seem to recall there's a vending
		       machine in the maze.  Bring some coins with you.*/
			else if (PROP[BATTER] == 1) RSPEAK(189);
			     /* Your lamp is getting dim, and you're out of spare batteries.  You'd
		            best start wrapping this up.*/
			else RSPEAK(187);
			/* Your lamp is getting dim.  You'd best go back for those batteries.*/
			return;
		}
	}
}

		
//C  AND, OF COURSE, DEMO GAMES ARE ENDED BY THE WIZARD.
//
//13000	CALL MSPEAK(1) 
//	GOTO 20000
//

/**
 * wakeDwarves
 * OH DEAR, HE'S DISTURBED THE DWARVES.
 * 19000
 */
function wakeDwarves() {
		RSPEAK(136);
		/* The resulting ruckus has awakened the dwarves.  There are now several
		   threatening little dwarves in the room with you!  Most of them throw
	       knives at you!  All of them get you! */
		tallyScoreAndEnd(true);
}

/**
 * tallyScoreAndEnd
 * EXIT CODE.  WILL EVENTUALLY INCLUDE SCORING.  FOR NOW, HOWEVER, ...
 * @param end true if gameover, false when asking current score
 * @return -
 * 
 * THE PRESENT SCORING ALGORITHM IS AS FOLLOWS:
 *     OBJECTIVE:          POINTS:        PRESENT TOTAL POSSIBLE:
 *  GETTING WELL INTO CAVE   25                    25
 *  EACH TREASURE < CHEST    12                    60
 *  TREASURE CHEST ITSELF    14                    14
 *  EACH TREASURE > CHEST    16                   144
 *  SURVIVING             (MAX-NUM) *10             30
 *  NOT QUITTING              4                     4
 *  REACHING "CLOSNG"        25                    25
 *  "CLOSED": QUIT/KILLED    10
 *            KLUTZED        25
 *            WRONG WAY      30
 *            SUCCESS        45                    45
 *  CAME TO WITT'S END        1                     1
 *  ROUND OUT THE TOTAL       2                     2
 *                                       TOTAL:   350
 *  (POINTS CAN ALSO BE DEDUCTED FOR USING HINTS.) 
 *  
 *  20000
 */
function tallyScoreAndEnd(end) {
	var k;
	SCORE = 0;
	MXSCOR = 0;
	// FIRST TALLY UP THE TREASURES.  MUST BE IN BUILDING AND NOT BROKEN.
	// GIVE THE POOR GUY 2 POINTS JUST FOR FINDING EACH TREASURE.
	for (var i = 50; i <= MAXTRS; i++) { 
		if (PTEXT[i] != 0) {//GOTO 20010;
			if (i == CHEST) k = 14;
			else if (i > CHEST) k = 16;
			else k = 12;
			if (PROP[i] >=  0) SCORE += 2;
			if (PLACE[i] == 3 && PROP[i] == 0) SCORE += k - 2;
			MXSCOR += k;
		}
	}

	// NOW LOOK AT HOW HE FINISHED AND HOW FAR HE GOT.  MAXDIE AND NUMDIE TELL US
	// HOW WELL HE SURVIVED.  GAVEUP SAYS WHETHER HE EXITED VIA QUIT.  DFLAG WILL
	// TELL US IF HE EVER GOT SUITABLY DEEP INTO THE CAVE.  CLOSNG STILL INDICATES
	// WHETHER HE REACHED THE ENDGAME.  AND IF HE GOT AS FAR AS "CAVE CLOSED"
	// (INDICATED BY "CLOSED") , THEN BONUS IS ZERO FOR MUNDANE EXITS OR 133, 134,
	// 135 IF HE BLEW IT (SO TO SPEAK) .

	SCORE += (MAXDIE - NUMDIE) * 10;
	MXSCOR += MAXDIE * 10;
	if (end && !GAVEUP) SCORE += 4;
	MXSCOR += 4;
	if (DFLAG != 0) SCORE += 25;
	MXSCOR += 25;
	if (CLOSNG) SCORE += 25;
	MXSCOR += 25;
	if (CLOSED) {
		switch (BONUS) {
		case 0: SCORE += 10; break;
		case 135: SCORE += 25; break;
		case 134: SCORE += 30; break;
		case 133: SCORE += 45; break;
		}
	}
	MXSCOR += 45;

	// DID HE COME TO WITT'S END AS HE SHOULD?
	if (PLACE[MAGZIN] == 108) SCORE += 1;
	MXSCOR += 1;

	// ROUND IT OFF.
	SCORE += 2;
	MXSCOR += 2;

	// DEDUCT POINTS FOR HINTS.  HINTS < 4 ARE SPECIAL; SEE DATABASE DESCRIPTION.
	for (var i = 1; i <= HNTMAX; i++) { 
		if (HINTED[i]) SCORE -= HINTS[i][2]; 
	}
	
	// RETURN TO SCORE COMMAND IF THAT'S WHERE WE CAME FROM.
	if (end) {
		// THAT SHOULD BE GOOD ENOUGH.  LET'S TELL HIM ALL ABOUT IT.
		out('You scored ' + SCORE + ' out of a possible ' + MXSCOR + ', using ' +
				TURNS + ' turns.');
		var i;
		for (i = 1; i <= CLSSES; i++) { 
			if (CVAL[i] >=  SCORE) break; //GOTO 20210;
		}
		if (i > CLSSES) out ('You just went off my scale!!');
		else {
			SPEAK(CTEXT[i]);
			if (i == CLSSES - 1) {
				out('To achieve the next higher rating would be a neat trick!\nCongratulations!!');
			}
			else {
				var k = CVAL[i] + 1 - SCORE;
				out('To achieve the next higher rating, you need' + k + ' more point' + (k==1?'.':'s.'));
			}
		}
		gameOver = true;
	}
}

/**
 * firstDwarf
 * WHEN WE ENCOUNTER THE FIRST DWARF, WE KILL 0, 1, OR 2 OF THE 5 DWARVES.  IF
 * ANY OF THE SURVIVORS IS AT LOC, REPLACE HIM WITH THE ALTERNATE.
 * @return - 
 */
function firstDwarf() {
	// MET FIRST DWARF, OTHERS START MOVING, NO KNIVES THROWN YET
	DFLAG = 2; 
	for (var i = 1; i <= 2; i++) { // 2 times - so max 2 dwarfes killes
		var j = 1 + RAN(5); // J=1..5
		// IF SAVED NOT  =  -1, HE BYPASSED THE "START" CALL.
		if (PCT(50) && SAVED == -1) DLOC[j] = 0; // kill dwarf
	}
	for (var i = 1; i <= 5; i++) { // check survivors
		if (DLOC[i] == LOC) DLOC[i] = DALTLC; // use alt. loc
			ODLOC[i] = DLOC[i]; // set previous loc
	}
	// inform our player
	RSPEAK(3); /* A little dwarf just walked around a corner, saw you, threw a little axe at you which missed, cursed, and ran away. */ 
	DROP(AXE,LOC);
}

/**
 * checkAttack
 */
function checkAttack() {
	if (DTOTAL == 1) RSPEAK(4); /* There is a threatening little dwarf in the room with you! */
	else out('There are ' + DTOTAL + ' threatening little dwarves in the room with you.');

	if (ATTACK != 0) {
		if (DFLAG == 2) DFLAG = 3; // A knife was thrown 
		// IF SAVED NOT  =  -1, HE BYPASSED THE "START" CALL.  DWARVES GET *VERY* MAD!
		if (SAVED != -1) DFLAG = 20;
		if (ATTACK == 1) { // one knife
			RSPEAK(5); /* one sharp nasty knife is thrown at you! */
			K = 52; /* It misses! <> It gets you! */
		}
		else { // more knives
			out(ATTACK + ' of them throw knives at you!');
			K = 6; /* None of them hit you! <> One of them gets you! */
		}
		if (STICK > 1) out(STICK + ' of them get you!'); // Multiple wounds
		else RSPEAK(K + STICK); // Just one, or none at all
		if (STICK != 0) { // Dead
			OLDLC2 = LOC;
			label99dead();
		}
	}
}

/**
 * moveDwarf
 * THINGS ARE IN FULL SWING.  MOVE EACH DWARF AT RANDOM, EXCEPT IF HE'S SEEN US
 * HE STICKS WITH US.  DWARVES NEVER GO TO LOCS <15.  IF WANDERING AT RANDOM,
 * THEY DON'T BACK UP UNLESS THERE'S NO ALTERNATIVE.  IF THEY DON'T HAVE TO
 * MOVE, THEY ATTACK.  AND, OF COURSE, DEAD DWARVES DON'T DO MUCH OF ANYTHING.
 * @param i number of dwarf to process
 * @return - 
 */
function moveDwarf(i) {
//6010
	if (DLOC[i] == 0) return; // Dead dwarf
	var tk = new Array();
	var j = 1;
	var kk = KEY[DLOC[i]];
	if (kk != 0) {
	//6012
		do {
			NEWLOC = Math.abs(TRAVEL[kk])/1000 % 1000;
			if (NEWLOC <= 300 && NEWLOC > 15 && NEWLOC != ODLOC[i] && (j <= 1 || NEWLOC != tk[j-1]) && j < 20 && NEWLOC != DLOC[i] && !FORCED(NEWLOC) && (i != 6 || !BITSET(NEWLOC,3)) && Math.abs(TRAVEL[kk])/1000000 != 100) {
				tk[j] = NEWLOC;
				j++;
			}
			kk++;
		} while (TRAVEL[kk-1] >= 0);
	}
		// 6016
	tk[j] = ODLOC[i];
	if (j >= 2) j--;
	j = 1 + RAN(j); 
	ODLOC[i] = DLOC[i];
	DLOC[i] = tk[j];
	DSEEN[i] = (DSEEN[i] && LOC >= 15) || (DLOC[i] == LOC || ODLOC[i] == LOC); 
	if (DSEEN[i]) {
		DLOC[i] = LOC;
		if (i != 6) {
			// THIS THREATENING LITTLE DWARF IS IN THE ROOM WITH HIM!
			DTOTAL++;
			if (ODLOC[I] == DLOC[I]) {
				ATTACK++;
				if (KNFLOC >= 0) KNFLOC = LOC;
				if (RAN(1000) < 95*(DFLAG-2)) STICK++;
			}
		}
		else { // i == 6
			// THE PIRATE'S SPOTTED HIM.  HE LEAVES HIM ALONE ONCE WE'VE FOUND CHEST.
			// K COUNTS IF A TREASURE IS HERE.  IF NOT, AND TALLY = TALLY2 PLUS ONE FOR
			// AN UNSEEN CHEST, LET THE PIRATE BE SPOTTED.
			if(LOC != CHLOC && PROP[CHEST] < 0) { // not at chest location and prop chest < 0 (found chest)
				var treasure = false; //k
				for (var j = 50; j <= MAXTRS; j++) { // browse all treasures
					if (j != PYRAM || (LOC != PLAC[PYRAM] && LOC != PLAC[EMRALD])) {
						// except pyramid
						if(TOTING(j)) {
							takeTreasure(); // holds a treasure, take them all & return
							return;
						}
					}
					treasure = HERE(j); // treasure is here (but not toting)
				}
				if (TALLY == TALLY2+1 && !treasure && PLACE[CHEST] == 0 && HERE(LAMP) && PROP[LAMP] == 1) {// spot pirate, reset
					RSPEAK(186); 
					// There are faint rustling noises from the darkness behind you.  As you  
					// turn toward them, the beam of your lamp falls across a bearded pirate. 
					// He is carrying a large chest.  "Shiver me timbers!" he cries, "I\'ve   
					// been spotted!  I\'d best hie meself off to the maze to hide me chest!" 
					// with that, he vanishes into the gloom.                  
					MOVE(CHEST,CHLOC);
					MOVE(MESSAG,CHLOC2);
					DLOC[6] = CHLOC;
					ODLOC[6] = CHLOC;
					DSEEN[6] = false;
					return;
				}
				if (ODLOC(6) != DLOC(6) && PCT(20)) {
					RSPEAK(127);
					// There are faint rustling noises from the darkness behind you.
				}
			}
		}
	}
}

/**
 * takeTreasure - pirate takes all treasures from player and notify player
 * @return -
 */
function takeTreasure() {
	RSPEAK(128);
	//  Out from the shadows behind you pounces a bearded pirate!  "Har, har," 
	//  he chortles, "I\'ll just take all this booty and hide it away with me 
	//  chest deep in the maze!" He snatches your treasure and vanishes into 
	//  the gloom. 
	
	//DON'T STEAL CHEST BACK FROM TROLL!
	if (PLACE[MESSAG] == 0) MOVE(CHEST, CHLOC); // *message in second maze , chloc=114 (pirate chest)
	MOVE(MESSAG, CHLOC2); //CHLOC2=140, dead end
	for (var j = 50; j <= MAXTRS; j++) {
		if (j != PYRAM || (LOC != PLAC[PYRAM] && LOC != PLAC[EMRALD])) {
			if (AT(j) && FIXED[j] == 0) CARRY(j,LOC); // take object from location
			if (TOTING(j)) DROP(j,CHLOC); // drop object at chest-loc
		}
	}
	DLOC[6] = CHLOC;
	ODLOC[6] = CHLOC;
	DSEEN[6] = false;
}