//how will you declare objects? 
// 1st way:
var customerdetails={
    "NAME":"RITHIKA",
     "AGE":20,
     "PHN NO":"8293952527",
}
console.log(customerdetails)
customerdetails["ID"]="21ECR167"
console.log(customerdetails)

//2nd way:
var customerdetails={}
customerdetails["ID"]="21CR167"
customerdetails["NAME"]="RITHIKA"
customerdetails["AGE"]="20"
customerdetails["PHN NO"]="5252522527"
console.log(customerdetails)

//3rd way:
var kongu=new Object()
kongu["fees"]=180000
kongu["accomodation"]="decent"
kongu["food"]="good"
kongu["hostel_count"]="10"
console.log(kongu)
console.log(kongu.food)
console.log(kongu["hostel_count"])

var kongu=new Object()
kongu.fees="180000"
console.log(kongu)

/*why no  key does not hold any quotes in your object (output)?
ans : Key will not hold as it is present inbuilt*/