let findLeastCommonNumber = function(arr1, arr2, arr3) {
  
    let common_values = []
  
    for (let i = 0; i < arr1.length; i++) {
      
      if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
        common_values.push(arr1[i]); 
      }
  
    }
  
    let min = -1; 
  
    Array.prototype.min = function() {
      return Math.min.apply(null, this);
    };
    
    if (common_values.length > 0) {
      min = common_values.min();
    }
  
    return min;
};