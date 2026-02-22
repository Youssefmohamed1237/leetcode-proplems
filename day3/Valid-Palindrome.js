1function isPalindrome(str) {
2  const sarr = str
3    .toLowerCase()
4    .replace(/[^a-z0-9]/g, "")
5    .split("");
6  let j = sarr.length - 1;
7  for (i = 0; i < sarr.length; i++) {
8    if (!(sarr[i] == sarr[j])) return false;
9    j--;
10  }
11  return true;
12}