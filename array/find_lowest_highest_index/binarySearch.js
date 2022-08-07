let findLowIndex = function(arr, key) {
  
    let low = 0;
    let high = arr.length - 1; 
  
    while (low < high) {
  
      let mid = Math.floor((high + low) / 2);
  
      console.log(low, high, mid);
  
      if (arr[mid] === key) {
        
        if (mid === low) {
          return mid; 
        }
  
        if (arr[mid - 1] !== key) {
          return mid;
        } else { 
          high = mid - 1; 
        } 
  
      } 
      
      else if (arr[mid] > key) {
        high = mid - 1;
      }
  
      else {
  
        if (arr[mid + 1] === key) {
          return mid + 1; 
        }
  
        low = mid + 1;
      }
    } 
  
    return -1;
  };
  
  // binary search 
  
  let findHighIndex = function(arr, key) {
    //TODO: Write - Your - Code
      
    let low = 0;
    let high = arr.length - 1; 
  
    while (low < high) {
  
      let mid = Math.floor((high + low) / 2);
  
      console.log(low, high, mid);
  
      if (arr[mid] === key) {
        
        if (mid === low) return mid; 
  
        if (arr[mid + 1] !== key) {
          return mid;
        } else { 
          low = mid + 1; 
        } 
  
      } 
      
      else if (arr[mid] > key) {
        if (arr[mid - 1] === key) return mid - 1; 
        high = mid - 1;
      }
  
      else {
        if (arr[mid + 1] === key) if (mid + 1 === high) return mid + 1; 
        low = mid + 1;
      }
    } 
  
    return -1;
  };