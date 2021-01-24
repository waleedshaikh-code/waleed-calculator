function calcInput(num)
{
    var input = document.getElementById("output")
    input.value += num;
}


function getResult()
{
    var input = document.getElementById("output")
    input.value = eval(input.value)
}

function getClear()
{
    var input = document.getElementById("output")
    input.value = " "
}  
