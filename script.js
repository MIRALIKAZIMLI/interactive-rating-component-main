const rating_points = document.querySelectorAll(".rating_point span");
const firstContainer = document.querySelector('.first-container')
const secondContainer  = document.querySelector('.second-container')
const sumbitBtn= document.querySelector(".submit_btn");
const addPoint = document.querySelector("#addPoint")
console.log(sumbitBtn);
let rate = null;

rating_points.forEach((ratingPoint)=>{
    const active = document.querySelector(".checked");
    if(active){
        active.classList.remove("checked")
    }
    ratingPoint.addEventListener("click", (e)=>{
        const active = document.querySelector(".checked");
        if(active){
            active.classList.remove("checked")
        }
        const cardSpan = e.target;
        cardSpan.classList.add("checked")
        rate = e.target.innerText;
        console.log( rate );
    })
})

sumbitBtn.addEventListener("click", ()=>{
    if(rate){
        firstContainer.classList.add("hidden") 
        secondContainer.classList.remove("hidden")
        addPoint.innerText = rate;
    }
})