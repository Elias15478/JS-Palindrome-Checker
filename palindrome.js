//creat a string
//create of a function the string
//instantiate a reverse of the string
//find a reverseString[i], by starting at string.length-1 and decrement i
//check if reverseString equal to the string
//if boolean returns true, then it is a palindrome  

function isPalindrome(str) {
    let  reversedStr = [];
    for (i = 0; i < str.length; i++) {

        reversedStr[i] = str[str.length - 1 - i];
    }
    reversedStr = reversedStr.join("");

    if (reversedStr === str) {
        return "It is a Palindrome";
    }

    else {
        return "It is not a Palindrome";
    }
}
let str = "madam";
let x = isPalindrome(str);
console.log(x);
