

//function without argument and without returntype
function fun()
{
    console.log("helo rithika")
}
fun() 

//function with argument without return type
function fun(a,b)
{
for(i=a;i<b;i++)
 {
    if(i%2!=0)
    {
        console.log("the number",i,"is odd")
    }
    else{
        console.log("the number",i,"is even")
    }
  }
}
fun(5,10) 


//function with argument with return type
function fun(a)
{
    return a
}
console.log(fun(10))    
//function without arguement with return type
function fun(a)
{
    var a=10
    return a
}
fun(10)







