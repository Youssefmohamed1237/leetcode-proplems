1function maxArea(height){
2    let maxArea = 0;
3    let left = 0;
4    let right = height.length - 1; 
5
6    while(right > left){
7        let width = right - left;
8        let minHeight = Math.min(height[right], height[left]);
9        maxArea = Math.max(maxArea, (width * minHeight));
10        if(height[right] > height[left]){
11            left++;
12        } else {
13            right--;
14        }
15    }
16    return maxArea;
17}