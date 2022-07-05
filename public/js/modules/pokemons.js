let narr_box = document.getElementById('narrative_box')
export let rayquaza = {
    name : 'rayquaza',
    hp: 100,
    vitesse: 97,
    Mâchouille(cible){
        let dmg = 15;
        let accuracy = 95;
       
        if (Math.floor(Math.random()*100) >= accuracy){
            narr_box.innerHTML = `${this.name} rate son attaque, la precision de cette attaque est de ${accuracy} sur 100`;
        }
        else {
            narr_box.innerHTML = `${this.name} utilise machouille et fait ${dmg} de degats`;
            cible.hp -= dmg;
            document.getElementById('poke_life2').value -= dmg;
            document.getElementById('life_label2').innerHTML =  cible.hp
        }
      
        

    }
}


export let charizard = {
    name : 'charizard',
    hp:100,
    vitesse: 97,
    chooseRandomAtq(){
        return this.liste_atq[Math.floor(Math.random()*this.liste_atq.length)]
    },
    Machouille(cible){
        let dmg = 15;
        let accuracy = 95;
       
        if (Math.floor(Math.random()*100) >= accuracy){
            narr_box.innerHTML = `${this.name} rate son attaque, la precision de cette attaque est de ${accuracy} sur 100`;
        }
        else {
            narr_box.innerHTML = `${this.name} utilise machouille et fait ${dmg}  de degats`;
            cible.hp -= dmg;
            document.getElementById('poke_life1').value -= dmg;
            document.getElementById('life_label1').innerHTML =  cible.hp
        }
      
        

    },
    Deflafration(cible){
        let dmg = 40;
        let accuracy = 60;
       
        if (Math.floor(Math.random()*100) >= accuracy){
            narr_box.innerHTML = `${this.name} rate son attaque, la precision de cette attaque est de ${accuracy} sur 100`;
        }
        else {
            narr_box.innerHTML = `${this.name} utilise machouille et fait ${dmg}  de degats`;
            cible.hp -= dmg;
            document.getElementById('poke_life1').value -= dmg;
            document.getElementById('life_label1').innerHTML =  cible.hp
        }
      
        

    }
}

