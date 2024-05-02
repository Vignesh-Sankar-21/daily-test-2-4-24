var a=[1,2,3,3,4,5,5]
var b=[]
for(let i=0;i<a.length;i++){
   if(a[i]!=a[i+1]){
      b.push(a[i])
   }}

console.log(b)