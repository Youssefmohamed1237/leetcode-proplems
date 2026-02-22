1function isPalindrome(str) {
2  const s = str
3    .toLowerCase()
4    .replace(/[^a-z0-9]/g, "")
5    .split("");
6  let j = s.length - 1;
7  for (i = 0; i < s.length; i++) {
8    if (!(s[i] == s[j])) return false;
9    j--;
10  }
11  return true;
12}