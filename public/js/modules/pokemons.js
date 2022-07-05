export let narr_box = document.getElementById('narrative_box')

export function attaque(name_atq,power,accuracy,name_poke,level){
    let dmg = Math.floor((((parseInt(level)*0.4+2)*2*power)/2*50)*1.2*0.5*1/1000);
    if(parseInt(document.getElementById('life_label2').innerHTML) > 0 ){
        if (dmg){
            if (Math.floor(Math.random()*100) >= accuracy){
                narr_box.innerHTML = `${name_poke} rate son attaque, la precision de cette attaque est de ${accuracy} sur 100`;
            }
            else {
                narr_box.innerHTML = `${name_poke} utilise ${name_atq} et fait ${dmg} de degats`;
                if(document.getElementById('poke_life2').value >= dmg){
                    document.getElementById('poke_life2').value -= dmg;
                }
                else{
                    document.getElementById('poke_life2').value -=   document.getElementById('poke_life2').value;
                }
                document.getElementById('life_label2').innerHTML =   document.getElementById('poke_life2').value;
        
                if (parseInt(document.getElementById('life_label2').innerHTML) ==0){
                    narr_box.innerHTML = `${document.getElementById('name_poke_2').innerHTML} est mort, ${name_poke} a gagne `;
                    return true;
                }
            }
        }
        else{
            narr_box.innerHTML = 'Cette attaque ne fait techniquement pas de degats'
        }
    }

          
}

export function attaque_ennemies(name_atq,power,accuracy,name_poke,level){
    let dmg = Math.floor((((parseInt(level)*0.4+2)*2*power)/2*50)*1.2*0.5*1/1000);
    if(dmg){
        if (Math.floor(Math.random()*100) >= accuracy){
            narr_box.innerHTML = `${name_poke} rate son attaque, la precision de cette attaque est de ${accuracy} sur 100`;
        }
        else {
            narr_box.innerHTML = `${name_poke} utilise ${name_atq} et fait ${dmg} de degats`;
            if(document.getElementById('poke_life1').value >= dmg){
                document.getElementById('poke_life1').value -= dmg;
            }
            else{
                document.getElementById('poke_life1').value -=   document.getElementById('poke_life1').value;
            }
            document.getElementById('life_label1').innerHTML =   document.getElementById('poke_life1').value;
            if (parseInt(document.getElementById('life_label1').innerHTML) ==0){
                narr_box.innerHTML = `${document.getElementById('name_poke_1').innerHTML} est mort, ${name_poke} a gagne `;
                return true;
            }
        }
    }
    else{
        narr_box.innerHTML = `${name_poke} utilise ${name_atq} mais cette attaque ne fait techniquement pas de degats`
    }

          
}