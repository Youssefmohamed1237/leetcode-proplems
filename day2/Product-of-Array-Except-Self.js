function productExceptSelf(nums) {
  const value = nums.map((numbers, index) => {
    return nums.reduce((acc, el, ind) => {
      if (index != ind) {
        acc *= el;
      }
      return acc;
    }, 1);
  });
  return value;
}
