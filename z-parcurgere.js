class Coord {
  /**
   * @param {number} x 
   * @param {number} y 
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const coordonate = [
  new Coord(3, 3),
  new Coord(4, 3),
];

const n = 2;

function gasesteNumar(x, y, latura = n ** 2) {
  if (latura === 1) {
    return 1;
  }

  const mijloc = Math.floor(latura / 2);

  if (x <= mijloc && y <= mijloc) { // stanga sus
    return gasesteNumar(x, y, mijloc);
  }

  if (x <= mijloc && y > mijloc) { // dreapta sus
    return mijloc * mijloc + gasesteNumar(x, y - mijloc, mijloc);
  }

  if (x > mijloc && y <= mijloc) { // stanga jos
    return 2 * mijloc * mijloc + gasesteNumar(x - mijloc, y, mijloc);
  }

  // dreapta jos
  return 3 * mijloc * mijloc + gasesteNumar(x - mijloc, y - mijloc, mijloc);
}

console.log(coordonate.map(coordonata => gasesteNumar(coordonata.x, coordonata.y)));