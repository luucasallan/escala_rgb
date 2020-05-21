// @ts-check
// para executar só quando a página terminar de carregar
window.addEventListener('load', start);

//variaveis global
var red = null;
var green = null;
var blue = null;
var onRed = null;
var onGreen = null;
var onBlue = null;
var rgb = null;
var box = null;


//para startar a aplicação
function start() {
  //inputs
  red = document.querySelector('#inRed');
  green = document.querySelector('#inGreen');
  blue = document.querySelector('#inBlue');
  //outputs
  onRed = document.querySelector('#onRed');
  onGreen = document.querySelector('#onGreen');
  onBlue = document.querySelector('#onBlue');
  // div
  box = document.querySelector('#caixaRGB');
  
  //-----------------------------------------//

  activateRenge();
  preventFormSubmit();
}

function preventFormSubmit() {

  function handleFormSubmit(ev) {
    ev.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateRenge() {
  red.addEventListener('input', inRed);
  green.addEventListener('input', inGreen);
  blue.addEventListener('input', inBlue);

  var inR = 0;
  function inRed(e) {
    inR = e.target.value;
    onRed.value = inR;
    console.log(inR);
    rgb(inR);
  }

  var inG = 0;
  function inGreen(e) {
    inG = e.target.value;
    onGreen.value = inG;
    console.log(inG);
    rgb(inG);

  }

  var inB = 0;
  function inBlue(e) {
    inB = e.target.value;
    onBlue.value = inB;
    rgb(inB);
  }

  function rgb() {

    var color = inR + ',' + inG +','+ inB;
    
    box.style.background = "rgb(" + color + ")";

  }
  rgb();

}

