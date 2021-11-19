var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let odd="even";
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = odd;
   
 }
}
console.log(numsArr);