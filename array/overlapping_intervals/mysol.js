class Pair { 
    constructor(first, second) { 
      this.first = first; 
      this.second = second; 
    } 
  }
  
let mergeIntervals = function(v){
let result = [];
//write your code here

let currentInterval = new Pair(v[0].first, v[0].second); 

for (let i = 1; i < v.length; i++) {
    if (v[i].first <= currentInterval.second && v[i].second >= currentInterval.second) {
    currentInterval.second = v[i].second;
    } else {
    result.push(new Pair(currentInterval.first, currentInterval.second));
    currentInterval.first = v[i].first;
    currentInterval.second =  v[i].second;
    }
}

if (result.length === 0 || result[result.length - 1].second < currentInterval.first) {
    result.push(currentInterval);
}

console.log('done')

return result;    
}