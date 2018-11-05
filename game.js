let items = {
  kraken: { name: "Release Kraken", modifier: 7, description: "Releases a nasty Kraken" },
  insult: { name: "Add Insult", modifier: 2, description: "Adds insult to injury" },
  kickDown: { name: "Kick While Down", modifier: 3, description: "Kicks 'em while they're down" }
}

let josh = {
  name: "Josh",
  health: 100,
  hits: 0,
  items: []
}



function addSpecials() {
  let specialsTotal = 0; //need the singular/plural card broken down for me. is "i" always "i", or is there any scenario I HAVE to use a var name?
  for (let i = 0; i < josh.items.length; i++) {
    let item = items[i]//I'm supposed to access the array using [i] here. How?
    specialsTotal += josh.items[i]


  }
  return specialsTotal
}

function giveKraken() {
  josh.items.push(items.kraken.modifier)
  //need the order of these. is the first item, in this example "items" the array we're pushing onto,
  //or the object we're pulling from? Also how is this differentiating between the property "items" or the full object "items?"
}

function giveInsult() {
  josh.items.push(items.insult.modifier)
}

function giveKickDown() {
  josh.items.push(items.kickDown.modifier)
}


function front() {
  if (josh.items.length > 0) {
    josh.health -= 1 * addSpecials()
  }
  else {
    josh.health -= 1
  }
  josh.hits++
  update()

}

function sock() {
  if (josh.items.length > 0) {
    josh.health -= 5 * addSpecials()
  }
  else {
    josh.health -= 5
  }
  josh.hits++
  update()
}

function loogie() {
  if (josh.items.length > 0) {
    josh.health -= 10 * addSpecials()
  }
  else {
    josh.health -= 10
  }
  josh.hits++
  update()
}

function dead() {
  if (josh.health <= 0) {
    josh.health = 0
    alert("JOSH SUCKS!!!!")
  }
}


function update() {
  dead()
  document.getElementById("health").innerText = josh.health.toString();
  document.getElementById("hits").innerText = josh.hits.toString();
}


















update()
