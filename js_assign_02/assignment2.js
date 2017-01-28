function arr(a)
{
    let arr=[]
a=[]
a.push(1,2,3,4,5)
for(let x=0;x<5;x++)
{
 arr=a.splice(0,1) 
 console.log(`${x}:${arr}`)
 
 
}
}
arr([])