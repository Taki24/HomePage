const celciusInput = document.querySelector('#celcius > input');
const kelvinInput = document.querySelector('#kelvin > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');

function roundNum(num){
   return Math.round(num * 100) / 100;
}

function celciusTo(){
   const c = parseFloat(celciusInput.value);
   const f = (c * (9/5)) + 32;
   const k = c + 273.15;
   kelvinInput.value = roundNum(k);
   fahrenheitInput.value = roundNum(f);
}

function fahrenheitTo(){
   const f = parseFloat(fahrenheitInput.value);
   const c = (f - 32) * (5/9);
   const k = (f + 459.67) * (5/9);
   celciusInput.value = roundNum(c);
   kelvinInput.value = roundNum(k);
}

function kelvinTo(){
   const k = parseFloat(kelvinInput.value);
   const c = k - 273.15;
   const f = (k - 273) * (9/5) + 32;
   celciusInput.value = roundNum(c);
   fahrenheitInput.value = roundNum(f);
}


celciusInput.addEventListener('input', celciusTo);
fahrenheitInput.addEventListener('input', fahrenheitTo);
kelvinInput.addEventListener('input', kelvinTo);
