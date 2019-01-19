/**
 * @param {string} str1 
 * @param {string} str2 
 */
function distantaEditare(str1, str2) {
  if (!str1.length || !str2.length) { return 0; }

  const cost =
    str1[str1.length - 1] === str2[str2.length - 1]
      ? 0
      : 1;

  return Math.min(
    distantaEditare(str1.slice(0, -1), str2) + 1,
    distantaEditare(str1, str2.slice(0, -1)) + 1,
    distantaEditare(str1.slice(0, -1), str2.slice(0, -1)) + cost,
  );
}

console.log(distantaEditare('kitten', 'sitting'));