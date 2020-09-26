import './style.css';
import addAndDisplay from './storage';
import weather from './weather';
import giphy from './giphy';

var myVar;

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