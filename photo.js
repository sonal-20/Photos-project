const imageContainer= document.querySelector(".image-container");

const btn = document.querySelector(".btn")
let imageNum= 10
btn.addEventListener("click" ,()=>{
    imageNum=11;
   addnewimage();
});

function addnewimage(){
    for (let index=0;index < imageNum;index++){
  
        const newimg = document.createElement("img");
        const uniqueId = new Date().getTime() + Math.random();
        newimg.src = `https://picsum.photos/200/300?random=${uniqueId}`;
       // newimg.src=`https://picsum.photos/200/300?random=${Math.floor(Math.round() * 2000)}`
        imageContainer.appendChild(newimg);
    }
   
   
}
// const imageContainer = document.querySelector(".image-container");
// const btn = document.querySelector(".btn");
// let imageNum = 10; // Define imageNum outside the event listener

// btn.addEventListener("click", () => {
//     addnewimage();
// });

// function addnewimage() {
//     for (let index = 0; index < imageNum; index++) {
//         const newimg = document.createElement("img");
//         const uniqueId = new Date().getTime() + Math.random();
//         newimg.src = `https://picsum.photos/200/300?random=${uniqueId}`;
//         imageContainer.appendChild(newimg);
//     }
// }
