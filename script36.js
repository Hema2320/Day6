aa = data=>{
    var a=data;
   for(let i=0;i<a.length;i++){
    var l='';
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1;
   }
   if((a.length%2)!=0){
    l+=a[a.length]
   }
   console.log(l);
   }

   aa([1,2,3,4]);