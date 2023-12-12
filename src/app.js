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

const missions = {
'Arrival' : 'https://www.youtube.com/watch?v=Wwxurxoto8o&list=PLDfrsfmqhSRYVm7GkbOIdwNnenZfhaS8P',
'Sierra 117' : 'https://www.youtube.com/watch?v=izBxWgFdvJo&list=PLDfrsfmqhSRYVm7GkbOIdwNnenZfhaS8P&index=2', 
'Crows Nest' : 'https://www.youtube.com/watch?v=KSlr65zT2_Q&list=PLDfrsfmqhSRYVm7GkbOIdwNnenZfhaS8P&index=3', 
'Tsavo Highway' : 'https://www.youtube.com/watch?v=mYMGFw2k3wg&list=PLDfrsfmqhSRYVm7GkbOIdwNnenZfhaS8P&index=4', 
'The Storm' : 'https://www.youtube.com/watch?v=4pVRNY4YUis&list=PLDfrsfmqhSRYVm7GkbOIdwNnenZfhaS8P&index=5', 
'Floodgate' : 'https://www.youtube.com/watch?v=pu3Y2pDfHkI&list=PLDfrsfmqhSRYVm7GkbOIdwNnenZfhaS8P&index=6', 
'The Ark' : 'https://www.youtube.com/watch?v=j4USgAHFO4M&list=PLDfrsfmqhSRYVm7GkbOIdwNnenZfhaS8P&index=7', 
'The Covenant' : 'https://www.youtube.com/watch?v=6wbp6plTFrE&list=PLDfrsfmqhSRYVm7GkbOIdwNnenZfhaS8P&index=8', 
'Cortana' : 'https://www.youtube.com/watch?v=5UsCy9OwxKs&list=PLDfrsfmqhSRYVm7GkbOIdwNnenZfhaS8P&index=9', 
'Halo' : 'https://www.youtube.com/watch?v=fs4EXVOtP9E&list=PLDfrsfmqhSRYVm7GkbOIdwNnenZfhaS8P&index=10', 
'Epilogue' : 'https://www.youtube.com/watch?v=UfAjn8PTRBE&list=PLDfrsfmqhSRYVm7GkbOIdwNnenZfhaS8P&index=11'}

const mission_images = {
'Arrival' : 'https://live.staticflickr.com/7782/17523073088_3986615bce_b.jpg',
'Sierra 117' : 'https://mp1st.com/wp-content/uploads/2022/04/Screenshot_31.png', 
'Crows Nest' : 'https://halo.wiki.gallery/images/thumb/3/34/H3_CrowsNest_Loadscreen.png/1200px-H3_CrowsNest_Loadscreen.png', 
'Tsavo Highway' : 'https://halo.wiki.gallery/images/thumb/d/d6/H3_TsavoHighway_Loadscreen.png/1200px-H3_TsavoHighway_Loadscreen.png', 
'The Storm' : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d4cc70b-f7c4-499a-a91a-f3e86b8b39f0/d6dqam6-ac02e111-a731-4cb2-b201-97a687cd45cf.jpg/v1/fill/w_1024,h_600,q_75,strp/halo_3___the_storm_by_halomika_d6dqam6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvN2Q0Y2M3MGItZjdjNC00OTlhLWE5MWEtZjNlODZiOGIzOWYwXC9kNmRxYW02LWFjMDJlMTExLWE3MzEtNGNiMi1iMjAxLTk3YTY4N2NkNDVjZi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0HGvyT92E4wlijbMkxwpKU-ZRi25kyMT3Ig0ncjY8-I', 
'Floodgate' : 'https://halo.wiki.gallery/images/thumb/6/67/H3_Floodgate_Loadscreen.png/1200px-H3_Floodgate_Loadscreen.png', 
'The Ark' : 'https://halo.wiki.gallery/images/thumb/1/1a/H3_TheArk_Loadscreen.png/1200px-H3_TheArk_Loadscreen.png', 
'The Covenant' : 'https://i.ytimg.com/vi/qgVQ0Hl7A30/sddefault.jpg', 
'Cortana' : 'https://halo.wiki.gallery/images/thumb/8/82/High_Charity_Infested.jpg/1200px-High_Charity_Infested.jpg', 
'Halo' : 'https://pm1.aminoapps.com/6442/d55f670a773789b57658939395dd4181fc36585d_hq.jpg', 
'Epilogue' : 'https://halo.wiki.gallery/images/thumb/d/d4/H3_Epilogue_Loadscreen.png/1200px-H3_Epilogue_Loadscreen.png'
}

const lobbies = [
    'MAIN MENU',
    'MATCHMAKING (COMING SOON)',
    'CUSTOM GAMES (COMING SOON)',
    'FORGE (COMING SOON)',
    'THEATER'
]

const difficulties = [
    'EASY', 
    'NORMAL', 
    'HEROIC', 
    'LEGENDARY'
];

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
const get_mission = (e)=>{
    let mission = e.target.innerText;
    let link = missions[mission]
    console.log(mission, link)
    
    let mission_display = document.getElementById('mission-display');
    const mission_list = document.getElementById('mission_list')

    mission_list.remove();

    mission_display = document.createElement('div');
    mission_display.setAttribute('id', 'mission-display')

    let mission_header = document.createElement('h1');
    let mission_image = document.createElement('img')
    mission_header.setAttribute('id', 'mission-header');
    mission_image.setAttribute('id', 'mission-img')

    body.appendChild(mission_display);
    mission_display.appendChild(mission_header);
    mission_display.appendChild(mission_image)

    mission_header.textContent = mission;
    mission_header.style.color = 'lightblue'

    mission_display.style.position = 'fixed';
    mission_display.style.left = '60px'

    mission_image.src = mission_images[mission]
    mission_image.style.height = '600px'
    mission_image.style.width = '900px'
    mission_image.style.border = 'lightblue 3px solid'
    mission_image.style.boxShadow = '5px'
}


/** creates mission list for campaign menu */
const create_mission_list = () =>{

    let difficulty_list = document.getElementById('difficulty-list');
    let mission_list = document.getElementById('mission_list');
    let lobby_list = document.getElementById('lobby-list')
    const mission_display = document.getElementById('mission-display');


    if(difficulty_list){
        difficulty_list.remove();
    }

    if(lobby_list){
        lobby_list.remove()
    }


    if(mission_display){
        mission_display.remove()
    }
    
    if(!mission_list){
        mission_list = document.createElement('div')
        mission_list.setAttribute('id', 'mission_list')
        body.appendChild(mission_list);

        mission_list.style.zIndex = '1';
        mission_list.style.height = '800px'
        mission_list.style.width = '200px'
        mission_list.style.position = 'fixed'
        mission_list.style.display = 'flex'
        mission_list.style.flexDirection = 'column'
        mission_list.style.left = '500px'
        mission_list.style.top = '175px'

        const ordered_mission_list = document.createElement('ol');
        mission_list.appendChild(ordered_mission_list);

        for (let mission in missions){
            const m = document.createElement('btn');
            ordered_mission_list.appendChild(m)
            m.innerText = mission;
            m.setAttribute('id', mission)
            m.className = 'menu menu-btn';
            m.style.width = '250px'
            m.addEventListener('click', get_mission);   //add event listeners to each button
        }
    }

    else{
        mission_list.remove();
    }
}

const goto_lobby = (e) =>{
    const lobby = e.target.innerText;

    switch(lobby){
        case lobbies[0]:
            console.log(lobbies[0])
            window.location.href='./index.html';
            break;
        case lobbies[1]:
            console.log(lobbies[1])
            break;
        case lobbies[2]:
            console.log(lobbies[2])
            break;
        case lobbies[3]:
            console.log(lobbies[3])
            break;
        case lobbies[4]:
            console.log(lobbies[4])
            window.location.href='./theater.html';
            break;
    }
}

const campaign_switch_lobby_toggle = () =>{
    let difficulty_list = document.getElementById('difficulty-list');
    let mission_list = document.getElementById('mission_list');
    let lobby_list = document.getElementById('lobby-list')

    if(difficulty_list){
        difficulty_list.remove();
    }

    if(mission_list){
        mission_list.remove()
    }

    if(!lobby_list){
        lobby_list = document.createElement('div');
        lobby_list.setAttribute('id', 'lobby-list');
        body.appendChild(lobby_list);

        lobby_list.style.zIndex = '1';
        lobby_list.style.height = '400px'
        lobby_list.style.width = '200px'
        lobby_list.style.position = 'fixed'
        lobby_list.style.display = 'flex'
        lobby_list.style.flexDirection = 'column'
        lobby_list.style.left = '500px'
        lobby_list.style.top = '175px'

        const ordered_lobby_list = document.createElement('ol');
        lobby_list.appendChild(ordered_lobby_list);

        for(let lobby of lobbies){
            const l = document.createElement('btn');
            ordered_lobby_list.appendChild(l);
            l.innerText = lobby;
            l.setAttribute('id', lobby);
            l.className='menu menu-btn';
            l.style.width='400px';
            l.addEventListener('click', goto_lobby)
        }
    }
    else{
        lobby_list.remove()
    }
}

const display_difficulty = (e)=>{
    const difficulty_list = document.getElementById('difficulty-list');
    const difficulty = e.target.innerText;
    let difficulty_text = document.getElementById('difficulty-text')

    if(!difficulty_text){
        difficulty_text = document.createElement('p')
        difficulty_text.setAttribute('id', 'difficulty-text')
        difficulty_text.innerText = difficulty
        difficulty_text.className = 'menu-btn'
        difficulty_text.style.position = 'fixed'
        difficulty_text.style.left = '62px'
        difficulty_text.style.top = '410px'
        body.appendChild(difficulty_text);
    }
    else{
        difficulty_text.innerText = difficulty;
    }
    difficulty_list.remove();
}

const select_difficulty = () =>{
    let difficulty_list = document.getElementById('difficulty-list');
    let mission_list = document.getElementById('mission_list');
    let lobby_list = document.getElementById('lobby-list')

    if(lobby_list){
        lobby_list.remove()
    }

    if(mission_list){
        mission_list.remove()
    }

    if(!difficulty_list){
        difficulty_list = document.createElement('div');
        difficulty_list.setAttribute('id', 'difficulty-list');
        body.appendChild(difficulty_list);

        difficulty_list.style.zIndex = '1';
        difficulty_list.style.height = '400px'
        difficulty_list.style.width = '200px'
        difficulty_list.style.position = 'fixed'
        difficulty_list.style.display = 'flex'
        difficulty_list.style.flexDirection = 'column'
        difficulty_list.style.left = '500px'
        difficulty_list.style.top = '175px'

        const ordered_difficulty_list = document.createElement('ol');
        difficulty_list.appendChild(ordered_difficulty_list);

        for(let difficulty of difficulties){
            const d = document.createElement('btn');
            ordered_difficulty_list.appendChild(d);
            d.innerText = difficulty;
            d.setAttribute('id', difficulty);
            d.className='menu menu-btn';
            d.style.width='400px';
            d.addEventListener('click', display_difficulty)
        }
    }
    else{
        difficulty_list.remove();
    }

}

if(select_mission_btn){
    select_mission_btn.addEventListener('click', create_mission_list);
}

if(campaign_switch_lobby_btn){
    campaign_switch_lobby_btn.addEventListener('click', campaign_switch_lobby_toggle);
}

if(difficulty_select_btn){
    difficulty_select_btn.addEventListener('click', select_difficulty);
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