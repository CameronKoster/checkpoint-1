let items = {
  kraken: { name: "Release Kraken", modifier: 2, description: "Releases a nasty Kraken" },
  insult: { name: "Add Insult", modifier: 2, description: "Adds insult to injury" },
  kickDown: { name: "Kick While Down", modifier: 2, description: "Kicks 'em while they're down" }
}

let josh = {
  name: "Josh",
  health: 100,
  hits: 0,
  items: [items.kraken, items.insult, items.kickDown]
}



function addSpecials() {
  let specialsTotal = 0; //need the singular/plural card broken down for me. is "i" always "i", or is there any scenario I HAVE to use a var name?
  for (i = 0; i < items.length; i++) {
    let item = items[i]//I'm supposed to access the array using [i] here. How?
    specialsTotal += 2
    return specialsTotal

  }

}

function giveKraken() {
  items.push(items.kraken) //need the order of these. is the first item, in this example "items" the array we're pushing onto, 
  //or the object we're pulling from? Also how is this differentiating between the property "items" or the full object "items?"
}



function slap() {
  josh.health -= 1
  update()
}

function punch() {
  josh.health -= 5
  update()
}

function kick() {
  josh.health -= 10
  update()
}



function update() {
  document.getElementById("health").innerText = josh.health
}


















update()
