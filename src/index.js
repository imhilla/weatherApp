import './style.css';
import addAndDisplay from './storage'
import weather from './weather'
import { getLocation } from './weather';
import giphy from './giphy'


const divLoad = document.getElementById('onLoad')
divLoad.addEventListener('load', preLoad)

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var myVar;
function preLoad() {
  myVar = setTimeout(showPage, 2000);
}

preLoad()