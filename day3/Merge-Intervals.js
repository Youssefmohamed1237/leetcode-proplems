1function merge (intervals) {
2    intervals = intervals.sort((a, b) => a[0] - b[0]);
3    let firstInterval = intervals[0];
4    let newIntervals = [firstInterval];
5    for(let interval of intervals){
6        if(firstInterval[1] >= interval[0]){
7            firstInterval[1] = Math.max(firstInterval[1], interval[1]);
8        } else {
9            newIntervals.push(interval);
10            firstInterval = interval;
11        }
12    }
13    return newIntervals;
14}