//project:
/*
//new object--(return)-->new Promise()
rithika()
.then(console.log(message)) //your code is successfully executed
.catch(console.log(message)) //your code is not successfully executed
*/
function soliton()
{
    return Math.random()>1;
}

function rithika()
{
    return new Promise(function(response,noresponse){
        setTimeout(function(){
                if(soliton())
                {
                    response("not placed")
                }
                else{
                    noresponse("you will be placed");
                }
        },3000);

    });
}

rithika()
.then(function(message)
{
    console.log(message)

})
.catch(function(message){
    console.log(message)
});