let moveZerosToLeft = function(nums) {
    // Return if the list is empty
    if (nums.length < 1) {
      return;
    }
    // using read and write pointers
    let lengthNums = nums.length;
  
    // Initializing the two markers
    let writeIndex = lengthNums - 1;
    let readIndex = lengthNums - 1;
  
    // Iterate read_index marker till the index is less than or equal to 0
    while (readIndex >= 0) {
      // Replacing writeIndex value with readIndex value
      // This step moves the next non-zero value "back" in the array, 
      // making space for the zero at the head of the array
      if (nums[readIndex] != 0) {
        nums[writeIndex] = nums[readIndex];
        writeIndex--;
      }
      
      readIndex--;
    }
    // Replacing initial values with zeroes
    while (writeIndex >= 0) {
      nums[writeIndex] = 0;
      writeIndex--;
    }
  };
  