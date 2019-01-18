import PriorityQueue from 'priorityqueue';

class Sarcina {
  constructor(prioritate, deadline) {
    this.prioritate = prioritate;
    this.deadline = deadline;
  }
}

(() => {
  const deadline = 3;

  let sarcini = [
    new Sarcina(4, 3),
    new Sarcina(1, 1),
    new Sarcina(2, 1),
    new Sarcina(5, 3),
  ];

  let sarciniAlese = [];

  // sorteaza dupa crescator deadline
  // si daca au celasi deadline, descrecator dupa prioritate
  sarcini.sort(
    (a, b) =>
      a.deadline === b.deadline
        // la benzi e acelasi algoritm, numai ca sortam crescator dupa prioritate
        ? b.prioritate - a.prioritate // benzi: a.prioritate - b.prioritate
        : a.deadline - b.deadline
  );

  // cat timp mai avem sarcini si nu am atins deadline-ul
  for (let oraCurenta = 1; sarcini[0] && oraCurenta <= deadline; oraCurenta++) {
    // sarim peste sarcinile al caror deadline a trecut
    while (sarcini[0] && sarcini[0].deadline < oraCurenta) {
      sarcini.shift();
    }

    sarciniAlese.push(sarcini.shift());
  }

  console.log(sarciniAlese);
})();