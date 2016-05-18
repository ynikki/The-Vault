'use strict';
module.exports = function() {
  
  var secret = null,
   	result = {};

  function setValue(key,value){
  	
  }

  return{
  	getValue: function(key){
  		return secret;
  	}
  };
  // function setValue(key,value){
  // 	if(key === value){
  // 		return key;
  // 	}else{
  // 		return function getValue(key){
  // 			return secrets;
  // 		};
  // 	}
  // }
	
};