let btn = document.querySelector(".btn");
let img = document.querySelector(".img");
let images = document.querySelector(".images");
let btn1 = document.querySelector(".btn1");
let secm = document.querySelector(".secm");




    fetch("https://restcountries.com/v3.1/subregion/europe").then(x=>x.json()).then(y=>{

y.forEach(element => {
     

    images.innerHTML+=`
    <img  class="img hide" src="${element.flags.png}" style="width: 100px;">
    `
    
}

)

    })
    
    let i =0;
    // images.children[i-1].classList.add("hide");
    btn.addEventListener("click",function(e){
        e.preventDefault();
        images.children[i].classList.remove("hide");
        secm.classList.remove("hide");
       
    })


    btn1.addEventListener("click",function(e){
        e.preventDefault();
        images.children[i].classList.add("hide");
        i++;
        images.children[i].classList.remove("hide");

    })
