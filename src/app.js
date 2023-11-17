const trailer_btn = document.getElementById('show-trailer-btn');
const trailer = document.getElementById('trailer');
const trailer_escape_btn = document.getElementById('trailer-escape-btn');
let trailer_playing = false;




trailer_btn.addEventListener('click', ()=>{
    trailer.style.visibility='visible';
    trailer_escape_btn.style.visibility='visible';
    trailer_playing = true;
    trailer.play();
})


trailer_escape_btn.addEventListener('click',()=>{
    trailer_playing = false;
    trailer.pause();
    trailer.currentTime = 0;
    trailer.style.visibility='hidden';
    trailer_escape_btn.style.visibility='hidden';
})
