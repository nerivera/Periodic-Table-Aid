var wrong = 0;
var n = 0;
var temp;
var fnList = [
	function() {
		$("#qtxt").html("How many protons are in calcium (Ca)?");
		wrong = 0;
		return true;
	},
	function() {
		temp = $("#txt").val();
		$("#qtxt").html("That is " + (temp === "20" ? "" : "in") + "correct. How many neutrons are in the most abundant isotopte of nickel (Ni)?");
		return temp === "20";
	},
	function() {
		temp = $("#txt").val();
		$("#qtxt").html("That is " + (temp === "31" ? "" : "in") + "correct. How many electrons are in an atom of magnesium (Mg)?");
		return temp === "31";
	},
	function() {
		temp = $("#txt").val();
		$("#qtxt").html("That is " + (temp === "12" ? "" : "in") + "correct. How many neutrons are in the most abundant isotopte of aluminum (Al)?");
		return temp === "12";
	},
	function() {
		temp = $("#txt").val();
		$("#qtxt").html("That is " + (temp === "14" ? "" : "in") + "correct. How many neutrons are in the most abundant isotopte of iodine (I)?");
		return temp === "14";
	},
	function() {
		temp = $("#txt").val();
		wrong += temp == "74" ? 0 : 1;
		$("#qtxt").html("That is " + (temp === "74" ? "" : "in") + "correct. You got " + wrong.toString() + " wrong. " + ((wrong > 1) ? "Please try again." : "You passed. Move on to Level 2."));
		n = (wrong > 1) ? -1 : n;
		wrong = 0;
		return true;
	},
	function() {
		document.title = "Level 2";
		wrong = 0;
		$("#qtxt").html("Does calcium-40 (calcium with atomic mass of 40 amu) have high or low abundance? (e.g. \"high\")");
		return true;
	},
	function() {
		temp = $("#txt").val();
		$("#qtxt").html("That is " + (temp === "high" ? "" : "in") + "correct. Does gold (Au)-196 have high or low abundance?");
		return temp === "high";
	},
	function() {
		temp = $("#txt").val();
		$("#qtxt").html("That is " + (temp === "low" ? "" : "in") + "correct. Given that 75% of fluorine atoms are F-19 and 25% are F-18, what is the weighted average atomic mass for fluorine? (expressed as decimal)");
		return temp === "low";
	},
	
	function() {
		temp = $("#txt").val();
		wrong += temp == "18.75" ? 0 : 1;
		$("#qtxt").html("That is " + (temp === "18.75" ? "" : "in") + "correct. You got " + wrong.toString() + " wrong. " + ((wrong > 1) ? "Please try again." : "You passed. Move on to Level 3."));
		n = (wrong > 1) ? 5 : n;
		wrong = 0;
		return true;
	},
	function() {
		document.title = "Level 3";
		$("#qtxt").html("Name the symbol for an element that will acquire an oxidation number of -2 when it forms an ion. (e.g. \"Ba\")");
		wrong = 0;
		return true;
	},
	function() {
		temp = $("#txt").val();
		$("#qtxt").html("That is " + (temp === "O" || temp === "S" || temp === "Se" || temp === "Te" || temp === "Po" || temp === "Lv" ? "" : "in") + "correct. What is the oxidation number that francium would acquire? (e.g. \"+2\")");
		return temp === "O" || temp === "S" || temp === "Se" || temp === "Te" || temp === "Po" || temp === "Lv";
	},
	function() {
		temp = $("#txt").val();
		wrong += temp == "+1" ? 0 : 1;
		$("#qtxt").html("That is " + (temp === "+1" ? "" : "in") + "correct. You got " + wrong.toString() + " wrong. " + ((wrong > 0) ? "Please try again." : "You passed. Move on to Level 4."));
		n = (wrong > 0) ? 9 : n;
		wrong = 0;
		return true;
	},
	function() {
		document.title = "Level 4";
		$("qtxt").html("How many valence electrons are in germanium (Ge)?");
		wrong = 0;
		return true;
	},
	function() {
		temp = $("#txt").val();
		$("#qtxt").html("That is " + (temp === "4" ? "" : "in") + "correct. Write the longhand electron configuration for promethium (Pm), seperating each term with a space and ignoring superscripts (e.g. \"1s2 2s2 2p3\")");
		return temp === "4";
	},
	function() {
		temp = $("#txt").val();
		$("#qtxt").html("That is " + (temp === "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1 4f4" ? "" : "in") + "correct. What value fills in the question mark for barium - [?]6s<sup>2</sup>");
		return temp === "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1 4f4";
	},
	function() {
		temp = $("#txt").val();
		wrong += temp == "Xe" ? 0 : 1;
		$("#qtxt").html("That is " + (temp === "Xe" ? "" : "in") + "correct. You got " + wrong.toString() + " wrong. " + ((wrong > 0) ? "Please try again." : "You passed. Move on to Level 5."));
		n = (wrong > 0) ? 12 : n;
		wrong = 0;
		return true;
	},
	function() {
		document.title = "Level 5";
		$("#qtxt").html("Which of the following has the highest ionization energy - W, Hf, Cl, Ga, Li, Ts");
		wrong = 0;
		return true;
	},
	function() {
		temp = $("#txt").val();
		$("#qtxt").html("That is " + (temp === "Cl" ? "" : "in") + "correct. Which of the following has the highest electronegativity - W, Ba, F, Ga, Cd, Na");
		return temp === "Cl";
	},
	function() {
		temp = $("#txt").val();
		$("#qtxt").html("That is " + (temp === "F" ? "" : "in") + "correct. Which of the following has the lowest electron affinity - W, Ba, F, Ga, Cd, Na");
		return temp === "F";
	},
	function() {
		temp = $("#txt").val();
		$("#qtxt").html("That is " + (temp === "Ba" ? "" : "in") + "correct. Which of the following has the highest atomic radius - W, Ba, F, Ga, Cd, Na");
		return temp === "Ba";
	},
	function() {
		temp = $("#txt").val();
		wrong += temp == "Ba" ? 0 : 1;
		$("#qtxt").html("That is " + (temp === "Ba" ? "" : "in") + "correct. You got " + wrong.toString() + " wrong. " + ((wrong > 0) ? "Please try again." : "You passed. Congratulations!"));
		n = (wrong > 0) ? 17 : n;
		wrong = 0;
		return true;
	}
];
function next() {
	wrong += fnList[n]() ? 0 : 1;
	if(n === 0 || n === 5 || n === 12 || n === 17) {
		wrong = 0;
	}
	if(n != fnList.length - 1) {
		n ++;
	}
	document.getElementById("txt").value = "";
}