1function groupAnagrams(strs) {
2  let index = [];
3  let x = [];
4  const newstr = strs.map((el) => {
5    return el.split("").sort().join("");
6  });
7  // console.log(newstr);
8  for (let i = 0; i < newstr.length; i++) {
9    for (let j = 0; j < newstr.length; j++) {
10      if (newstr[i] == newstr[j]) {
11        index.push(j);
12      }
13    }
14    x[i] = index;
15
16    index = [];
17  }
18  const val = [...new Set(x.map((el) => el.join(",")))].map((el) =>
19    el.split(","),
20  );
21  const value = val.map((el) => el.map((ell) => Number(ell)));
22
23  const result = value.map((el, ind) => el.map((el) => strs[el]));
24  return result;
25}