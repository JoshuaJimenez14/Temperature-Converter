function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) / 1.8;
    return Math.round(celsius);
  }
  const inputFahrenheit = window.prompt("what is the temperature in fahrenhiet you'd want to convert to celcius?");

  function createMessage(fahrenheit, celsius)
  {
    return `You entered ${fahrenheit} degrees fahrenheit. That is equal to ${celsius} degrees celcius.`;
  } 
  const convertedCelcius = fahrenheitToCelsius(inputFahrenheit);
console.log(convertedCelcius);
  console.log(createMessage(inputFahrenheit, convertedCelcius));

  if (convertedCelcius<=0){
    console.log("cold");
  
  }
  else if (convertedCelcius<=30){
    console.log("comfortable");
  }
  else {
    console.log("hot");
  }