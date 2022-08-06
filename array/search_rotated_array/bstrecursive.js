let binarySearch = function(nums, start, end, target) {
  
    if (start > end) {
      return -1;
    }
    
    // Finding mid using floor division
    let mid = start + Math.floor((end - start) / 2);
  
    if (nums[mid] === target) {
      return mid;
    }
    
    // start to mid is sorted
    if (nums[start] <= nums[mid] && target <= nums[mid] && target >= nums[start]) {
      return binarySearch(nums, start, mid - 1, target);
    } 
    // mid to end is sorted
    else if (nums[mid] <= nums[end] && target >= nums[mid] && target <= nums[end]) {
      return binarySearch(nums, mid + 1, end, target);
    } 
    
    else if (nums[end] <= nums[mid]) {
      return binarySearch(nums, mid + 1, end, target);
    } 
    
    else if (nums[start] >= nums[mid]) {
      return binarySearch(nums, start, mid - 1, target);
    } 
    
    return -1;
  };
  
  let binarySearchRotated = function(nums, target) {
    return binarySearch(nums, 0, nums.length - 1, target);
  };
  
  let targetList = [3,6,3,6];
  let numsList = [[6, 7, 1, 2, 3, 4, 5], [6, 7, 1, 2, 3, 4, 5], [4, 5, 6, 1, 2, 3], [4, 5, 6, 1, 2, 3]];
  
  for(let i =0; i< targetList.length; i++){
    console.log((i + 1) + ". Rotated array: " + printArray(numsList[i]));
    console.log("   target " + targetList[i] +  " found at index " + binarySearchRotated(numsList[i], targetList[i]));
    console.log("----------------------------------------------------------------------------------------------------\n")
  }