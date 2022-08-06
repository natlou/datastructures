let reverseArray = function(nums, start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };
  
  let rotateArray = function(nums, n) {
    let len = nums.length;
  
    // Normalizing the 'n' rotations
    n = n % len;
    if (n < 0) {
      // calculate the positive rotations needed.
      n = n + len;
    }
    // Let's partition the array based on rotations 'n'.
    reverseArray(nums, 0, len - 1);
    reverseArray(nums, 0, n - 1);
    reverseArray(nums, n, len - 1);
  };
  
  let arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
  
  console.log("Array Before Rotation ");
  console.log(printArray(arr));
  
  rotateArray(arr, 2);
  
  console.log("Array After 2 Rotations ");
  console.log(printArray(arr));