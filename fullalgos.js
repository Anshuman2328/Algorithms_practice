// // Algorithm Challenges
// // The Dojo Collection
// // Chapter_01_Fundamentals

// // This was a basics chpater but on 20180618 I took a second pass at a select few 

// //  Setting and Swapping
// // Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
// let myName = "Jason";
// let myNum = "42";
// [myName, myNum] = [myNum, myName];
// console.log("new name: " + myName + ",\nnewNum: " + myNum);

// //  Print -52 to 1066
// // Print integers from -52 to 1066 using a FOR loop.
// for (let i = -52; i <= 1066; i++) {
//     console.log(i);
// }

// //  Don’t Worry, Be Happy
// // Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
// function beCheerful(num) {
//   for (let i = 0; i < num; i++) {
//     console.log("good morning!");
//   }
// }

// beCheerful(98);

// //  Multiples of Three – but Not All
// // Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
// for (let i = 3; i >= -300; i--) {
//     (i == -3) || (i == -6) ? false : console.log(i);
// }

// //  Printing Integers with While
// // Print integers from 2000 to 5280, using a WHILE.
// let i = 2000;
// while (i <= 5280) {
//     console.log(i);
//     i++;
// }

// //  You Say It’s Your Birthday
// // If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."
// function birthday(day, month) {
// return (day == 2 && month == 28) || (day == 28 && month == 2) ? "How did you know?" : 
// "Just another day...." ;
// }
// birthday(28, 2);
// birthday(2, 28);
// birthday(4, 4);

// //  Leap Year
// // Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
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
// leapYearCheck(100);
// leapYearCheck(400);
// leapYearCheck(1976);

// //  Print and Count
// // Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
// function printInt5(num1, num2) {
//     let mults = 0;
//     for (let i = num1; i <= num2; i++) {
//         if (i % 5 == 0) {
//             console.log(i);
//             mults++;
//         }
//     }
//     console.log(`there were ${mults} multiples`);
// }
// printInt5(512, 4096);

// //  Multiples of Six
// // Print multiples of 6 up to 60,000, using a WHILE.
// let j = 6;
// while (j <= 60000) {
//     console.log(j);
//     j += 6;
// }

// //  Counting, the Dojo Way
// // Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
// for (let k = 1; k <= 100; k++) {
//     if (k % 10 == 0) {
//         console.log("Coding Dojo");
//     } else if (k % 5 == 0) {
//         console.log("Coding");
//     } else {
//         console.log(k);
//     }
// }

// //  What Do You Know?
// // Your function will be given an input parameter incoming. Please console.log this value.
// function outPut(stuff) {
//     console.log(stuff);
// }
// outPut("bing bong bing")

// //  Whoa, That Sucker’s Huge…
// // Add odd integers from -3,000 to 3,000, and console.log the final sum. Is there a shortcut?
// let sum = 0;
// for (let i = -3000; i <= 3000; i++) {
//     if (i % 2 != 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// //  Countdown by Fours
// // Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
// let m = 2016;
// while (m > 0) {
//     if (m % 4 == 0) {
//         console.log(m);
//     }
//     m--;
// }

// //  Flexible Countdown
// // Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
// function flexCount(low, high, mult) {
//     let m = high;
//     while (m > low) {
//         if (m % mult == 0) {
//             console.log(m);
//         }
//         m--;
//     }
// }
// flexCount(2, 9, 3);

// //  The Final Countdown
// // This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
// function finalCount(param1, param2, param3, param4) {
//     let m = param3;
//     while (m > param2) {
//         if (m == param4) {
//             continue;
//         } else if (m % param1 == 0) {
//             console.log(m);
//         }
//         m--;
//     }
// }
// finalCount(3, 5, 17, 9);

// //  Countdown
// // Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
// function countDown(num) {
//     let newArr = [];
//     for (let i = num; i >= 0; i--) {
//         newArr.push(i);
//     }
//     console.log(newArr);
//     console.log(`the length is ${newArr.length}`);
// }
// countDown(26);

// //  Print and Return
// // Your function will receive an array with two numbers. Print the first value, and return the second.
// function pAndR(myArr) {
//     window.print(myArr[0]);
//     return myArr[1];
// }
// pAndR([23, 31]);

// //  First Plus Length
// // Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
// function firstPlusLength(myArr) {
//     return myArr[0] + myArr.length;
// }
// firstPlusLength([1, 2, 3, 4, 5]);
// firstPlusLength(['one', 2, 'three', 4, 'five']);

// //  Values Greater than Second
// // For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.  
// function greaterThan2nd(myArr) {
//     let newArr = myArr.filter((a) => a>myArr[1]);
//     console.log(`the remaining ${newArr.length} values are ${newArr}`);
// }
// greaterThan2nd([1, 3, 5, 7, 9, 13]);

// //  Values Greater than Second, Generalized
// // Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
// function greaterThan2ndG(myArr) {
//     let newArr = myArr.filter((a) => a>myArr[1]);
//     console.log(`the remaining ${newArr.length} values are ${newArr}`);
// }
// greaterThan2ndG([7, 13, 26, 17, 9, 103]);

// //  This Length, That Value
// // Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
// function lengthVal(num1, num2) {
//     let myArr = [];
//     if (num1 == num2) {
//         console.log("Jinx!");
//     } else {
//         let myArr = [];
//         myArr.push((num1.toString().length));
//         myArr.push((num2.toString().split('')));
//         console.log(myArr);
//     };
// }
// lengthVal(2046, 321);
// lengthVal(4, 4);

// //  Fit the First Value
// // Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
// function fitFirst(myArr) {
//     if (myArr[0] > myArr.length) {
//         console.log("Too big!");
//     } else if (myArr[0] < myArr.length) {
//         console.log("Too small!");
//     } else {
//         console.log("Just right!");
//     }
// }
// fitFirst([26, 25, 14, 12, 23, 14]);
// fitFirst([2, 25, 14, 12, 23, 14]);
// fitFirst([3, 4, 5]);

// //  Fahrenheit to Celsius
// // Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
// function farToCel(deg) {
//     let celc = (deg - 32) * (5 / 9);
//     return deg + " degrees F equals " + celc.toFixed(2) + " degrees C";
// }
// farToCel(99);
// farToCel(32);

// //  Celsius to Fahrenheit
// // Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
// function celToFar(deg) {
//     let far = ((9 / 5) * deg) + 32;
//     return deg + " degrees C equals " + far.toFixed(2) + " degrees F";
// }
// celToFar(33);

// // (optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

// // ↑↑↑ bad isntructions as the meeting point is -40 so did -100 to 100 instead to get a result ↑↑↑
// for (let i = -100; i <= 100; i++) {
//     i == (((9 / 5) * i) + 32).toFixed(0) ? console.log("C and F meet at " + i + " degrees") : false ;
// }

// //  Biggie Size
// // Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
// function biggieSize(myArr) {
//     for (let i = 0; i < myArr.length; i++) {
//         myArr[i] > 0 ? myArr[i] = "big" : false ;
//     }
//     return myArr;
// }
// biggieSize([-1, 3, 5, -5]);

// //  Print Low, Return High
// // Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
// function priLowRetHigh(myArr) {
//     let low = myArr.reduce((a,b) => a < b ? a : b);
//     let high = myArr.reduce((a,b) => a > b ? a : b);
//     console.log(`print ${low} and return ${high}`)
// }
// priLowRetHigh([26, 14, 6, 8, 3, 206]);

// //  Print One, Return Another
// // Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.
// function printOneReturnAnother(myArr) {
//     let newVal = 0;
//     for (let i = 0; myArr.length; i++) {
//         if (myArr[i] % 2 != 0) {
//             newVal = i;
//             break;
//         }
//     }
//     console.log(myArr[myArr.length - 2]);
//     return newVal;
// }
// printOneReturnAnother([2, 6, 8, 3, 2, 6, 1, 7]);

// //  Double Vision
// // Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.
// function doubleVision(myArr) {
//     let newArr = myArr.map((a) => a*2);
//     return newArr;
// }
// doubleVision([1, 2, 3]);

// //  Count Positives
// // Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
// function countPositives(myArr) {
//     let posCount = 0;
//     for (let i = 0; i < myArr.length; i++) {
//         if (myArr[i] > 0) {
//             posCount++;
//         }
//     }
//     myArr[myArr.length - 1] = posCount;
//     return myArr;
// }
// countPositives([-1, 1, 1, 1]);

// //  Evens and Odds
// // Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"
// function evensOdds(myArr) {
//     let eCount = 0;
//     let oCount = 0;
//     for (let i = 0; i < myArr.length; i++) {
//         if (myArr[i] % 2 == 0) {
//             eCount++;
//             oCount = 0;
//             if (eCount >= 3) {
//                 console.log("Even more so!");
//             }
//         } else {
//             oCount++;
//             eCount = 0
//             if (oCount >= 3) {
//                 console.log("That’s odd!");
//             }
//         }
//     }
// }
// evensOdds([1, 2, 3, 57, 93, 2, 1, 2, 24, 36, 48, 25, 23, 21, 19, ]);

// //  Increment the Seconds
// // Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.
// function incrementSeconds(myArr) {
//     for (let i = 0; i < myArr.length; i++) {
//         myArr[i]%2 != 0 ? myArr[i] = myArr[i] + 1 : false ;
//     }
//     return myArr;
// }
// incrementSeconds([1, 4, 5, 8, 9, 12, 13]);

// //  Previous Lengths
// // You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.
// function previousLengths(myArr) {
//     for (let i = myArr.length - 1; i > 0; i--) { // has to go backwards or error outs when the 1st value is undefined
//         myArr[i] = (myArr[i - 1]).length;
//     }
//     return myArr;
// }
// previousLengths(["string01", "string000001", "string000000000001", "string", ])

// //  Add Seven to Most
// // Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
// function addSevenToMost(myArr) {
//     for (let i = 1; i < myArr.length; i++) {
//         myArr[i] = myArr[i] + 7;
//     }
//     return myArr;
// }
// addSevenToMost([2, 3, 6, 8, 14, 27, 1]);

// //  Reverse Array
// // Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
// function reverseArray(myArr) {
//     for (let i = 0; i < myArr.length / 2; i++) {
//         let temp = myArr[i];
//         myArr[i] = myArr[myArr.length - 1 - i];
//         myArr[myArr.length - 1 - i] = temp;
//     }
//     console.log(myArr);
// }
// reverseArray([3, 1, 6, 4, 2]);

// // or myArr.reverse();

// //  Outlook: Negative
// // Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
// function outlookNegative(myArr) {
//     for (let i = 0; i < myArr.length; i++) {
//         if (myArr[i] > 0) {
//             myArr[i] = myArr[i] - myArr[i] * 2;
//         }
//     }
//     return myArr;
// }
// outlookNegative([1, -3, 5, -6, 12]);

// //  Always Hungry
// // Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.
// function alwaysHungry(myArr) {
//     let foodCount = 0;
//     for (let i = 0; i < myArr.length; i++) {
//         if (myArr[i] == "food") {
//             console.log("yummy");
//             foodCount++;
//         }
//     }
//     if (foodCount == 0) {
//         console.log("I'm hungry");
//     }
// }
// alwaysHungry(["food", "not", "food", "not"]);
// alwaysHungry(["fodfsafod", "not", "fodsfdsod", "not"]);

// //  Swap Toward the Center
// // Given array, swap first and last, third and third-to-last, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
// function swapCenter(myArr) {
//     for (let i = 0; i < myArr.length / 2; i += 2) { // SAME AS REVERSE BUT ADD 2 TO I
//         let temp = myArr[i];
//         myArr[i] = myArr[myArr.length - i - 1];
//         myArr[myArr.length - i - 1] = temp;
//     }
//     return myArr
// }
// swapCenter([true, 42, "Ada", 2, "pizza"]);
// swapCenter([1, 2, 3, 4, 5, 6]);

// //  Scale the Array
// // Given array arr and number num, multiply each arr value by num, and return the changed arr.
// function scaleArr(myArr, mult) {
//     for (let i = 0; i < myArr.length; i++) {
//         myArr[i] = myArr[i] * 3;
//     }
//     return myArr;
// }
// scaleArr([1, 2, 3, 4, 5, 6], 3);

// //  Only Keep the Last Few
// // Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.
// function keepTheLast(myArr, num) {
//     myArr = myArr.slice(num - 1);
//     return myArr;
// }
// keepTheLast([2, 4, 6, 8, 10], 3);

// //  Math Help
// // Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).
// function mathHelp(m, b) {
//     return (-b / m)
// }
// mathHelp(6, 12); // Had to look up, still not sure???

// //  Poor Kenny
// // Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.
// function whatHappensToday() {
//     let probability = Math.floor(Math.random() * 20) + 1;
//     console.log(probability);
//     switch (probability) {
//         case 1:
//         case 2:
//             return "volcano";
//             break;
//         case 3:
//         case 4:
//         case 5:
//             return "tsunami";
//             break;
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//             return "earthquake";
//             break;
//         case 10:
//         case 11:
//         case 12:
//         case 13:
//         case 14:
//             return "blizzard";
//             break;
//         default:
//             return "meteor";
//     }
// }
// whatHappensToday(); // Can be done with less lines using ranges

// //  What Really Happened?
// // Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!
// function whatReallyHappened() {
//     let volcano = false;
//     let tsunami = false;
//     let earthqauke = false;
//     let blizzard = false;
//     let meteor = false;
//     let probability = function() {
//         myNum = Math.floor(Math.random() * 20) + 1;
//         return myNum;
//     }
//     if (probability() <= 2) {
//         volcano = true;
//     }
//     if (probability() <= 3) {
//         tsunami = true;
//     }
//     if (probability() <= 4) {
//         earthqauke = true;
//     }
//     if (probability() <= 5) {
//         blizzard = true;
//     }
//     if (probability() <= 6) {
//         meteor = true;
//     }

//     console.log(`volcano was ${volcano}, tsunami was ${tsunami}, earthqauke was ${earthqauke}, blizzard was ${blizzard} and meteor was ${meteor}`);
// }
// whatReallyHappened(); // Was looking for something more simple but this keeps the distatsters truly independent with individual random numbers

// //  Soaring IQ
// // Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan, entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?
// function soaringIQ() {
//     let iq = 101;
//     for (let i = 1; i <= 98; i++) {
//         iq = iq + (i * .01);
//     }
//     return iq.toFixed(2);
// }
// soaringIQ();

// //  Letter Grade
// // Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".
// function letterGrade(grade) {
//     switch (true) {
//         case grade >= 90:
//             return "A";
//             break;
//         case grade >= 80:
//             return "B";
//             break;
//         case grade >= 70:
//             return "C";
//             break;
//         case grade >= 60:
//             return "D";
//             break;
//         default:
//             return "FAIL;"
//     }
// }
// letterGrade(77);

// //  More Accurate Grades
// // For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .
// function accurateGrades(score) {
//   let grade = '';
//   if(score > 100 || score < 0){
//     return 'INVALID SCORE';
//   } else if(score >= 90){
//    grade = 'A';
//   } else if(score >= 80){
//     grade = 'B';
//   } else if(score >= 70){
//     grade = 'C';
//   } else if(score >= 60){
//     grade = 'D';
//   } else {
//     grade = 'F';
//   }
//   let tempSign = score.toString();
//   sign =''
//   if(tempSign[1] >= 8){
//     sign = '+';
//   } else if(tempSign[1] <= 2){
//     sign = '-';
//   }
//   return grade + sign;
// }

// accurateGrades(98);
// accurateGrades(71);

// //  Short Answer Questions: Fundamentals
// // What is source code?
// // What makes computers so “smart”, anyway?
// // What is the purpose of a programming language?
// // What are 3 examples of programming languages? Why are there so many of these?
// // What is a variable? Why are variables useful?
// // What is the difference between a single-equals (=) and a double-equals (==)?
// // What is the difference between a double-equals (==) and a triple-equals (===)?
// // Why does the developer console exist?
// // When we talk about “conditional” statements, what does that mean? What is an example?
// // Why would we want FOR or WHILE loops in our source code?
// // When would you use a WHILE loop, instead of a FOR loop?
// // What is a function? Why would we use functions?
// // How many values can you receive back from a function? How many values can you send in?
// // What is an array? How many values does it hold?
// // What is a T-diagram and why should I know how to use one?
// // What are the two ways to comment JS code? When would you use one versus the other?

// //  Weekend Challenge: Fundamentals
// // This weekend, for a challenge, create a fill-in-the-blank quiz game. Ask the user’s name, then refer to the user by name as you ask him/her a series of questions that you have stored in an array. Use the prompt() function to get each input from the user and compare it to the answer you expected. When the user enters “Q” (for quit), or perhaps when the user hits [Cancel], exit the game and print the statistics of the game to the console: user name, number of questions answered and questions correct.
// function quizGame() {
//     let name = prompt("what is your name?");
//     let questions = [
//         `What color do you like to wear ${name}?`,
//         `Hey ${name} what do you like to eat?`,
//         `Where does ${name} like to travel?`
//     ];
//     let answers = [];
//     let myAnswers = ["purple", "pizza", "Australia"];
//     for (let i = 0; i < questions.length; i++) {
//         answers[i] = prompt(questions[i]);
//         if (answers[i].toLowerCase() === "q") {
//             break;
//         }
//     }
//     for (let i = 0; i < answers.length; i++) {
//         alert(`${name}, you like ${answers[i]}, i like ${myAnswers[i]}`);
//     }
// }

// quizGame();