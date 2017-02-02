
function arrSum(a)
{
let b=[]    
a=[]
const Val=process.argv

for(let i=2;i<Val.length;i++)
{
  a.push(Number(Val[i])+2)  
}
return(a)

// for(let j= 0;j<a.length;j++)
// {
    
   
//   a.pop()
   
//   console.log(a)
    
   
// }


 

}
console.log(arrSum())

