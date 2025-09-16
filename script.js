let amount = 10;

if(amount > 1){
    for(let i = 1; i <= amount; i++){
        newCard(i);
    }
}

// document.querySelector(".paquet #deal").addEventListener("click", deal);
document.querySelector(".paquet #deal").addEventListener("click", dealV2);








function newCard(num){
    // let paquet = document.querySelector("section .paquet");
    let paquet = document.querySelector("section");
    let code = '<div class="carte hidden">' + 
                    '<div class="container">' +
                        '<div class="front"><h2>projet</h2><h3>'+ num +'</h3></div>' + 
                        '<div class="back"></div>' 
                    +'</div>'
             + '</div>';

    paquet.innerHTML += code;
}


function deal(){
    let cartes = document.querySelectorAll(".paquet .carte");
    let i = Math.random() * cartes.length;
    i = Math.floor(i);

    //console.log(cartes[i] + "  "+ i);
    //console.log(cartes[i].getHTML());

    let section = document.querySelector("section");
    section.append(cartes[i]);
}



function dealV2(){
    let cartes = document.querySelectorAll(".carte.hidden");
    let i = Math.random() * cartes.length;
    i = Math.floor(i);

    // console.log(cartes[i] + "  "+ i);
    // console.log(cartes[i].getHTML());
    
    cartes[i].classList.remove("hidden")
    //console.log(cartes[i].getBoundingClientRect());

    let paq = document.querySelector(".paquet");
    vroom(cartes[i], paq);
}

function vroom(elm1, elm2){
    let p1 = {
        x: elm1.getBoundingClientRect().x,
        y: elm1.getBoundingClientRect().y
    };
    let p2 = {
        x: elm2.getBoundingClientRect().x,
        y: elm2.getBoundingClientRect().y
    };

    // console.log(p1.x);
    // console.log(p2.x);
    // console.log("deplacement x: ");
    console.log(p1.x - p2.x);



    elm1; //change translate style
    //do it later
}