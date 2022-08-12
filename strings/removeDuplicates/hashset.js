let removeDuplicates = function(str) {
    //TODO: Write - Your - Code
    let chars = new Set(); 
    let temp_str = "";
    
    for (let i = 0; i < str.length; i++) {
      if (!chars.has(str.charAt(i))) {
        temp_str += str.charAt(i);
        chars.add(str.charAt(i));
      }
    } 
  
    str = temp_str;
    return str;
  };