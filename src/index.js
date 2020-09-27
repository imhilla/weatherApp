/* eslint-disable no-unused-vars, prefer-destructuring */
/* eslint-disable no-undef, import/no-extraneous-dependencies */
import './style.css';
import addAndDisplay from './storage';
import weather from './weather';
import giphy from './giphy';

let myVar;

function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('myDiv').style.display = 'block';
}

function preLoad() {
  myVar = setTimeout(showPage, 2000);
}

const divLoad = document.getElementById('onLoad');
divLoad.addEventListener('load', preLoad);

preLoad();
/* eslint-enable no-unused-vars, prefer-destructuring */
/* eslint-enable no-undef, import/no-extraneous-dependencies */
