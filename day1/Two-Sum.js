1function twoSum(nums, target) {
2  let output = [];
3  for (let i = 0; i < nums.length; i++) {
4    for (let j = i+1; j < nums.length; j++) {
5      if (nums[i] + nums[j] === target) {
6         output.push(i, j);
7         break;
8      }
9    }
10  }
11  return output;
12}
13
14