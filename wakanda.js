
//Accès aux elements de la page
const h1 = document.querySelector ('h1')


//ANIMATION BARRE RESEAUX SOCIEAUX
window.addEventListener('DOMContentLoaded', function(){
    this.document.getElementById ('reseaux').style.height = "400px"
})


//Change la taille de la police h1
h1.addEventListener ('mouseover', function (){
    h1.style.fontSize = "60px"
    document.querySelector('summary').querySelector('span').style.fontSize = "40px"
})
h1.addEventListener ('mouseleave', function (){
    h1.style.fontSize = "50px"
    document.querySelector('summary').querySelector('span').style.fontSize = "30px"
})


//Change la taille de l'affiche

const affiche = document.getElementById ('petitAffiche');
affiche.addEventListener ("mouseover", function (){
    affiche.style.backgroundSize = "120% 120%"
})
affiche.addEventListener ("mouseout", function (){
    affiche.style.backgroundSize = "100% 100%"
})