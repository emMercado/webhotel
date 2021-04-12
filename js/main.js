
/*SLIDER*/ 
let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}
/*FIN SLIDER*/ 

/*animated //scroll broken, but it works in some cases */
let animated = document.querySelectorAll(".animated");
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animated.length; i++) {
        let heightAnimated = animated[i].offsetTop;
        if(heightAnimated - 1221 < scrollTop) {
            animated[i].style.opacity = 1;
            animated[i].classList.add("showHeight");
        }
    }
        
}

window.addEventListener('scroll', mostrarScroll);
/*animated*/

/*SHOW IMAGE */
var galerys = document.querySelectorAll("#galerys img"), i = 1;
Array.prototype.forEach.call(galerys, function(picture) { 
      setTimeout(function(){ picture.classList.add("visible") }, 1800*i)
i++;
});
/*FIN SHOWIMG */
