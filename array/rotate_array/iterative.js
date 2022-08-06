let rotateArray = function(nums, n) {
    //TODO: Write - Your - Code
    // even negative rotations are technically positive it's just that it's shifted length - n times 
    // normalize the shifts 
    n = n % nums.length; 
  
    let temp = []
  
    // if negative, calculate how many positive rotations  are needed 
    if (n < 0)  {
      n += nums.length; 
    }
    
    // do two for loops, one for shifts, put the last n elements to the front of the 
    let iter = 0; 
    for (let i = nums.length - n; i < nums.length; i++) {
      temp[iter] = nums[i];
      iter++; 
    }
  
    // add the rest of the length - n elements to array 
    for (let j = 0; j < nums.length - n; j++) {
      temp[iter] = nums[j]
      iter++;
    }
  
    // copy the temp to the nums array 
    for (let i = 0; i < nums.length; i++) {
      nums[i] = temp[i]; 
    }
  
    return nums ;
  
};