const header = document.querySelector("header");
const divPic = document.querySelector(".div-pic");
const detailContainer = document.querySelector(".detail-container");
const detailImageTitle = document.querySelector(".detail-image-title");

function addImgListeners() {
    const PICTURES = document.querySelectorAll(".pic-section img");
    for (let i = 0; i < PICTURES.length; i++) {
        PICTURES[i].addEventListener("click", function () {
            const detailImage = PICTURES[i].getAttribute('detail-image-src');
            const titleImage = PICTURES[i].getAttribute('title');

            setInnerHtml(detailImage, titleImage);
            openPicContainer();
            }
        )   
    }
}

function setInnerHtml(detailImage, titleImage) {
    divPic.innerHTML = `<img src="${detailImage}">`;
    detailImageTitle.innerHTML = `${titleImage}`;
}

function openPicContainer() {
    header.hidden = true;
    detailContainer.hidden = false;
}

function closePicContainer() {
    detailContainer.hidden = true;
    header.hidden = false;
}

addImgListeners();

window.closePicContainer = closePicContainer;
export default addImgListeners;