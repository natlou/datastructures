let findLeastCommonNumber = function(arr1, arr2, arr3) {
    // Initialize starting indexes for arr1, arr2 and arr3
    let i = 0;
    let j = 0;
    let k = 0;
    
    // Iterate through three arrays 
    while (i < arr1.length && j < arr2.length && k < arr3.length) {

    // Finding the smallest common number
    // since the array is already sorted, we can just iterate linearly because we expect 
    // tyhe smallest indices to have the smallest values
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
        return arr1[i];
    }

    // Let's increment the iterator
    // for the smallest value.  
    if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
        i++;
    } 

    else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
        j++;
    }
        
    else if (arr3[k] <= arr1[i] && arr3[k] <= arr2[j]) {
        k++;
    }
    
    }

    return -1;
};