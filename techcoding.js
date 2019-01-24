// These are some of the technical interview questions that I have come across.
//  I am using these as starting guide. 


// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Reverse a string $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Reverse a string $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Reverse a string $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Reverse a string $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$

// Solution 1 : This takes the elements and puts into a array
// function reverse(string){
//     var arr = [];
//     for (var i = string.length-1; i>= 0; i--){
//         arr.push(string[i])
//         // console.log(string[i]);
//         console.log(arr);
//     }
// }
// console.log(reverse("hello"));


// Solution 2: this is the quickest to do as it uses inbuilt functions
// function rev(string){
//     return string.split('').reverse().join('');
// }
// console.log(rev('hello'));


// Solution 3: this one makes use of another empty string and then keep adding each element
// function reversed(string){
//     let reverse = '';
//     for (let char of string){
//         // console.log(char);
//         reverse = char + reverse;
//         console.log(reverse);
//     }
// }

// reversed("hello");


// Solution 4: making use of the reduce method, an in built JS method. 
//  reduce method takes two arguments, 1. arrow function and 2. starting point

// function red(string){
//     return string.split('').reduce ((rev, char) =>
//     char + rev
//     , '');
// }
// console.log(red('hello'));


// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Reverse a string $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Reverse a string $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Reverse a string $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Reverse a string $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$


// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Palindrome $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Palindrome $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Palindrome $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Palindrome $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$


// Check if a given string is palindrome or not
// A palindrome is a word,phrase that reads same regardless of the direction


// Solution 1, uses a for loop, check if the first element is same as the last one of the string
// Also check if the length is less than or equal to 1, then return false as well
// function palindrome(string){
//     if (string.length <= 1){
//         return false;
//     }
//     for (var i = 0; i <= string.length/2; i++){
//         if (string[i] === string[string.length-1-i]){
//             return true;
//         } else {
//             return false;
//         }
//     }
// }


// Solution 2: Using the inbuilt methods for the string
// function plain(str){
//     return str.split('').reverse().join('') === str;
// }

// console.log(plain("malayalam"));
// console.log(plain("India"));
// console.log(plain("USASU"));
// console.log(palindrome("malayalam"));
// console.log(palindrome("India"));
// console.log(palindrome("USASU"));
// console.log(palindrome("U"));

// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Palindrome $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Palindrome $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Palindrome $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Palindrome $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$


// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Reverse an Int $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Reverse an Int $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Reverse an Int $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Reverse an Int $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$


// Solution 1: this is direct method, convert the num to string, apply split, reverse then join, multiply the 
// result with Math.sign and then convert the string back to int using parseint
// function reverse(int){
//     return parseInt((int.toString().split('').reverse().join(''))) * Math.sign(int);
// }

// Solution 2: This one uses a while loop. while num > 0, add to a temp variable the modulus of num,
// and decrease the given num using the Math.floor on the num/10
// function reverse(int){
//     var rev = 0;
//     while(int){
//         rev = (rev * 10) + (int % 10);
//         int = Math.floor(int / 10);
//     }
//     return rev;
// }
// console.log(reverse(12345));



// Solution 3: Create an array, while the num > 0, push the modulus into the array and 
//  then subtract the num by the same modulus and divide the result by 10 and repeat the process
// This will give back an array
// function myrev(num){
//     var arr = [];
//     while(num > 0){
//         arr.push(num % 10);
//         num = (num - (num % 10))/10;
//     }
//     return arr.toString();
// }

// console.log(myrev(987654));
// console.log(reverseNumber(876));
// console.log(reverse(784));
// console.log(reverse(-784));
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Reverse an Int $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Reverse an Int $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Reverse an Int $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Reverse an Int $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$


// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Max Character in a String $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Max Character in a String $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Max Character in a String $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Max Character in a String $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$

//  solution 1: this will give the first max char from the provided string

// function max(string){
//     var map = {};
//     var count = 0;
//     var maxChar = '';
//     for(char of string){
//         // console.log(map[char]);
//         if(!map[char]){
//             map[char] = 1;
//             // console.log(map[char]);
//         } else {
//             map[char]++;
//             // console.log(map[char]);
//         }
//     }
//     console.log(map);

//     for(char in map){
//         if(map[char]> count){
//             count = map[char];
//             maxChar = char;
//         }

//     }
//     console.log(count);
//     console.log(maxChar);
// }

// max('heelloo');


//  this is to find the longest word in the string, this will also give back the word and the length of the word
// function word(str){
//     var newstr = str.split(' ');
//     var newcount = 0;
//     var neword = '';
//     for(var i = 0; i<newstr.length; i++){
//         if(newstr[i].length>newcount){
//             newcount = newstr[i].length;
//             neword = newstr[i];
//         }
//     }
//     console.log(newcount);
//     console.log(neword);
// }

// word('The quick brown fox jumped over the lazy dog');
// word("this is a test and it should return the word Anshuman");

// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Max char $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Max char $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Max char $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  END OF Max char $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
