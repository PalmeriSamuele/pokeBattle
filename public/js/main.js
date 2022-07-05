import { charizard, rayquaza } from "./modules/pokemons.js";

document.getElementById('Mâchouille').addEventListener('click',function(){
    rayquaza.Mâchouille(charizard);
})

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

