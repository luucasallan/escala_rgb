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

  function inRed(e) {
    inR = e.target.value;
    onRed.value = inR;
  }

  function inGreen(e) {
    var inG = e.target.value;
    onGreen.value = inG;

  }

  function inBlue(e) {
    var inB = e.target.value;
    onBlue.value = inB;
  }


}
