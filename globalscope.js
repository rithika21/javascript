// scope---->
//global scope--> declaring a variable globally
sum=0
for(var i=0;i<10;i++)
{
    sum+=i
}
console.log(sum)


var i=0
while(i<10)
{
    sum+=i
    i++
}
console.log(sum)


var i=0
do{
    sum+=i
    i++
}while(i<10)



//local scope:--> hold accessbility till block ends
for(let i=0;i<5;i++) // let can also be used
{
    console.log(i+11)
}
console.log(i)
for(var i=0;i<5;i++)// block scope --0=hold accessbility a\outside 
{
    console.log(i+11)
}
console.log(i)

// ////////////////////////////////////\\\\\\\\\\\
var a=10;
console.log(a)
{
    let b=5;
    let a= 5
    console.log(a) //5     
    console.log(b)   
}
console.log(a)