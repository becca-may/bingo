export const squareText = [
  `Becca: "You fucked us!"`,
  'Becca has to tank',
  `"Becca's Brother"`,
  '*Beard scruffles*',
  '"Cake Bitch"',
  'Carl does better with the 1 button rotation',
  'Chode shows up',
  `Chode: "Where's my lovely sugar?"`,
  'Chris shows up at all',
  'Chris shows up late',
  `Chris: "The big ones hurt"`,
  `Chris: "I'm a big druid"`,
  'CJ shows up',
  '"Clean"',
  'D gets to DPS!',
  'Dan talks about dice',
  'Divo is grumpy',
  'Divo spams the sound board',
  'Elvis is in PvP gear',
  'Elvis turns his camera on',
  'Ethan disappears into the cornfield',
  'Ethan has to tank',
  'Ethan is having ice chips for dinner',
  'Etho has a baby on his lap',
  'Etho is drinking margaritas',
  `"Figure it out on the back end"`,
  '"First Try"',
  'Galahfray asks to join (on her main)',
  '"Gay up the boss"',
  'Gulen spams the sound board',
  '"Heal me Chris!!"',
  '"Mega Casual"',
  '"IRL lag"',
  `RG: "Is this a lust at start?"`,
  `Chris: "It's in the mail"`,
  'Josh is on a different "main"',
  'Josh turns his camera on',
  'Josh wins nothing',
  `"MEOWWW!!!"`,
  '"MILF barge"',
  '"Nipple twins"',
  '"Obama Lotion"',
  'Pink and Stink finish the fight',
  `Chris: "Pull my beard and spit in my mouth"`,
  'Ethan: "Red 40"',
  'RG is top dps',
  'RG needs on transmog',
  'Somebody asks about the secret fish',
  '"Suckening"',
  '"Super smooth brain"',
  'Terri is wearing her sunglasses',
  'Terri: "All is well!"',
  'Thunder has to put his chickens to bed',
  'Tommy shows up',
  '10 camgirls at once',
  'Tim goes AFK to change a diaper',
  'Tim is wearing his gaming robe',
  '"Transmog is forever"',
  'Tree shows up',
  `RG: "Crushin' my ass"`,
  'RG: "Union Break"',
  `RG: "Somethin' blue comin' out of my butthole"`,
  `Ethan: "Who's grunting?"`,
  'Zor wins the roll',
];

export function getSquares() {
  shuffle(squareText);
  return squareText.slice(0, 25);
}

function shuffle(list: string[]) {
  let currentIndex = list.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [list[currentIndex], list[randomIndex]] = [
      list[randomIndex],
      list[currentIndex],
    ];
  }
}
