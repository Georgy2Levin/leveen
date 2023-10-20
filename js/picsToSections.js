import addImgListeners from "./pic.js";

import { arPics } from "../src/arPic.js";

const picSection = document.querySelector(".pic-section");
const PICS_IN_SECTION = 96;

function fillSection(n) {
    const nNum = +n;    
    const arObjPics = arPics;
    let q = nNum * PICS_IN_SECTION;
        let stringImgs = '';
        const length = arObjPics.length;
        const limit = (nNum + 1) * PICS_IN_SECTION;
        while(q < limit && q < length) {
            let obj = arObjPics[q];
            stringImgs += fillTheImg(obj);            
            q++;
        }
        picSection.innerHTML = stringImgs;
        addImgListeners();

}
function fillTheImg(obj) {
    return `<img src="${obj.img_src}" alt="${obj.alt}" detail-image-src="${obj.detail_image_src}" title="${obj.title}">`
}

fillSection(0);
window.fillSection = fillSection;



