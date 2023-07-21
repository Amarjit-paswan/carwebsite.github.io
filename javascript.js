var menubar= document.querySelector("#menubar");
var navbar = document.querySelector(".navbar");




menubar.onclick= ()=>{
    menubar.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

window.onscroll= ()=>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');

    }


    menubar.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}


window.onload = ()=>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');

    };
}


const slider = document.querySelector('.slider');
let count = 0;

function slideImage() {
  count++;
  if (count >= slider.children.length) {
    count = 0;
  }
  slider.style.transform = `translateX(-${count * 100}%)`;
}

// Change slide every 2 seconds
setInterval(slideImage, 2000);


var rwrapper = document.querySelector('.review-wrapper-box');
var rActBox = rwrapper.querySelectorAll('.box');
var rnextBtn = document.querySelector('#rNextBtn');
var rpreBtn = document.querySelector('#rPreBtn');


var rIndexNo = 0;

rnextBtn.onclick = ()=>{
    rIndexNo++;
    rChangeBox();
};

rPreBtn.onclick = ()=>{
    rIndexNo--;
    rChangeBox();
};

var rChangeBox = ()=>{
    if(rIndexNo > rActBox.length-1){
        rIndexNo= 0;
    }else if(rIndexNo < 0){
        rIndexNo = rActBox.length-1;
    };

    for(var i=0; i< rActBox.length; i++){
        if(i === rIndexNo){
            rActBox[i].classList.add('active');


            if(window.screen.width > 790 && window.screen.width > 991 && window.screen.width > 450 && window.screen.width > 350 && window.screen.width > 1330 ){
                rwrapper.style.transform=`translateX(${rIndexNo * - 23}vw)`;}
          
   
        }else{
            rActBox[i].classList.remove('active');

        }

       
    }
}

