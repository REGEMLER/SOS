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

//СЛайдер
const aboutIMgs =[...document.getElementsByClassName(`about-img`)] ;

const drop1 = document.getElementById(`drop1`);
const drop2 = document.getElementById(`drop2`);
const drop3 = document.getElementById(`drop3`);
const drop4 = document.getElementById(`drop4`);
const drop5 = document.getElementById(`drop5`);

drop1.addEventListener(`click`, ()=>{
    const elem = aboutIMgs.find((elem)=>elem.classList.contains('about-img_active'));
            if (elem) {
                elem.classList.remove('about-img_active');
            }
    aboutIMgs[0].classList.add('about-img_active')
})
drop2.addEventListener(`click`, ()=>{
        const elem = aboutIMgs.find((elem)=>elem.classList.contains('about-img_active'));
            if (elem) {
                elem.classList.remove('about-img_active');
            }
    aboutIMgs[1].classList.add('about-img_active')
})
drop3.addEventListener(`click`, ()=>{
        const elem = aboutIMgs.find((elem)=>elem.classList.contains('about-img_active'));
            if (elem) {
                elem.classList.remove('about-img_active');
            }
    aboutIMgs[2].classList.add('about-img_active')
})
drop4.addEventListener(`click`, ()=>{
        const elem = aboutIMgs.find((elem)=>elem.classList.contains('about-img_active'));
            if (elem) {
                elem.classList.remove('about-img_active');
            }
    aboutIMgs[1].classList.add('about-img_active')
})
drop5.addEventListener(`click`, ()=>{
        const elem = aboutIMgs.find((elem)=>elem.classList.contains('about-img_active'));
            if (elem) {
                elem.classList.remove('about-img_active');
            }
    aboutIMgs[0].classList.add('about-img_active')
})