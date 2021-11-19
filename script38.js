var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var even="even";
var res=""

for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i].length;
 for(var j = 0 ; j <inner_array;j++ )
      if(numsArr[i][j] %2 != 0 )
      {
        numsArr[i][j]=even
        res +=numsArr+","
       }
    
}
console.log(numsArr)
