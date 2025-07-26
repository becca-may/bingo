export function getSquares(allSquares: string[]) {
  shuffle(allSquares);
  return allSquares.slice(0, 25);
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
