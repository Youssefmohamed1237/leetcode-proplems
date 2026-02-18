1function containsDuplicate(nums) {
2  let numset = [...new Set(nums)];
3  console.log(numset);
4  if (nums.length === numset.length) return false;
5  else return true;
6}
7
8