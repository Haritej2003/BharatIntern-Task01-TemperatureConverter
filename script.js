function convertTemperature() {
    // Get the user input and selected degree type
    const userInput = document.getElementById("user-input").value;
    const degreeType = document.getElementById("inputdegree").value;
  
    // Convert the temperature based on the selected degree type
    let celsius, fahrenheit, kelvin;
  
    if (degreeType == "celsius") {
      celsius = userInput;
      fahrenheit = ((userInput * 9/5) + 32).toFixed(4);
      kelvin = (parseInt(userInput) + 273.15).toFixed(4);
    } else if (degreeType == "fahreinheit") {
      celsius = ((userInput - 32) * 5/9).toFixed(4);
      fahrenheit = userInput;
      kelvin = ((userInput - 32) * 5/9 + 273.15).toFixed(4);
    } else if (degreeType == "kelvin") {
      celsius = (userInput - 273.15).toFixed(4);
      fahrenheit = ((userInput - 273.15) * 9/5 + 32).toFixed(4);
      kelvin = userInput;
    }
  
    // Display the converted temperatures
    document.getElementById("Celsius").innerText = " "+celsius+"\u00B0C";
    document.getElementById("Fahreinheit").innerText= " "+fahrenheit +"\u00B0F";
    document.getElementById("Kelvin").innerText = " "+kelvin +"\u00B0K";
  }
  

  