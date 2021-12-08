function showStuff (el) {
	var elementId = document.getElementById(el);

	for (i=0; i<elementId.length; i++) {
		if (elementId[i].selected=== true) {
			var x = elementId[i].text;
		} // end if
	} // end loop
	return x;
} //end functioin

function showMore (el) {
	var elementId = document.getElementsByName(el);
	//console.log(elementId.length);
	var mycheck = "";
	for (i=0; i<elementId.length; i++) {
		//console.log(elementId[i].checked);
		//console.log(elementId[i].value);
		if (elementId[i] === true) { 
			mycheck = mycheck + elementId[i].value + "<br>";
		}
	} // end of loop
	return mycheck;
} // end of function

function evaluatePage () {
	var feedbackState = 	showStuff("state");
	var feedbackHome = 	showStuff("home");
	var feedbackLight = showMore ('bulb');
	document.getElementById("output").innerHTML = feedbackState +"<br>" +feedbackHome + "<br>" + feedbackLight;
}