let amount = 10;

if(amount > 1){
    for(let i = 1; i <= amount; i++){
        newCard(i);
    }
}

// document.querySelector(".paquet #deal").addEventListener("click", deal);
document.querySelector("#deal").addEventListener("click", dealV2);








function newCard(num){
    // let paquet = document.querySelector("section .paquet");
    let paquet = document.querySelector("section .paquet");
    let code = '<div class="carte hidden">' + 
                    '<div class="container">' +
                        '<div class="front"><h2>projet</h2><h3>'+ num +'</h3></div>' + 
                        '<div class="back"></div>' 
                    +'</div>'
             + '</div>';

    paquet.innerHTML += code;
}


// unused
// function deal(){
//     let cartes = document.querySelectorAll(".paquet .carte");
//     let i = Math.random() * cartes.length;
//     i = Math.floor(i);

//     //console.log(cartes[i] + "  "+ i);
//     //console.log(cartes[i].getHTML());

//     let section = document.querySelector("section");
//     section.append(cartes[i]);
// }



function dealV2(){
    //cartes choisies alléatoirement
    let cartes = document.querySelectorAll(".carte.hidden");
    let i = Math.random() * cartes.length;
    i = Math.floor(i);

    // console.log(cartes[i] + "  "+ i);
    // console.log(cartes[i].getHTML());
    
    cartes[i].classList.remove("hidden")

    //sortir les cartes du paquet
    let section = document.querySelector("section");
    section.append(cartes[i]);

    // deplacer les cartes
    let paq = document.querySelector(".paquet");
    vroom(cartes[i], paq);

    // retourner les cartes automatiquement
    setTimeout(function(){
        cartes[i].classList.add("turned");
    }, "700");
}

// fonction pour deplacer les cartes
function vroom(elm1, elm2){
    let p1 = {
        x: elm1.getBoundingClientRect().x,
        y: elm1.getBoundingClientRect().y
    };
    let p2 = {
        x: elm2.getBoundingClientRect().x,
        y: elm2.getBoundingClientRect().y
    };

    //déplacer les cartes au paquet sanstransition
    elm1.classList.add("carte-no-transit");
    elm1.style.transform = `translate(${p2.x - p1.x}px,${p2.y - p1.y}px)`;

    // raporter les cartes ou elles doivent etre avec une transition
    //delay
    setTimeout(function() {
        elm1.classList.remove("carte-no-transit");
        elm1.style.transform = `translate(${0}px,${0}px)`;
    }, "1");
}