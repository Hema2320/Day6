var res = function(arr){
    newArr=[];
    for(var i=0 ,l = arr.length; i<l;i++){
    
    if(newArr.indexOf(arr[i]) === -1&&arr[i] !=='') {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
   res(["guvi","geek","guvi","duplicate","geeK"]);

   