import './style.css';
import addAndDisplay from './storage'
import weather from './weather'
import { getLocation } from './weather';
import giphy from './giphy'

var myVar;

function preLoad() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
