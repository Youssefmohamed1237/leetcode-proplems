1function isAnagram(s, t) {
2  let sarr = s.toLowerCase().split("").sort().join("");
3  let tarr = t.toLowerCase().split("").sort().join("");
4  console.log(sarr);
5  console.log(tarr);
6  if (sarr == tarr) return true;
7  else return false;
8}
9