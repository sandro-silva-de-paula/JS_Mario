const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const btngo = document.querySelector('.div-go');


const jump= () =>{
    mario.classList.add('jump');

    setTimeout( () => {
         mario.classList.remove('jump');}, 700);

   

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
        clearInterval(loop);
        
        
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;
       
        btngo.style.display = 'flex'
    }
    
}, 10);

const restart = () =>{
   location.reload();
};


document.addEventListener('keydown',jump);