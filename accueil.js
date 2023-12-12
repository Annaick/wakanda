

//Accès aux elements de la page
const lightsUps = document.querySelectorAll ('.lightUp')
const h1 = document.querySelector ('h1')
const bouton = document.getElementById('defiler')
const slider = document.getElementById ('slider')
let images = document.getElementById('slider').querySelectorAll ('img');
let conteneurs = document.getElementById ('slider').querySelectorAll ('.conteneur')


//Les parametres du slider
let slideInit = window.innerWidth
let slide = window.innerWidth

bouton.addEventListener ("click", defiler)



//Change la taille de la police h1
h1.addEventListener ('mouseover', function (){
    h1.style.fontSize = "60px";
    
})
h1.addEventListener ('mouseleave', function (){
    h1.style.fontSize = "50px"
})


//ANIMATION 
lightsUps.forEach (function (lightsUp){
    lightsUp.addEventListener ('mouseover', light)
    lightsUp.addEventListener ('mouseleave', unlight)

    function light () {
        lightsUp.classList.add ('active')
    }
    function unlight (){
        lightsUp.classList.remove ('active')
    }
})

function sleep (ms){
    return new Promise (resolve => setTimeout (resolve, ms));
}


let etape = 0


async function defiler (){
    images[etape].classList.remove ('zoom')
    images[etape + 1].classList.add ('zoom')


    if (etape == 8) {
        slider.style.transform = "translate(0px)"
        etape = 0;
        slide = slideInit
        images.forEach(function (image){
            image.classList.remove ('zoom')
        })
        images[0].classList.add ('zoom')
    }
    else{
        slider.style.transform = "translate(-"+slide+"px)"
        slide += slideInit
        etape ++
    }
    
}



//CREATION DE L'EFFET FONDU
function fond (){
    const fondus = document.querySelectorAll (".fondu");
    for (let i = 0; i < fondus.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = fondus[i].getBoundingClientRect().top;
        var elementVisible = 400;  
        
        if (elementTop < windowHeight - elementVisible ) {
            fondus[i].classList.add ("active1");
        }
    }
    
}

window.addEventListener ("scroll", fond);

fond ();


//CREATION DE L'EFFET  DE GAUCHE A DROITE SUR LES ELEMENTS
function sliding (){
    const slides = document.querySelectorAll (".slide");
    for (let i = 0; i < slides.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = slides[i].getBoundingClientRect().top;
        var elementVisible = 400;  
        
        if (elementTop < windowHeight - elementVisible ) {
            slides[i].classList.add ("active2");
        }
    }
    
}

window.addEventListener ("scroll", sliding);

sliding ();



//ZOOM SUR LE SURVOL DES PHOTOS
function scale (){
    const scales = document.querySelectorAll (".scale");
    scales.forEach(function (scale){
        scale.addEventListener ('mouseover', function (){
            scale.classList.add ('active');
        })
        scale.addEventListener ('mouseout', function (){
            scale.classList.remove ('active');
        })

    })
}

scale ();


//ANIMATION BARRE RESEAUX SOCIEAUX
window.addEventListener('DOMContentLoaded', function(){
    this.document.getElementById ('reseaux').style.height = "400px"
})