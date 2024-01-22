//hoisting

//variable hoisting
console.log(a)
var a=10
//o/p----> undefined

console.log(a)
var a
//o/p----> undefined

//console.log(a) 
//let a=10
//o/p---> reference error : not initialized


//functional hoisting
konguclg() 
//o/p --->not defined
function konguclg(){

}
// o/p ----> no error 
konguclg(5,10)
function konguclg(a,b)
{
    for(i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("the number is",i,"even")
        }
        else
        {

            console.log("the number is ",i,"odd")
        }
    }
}