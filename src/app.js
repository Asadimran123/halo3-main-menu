/** global shared vars accross menus */
const music = document.getElementById('music');
const body = document.querySelector('body');


/** main menu vars */
const trailer_btn = document.getElementById('show-trailer-btn');
const trailer = document.getElementById('trailer');
const trailer_escape_btn = document.getElementById('trailer-escape-btn');

/** campaign menu vars */
const campaign_switch_lobby_btn = document.getElementById('campaign-switch-lobby-btn');
const select_mission_btn = document.getElementById('mission-select-btn');
const difficulty_select_btn = document.getElementById('difficulty-select-btn');
const start_btn = document.getElementById('start-btn');
let missions_displayed = false; 
const missions = [
'Arrival',
'Sierra 117', 
'Crows Nest', 
'Tsavo Highway', 
'The Storm', 
'Floodgate', 
'The Ark', 
'The Covenant', 
'Cortana', 
'Halo']

/** theater menu vars */
const film_list_btn = document.getElementById('change-film-btn');
const film_list = document.getElementById('film-menu');
const switch_lobby_btn = document.getElementById('switch-lobby-btn')
const lobby_list = document.getElementById('switch-lobby-menu')
const msg_div = document.getElementById('msg-div');


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
        music.pause();
        music.currentTime = 0;
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
        music.play();
    })
}



/** CAMPAIGN PAGE */

const create_mission_list = () =>{
    let mission_list = document.getElementById('mission_list');
    if(!mission_list){
        console.log('aaa')
        const mission_list = document.createElement('div')
        mission_list.setAttribute('id', 'mission_list')
        body.appendChild(mission_list);
        mission_list.style.zIndex = '1';
        mission_list.style.height = '800px'
        mission_list.style.width = '400px'
        mission_list.style.position = 'fixed'
        mission_list.style.display = 'flex'
        mission_list.style.flexDirection = 'column'
        mission_list.style.left = '500px'
        mission_list.style.top = '175px'
        const ordered_mission_list = document.createElement('ol');
        mission_list.appendChild(ordered_mission_list);
        for (let mission of missions){
            const m = document.createElement('li');
            ordered_mission_list.appendChild(m)
            m.innerText = mission;
            m.className = 'menu menu-btn';
        }
        missions_displayed = true;
    }
    else{
        mission_list.remove();
    }
}


if(select_mission_btn){
    select_mission_btn.addEventListener('click', create_mission_list);
}


/**     THEATER PAGE     */

/** function that toggles the film list visibility */
const toggle_film_list = () =>{
    if (film_list.style.display == 'none'){
        film_list.style.display = 'block';
        lobby_list.style.display = 'none'
    }
    else{
        film_list.style.display = 'none'
    }
    msg_div.style.display = 'none';
}

const toggle_lobby_menu = ()=>{
    if (lobby_list.style.display == 'none'){
        lobby_list.style.display = 'block';
        film_list.style.display = 'none'
    }
    else{
        lobby_list.style.display = 'none'
    }
    msg_div.style.display = 'none';
}

/** function that will create video element for guardian clip and escape button  */
const play_guardian_ns = ()=>{
    const guardian_vid = document.createElement('video');
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
    music.pause();
    music.currentTime = 0;
    escape_btn.addEventListener('click', ()=>{
        guardian_vid.remove();
        escape_btn.remove()
        music.play();
    })
}

/** function that will create video element for valhalla clip and escape button  */
const play_valhalla_ns = ()=>{
    const valhalla_vid = document.createElement('video')
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
    music.pause();
    music.currentTime = 0;
    escape_btn.addEventListener('click', ()=>{
        valhalla_vid.remove();
        escape_btn.remove()
        music.play();
    })
}

const play_construct_ns = ()=>{
    const construct_vid = document.createElement('video')
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
    music.pause();
    music.currentTime = 0;
    escape_btn.addEventListener('click', ()=>{
        construct_vid.remove();
        escape_btn.remove()
        music.play();
    })
}


const play_funny_banshee_ns = ()=>{
    const funny_banshee_vid = document.createElement('video')
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
    music.pause();
    music.currentTime = 0;
    escape_btn.addEventListener('click', ()=>{
        funny_banshee_vid.remove();
        escape_btn.remove()
        music.play();
    })
}

const play_h2a_vid = ()=>{
    const h2a_vid = document.createElement('video')
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
    music.pause();
    music.currentTime = 0;
    escape_btn.addEventListener('click', ()=>{
        h2a_vid.remove();
        escape_btn.remove()
        music.play();
    })
}


/** event listener for film list visibility */
if(film_list_btn){
    film_list_btn.addEventListener('click', toggle_film_list)
}

if(switch_lobby_btn){
    switch_lobby_btn.addEventListener('click', toggle_lobby_menu)
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