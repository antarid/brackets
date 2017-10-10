module.exports = function check(str, bracketsConfig) {
  function isSimilar(bracket1 , bracket2){
      if(bracket1 == bracket2){
          for(var i = 0; i < bracketsConfig.length; i++){
              if(bracketsConfig[i].includes(bracket1)){
                  if(bracketsConfig[i][0] == bracketsConfig[i][1])
                      return true;
              }
          }
      }
      return false;
  }   
  function search(bracket){
      for(var i = 0; i < bracketsConfig.length; i++){
          if(bracketsConfig[i].includes(bracket)){
          
              if(bracketsConfig[i][0] == bracket)
                  return [i , 0];
              else
                  return [i , 1];
          }
      }
  }

  for(var i = 0; i < str.length - 1; i++){
      var bracket = search(str.charAt(i)); // i  0/1
      var temp = search(str.charAt(i + 1));
      if((isSimilar(str.charAt(i), str.charAt(i + 1)) )||(bracket[0] == temp[0] && bracket[1] == 0 && temp[1] == 1)){
          str = str.substring(0 , i) + str.substring(i+2);
          i = -1; 
  
      }
      else if(bracket[0] != temp[0] && bracket[1] != temp[1]){
          return false;
      }
      else if(bracket[0] == temp[0] && bracket[1] == 1 &&  temp[1] == 0 ){
          return false;
      }
  
  }
  if(str.length == 0)
      return true;
  return false;
}
