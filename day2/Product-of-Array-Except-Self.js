1function productExceptSelf(nums) {
2  const result = Array(nums.length).fill(1);
3
4  let prefix = 1;
5  for (let i = 0; i < nums.length; i++) {
6    result[i] = prefix;
7    prefix *= nums[i];
8  }
9
10  let suffix = 1;
11  for (let i = nums.length - 1; i >= 0; i--) {
12    result[i] *= suffix;
13    suffix *= nums[i];
14  }
15
16  return result;
17}
18