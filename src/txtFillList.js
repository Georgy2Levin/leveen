import { TxtViewer } from "./ui/TxtViewer.js";

const listTxt = document.querySelector(".list-txt");

function fillListTxt() {
    fetch("/src/txt.json")
        .then(res => res.json())
        .then(j => Object.entries(j))
        .then(ar => ar.map(arObj => `<div class="${arObj[0]}">${fillDivTxt(arObj[1])}</div>`))
        .then(arS => arS.join(''))
        .then(s => listTxt.innerHTML = s)
        .finally(() => new TxtViewer());
}

function fillDivTxt(arObj) {
    return arObj.map(e => `<span class="poetry" for-click="${e.file}">${e.name}</span><br>`).join('');
}

fillListTxt();