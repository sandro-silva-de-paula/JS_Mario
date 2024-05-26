const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const dvgo = document.querySelector('.div-go');
const score = document.querySelector('.you-score');

let points = 0
const jump= () =>{
    mario.classList.add('jump');
    setTimeout( () => {
        mario.classList.remove('jump');
        points += 1;
    }, 700);

   

}


const loop = setInterval( () => {
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if (pipePosition <= 85 &&  pipePosition >0 && marioPosition<=60){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'images/game-over.png';
        mario.style.width= '60px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;
        //on div-go
        dvgo.style.display = 'flex'

        score.textContent= 'Your Score:'+`${points*1000}`
        points=0;

        clearInterval(loop);
    } 
}, 10);

const restart = () =>{
   location.reload();
};


document.addEventListener('keydown',jump);