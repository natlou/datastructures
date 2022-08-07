let findBuySellStockPrices = function(stockNums) {
    if (!stockNums || stockNums.length < 2) {
      return;
    }
    // Initializations
    let currentBuy = stockNums[0];
    let globalSell = stockNums[1];
  
    // Calculating the global profit
    let globalProfit = globalSell - currentBuy;
    
    // Initializing current_profit with minimum value
    let currentProfit = 0;
    
    //  Looping over stocks to find best buy and selling price
    for (let i = 1; i < stockNums.length; i++) {
      // Calculating the current profit  
      currentProfit = stockNums[i] - currentBuy;
        
      // Current profit is greater than the global profit
      if (currentProfit > globalProfit) {
        globalProfit = currentProfit;
        globalSell = stockNums[i];
      }
      
      //  We will always maximise margin relative to the lowest stock price we can find
      // So whenever we find a stock price lower than the current buying price, 
      // we adopt it as the current buying price
      if (currentBuy > stockNums[i]) {
        currentBuy = stockNums[i];
      } 
    }
    // Tuple having buy price and sell price
    return [globalSell - globalProfit, globalSell];
  };
  