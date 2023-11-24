/** main menu vars */
const trailer_btn = document.getElementById('show-trailer-btn');
const trailer = document.getElementById('trailer');
const trailer_escape_btn = document.getElementById('trailer-escape-btn');

/** theater menu vars */
const film_list_btn = document.getElementById('change-film-btn');
const film_list = document.getElementById('film-menu');

/** theater film btns */
const guardian_no_scp_btn = document.getElementById('guardian-ns-btn');
const valhalla_no_scp_btn = document.getElementById('valhalla-ns-btn');
const construct_no_scp_btn = document.getElementById('construct-ns-btn');
const funny_banshee_btn = document.getElementById('funny-banshee-btn');
const h2a_no_scp_btn = document.getElementById('h2a-ns-btn');


let trailer_playing = false;
let film_list_visible = false;


/**    MAIN MENU     */

// /** event listener for trailer */
if (trailer_btn){
    trailer_btn.addEventListener('click', ()=>{
        trailer.style.visibility='visible';
        trailer_escape_btn.style.visibility='visible';
        trailer_playing = true;
        trailer.play();
    })
}


/**event listener to stop trailer */
if(trailer_escape_btn){
    trailer_escape_btn.addEventListener('click',()=>{
        trailer_playing = false;
        trailer.pause();
        trailer.currentTime = 0;
        trailer.style.visibility='hidden';
        trailer_escape_btn.style.visibility='hidden';
    })
}

/**     THEATER PAGE     */

/** function that toggles the film list visibility */
const toggle_film_list = () =>{
    console.log('click')
    if (film_list.style.display == 'none'){
        film_list.style.display = 'block';
    }
    else{
        film_list.style.display = 'none'
    }
}

/** function that will create video element for guardian clip and escape button  */
const play_guardian_ns = ()=>{
    const guardian_vid = document.createElement('video');
    const body = document.querySelector('body');
    guardian_vid.src='/assets/guardian-no-scope.mov';
    guardian_vid.controls = true;
    guardian_vid.style.display = 'flex'
    guardian_vid.style.position='fixed'
    guardian_vid.style.left = '500px'
    guardian_vid.style.top = '200px'
    body.appendChild(guardian_vid)
    guardian_vid.style.zIndex = 1;
    const escape_btn = document.createElement('button')
    body.appendChild(escape_btn);
    escape_btn.innerText = 'escape';
    escape_btn.style.position = 'fixed'
    escape_btn.style.display = 'flex'
    escape_btn.style.top = '1050px'
    escape_btn.style.left = '1100px'
    escape_btn.style.fontSize='40px'
    escape_btn.addEventListener('click', ()=>{
        guardian_vid.remove();
        escape_btn.remove()
    })
}

/** function that will create video element for valhalla clip and escape button  */
const play_valhalla_ns = ()=>{
    const valhalla_vid = document.createElement('video')
    const body = document.querySelector('body');
    valhalla_vid.src='/assets/valhalla-no-scope.mov';
    valhalla_vid.controls = true;
    valhalla_vid.style.display = 'flex'
    valhalla_vid.style.position='fixed'
    valhalla_vid.style.left = '500px'
    valhalla_vid.style.top = '200px'
    body.appendChild(valhalla_vid)
    valhalla_vid.style.zIndex = 1;
    const escape_btn = document.createElement('button')
    body.appendChild(escape_btn);
    escape_btn.innerText = 'escape';
    escape_btn.style.position = 'fixed'
    escape_btn.style.display = 'flex'
    escape_btn.style.top = '1050px'
    escape_btn.style.left = '1100px'
    escape_btn.style.fontSize='40px'
    escape_btn.addEventListener('click', ()=>{
        valhalla_vid.remove();
        escape_btn.remove()
    })
}

const play_construct_ns = ()=>{
    const construct_vid = document.createElement('video')
    const body = document.querySelector('body');
    construct_vid.src='/assets/construct.mov';
    construct_vid.controls = true;
    construct_vid.style.display = 'flex'
    construct_vid.style.position='fixed'
    construct_vid.style.left = '500px'
    construct_vid.style.top = '200px'
    body.appendChild(construct_vid)
    construct_vid.style.zIndex = 1;
    const escape_btn = document.createElement('button')
    body.appendChild(escape_btn);
    escape_btn.innerText = 'escape';
    escape_btn.style.position = 'fixed'
    escape_btn.style.display = 'flex'
    escape_btn.style.top = '1050px'
    escape_btn.style.left = '1100px'
    escape_btn.style.fontSize='40px'
    escape_btn.addEventListener('click', ()=>{
        construct_vid.remove();
        escape_btn.remove()
    })
}


const play_funny_banshee_ns = ()=>{
    const funny_banshee_vid = document.createElement('video')
    const body = document.querySelector('body');
    funny_banshee_vid.src='/assets/funny-banshee.mov';
    funny_banshee_vid.controls = true;
    funny_banshee_vid.style.display = 'flex'
    funny_banshee_vid.style.position='fixed'
    funny_banshee_vid.style.left = '500px'
    funny_banshee_vid.style.top = '200px'
    body.appendChild(funny_banshee_vid)
    funny_banshee_vid.style.zIndex = 1;
    const escape_btn = document.createElement('button')
    body.appendChild(escape_btn);
    escape_btn.innerText = 'escape';
    escape_btn.style.position = 'fixed'
    escape_btn.style.display = 'flex'
    escape_btn.style.top = '1050px'
    escape_btn.style.left = '1100px'
    escape_btn.style.fontSize='40px'
    escape_btn.addEventListener('click', ()=>{
        funny_banshee_vid.remove();
        escape_btn.remove()
    })
}

const play_h2a_vid = ()=>{
    const h2a_vid = document.createElement('video')
    const body = document.querySelector('body');
    h2a_vid.src='/assets/h2a.mov';
    h2a_vid.controls = true;
    h2a_vid.style.display = 'flex'
    h2a_vid.style.position='fixed'
    h2a_vid.style.left = '500px'
    h2a_vid.style.top = '200px'
    body.appendChild(h2a_vid)
    h2a_vid.style.zIndex = 1;
    const escape_btn = document.createElement('button')
    body.appendChild(escape_btn);
    escape_btn.innerText = 'escape';
    escape_btn.style.position = 'fixed'
    escape_btn.style.display = 'flex'
    escape_btn.style.top = '1050px'
    escape_btn.style.left = '1100px'
    escape_btn.style.fontSize='40px'
    escape_btn.addEventListener('click', ()=>{
        h2a_vid.remove();
        escape_btn.remove()
    })
}


/** event listener for film list visibility */
if(film_list_btn){
    film_list_btn.addEventListener('click', toggle_film_list)
}


/** event listener to play guardian clip */
if(guardian_no_scp_btn){
    guardian_no_scp_btn.addEventListener('click', play_guardian_ns);
}

/** event listener to play valhalla clip  */
if(valhalla_no_scp_btn){
    valhalla_no_scp_btn.addEventListener('click', play_valhalla_ns);
}

if(construct_no_scp_btn){
    construct_no_scp_btn.addEventListener('click', play_construct_ns);
}

if(funny_banshee_btn){
    funny_banshee_btn.addEventListener('click', play_funny_banshee_ns);
}

if(h2a_no_scp_btn){
    h2a_no_scp_btn.addEventListener('click', play_h2a_vid);
}