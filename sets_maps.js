//obj=new Set()
//SET--> collection of unique data/values
//syntax: variableName.add(value
//console.log(variable)
////////////////////////////////////////////////////////////////////////////

//MAP --> key value pair
//varibleName.add("id")
//map=new Map()


/*
//1st EG: // without array brackets:
setExample=new Set("aiadmk","bjp","congress")
console.log(setExample) 

//2nd EX : // with array brackets:
setExample=new Set(["aiadmk","bjp","congress"])
console.log(setExample) 

//3RD EX:
setExample=new Set(["aiadmk","bjp","congress"])
setExample.add("dmk")
setExample.add("aiadmk")
console.log(setExample) */

/*
//4thex://iterate:// for of
const mySet=new Set()
mySet.add("virat")
mySet.add("rohit")
for(const value of mySet)
{
    console.log(value)
}
*/

/*
//for of
setExample=new Set(["aiadmk","bjp","congress"])
for(const value of setExample)
{
    console.log(value)
}

//set in for in nothing comes://for in 
setExample=new Set(["aiadmk","bjp","congress"])
for(const key in setExample)
{
    console.log(key)
}


//maps ---> no key value pair is present in this example:mapeg=new Map("id","val")
mapEg=new Map(
    "id","21ecr167")
    console.log(mapEg)

//------> no key value pair is present : neweg=new Map(["id","val"])
mapEg=new Map(
["id","21ecr167"])
console.log(mapEg)*/


/*
//--------->ans comes.
mapEg=new Map([
        ["id1","val1"],
        ["id2","val2"]
    ])
    console.log(mapEg)   */

/*
//for in ---> no output
mapEg=new Map([
    ["id1","val1"],
    ["id2","val2"]
])
console.log(mapEg)
for(key in mapEg)
{
    console.log(key)
}

//for of
for(value of mapEg)
{
    console.log(value)
}
*/

mapEg = new Map([
    ["id","val"],
    ["name","val1"],
    ["age","val3"],
])
console.log(mapEg)

for (value of mapEg) {
    console.log(value)
}

for (const key in mapEg) {
    console.log(key)
}

console.log(mapEg.has["name"])

mapex = new Map([
    ["name","RITHI"],
    ["id","21ECR167"],
    ["age","19"]
])
console.log(mapex)
mapex.set("ph.no","987643210")
console.log(mapex)
mapex.delete("ph.no")
console.log(mapex)
