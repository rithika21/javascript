function rithika(welcomemessage,callback)
{
setTimeout(function()
    {
    console.log(welcomemessage)
    callback();

    },1000)
}
function miniani()
{
   console.log("soliton placement coming") 
}
rithika("hello rithika\ngood news for u",miniani)