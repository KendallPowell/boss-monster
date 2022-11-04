const heroes = [
  {
    name: 'Slate Slabrock',
    type: 'dwarf',
    damage: 5,
    health: 100,
    level: 1,
    Gold: 0
  },
  {
    name: 'Flint Ironstag',
    type: 'elf',
    damage: 10,
    health: 50,
    level: 1,
    Gold: 0
  }
]


const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}



function attackBoss() {
  boss.health -= 15
  console.log('attack', boss.health)
  updateBoss()
}

function updateBoss() {
  let bossElm = document.getElementById('boss')
  bossElm.style.width = boss.health + '%'
  if (boss.health <= 0) {
    window.alert("You did it! The Dragon is dead")
  }
}

function bossDamage() {
  heroes.forEach(h => {
    h.health -= 5
    let heroElm = document.getElementById(h.name)
    let heroBar = heroElm.querySelector('.progress-bar')
    heroBar.style.width = h.health + '%'
    if (h.health <= 0) h.health = 0
  })

  // console.log('damage 5')
  updateHealth()
}

function updateHealth() {
  heroes.forEach(h => {
    if (h.health <= 0) {
      h.image = "☠"
    }
    // console.log(h.health, 'health')
  })
}

function updateHero() {
  heroes.forEach(h => {
    updateHealth(h.name)
    let heroElm = document.getElementById(h.name)

  })
}

setInterval(bossDamage, 1000)