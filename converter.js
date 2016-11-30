





// ----------------------------Button Selection-----------------------------
  document.querySelector('#click2Convert').addEventListener('click', 

  	function() {
  				var inputTemp = document.getElementById("temptemp").value
  					// console.log(typeof inputTemp)

  		if (document.querySelector('#toCelsius').checked === true ) {
  			radioCelsius(inputTemp)
  		} 
  		else {
  			radioFahrenheit(inputTemp)

  		}

 	}
)

// -------------------------Celsius/ Fahrenheit Button and function-----------

// var radioCelsius =   
function radioCelsius(inputTemp) {
	
	document.getElementById("holdingResult").innerHTML = (inputTemp - 32) * 5/9 


	console.log(typeof document.getElementById("holdingResult").innerHTML)
	if(document.getElementById("holdingResult").innerHTML > 32) {

		document.getElementById("holdingResult").style.color = "red";
	}

	else if (document.getElementById("holdingResult").innerHTML <= 0) {
		document.getElementById("holdingResult").style.color = "blue";
	}

	else {
		document.getElementById("holdingResult").style.color = "green";
	}

}



// var radioFahrenheit =
// 
function radioFahrenheit(inputTemp) {

	document.getElementById("holdingResult").innerHTML = (inputTemp * 9/5 + 32)

	console.log(typeof document.getElementById("holdingResult").innerHTML)
	if(document.getElementById("holdingResult").innerHTML > 90) {

		document.getElementById("holdingResult").style.color = "red";
	}

	else if (document.getElementById("holdingResult").innerHTML <= 32) {
		document.getElementById("holdingResult").style.color = "blue";
	}

	else {
		document.getElementById("holdingResult").style.color = "green";
	}


}
	

// ----------------------Clear that value field!!------------------------


document.querySelector('#clearText').addEventListener('click', function() {
		// console.log(temptemp)
	  document.getElementById('temptemp').value = "";
	}
)

// -------------------------executing with the Enter button----------------------
  document.addEventListener('keypress', function(enter) {

  	// console.log(enter)
  	if (enter.keyCode === 13) {

	 
	  			var inputTemp = document.getElementById("temptemp").value
	  					// console.log(typeof inputTemp)

	  		if (document.querySelector('#toCelsius').checked === true ) {
	  			radioCelsius(inputTemp)
	  		} 
	  		else {
	  			radioFahrenheit(inputTemp)

	  		}

 		}
 	}
)


