
//for in loop
array = [10,20,"true","false","kongu",30]
for(const index in array)
{
    console.log("the value present in ",index,"is",array[index])
}

//forof --> access element directly
arr = [10,20,"true","false","kongu",30]
for(const value of arr)
{
    console.log(value)
}

//for each -->access elements directly
arr=[10,"string","kongu",30]
arr.forEach(value=>
{
    console.log(value)
});


//ex 2)
var kongu=new Object()
kongu["fees"]=180000
kongu["accomodation"]="decent"
kongu["food"]="good"
kongu["hostel_count"]="10"
console.log(kongu)
for(value in kongu)
{
    console.log(value)
}

var kongu=new Object()
kongu["fees"]=180000
kongu["accomodation"]="decent"
kongu["food"]="good"
kongu["hostel_count"]="10"
console.log(kongu)
for(key in kongu)
{
    console.log(key,kongu[key])
}

/* //////////////////////////////////////////////////////throwing error --> for of , for each
var kongu=new Object()
kongu["fees"]=180000
kongu["accomodation"]="decent"
kongu["food"]="good"
kongu["hostel_count"]="10"
console.log(kongu)
kongu.forEach((key,element)=>
{
    console.log(key,element)
});  */