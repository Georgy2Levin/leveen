import addImgListeners from "./picListener.js";
const arPics = fetch("/src/pic_light.json")
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
    const dir = "/pic/";
    const thumb_img_src = dir + obj.img_name + "_m.jpg";
    const detail_image_src = dir + obj.img_name + ".jpg";
    return `<img src="${thumb_img_src}" alt="${obj.img_title}" detail-image-src="${detail_image_src}" title="${obj.img_title}">`
}

fillSection(0);
window.fillSection = fillSection;



