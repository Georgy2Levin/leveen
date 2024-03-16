const head = document.querySelector("head");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

const txtMenu = `<a href="jivopis.html">живопись</a> | 
  <a href="jornal.html">журнал</a> |
  <a href="media.html">медиа</a> |
  <a href="txt.html">слова и рифмы</a> |
  <a href="other.html">разное</a>`

head.innerHTML = `<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  
  <meta name="description" content="официальный сайт leveen. живопись">
  <meta name="keywords" content="левин leveen живопись канарейки">
  <link href="styles/styles.css" rel="stylesheet" type="text/css">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>e. lev&#232;&#232;n. Самонадеянная живопись.</title>`

header.innerHTML = `<div class="pic-menu">
    <a href="jivopis.html" onMouseOver="onOverOut('top1', 'top-a')" onMouseOut="onOverOut('top1', 'top1')">
	    <img class="img-menu" src="top/top1.gif" name="top1" alt="живопись"></a>
    <a href="jornal.html" onMouseOver="onOverOut('top2', 'top-a')" onMouseOut="onOverOut('top2', 'top2')">
	    <img class="img-menu" src="top/top2.gif" name="top2" alt="журнал"></a>
    <a href="media.html" onMouseOver="onOverOut('top3', 'top-a')" onMouseOut="onOverOut('top3', 'top3')">
	    <img class="img-menu" src="top/top3.gif" name="top3" alt="медиа"></a>
	  <a href="txt.html" onMouseOver="onOverOut('top5', 'push')" onMouseOut="onOverOut('top5', 'pu')">
	    <img class="img-menu-txt" src="top/pu.gif" alt="слова и рифмы" name="top5"></a>
    <a href="other.html" onMouseOver="onOverOut('top4', 'top-a')" onMouseOut="onOverOut('top4', 'top4')">
	    <img class="img-menu" src="top/top4.gif" name="top4" alt="разное"></a>
    </div>
    <div class="txt-menu-top">
      ${txtMenu}
    </div>
    <img class="hr-img" src="top/hr600.gif">`

footer.innerHTML = `<img class="hr-img" src="top/hr600.gif">
    <div class="txt-menu-bottom">
      ${txtMenu}
    </div> 
    <div class="copyright">0586534332georgy@gmail.com
     &copy; 2004 - 2024
    </div>`

function onOverOut(name, pic) {
  pic = "./top/" + pic + ".gif";
  document[name].src = `${pic}`;
}

window.onOverOut = onOverOut;