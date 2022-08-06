let findMaxSlidingWindow = function(nums, windowSize) {
    var result = [];
    //Write your code
    for (let i = 0; i < nums.length - windowSize + 1; i++) {
  
        const current_window = nums.slice(i, i + windowSize);
  
        let current_max = current_window[0]; 
  
        for (let j = 1; j < windowSize; j++) {
  
            if (current_window[j] > current_max) 
                current_max = current_window[j];
  
        }
  
        result.push(current_max);
    }
    return result;
};