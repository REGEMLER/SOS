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