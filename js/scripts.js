var menu = document.querySelectorAll("nav a");
document.addEventListener("click", showActive);
var contentPara = document.querySelector('.content');
contentPara.innerHTML = data.recipes;

function showActive(event) {
  showInactive();
  event.target.classList.add("active");
  

//   if(event.target.matches("nav a")){
//     for(let navItem of menu){
//       navItem.classList.remove("active");
//    }
//   }

if(event.target.href.includes("recipes")){
            contentPara.innerHTML = data.recipes;
        } else if (event.target.href.includes("reviews")){
           contentPara.innerHTML = data.reviews;
        } else if (event.target.href.includes("delivery")){
            contentPara.innerHTML = data.delivery;
        }
     
  event.preventDefault(); 
}


function showInactive(){
    menu.forEach((menu) => menu.classList.remove("active"));
}


// function makeActive (){
//     if (!event.target.matches("nav ul a")) return;
//     makeActive();
//     // event.target.classList.add("active");

//     if(event.target.href.includes("recipes")){
//         contentPara.innerHTML = data.recipes;
//     } else if (event.target.href.includes("delivery")){
//        contentPara.innerHTML = data.delivery;
//     } else if (event.target.href.includes("reviews")){
//         contentPara.innerHTML = data.reviews;
//     }

//     event.preventDefault();
// }



