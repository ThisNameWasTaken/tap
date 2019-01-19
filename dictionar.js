import { S_IFDIR } from "constants";

const sir = "xyzzzzxy";
const dictionar = [
  "xyz",
  "zzz",
  "zzzz",
  "x",
  "y",
  "xy"
];

let precedent = new Array(sir.length).fill(-1);
let minimCuvinte = new Array(sir.length).fill(-1); // numarul minim de cuvinte in care se imparte sir[1...i];

/**
 * @param {string} sir 
 * @param {string[]} dictionar 
 */
function imparteInCuvinte(sir, dictionar) {
  minimCuvinte[0] = 0;

  for (let i = 0; i < sir.length; i++) {
    for (let j = i; j > 0; j--) {
      const cuvant = sir.slice(j, i + 1);
      if (dictionar.includes(cuvant)) {
        if ((minimCuvinte[j - 1] + 1 < minimCuvinte[i]
          || minimCuvinte[i] === -1)
          && minimCuvinte[j - 1] !== -1) {
          minimCuvinte[i] = minimCuvinte[j - 1] + 1;
          precedent[i] = j - 1;
        }
      }
    }
  }

  let cuvinte = [];
  for (let i = minimCuvinte[minimCuvinte.length - 1]; precedent[i] >= 0; i = precedent[i]) {
    const cuvant = sir.slice(precedent[i] + 1, i + 1);
    // console.log(cuvant);
    cuvinte.push(cuvant);
  }

  return cuvinte;
};


console.log(imparteInCuvinte(sir, dictionar));