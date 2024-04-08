// ASSIGNMENT 05

                        // STRING METHOD    20,25
// x---------------x-----------x-------------------x-------------x------------x
// x---------------x-----------x-------------------x-------------x------------x
// QUESTION 01

// var firstname= prompt("Enter first name")
// var lastname= prompt("Enter last name")
// var marge = (firstname+" " + lastname)
// document.write(marge)
// x---------------x-----------x-------------------x-------------x------------x
// QUESTION 02

// var userinp =prompt("Enter your favorite mobile phone model.")
// document.write(userinp.length)
// x---------------x-----------x-------------------x-------------x------------x






                                // 20,25

// QUESTION 03
// let str = "welcome to the Internet";
// document.write(str.indexOf('to')); //indexof use for checking the index of the string
 // QUESTION 04
// let hello = "Hello, world";

// document.write(hello.lastIndexOf('l'));
// document.write(hello.indexOf('l',4));

 // QUESTION 05

// let s = "Pakistan";
// document.write(s.charAt(3));
 // QUESTION 06

// let fname = prompt('Enter your');
// let lname = prompt('Enter your');
// let fullname = fname.concat(" "  + lname);
// alert(fullname);
 // QUESTION 07

// let city = "Hyderabad";
// document.write(city.replace("Hyder", "Islam"));
 // QUESTION 08

// var message = 'Ali and Sami are best friends. They play cricket and football together'; 
// document.write(message.split("and").join("&")); //this for method for all paragraph
 // QUESTION 09

// let number_s = "9527";
// let change = Number(number_s)
// document.write(typeof change)
// QUESTION 10

// let url = prompt("enter the URL")
// let c = url.slice(4)
// document.write("URL " + url + "<br>")
// document.write("Domain Name" + c)
// QUESTION 11

// let input = prompt("Enter the anything you");
// document.write(input.toUpperCase());
// QUESTION 12

// let input = prompt("Enter the anything you");
// document.write(input.toLowerCase());
 // QUESTION 13

// let input = prompt("Enter the anything you");
// let c = input.toUpperCase().slice(0,1);
// let b = input.toLowerCase().slice(1);
// document.write(c + b);
 // QUESTION 14

// let num = 54.43;
// let n = num.toString();
// document.write(n);
// QUESTION 15
// let a = '3'
// let b = '3'
// document.write(a + b);
 // QUESTION 16
// let a = 3
// let b = 3
// document.write(a - b)
 // QUESTION 17
// let user = prompt('Enter what you want to');
// let  bakery = ["cake", "apple pie", "cookie", 'chips', "patties"];
// for (let i = 0; i <=bakery.length; i++){
//     if(user == bakery[i]){
//     alert("yes");
// }
// else{
//       alert("no");
// }
// }
 // QUESTION 18
// let p1 = prompt('Enter the anything you want to');
// let p2 = prompt('Enter the anything you want to');
// if(p1.length > p2.length){
//     document.write(p1 + " is the greater than " + p2);
// }
// else if(p1.length < p2.length){
//   document.write(p2 + " is the greater than " + p1);
// }
 // QUESTION 19


                              // 25,34

// 1
// let num = prompt('Please enter the number you want to');
// document.write("num = " + num  +"<br>");
// document.write(Math.round(num + )+"<br>");
// document.write(Math.floor(num)+"<br>");
// document.write(Math.ceil(num)+"<br>");

// 2
// let num = prompt('Please enter the negative number you want to');
// document.write("num = " + num  +"<br>");
// document.write(Math.round(num)+"<br>");
// document.write(Math.floor(num)+"<br>");
// document.write(Math.ceil(num)+"<br>");

// 3
// let num = prompt('Please enter the number with point you want to');
// document.write("num = " + num  +"<br>");
// document.write(Math.round(num )+"<br>");
// document.write(Math.floor(num)+"<br>");
// document.write(Math.ceil(num)+"<br>");
// 4
// let num = prompt('Please enter the negative number with point you want to');
// document.write("num = " + num  +"<br>");
// document.write(Math.round(num )+"<br>");
// document.write(Math.floor(num)+"<br>");
// document.write(Math.ceil(num)+"<br>");
// 5
// 6
// let num = Math.random()*7
// let c = Math.floor(num)
// document.write("random dice value " +c +"<br>");
// 7
// let toss = Math.random()*2
// let c = Math.floor(toss)
// if(c == 0){
// document.write("tails")
// }
// else if(c == 1){
// document.write("heads")
// }
// 8
// let d = Math.random()*100
// let c = Math.floor(d)
// document.write(c)
// 9
// let weight = prompt("enter your weight")
// let sweight = Math.floor(weight)
// document.write(sweight +"kilograms")
// 10
// let input = prompt("enter the number 1 to 10");

// let num = 7;
// if (input == num){
//     alert("match") 
// }
// else if(input == 6 || input == 8){
//     alert("close")
// }
// else(
//     alert("no match")
// )
// 11
// let date = new Date().getTime()
// let date2 = new Date('10 , apr,2013').getTime()
// let minus1 = date - date2
// let time = minus1 /(1000 * 60 * 60 * 24 * 365)
// document.write(Math.floor(time))

// // var date = new Date().getTime()
// // var dob = new Date('14 aug, 1947').getTime()
// // var minus = date - dob
// // var formula = minus / (1000 * 60 * 60 * 24 * 365)


// // document.write(Math.floor(formula))
// 12
// let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// let dec = new Date().getMonth() + 9
// let output = month[dec]
// alert(output)
// 13
// let day = ["Sun", "Mon", "Tue", "Wed", "Thu",  "Fri", "Sat"];
// let days = new Date().getDay()
// let output = day[days]
// alert(output)
// 14

// if(output == 'Sun'  || output == "Sat"){
//     alert("funday")
// }

// 15
// let mon = new Date().getDate() -8 
// if(mon <15 ){
//     alert("first")
// }
// else if(mon >15 ){
//     alert("sec")
// }

// 16



// document.write(min)
// const currentTimeStamp = Date.now(); 
// let time = currentTimeStamp / (1000 * 60 * 60 * 24 * 365)
// let min =Math.floor (currentTimeStamp / 60000);
// console.log(currentTimeStamp, min);
// 17
// let time = new Date().getHours();
// document.write(time)
// if(time <= 11){
//     alert("morning AM")
// }
// else if(time >12){
//     alert("morning PM")
// }
// 18
// let lastdate = new Date(2020, 11, 31);
// document.write(lastdate);
// 19
// let past = new Date(2023,2, 22)
// let present = new Date();

// let diff = present - past;

// let days = Math.floor(diff / (1000 * 60 * 60 * 24));
// alert("days: " + days)

// 20
// let today = new Date();
// let past = new Date(2015,1,1);

// let diff = today - past;
// document.write(diff)

// 21
// let date = new Date();
// let hours = date.getHours()
// date.setHours(hours -1)
// document.write(date)

// let currentDate = new Date();

// // Extract the hours
// let currentHour = currentDate.getHours();

// // Reset the date object an hour ahead
// currentDate.setHours(currentHour - 1);

// // Display the updated date object in the browser
// document.write(currentDate);
// 22
// let date = new Date();
// let year = date.getFullYear();
// date.setFullYear(year - 100)
// document.write(date);
// 23
// let input = prompt('Please enter your age'); 
// let date = new Date();
// let year = new Date(input);

// let diff = date - year;

// let days = Math.floor(diff / (1000 * 60 * 60 * 24  *365 ));

// document.write(days)
// 24

// let name = prompt("enter the name ")
// let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// let month = new Date().getMonth();
// let mon = months[month]
// let unitno = Math.random() * 200
// let unitconsume = Math.floor(unitno)
// let unitcharges = 14;
// let namount = unitcharges * unitconsume 
// let latePayment = 500;
// let gamount = latePayment + namount
// document.write(`
// Name : ${name} <br>
// Month : ${mon}<br>
// Units of use : ${unitconsume}<br>
// Amount of  per Unit : ${unitcharges}<br>
// Net amount Payable : ${namount}<br>
// Late Payment : ${latePayment}<br>
// Gross payment  : ${gamount}
// function factorialRecursive(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorialRecursive(n - 1);
//     }
// }

// // Example usage:
// console.log(factorialRecursive(6)); // Output: 120 (5! = 5*4*3*2*1 = 120)















// // function f(n){
// //   let r = 1;
// //   for(let i = 2 ; i <= n ; i++){
// //     r*=i ;
// // }
// // return r;
// // }
// // document.write(f(7))
  











































