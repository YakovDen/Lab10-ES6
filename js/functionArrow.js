function functionArrow(){        
    //в ES5
    /*  var getTrack = function(matthew, levin) {
         return matthew+' '+levin;           
     }  */ 
     //в ES6
     var getSurname = (matthew, levin) => matthew+' '+levin;         
     console.log(getSurname('Matthew','Levin'));
     
     var getHello = () => 'Hello Mattew';
     console.log(getHello());

     //в ES5
     /* function API(){
         this.url = 'http://google.com';
     }
     API.prototype.get = function(){
         var self = this;
         return [1,2,3].map(function(number){
             console.log('this',self);
             return number;
         })
     }
     var api = new API();
     api.get(); */

     //в ES6
     function API(){
         this.url = 'http://google.com';
     }
     API.prototype.get = function(){           
         return [1,2,3].map(number =>{
             console.log('this',this);
             return number;
         })
     }
     var api = new API();
     api.get();

 }