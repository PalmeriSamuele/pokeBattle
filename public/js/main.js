import {attaque } from "./modules/pokemons.js";
let btn1 = document.getElementById('atq1');
btn1.addEventListener('click',function(){
    attaque(btn1.getAttribute('name_atq'),btn1.getAttribute('power'),btn1.getAttribute('accuracy'),btn1.getAttribute('name_poke'),btn1.getAttribute('level'));
})
let btn2 = document.getElementById('atq2');
btn2.addEventListener('click',function(){
  attaque(btn2.getAttribute('name_atq'),btn2.getAttribute('power'),btn2.getAttribute('accuracy'),btn2.getAttribute('name_poke'),btn2.getAttribute('level'));
})
let btn3 = document.getElementById('atq3');
btn3.addEventListener('click',function(){
  attaque(btn3.getAttribute('name_atq'),btn3.getAttribute('power'),btn3.getAttribute('accuracy'),btn3.getAttribute('name_poke'),btn3.getAttribute('level'));
})
let btn4 = document.getElementById('atq4');
btn4.addEventListener('click',function(){
  attaque(btn4.getAttribute('name_atq'),btn4.getAttribute('power'),btn4.getAttribute('accuracy'),btn4.getAttribute('name_poke'),btn4.getAttribute('level'));
})

document.getElementById('controls').style.display = 'none';
function startBattle(rayquaza,charizard){
    let turn = true;
    while(rayquaza.hp > 0 || charizard.hp > 0){
        // if(turn){
        //     charizard.chooseRandomAtq();
        // }
        turn = switchBool(turn);
    }
}

function switchBool(bool){
    if (bool){
        return false;
    }
    else{
        return true;
    }
}

// startBattle(rayquaza,charizard);

