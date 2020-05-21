// @ts-check
// para executar só quando a página terminar de carregar
window.addEventListener('load', start);
//variaveis global
var red = null;
/**
 * @type {HTMLInputElement}
 */
var green = null;
/**
 * @type {HTMLInputElement}
 */
var blue = null;
/**
 * @type {HTMLInputElement}
 */
var onRed = null;
/**
 * @type {HTMLInputElement}
 */
var onGreen = null;
/**
 * @type {HTMLInputElement}
 */
var onBlue = null;
/**
 * @type {HTMLInputElement}
 */
var rgb = null;
/**
 * @type {HTMLInputElement}
 */
var box = null;
/**
 * @type {HTMLInputElement}
 */
var caixaInvertRGB = null;

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
  caixaInvertRGB = document.querySelector('#caixaInvertRGB');
  activateRenge();
  preventFormSubmit();
}
function preventFormSubmit() {
  /**
  * 
  * @param {Event & {target: HTMLInputElement}} e 
  */
  function handleFormSubmit(e) {
    e.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}
function activateRenge() {
  red.addEventListener('input', inRed);
  green.addEventListener('input', inGreen);
  blue.addEventListener('input', inBlue);
  var inR = '0';
  /**
   * 
   * @param {Event & {target: HTMLInputElement}} e 
   */
  function inRed(e) {
    inR = e.target.value;
    onRed.value = inR;
    rgb();
  }
  var inG = '0';
  /**
  * 
  * @param {Event & {target: HTMLInputElement}} e 
  */
  function inGreen(e) {
    inG = e.target.value;
    onGreen.value = inG;
    rgb();
  }
  var inB = '0';
  /**
   * 
   * @param {Event & {target: HTMLInputElement}} e 
   */
  function inBlue(e) {
    inB = e.target.value;
    onBlue.value = inB;
    rgb();
  }
  function rgb() {
    var color = inR + ',' + inG + ',' + inB;
    box.style.background = "rgb(" + color + ")";

    var inverted = `${
      ~Number.parseInt(inR) & 255}, ${
      ~Number.parseInt(inG) & 255}, ${
      ~Number.parseInt(inB) & 255}`
     caixaInvertRGB.style.background = "rgb(" + inverted  + ")";


  }
  rgb();
}

