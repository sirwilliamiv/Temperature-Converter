

// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.




// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.





// / Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// enterkey+addEventListener("")




// put a change event on celsius/fahrenheit radio buttons
// 
//document.querySelector(buttonthing).addeventleister('look up button fuctnionsmdn', function () {
//grabs input
// looks at radio ID
// if celcuius true run celc
// else run farenheign
// }\\\



// ----------------------------Button Selection-----------------------------
  document.querySelector('#click2Convert').addEventListener('click', 

  	function (converting) {
  				var inputTemp = document.getElementById("temptemp").value
  					console.log(typeof inputTemp)

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

}



// var radioFahrenheit =
// 
function radioFahrenheit(inputTemp) {

	document.getElementById("holdingResult").innerHTML = (inputTemp * 9/5 + 32)

}
	

// ----------------------Clear that value field!!------------------------


document.querySelector('#clearText').addEventListener('click', function() {
		console.log(temptemp)
	  document.getElementById('temptemp').value = "";
	}
)




// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// // happen based on which radio button is selected.
// function determineConverter (clickEvent) {
//   console.log("event", clickEvent);
// }


// toCelsius(36)

// Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);