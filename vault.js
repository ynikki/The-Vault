'use strict';
module.exports = function() {
  
  var secret = null;

  return{
  	setValue: function(key,value){
  		secret = value;
  	},
  	getValue: function(key){
  		return secret;
  	}
  };
  
};