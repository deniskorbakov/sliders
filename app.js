const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sideBar = document.querySelector('.sidebar');

const mineSlide = document.querySelector('.main-slide');

const slidesCount = mineSlide.querySelectorAll('div').length;

const container = document.querySelector('.container');

let activeSlide = 0

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', ()=>{
    changeSlide('up')
});

downBtn.addEventListener('click', ()=>{
    changeSlide('down')
});

function changeSlide(direction) {
    if(direction === 'up') {
        activeSlide++;
        if(activeSlide === slidesCount) {
            activeSlide = 0
        }
    }else if(direction === 'down'){
        activeSlide--;
        if(activeSlide < 0) {
            activeSlide = slidesCount -1;
        }
    }

    const height = container.clientHeight;

    mineSlide.style.transform = `translateY(-${activeSlide * height}px)`

    sideBar.style.transform = `translateY(${activeSlide * height}px)`
}