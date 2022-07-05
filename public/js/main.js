import {attaque, attaque_ennemies, narr_box } from "./modules/pokemons.js";
// on recupere les attaques
let btn1 = document.getElementById('atq1');
let btn2 = document.getElementById('atq2');
let btn3 = document.getElementById('atq3');
let btn4 = document.getElementById('atq4');
let atq_en = document.getElementById('attaques_ennemies').children;
btn1.addEventListener('click',atq_click);
btn2.addEventListener('click', atq_click);
btn3.addEventListener('click',atq_click);
btn4.addEventListener('click',atq_click);

function atq_click(e){
  let btn = e.target;
  let resp;
  let atq_rdm = atq_en[Math.floor(Math.random()*atq_en.length)]
    attaque(btn.getAttribute('name_atq'),btn.getAttribute('power'),btn.getAttribute('accuracy'),btn.getAttribute('name_poke'),btn.getAttribute('level'));
    btn1.removeEventListener('click',atq_click);   // on desactive les bouttons 
    btn2.removeEventListener('click',atq_click);
    btn3.removeEventListener('click',atq_click);
    btn4.removeEventListener('click',atq_click);
    setTimeout(function(){
      btn1.addEventListener('click',atq_click);   // on desactive les bouttons 
      btn2.addEventListener('click',atq_click);
      btn3.addEventListener('click',atq_click);
      btn4.addEventListener('click',atq_click);
      resp = attaque_ennemies(atq_rdm.getAttribute('name_atq'),atq_rdm.getAttribute('power'),atq_rdm.getAttribute('accuracy'),atq_rdm.getAttribute('name_poke'),atq_rdm.getAttribute('level'));
      if (resp){
        btn1.removeEventListener('click',atq_click);   // on desactive les bouttons 
        btn2.removeEventListener('click',atq_click);
        btn3.removeEventListener('click',atq_click);
        btn4.removeEventListener('click',atq_click);
      }
    },1500)
   
}

document.getElementById('controls').style.display = 'none';