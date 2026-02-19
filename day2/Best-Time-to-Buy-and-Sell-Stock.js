1 function maxProfit (arr) {
2  minprofit = Infinity;
3  maxprofit = 0;
4  for (price of arr) {
5    if (price < minprofit) {
6      minprofit = price;
7    }
8    sub = price - minprofit;
9    if (sub > maxprofit) maxprofit = sub;
10  }
11  return maxprofit;
12};