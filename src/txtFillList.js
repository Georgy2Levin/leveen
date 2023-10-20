import { TxtViewer } from "./ui/TxtViewer.js";

const listTxt = document.querySelector(".list-txt");
const POETRY = "poetry";

async function fillListTxt() {
    const arTxt = fetch ("/src/txt.json")
            .then(res => res.json());    
    let arObjTxt = Object.entries(await arTxt);
    let divLetters = arObjTxt.map(arObj => `<div class="${arObj[0]}">${fillDivTxt(arObj[1])}</div>`);
    listTxt.innerHTML = divLetters.join('');

    new TxtViewer(POETRY);
}

function fillDivTxt(arObj) {    
    return arObj.map(e => `<span class="${POETRY}" for-click="${e.file}">${e.name}</span><br>`).join('');
}

fillListTxt();