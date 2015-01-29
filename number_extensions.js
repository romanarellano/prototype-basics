

Number.prototype.double = function(){


    return this *2;


};


Number.prototype.tripledouble = function(){

    var tripled =this * 3;

    return tripled * 2;

};

Number.prototype.isDivisibleBy = function(num){

    return this % num === 0;


};

Number.prototype.submultitractivide = function(funct){

  return funct(this);
   

    //return this op num op2 num;


};