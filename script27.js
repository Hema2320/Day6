let n = [1,2,3];
let sum=0;
console.log(add(n));
function add(n)
{
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}