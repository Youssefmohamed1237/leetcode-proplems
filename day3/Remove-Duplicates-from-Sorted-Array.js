1function removeDuplicates(arr) {
2  let k = 1;
3  for (let i = 1; i < arr.length; i++) {
4    if (arr[i] !== arr[k - 1]) {
5      arr[k] = arr[i];
6     
7      k++;
8    }
9  }
10
11  return k;
12}