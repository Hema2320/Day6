//let arr = ["guvi", "geek","zen", "fullstack"];
var ano = function(arr) {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
 }
}
ano(["guvi", "geek","zen", "fullstack"]);