import { TxtViewer } from "./ui/TxtViewer.js";

const listTxt = document.querySelector(".list-txt");

async function fillListTxt() {
    listTxt.innerHTML  =  await fetch("/src/txt.json")
                    .then(res => res.json())
                    .then(json => fillDivs(json));

        new TxtViewer();
}

function fillDivs(json) {
    let s ='';
    for(const key in json) {
        s += `<div class="${key}">${fillSpans(json[key])}</div>`;
    }
    return s;
}

function fillSpans(arObj) {
    return arObj.map(e => `<span class="poetry" for-click="${e.file}">${e.name}</span><br>`).join('');
}

fillListTxt();