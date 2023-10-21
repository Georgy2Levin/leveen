const header = document.querySelector("header");
const mainElement = document.querySelector("main");
const txtContainer = document.getElementById("txt-container");
const hrImg = document.getElementById("hr-img");
const DIR = '/txt/';
const ext = '.txt';

export class TxtViewer {
    constructor() {
        this.addClickListener();
}

addClickListener() {
    const arSpans = document.querySelectorAll("[for-click]");
    arSpans.forEach(s => s.addEventListener("click", () => this.showTxt(s.getAttribute("for-click"))));
}

showTxt(file) {
    closeTxtContainer(false);
    txtContainer.innerHTML = '<div class="div-close"><button>x</button></div>';
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

document.querySelector(".div-close button").addEventListener("click", () => closeTxtContainer(true));
    }
}

function closeTxtContainer(bool) {
    txtContainer.hidden = bool;
    header.hidden = !bool;
    hrImg.hidden = bool;
}   