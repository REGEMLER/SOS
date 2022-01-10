//Гамбергер
const toggler = document.getElementById(`toggle`);

const menu = document.getElementById(`header-menu`);

toggler.addEventListener(`click`, () =>{
    if(menu.style.opacity === `1`){
        menu.style.height = `0`;
        menu.style.opacity = `0`;
        menu.style.visibility = `hidden`;
    } else{
        menu.style.height = `200px`;
        menu.style.opacity = `1`;
        menu.style.visibility = `visible`;
    }
})


//Градиент
const quotes = document.getElementById(`quotes`);
quotes.addEventListener('mousemove', function ({ offsetX, offsetY}) {
    this.style.backgroundImage = `radial-gradient(at ${offsetX}px ${offsetY}px, white, black)`;
});


