//Cache the elements that we need.
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let css = document.querySelector("h3");
let body = document.getElementById("gradient");
let randomButton = document.getElementById("randomColorButton");


// On page load set both color input values to the current html background linear gradient
let onpageload = () => {
   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
   css.textContent = body.style.background + ';'
}

// Generate a random hexcode and return the hexcode as a string
let generateHexCode = () => {
   var hexCode1 = "#";
   var hexValues1 = "0123456789abcdef";
   for ( var i = 0; i < 6; i++ ) {
     hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
   }
   return hexCode1;
}

// set both color input values to randomly generated hexcodes. and set the background linear gradient to match.
let setRandom = () => {
   color1.value = generateHexCode();
   color2.value = generateHexCode();
   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
   css.textContent = body.style.background + ";";

}

// when the color inputs are changed the body background linear gradient will change dynamically.
let setGradient = () => {
   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

   css.textContent = body?.style.background + ';';
}


onpageload();

// set an input event listener to see when the user moves the color input and calles the setGradient function to adjust the body linear gradient.
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

// sets a click event listener on the random button and calls the setRandom function to generate hexcodes and assign the body linear gradient according to the randomly generated values. 
randomButton?.addEventListener('click', setRandom)

