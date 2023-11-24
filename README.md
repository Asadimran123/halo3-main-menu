# halo3-main-menu
a clone of the halo 3 main menu

notes: 

trailer play vs clips play (11/23/23)
 - for the main menu, specifically for the trailer, i already have the trailer video 
 created in the window and toggle visibility. 
 - pros: easier to write. minimal html and js. mainly styling
 - cons: its always loaded in the page
 - for the theater page i didnt create the elements in the original document. 
 instead i made event listeners to create the videos in real time. 
 - pros: video is loaded in real time
 - cons: a lot more js code. i dont want to have to repeat this for every clip i want to play. im going to try and find a way to make a function that does it automatically in the 
 future when i refactor. 

 ideas for campaign, matchmaking, custom games, forge(11/23/23)
 - i will probably just embed youtube links for each of these. 


 bugs
 (11/23) theater lobby film switch btn
 - it takes two click for film list to display on first time. has to do with initial state of the film div
 

