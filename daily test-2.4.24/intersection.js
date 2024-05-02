a=[1,2,3,4]
b=[3,4,5,6]
c=[]
for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length;j++){
    if(a[i]==b[j]){
     c.push(a[i])

    }}
}
console.log(c)