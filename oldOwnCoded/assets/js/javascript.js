console.log("Javascript initiated...");

let projectItems = document.getElementsByClassName("item");
let projectDetails = document.getElementsByClassName("projectDetails");

for (var i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("mouseover", showText);
  projectItems[i].addEventListener("mouseout", hideText);
  projectItems[i].addEventListener("onclick", showInfo);
}


function showText() {
  this.style.fontSize = "36px";
}

function hideText() {
  this.style.fontSize = "0";
}

function showInfo() {
  if (this.classList.contains("multikey")) {
    console.log("MultiKey");
  }

  else {
    console.log(this);
  }
}

// let bg = document.getElementById("glitch-container");
// let count = 20;
//
// for (let i = 0; i < count; i++) {
//   let glitchBox = document.createElement("div")
//   glitchBox.className = "box";
//   bg.appendChild(glitchBox)
// }
//
// let glitch = document.getElementsByClassName("box");
//
// // Launches the glitch effect
// glitchTimer();
//
// // Glitch recursion timer
// function glitchTimer() {
//   // Makes the glitch go off at random times within set range
//   setTimeout(glitchEffect, Math.floor(Math.random() * (3000 - 500 + 1) ) + 500)
//
// }
//
//
// function glitchEffect() {
//
//   // Makes it glitch
//   for (let i = 0; i < glitch.length; i++) {
//     // Controls the glitch area
//     glitch[i].style.left = Math.floor(Math.random() * 100) + "vw";
//     glitch[i].style.top = Math.floor(Math.random() * 100) + "vh";
//     // Controls the size of the glitches
//     glitch[i].style.width = Math.floor(Math.random() * 200) + "px";
//     glitch[i].style.height = Math.floor(Math.random() * 50) + "px";
//     // Controls the range of displacement
//     glitch[i].style.backgroundPosition = Math.floor(Math.random() * 10) + "px";
//   }
//
//   // Makes it un-glitch
//   setTimeout(function() {
//     for (let i = 0; i < glitch.length; i++) {
//       // Controls the glitch area
//       glitch[i].style.left = 0 + "vw";
//       glitch[i].style.top = 0 + "vh";
//       // Controls the size of the glitches
//       glitch[i].style.width = 0 + "px";
//       glitch[i].style.height = 0 + "px";
//       // Controls the range of displacement
//       glitch[i].style.backgroundPosition = 0 + "px";
//     }
//   }, Math.floor(Math.random() * (150 - 50 + 1) ) + 50)
//
//
// glitchTimer();
// }
