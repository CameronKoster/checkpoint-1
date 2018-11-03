

let health = 100;
let enemy = "Josh";
let hits = 0;



function slap() {
  health--
  update()
}

function punch() {
  health -= 5
  update()
}

function kick() {
  health -= 10
  update()
}



function update() {



  document.getElementById("health").innerText = health
  document.getElementById("enemy").innerText = enemy
  document.getElementById("hits").innerText = hits
}


















update()