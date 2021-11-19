var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var res="";
for (let i = 0; i < numsArr.length; i++) {

    var innerArrayLength = numsArr[i].length;
    for (let j = 0; j < innerArrayLength; j++) {
        res+=numsArr[i][j] ;
    }
}
console.log(res);