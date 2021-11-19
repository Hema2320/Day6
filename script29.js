let arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i <= arr.length-1; i++){
 sum += arr[i];
 }
 console.log(sum);
 
 return sum;

})();
