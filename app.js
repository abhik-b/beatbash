window.addEventListener('load',()=>{
  const sounds =document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual=document.querySelector('.visual');
  const colors=[
      "rgb(0, 102, 255)",
      "#fffc60","#ff403a","#23ff86","#fa316d","#9d2ae9"
  ];


pads.forEach((pad,index) => {
    pad.addEventListener('click',function(){
        sounds[index].currentTime=0;
  sounds[index].play();
  createbubbles(index);
    });
});

const createbubbles =(index) =>{
  const bubble= document.createElement("div");
  visual.appendChild(bubble);
  bubble.style.backgroundColor=colors[index];
 bubble.style.animation="jump 1s ease";
 bubble.addEventListener('animationend',function(){
     visual.removeChild(this);
 })
};

console.log(sounds[index]);

});
