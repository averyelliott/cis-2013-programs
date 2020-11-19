//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
    var intCount, i, j, k, stringOutput; //this declare all my variables needed in the code
    
    i=0;  // sets the first number in the Fibonacci series to 0
	j=1;  //sets the second number in the Fibonacci series to 1
	
	stringOutput = i + " " + j;//initialize the Fibonacci series output to include the first two numbers
    
    var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
    
    
    if (isNaN(intCount) || intCount < 2 || intCount > 100) // makes sure intCount is a number and is between 2 and 100
    {
        $("total_fib").value = ""; //blanks out the box if the number is invalid
        alert("You must enter a number between 2 and 100");
    } else {
        while (intCount > 2) 
        {
            k = i + j;
            i = j;
            j = k;
            intCount --; //will decrease until intCount is greater than 2
            stringOutput = stringOutput + " " + k; //adds the new value onto the string
        }
        $("output").value = stringOutput; //once the loop is finished it will send the data back to the HTML
    }
 

};


window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};  