class IntervalOrar {
  constructor(start, sfarsit) {
    this.start = start;
    this.sfarsit = sfarsit;
  }
}

let intervaleOrare = [
  new IntervalOrar(5, 9),
  new IntervalOrar(1, 2),
  new IntervalOrar(3, 4),
  new IntervalOrar(5, 7),
  new IntervalOrar(0, 6),
  new IntervalOrar(8, 9),
];

let spectacole = [];

(() => {
  // Spectacole

  // sorteaza spectacolele orare dupa ora de final
  intervaleOrare.sort((a, b) => a.sfarsit - b.sfarsit);

  // afiseaza primul spectacol
  let i = 0;
  spectacole.push(intervaleOrare[i]);

  // afiseaza restul spectacolelor
  for (let j = 1; j < intervaleOrare.length; j++) {
    // dar sari peste cele a caror ora de start 
    // este mai mare decat ora de sfarsit a urmatorului spectacol
    if (intervaleOrare[j].start >= intervaleOrare[i].sfarsit) {
      i = j;
      spectacole.push(intervaleOrare[i]);
    }
  }
})();


