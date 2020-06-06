"use strict"

window.onload = function showMenu(){
    let menu = document.getElementById("menuID");
    menu.onclick = function(){
        let topnavMenu = document.getElementById("topnavID");
        topnavMenu.onclick = function(){
        if (topnavMenu.className === 'topnav') {           
            topnavMenu.className += ' responsive';
            } else {
            topnavMenu.className = 'topnav';
            }
        }
    }
}






