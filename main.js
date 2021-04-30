var fruits=["apple","banana","orange"];
console.log (fruits);
document.getElementById("declaration_of_arrays").innerHTML= fruits;

var firstFruit=fruits[0];
console.log (firstFruit);
document.getElementById("access_first_element").innerHTML= firstFruit;

var secondFruit=fruits[1];
console.log (secondFruit);
document.getElementById("access_second_element").innerHTML= secondFruit;

var thirdFruit=fruits[2];
console.log (thirdFruit);
document.getElementById("access_third_element").innerHTM= thirdFruit;

var length=fruits.length;
console.log (length);
document.getElementById("display_length_of_array").innerHTML= length;

var arrayloop="";
for(i=0;i<fruits.length;i++);
{console.log (fruits[i]);
arrayloop=arrayloop+fruits[i]+"<br>"};
console.log (arrayloop);
document.getElementById("loop_the_array").innerHTML= arrayloop;

var newFruit=fruits.push("mango");
console.log (newFruit);
document.getElementById("add_element_at_the_end_of_array").innerHTML= "newFruit";

fruits.push("papaya");
console.log (fruits);
document.getElementById("add_more_element_at_the_end_of_array").innerHTML= "fruits";

var alphabets=["c","x","p","o","m","f","d","t"];
console.log (alphabets);
document.getElementById("display_alphabets_array").innerHTML= "alphabets";

alphabets.sort();
console.log(alphabets);
document.getElementById("display_sorted_alphabets_array").innerHTML= "alphabets";

alphabets.reverse();
console.log(alphabets);
document.getElementById("display_reverse_array").innerHTML= "alphabets";

var numbers=["23","42","34","56","12"];
console.log(numbers);
document.getElementById("display_number_array").innerHTML= "numbers";

var maxNumber=Math.max.apply(Math,numbers);
console.log(maxNumber);
document.getElementById("display_maximum_number").innerHTML= "maxNumber";

var minNumber=Math.min.apply(Math,numbers);
console.log(minNumber);
document.getElementById("display_minimum_number").innerHTML= "minNumber";