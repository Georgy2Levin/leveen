import addImgListeners from "./picListener.js";
const arPics = fetch("/src/pic.json")
    .then(res => res.json())
    .then(j => j.pics); 

const picSection = document.querySelector(".pic-section");
const PICS_IN_SECTION = 84;

async function fillSection(num) {
    num = +num;
    const arObjPics = await arPics;
    let q = num * PICS_IN_SECTION;
        let stringImgs = '';
        const length = arObjPics.length;
        const limit = (num + 1) * PICS_IN_SECTION;
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



