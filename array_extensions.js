

Array.prototype.toString = function(){

      var arr = [];
      for(var i=0;i<this.length;i++){

        if(this[i]===null || typeof this[i] === 'function'){
              continue;
        }
        else arr.push(this[i]);
      }
      return arr.join(",");
};

     

Array.prototype.forEach = function(funct){

      var last_num;

      for(var i=0;i<this.length;i++){
          
        last_num = funct(this[i]);
      }

      return last_num;  
};





