const scroll2 = document.querySelector(".scroll-to");

scroll2.innerHTML = `<button class="scroll-button up" onclick="scrollUpDown(0)">&#8679;</button>
    <button class="scroll-button down" onclick="scrollUpDown(100_000)">&#8681;</button>`

function scrollUpDown(to) {
    document.querySelector("main").scrollTop = +to;   
  }

window.scrollUpDown = scrollUpDown;