

String.prototype.wtf = function(){
      self = this;
      self = "wtf";
      
      return self;

};

String.prototype.scramble = function(){

   var newWord = this.replace(this[0], this[this.length-1]);


   var newWord1 = newWord.replace(this[1], this[this.length-2]);
    //this[this.length-1] = this[1];

    //this[2]= this[this.length-2];

    return newWord1;
};


String.prototype.trim = function(){

 var trimmed= this.match(/(\w+\s*\w+)/g);
   
   return trimmed[0];
  
  
};