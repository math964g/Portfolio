console.log("Javascript initiated...");

let hb = document.getElementsByClassName("item");
for (var i = 0; i < hb.length; i++) {
  hb[i].addEventListener("mouseover", showText);
  hb[i].addEventListener("mouseout", hideText);
}


function showText() {
  console.log("showing text");
  console.log(this);
  this.style.fontSize = "32px";
}

function hideText() {
  console.log("hidingtext");
  this.style.fontSize = "0";
}
