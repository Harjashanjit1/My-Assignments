A closure is an inner function that has access to the outer (container) function’s variables
and parameters.

function showName (firstName, lastName) {
var nameIntro = "My name is "
   
function makeFullName () {      
return nameIntro + firstName + " " + lastName;  
}

return makeFullName ()
}

console.log(showName ("Harjashanjit", "Dhillon")) 



In this javascript code there are two functions
1. showName()
2. makeFullName()

and the output is "My name is Harjashanjit Dhillon"

Now how does this code really works?

The answer is that showName() is the function which containes other function
named makeFullName() function, so bascically showName() is an outer function
and makeFullName() is an inner function. In code we can clearly see that inner
function does not has any of its own parameter and variables, it is using the 
variables and parameters of its container function. So makeFullName() is a Closure.

Closure stores the reference (NOT THE VALUE) of variables and parameters of outer function. So 
even if we change the value of variables or parameters of outer funtion, the closure will
still get the updated the value of parameters and variables.


reference : http://javascriptissexy.com/understand-javascript-closures-with-ease/