const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const dvgo = document.querySelector('.div-go');
const score = document.querySelector('.you-score');
const list_records = [    
    {a: 'Priscila Lopes', b: 72000 },
    {a: 'Joao Gabriel Rego',b: 22000 },
    {a: 'Renato Castro', b: 42000 },
    {a: 'Sandro Silva',b: 5000 },
];

const create_score= (text) => {
    let score = document.createElement("li");
    score.innerHTML = text;
    document.getElementById("myScore").appendChild(score);

  }
  
 

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
        dvgo.style.display = 'flex';

        //add your score a lista e indexar
        
        list_records.push( {a: 'Your Score' ,b: points*1000});
        let list_records_sorted = 
        list_records.sort(function(a_, b_){return a_.b - b_.b});
        list_records_sorted=list_records_sorted.toReversed();


        for (let i=0; i< list_records_sorted.length; i++){
            create_score( (i+1) +'° - '+list_records_sorted[i].a +' : ' +list_records_sorted[i].b);
        };

        points=0;

        clearInterval(loop);
    } 
}, 10);

const restart = () =>{
   location.reload();
};


document.addEventListener('keydown',jump);