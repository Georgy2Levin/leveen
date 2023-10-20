import { arTxt } from "../src/arTxt.js";

const DIR = '/txt/';
const ext = '.txt';
const header = document.querySelector("header");
const mainElement = document.querySelector("main");
const txtContainer = document.getElementById('txt-container');
const listTxt = document.querySelector(".list-txt");
const hrImg = document.querySelectorAll(".hr-img");


function showTxt(file) {
    header.hidden = true;    
    txtContainer.hidden = false;    
    hrImg[1].hidden = false;
    txtContainer.innerHTML = '<div class="div-close" onclick="closeTxtContainer()"><button>x</button></div>';
    let pathName = DIR + file + ext;
    fetch(pathName) 
    .then(response => response.text())
    .then(text => {
        const paragraphs = text.split('\n');
        paragraphs.forEach(paragraph => {
            if(paragraph.length == 1) {
                const br = document.createElement('br');
                txtContainer.appendChild(br);
            } else {        
            const p = document.createElement('div');
            p.textContent = paragraph;
            txtContainer.appendChild(p);
            }
        });
});
mainElement.scrollTop = 0;
}

function fillListTxt() {    
    let arObjTxt = Object.entries(arTxt);
    let divLetters = arObjTxt.map(arObj => `<div class="${arObj[0]}">${fillDivTxt(arObj[1])}</div>`);
    listTxt.innerHTML = divLetters.join('');
}

function fillDivTxt(arObj) {    
    return arObj.map(e => `<span class="poetry" onclick="showTxt('${e.file}')">${e.name}</span><br>`).join('');
}

fillListTxt();

function closeTxtContainer() {
    txtContainer.hidden = true;
    header.hidden = false;
    hrImg[1].hidden = true;
}

window.showTxt = showTxt;
window.closeTxtContainer = closeTxtContainer;