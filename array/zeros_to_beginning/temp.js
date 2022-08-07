let moveZerosToLeft = function(nums) {
    let zeros = [];
    let nonzeros = []; 
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0){
        zeros.push(0);
      } else {
        nonzeros.push(nums[i]);
      }
    }
  
    let index = 0; 
    for (let i = 0; i < zeros.length; i++) {
      nums[index] = zeros[i]; 
      index++;  
    }
  
    for (let i = 0; i < nonzeros.length; i++) {
      nums[index] = nonzeros[i]; 
      index++;  
    }
  
  };