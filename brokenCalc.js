var brokenCalc = function(X, Y) {
  
    if(X >= Y)  return X-Y
    
    return  1 + (Y % 2 === 1 ? brokenCalc(X, Y+1) : brokenCalc(X, Y/2))
};

