

    function hamburger(){

      this.drink = function(drink){

        return "drunk a " + drink;
      };


    }

   
   hamburger.prototype.eat = function(type){

    return "ate delicious " + type + " hamburger";
   };

   hamburger.prototype.puke = function(){

    return "double cheeseburger not good";
   
   };

   

   var whatDayIsIt = function(calling){

      return calling(31);


   };


   var playLike = function(athlete){


    return function(sport){

      return "i can play like " + sport;

    };
   
   };






