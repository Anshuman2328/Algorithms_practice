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

// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Fizz Buzz $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Fizz Buzz $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Fizz Buzz $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Fizz Buzz $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$


// function fizzbuzz(n){
//     for(var i=1; i<=n;i++){
//         if(i % 15 === 0){
//             console.log("Fizzbuzz");
//         } else if (i % 5 === 0){
//             console.log("Buzz");
//         } else if (i % 3 === 0){
//             console.log("fizz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzbuzz(15);

// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of Fizz Buzz $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of Fizz Buzz $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of Fizz Buzz $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of Fizz Buzz $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$

// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Chunk Array $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Chunk Array $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Chunk Array $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Chunk Array $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$

//  Given an array and size, make subarrays with the length same as size provided

// Solution 1: 
// This one uses a for loop, a new array and logic is
//  take the last element of the new array, if it doesnot exist or if its length is same size then add 
//  this new element to chunked directly within an array
// else push this element to the last element(within the chunk)
// function chunk(array, size){
//     var chunked = [];
//     for(let elements of array){
//         var last = chunked[chunked.length-1];
//         if(!last || last.length === size){
//             chunked.push([elements]);
//         } else {
//             last.push(elements);
//         }
//     }
//     return chunked;
// }

// console.log(chunk([1,2,3,4,5,6,5,4,3],4));


// Solution 2: create a new array, create a new variable called index, while index < arr.lenght,
// push the slice of original array into the new array, and increase the index by size
//  slice method uses two arguments, start and end
// function newchunk(arr, sze){
//     var dachunk = [];
//     var index = 0;
//     while(index < arr.length){
//         dachunk.push(arr.slice(index, index+sze));
//         index = index + sze;
//     }
//     return dachunk;
// }

// console.log(newchunk([1,2,2,3,4,5,6,7,6,4,3,2,3,4],7));


// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of the Chunk Array $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of the Chunk Array $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of the Chunk Array $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of the Chunk Array $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$


// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$% Anagrams $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$% Anagrams $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$% Anagrams $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$% Anagrams $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$


// Solution 1: this one uses two char maps. Char maps is nothing but a dictionary/object with key value pair
// to build a dict/object first initiate an empty dict/obj, then use for loop to iterate over the string, 
// if there is no key then add the value as 1 otherwise increase the current count
//  then use for in loop to check the lenghts of both dict/obj
// this is done by using Object.keys(charmap).lenght
//  if lenght is not same return false other wise check if the keys same or not
// to do this use for loop to iterate over either one of the charmap using for of loop, if charmap[key] !== second one
// return false, otherwise return true at the end
//  edge cases, string with capital letters and other character such as @, ! etc, use regex and apply using replace
//  for ex, for (let char of str.replace(/[^\w]/g, '').toLowerCase()) this will turn the given string into
// lowecase with any special characters for easy comparison

// function anagram(str1, str2){
//     var map1 = {};
//     var map2 = {};
//     for(let char of str1){
//         if(!map1[char]){
//             map1[char] = 1;
//         } else {
//             map1[char] ++;
//         }
//     }
//     for(let char of str2){
//         if(!map2[char]){
//             map2[char] = 1;
//         } else {
//             map2[char] ++;
//         }
//     }
//     if (Object.keys(map1).length !== Object.keys(map2).length){
//         return false;
//     }
//     for(let element in map1){
//         if(map1[element] !== map2[element]){
//             return false;
//         }
//     }
//     return true;
// }
// anagram("hello", "helols");


// //  Solution 2: this is when you have a helper function
// function isAnagram(stringA, stringB){
//     const aCharMap = helperCharMap(stringA);
//     const bCharMap = helperCharMap(stringB);
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false;
//     } 
//     for (let char in aCharMap){
//         if(aCharMap[char !== bCharMap[char]]){
//             return false;
//         }
//     }
//     return true;
// }
// function helperCharMap(str){
//     const charMap= {};
//     for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }
// console.log(anagram("thisisgood", "goodisthis"));
// console.log(anagram("notgood", "goodnon"));
// console.log(isAnagram("thisisgood", "goodisthis"));
// console.log(isAnagram("notgood", "goodnon"));
// console.log(isAnagram("!!!!thisisgood", "Good!!IS!!THIS"))




// solution 3: this is the quickest solution, the approach is as followes
//  first clean the given strings, use .replace on a string and in .replace method pass in 
// regex, lowercase it, split it, sort it and again join it back

// in the main function use === to check if string a is same as string b, by calling helper function on the prvided
// strings and return it. it wll give truthy and falsy (falsey!!) value

// function solanagram(stringA,stringB){
//     return cleanstring(stringA) === cleanstring(stringB);
// }
// function cleanstring(str){
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }
// console.log(solanagram("HELLOW", "ewllos"));
// console.log(solanagram("HELLOW", "ewlloh"));

// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of Anagram $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of Anagram $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of Anagram $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of Anagram $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$


// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Capitalization $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Capitalization $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Capitalization $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Capitalization $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$

// Solution 1: This is first solution, the idea behind this is to create an empty array
// split the string with ' '(space) this creates the first word at first index and so on
// once we have first word at first index, we can then use toUppercase at string[0] and use
// slice method to join the rest of the characters of the word using slice at argument of 1
// we can then push this into an array and then join the array back to with the join(' ') (using space again)
// function cap(str){
//     var arr = [];
//     for(let char of str.split(' ')){
//         arr.push(char[0].toUpperCase() + char.slice(1));
//     }
//     return arr.join(' ')
// }
// console.log(cap("this is for cap"));

// Solution 2: the idea is to create an empty string, for each element in the string, 
// if the element has a space to its left, we uppercase it and add it to new empty string
// otherwise we just add the element to the new string. Remember to always capitalize the very first element since
//  it is the very first element with no space to its left

// function cap(str){
//     var result = str[0].toUpperCase();
//     for(let i = 1; i<str.length; i++){
//         if(str[i-1] === ' '){
//             result = result + str[i].toUpperCase();
//         } else {
//             result = result + str[i];
//         }
//     }
//     return result;
// }
// console.log(cap("this is a test number two"));

//  this is for the test function to check how split with ' ' space works
// function test(string){
//     console.log(string[0])
//     var strr = string.split(' ');
//     console.log(strr);
//     console.log(strr[0])
// }
// test("this is test")

// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of Capitalization $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of Capitalization $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of Capitalization $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of Capitalization $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$

// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Steps - Making a step $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Steps - Making a step $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Steps - Making a step $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  Steps - Making a step $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$

// soluton 1: this is first solution
// for each x(row), create a new empty string, then for each y(column) check is y <= x. If it is then 
// add the step -->> '#' to the matrix(empty string) otherwise just add space ' ' and console log with in first for loop

// function steps(n){
//     for(var x = 0; x<n; x++){
//         let matrix = '';
//         for (var y = 0; y < n; y++){
//             if( y <= x){
//                 matrix += '#';
//             } else {
//                 matrix += ' ';
//             }
//         }
//         console.log(matrix);
//     }
// }
// steps(3);




// solution 2: 

function steps(n, row = 0, result = ''){
    if (n === row){
        return;
    }
    if(n === result.length){
        console.log(result);
        return steps(n, row + 1);
    }
    if(result.length <= row){
        result += '#';
    } else {
        result += ' ';
    }
    steps(n, row, result);
}

steps(14);
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of - Making a step $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of - Making a step $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of - Making a step $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
// %%$%%%$%$%$%$%$%$%$%$%$%$%$%$%$%  End of - Making a step $%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$
