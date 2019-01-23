//  Setting and Swapping, set a number and a name and then swap it 

// var myNumber = 42;
// var myName = "Ash";
// console.log(myName);
// console.log(myNumber);
// var temp = myName;
// console.log(temp);
// myName = myNumber;
// myNumber = temp;
// console.log("My Name is " + myName + " since I just swapped it ");
// console.log(myNumber);




//  Print -52 to 1066  print all the integers from the provided numbers

// function print(min, max){
//   for (var i= min; i<= max; i++){
//     console.log(i);
//   }
// }
// print(-10, 3);





//  print and count, print all the multiples of 5 from the given set of two nums and log how many are there.

// function print(min, max){
//   var count = 0;
//   var sum = 0;
//   for (var i = min; i <= max; i++){
//     console.log(i);
//     if (i % 5 == 0){
//       count ++;
//       console.log(i);
//       sum += i;
//       console.log(i);
//     }
//     console.log(i);
//   }
//   console.log(sum);
//   console.log(count);
// }
// print(6,10)




// Using While, print multiples of 6;

// function print(num, max){
//   while(num <= max){
//     if(num % 6 == 0){
//       console.log(num)
//     }
//     num++;
//   }
// }
// print(6, 60);



// dont worry be happy, create a function that greets you and call it 98 times

// function greet(n){
//   var count = 0;
//   while (count < n){
//     console.log("Hello, How are you doing today");
//     count ++;
//   }
//   console.log(count);
// }
// greet(100);




//  Multiples of 3, print all the multiples of 3 from 3 to -300 and skip if the no is -3 and -6

// function multiples(low, high){
//   for(var i = low; i <= high; i++){
//     if (i % 3 == 0 && i !== -3 && i !== -6){
//       // console.log(i)
//       console.log("The num is " + i);
//     } 
//   }
// }
// multiples(-20,10);



// Print integers  using While from 2000 to 5280

// function print(low, high){
//   while (low <=  high){
//     console.log(low);
//     low++;
//   }
// }

// print(10,20);





// //  Countdown by Fours
// // Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

// function count(num){
//   while(num > 0){
//     console.log(num);
//     num -=4;
//   }
// }
// count(2016);




//  Flexible countdowns, 
// // Based on earlier “Countdown by Fours”, 
// given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, 
// using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

// function flexible(low, high, mult){
//   for(var i = high; i >= low; i--){
//     if (i % mult === 0 ){
//       console.log(i)
//     }
//   }
// }
// flexible(3, 17, 5);



// //  The Final Countdown
// // This is based on “Flexible Countdown”. 
// The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

// function countdown(param1, param2, param3, param4) {
//   var count = param2;
//   while (count%param1 != 0) {
//     count++;
//   }
//   while (count <= param3) {
//     if (count == param4) {
//       count += param1;
//       continue;
//     } else {
//       console.log(count);
//       count += param1;
//     }
//   }
// }
// countdown(3, 5, 17, 9);





//  The same question with for loop.     

// function print(a,b,c,d){
//   for(var i = b; i <= c ; i++){
//     if(i % a !== 0 ){
//       continue;
//       console.log("not a multiple");
//     } else if ( d % i === 0){
//       continue;
//     } else {
//       console.log(i);
//     }
//   }
// }
// print(3,5,27,24);



// function birthday(day, month) {
//     if ((day == 2 && month == 28) || (day == 28 && month == 2)){
//       console.log("How did you know?");
//     } else { 
//       console.log("Just another day...." );
//     } 
//   }
//   birthday(28, 2);
//   birthday(2, 28);
//   birthday(4, 4);



// //  Don’t Worry, Be Happy
// // // Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
// function beCheerful(num) {
//   for (let i = 0; i < num; i++) {
//     console.log("good morning!");
//   }
// }

// beCheerful(9);




//  Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.
// let i = 2;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }




// function leapYearCheck(num) {
//     if (num % 400 == 0) {
//         return true;
//     } else if (num % 100 == 0) {
//         return false;
//     } else if (num % 4 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(leapYearCheck(100));
// console.log(leapYearCheck(400));
// console.log(leapYearCheck(1976));


//  Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
// function printInt5(num1, num2) {
//   let mults = 0;
//   for (let i = num1; i <= num2; i++) {
//       if (i % 5 == 0) {
//           console.log(i);
//           mults++;
//       }
//   }
//   console.log(`there were ${mults} multiples`);
// }
// printInt5(5, 40);


//  Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.
// let j = 6;
// while (j <= 60000) {
//     console.log(j);
//     j += 6;
// }


//  Counting the Dojo Way

// function print(num){
//   for (let i = 1; i <= num; i++){
//     if (i % 10 == 0){
//     console.log("Coding Dojo")
//   } else if (i % 5 == 0){
//     console.log("Coding")
//   } else {
//     console.log(i);
//   }
//   }
// }

// print(20);

//  reverse a string

// function reverse(str){
//   let reversed = "";
//   for (let char of str){
//     // console.log(char);
//     reversed =   char + reversed;
//     // console.log(reversed);
//   }
//   return reversed;
// }

// console.log(reverse("hello"));


//  this is how you reverse a number
// function reverse(num){
//   let reversed = 0;
//   console.log(reversed);
//   while(num != 0){
//     console.log(num);
//     reversed *= 10;
//     console.log(reversed);
//     reversed = reversed + num % 10;
//     console.log(reversed);
//     num = num - num % 10;
//     console.log(num);
//     num = num / 10;
//     console.log(num);
//   }
//   return reversed;
// }

// console.log(reverse(54));
// console.log(reverse(543));
// console.log(reverse(5432));
// console.log(reverse(54321));



//  find if the string is palindrome or not

// function palindrome(str){
  // this is one way 
//   for (var i = 0; i < (str.length)/2; i++){
//     if (str[i] !== str[str.length - 1 - i]){
//       return false;
//     } 
//   }
//   return true;
// }

// console.log(palindrome("malayalam"));
// console.log(palindrome("Mumbai"));
// console.log(palindrome("USAsu"));
// console.log(palindrome("IDNIAI"));
// console.log(palindrome("$Hello$"));


//  this one below make use of pre existing function for string reversal and checks it against new one
//   return reverse(str) === str;
// }

// console.log(palindrome("malayalam"));
// console.log(palindrome("Mumbai"));
// console.log(palindrome("USASU"));
// console.log(palindrome("IDNIAI"));



//  max characters 

// function max(str){
//   const char = {};
//   for (let c of str){
//     if (!char[c]){
//       char[c] = 1;
//     } else {
//       char[c] ++
//     }
//   }
//   return char;
// }

// console.log(max("hello"));
// console.log(max("Anshuman Purohit is learning algorithms"));


//  classic fizz buzz

// function fizzbuzz(num){
//   for (var i = 1; i <= num; i=i+2){
//     if(i % 15 === 0){
//       console.log("FizzBuzz");
//     } else if (i % 5 === 0){
//       console.log("Buzz");
//     } else if (i % 3 === 0){
//       console.log("Fizz")
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzbuzz(88);




//  Chunking an array

// function chunk(array, size) {
//   const newarr = [];
//   for (let i = 0; i < array.length; i++) {
//     const last_sub_array = newarr[newarr.length - 1];
//     if (!last_sub_array || last_sub_array.length === size) {
//       newarr.push([array[i]]);
//     } else {
//       last_sub_array.push(array[i]);
//     }
//   }
//   return newarr;
// }
//  the logic is as follows
//  first create a new array, this array will hold other sub arrays,
// get the last array from this new array and set it to a variable
//  if there is no last array or if the length of last sub array is equal to the size, then
//  that means we need to push a new sub array inside the new array
//  if there is last array and if the size is not same as the lenght of this last array 
//  then we need to add this element that we are iterating over to this last array

// console.log(chunk([3,4,5,6,7,8,9,1,2,9], 3));




// //  this is anagram Solution using in built JS functions
// function clean(string){
//   return string.toLowerCase().split('').sort().join('');
// }
// function anagram(str1, str2){
//   return clean(str1) === clean(str2);
// }
// console.log (anagram("Anshu", "Angel"));
 


//  this is short version
// function anagram(str1, str2){
//   return (str1.toLowerCase().split('').sort().join('')) === (str2.toLowerCase().split('').sort().join(''));
// }
// console.log(anagram("Anshu", "Angel"));

  
//  this is a anagram longest version

// function anagram(str1, str2){
//   const first = buildmap(str1);
//   const second = buildmap(str2);
//   if (Object.keys(first).length !== Object.keys(second).length){
//     console.log("This cannot be anagram");
//     return false;
//   } 
//   for (let char in first){
//     if( first[char] !== second[char]) {
//       console.log("We have problem, characters do not match");
//       return false;
//     }
//   }
//   console.log("Hoorya!!! this is anagram");
//   return true;
// }

// function buildmap(string){
//   const mymap = {};
//   for (let char of string.replace(/[^\w]/g, '').toLowerCase()){
//     mymap[char] = mymap[char] + 1 || 1;
//     // console.log(mymap);
//   }
//   return mymap;
// }

// console.log(buildmap("Angel is awesome!!!!!!"));


// anagram("anshuman", "angel");
// anagram("hello there", "there hello");
// anagram("map", "cat");
// anagram("wow", "wwo");



// Capitalize

// function cap(str){
//   const mylist = [];
//   for (let char of str.split(' ')){
//     mylist.push(char[0].toUpperCase() + char.slice(1));
//   }
//   return mylist.join(' ');
// }

// console.log(cap("this is my capitalization test"));
// console.log(cap("i am beginning to get little more confident in algorithms"));


// function cap(str){
  //  first add the very first character at index 0 to the new array and cap it
//   let result = str[0].toUpperCase();
//   console.log(result);
//  now iterate over the rest of the string, starting from index 1, since 0 index was already added,
//   for (let i = 1; i< str.length; i++){
  //compare the previous position with empty space  
//     if (str[i-1] === ' '){
  // if empty, add that element to the new array and cap it
//       result += str[i].toUpperCase();
// otherwise
//     } else {
  // if the previous space is not empty, then just add the element to the new array
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(cap("hello this is another way"));


//  this is how to do the steps algorithms

// function steps(num){
//   for (let row = 0; row < num; row++ ){
//     let stair = "";
//     for (let col = 0; col<num; col++){
//       if (col <= row){
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }
// steps(4);

// function steps(num, row = 0, stair = ''){
//   if (num === row){
//     return;
//   }
//   if ( num === stair.length){
//     console.log(stair);
//     return steps(num, row + 1);
//   }
//   if(stair.length <= row){
//     stair += '#';
//   } else {
//     stair += ' ';
//   }
//   steps (num, row, stair);
// }

// steps(5);

//  this is for the steps solutions
// function vowel(str){
//   let count = 0;
//   for (let char of str.toLowerCase()){
//     if (char === 'a' || char ==='e' || char === 'i' || char === 'o' || char === 'u'){
//       count++;
//     } 
//   }
//   console.log(count);
// }

// vowel('aeiou');
// vowel('hi there');


// fibonacci series

// function fib(n){
//   if (n < 2 ) {
//     return n;
//   } else {
//     return fib(n-1) + fib(n-2);
//   }
// }
// console.log(fib(30));


//   const result = [0,1];
//   for (let i = 2; i <= n; i++){
//     const a = result[i-1];
//     const b = result[i-2];
//     result.push(a+b);
//   }
//   return result[n];
// }
// }
// console.log(fib(4));


// Implementing a Queue

// class Queue {
//   constructor() {
//     this.myprop1 = [];
//   }

//   add(someinfo) {
//     this.myprop1.unshift(someinfo);
//   }
//   remove() {
//     return this.myprop1.pop();
//   }

//   peek() {
//     return this.myprop1[this.myprop1.length -1]
//   }
// }

// function weave(sourceOne, sourceTwo){
//   const q = new Queue();

//   while (sourceOne.peek() || sourceTwo.peek()){
//     if (sourceOne.peek()){
//       q.add(sourceOne.remove());
//     }

//     if (sourceTwo.peek()){
//       q.add(sourceTwo.remove());
//     }
//   }
//   return q;
// }


// console.log(weave('h,i,i,', '1,2,3'));




//  this is how you initiate a stack 

// class stack{
//   constructor() {
//     this.data = [];
//   }

//   push(record){
//     this.data.push(record);
//   }

//   pop(){
//    return this.data.pop();
//   }

//   peek() {
//     return this.data[this.data.length - 1];
//   }
// }

// var s = new stack();

// function test(hello){
//   console.log(s);
//   // s.pop();
//   // console.log(s);
//   s.push(hello);
//   s.push(hello);
//   s.push(hello);
//   s.push(hello);
//   console.log(s);
//   s.pop();
//   console.log(s);
// }


// test(1);