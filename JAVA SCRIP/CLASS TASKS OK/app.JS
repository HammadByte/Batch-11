

// // var milisec = 0
// // var seconds = 0
// // var minutes = 0
// // var getHtmlmsec = document.getElementById('msec')
// // var getHtmlsec = document.getElementById('sec')
// // var getHtmlmin = document.getElementById('min')

// // setInterval(function(){
// //     milisec++
// //     getHtmlmsec.innerHTML = milisec
// //     if(milisec >= 100){
// //         seconds++
// //         getHtmlsec.innerHTML = seconds
// //         milisec = 0
// //     }



// // },10)


// // // TRY



// // var milisec = 0
// // var seconds = 0
// // var minutes = 0
// // var getHtmlmsec = document.getElementById('milisec')
// // var getHtmlsec = document.getElementById('secs')
// // var getHtmlmin = document.getElementById('mints')

// // setInterval(function(){
// //     milisec++
// //     getHtmlmsec.innerHTML = milisec
// //     if(milisec >= 100){
// //         seconds++
// //         getHtmlsec.innerHTML = seconds
// //         milisec = 0
// //     }



// // },10)












// // let main(){
// //     let sum =0;let i;
// //     for (i=1;i<=50;i++)

// // }if (i%2 ==0){
// //     sum +=i;
// // }





// function countdownToEidUlAdha() {
//     // Set the date of Eid-ul-Adha (assuming it's on the 10th of Dhul-Hijjah)
//     const eidUlAdhaDate = new Date("2024-06-28T00:00:00.000Z"); // adjust the date according to the Islamic calendar
  
//     // Get the current date and time
//     var now = new Date();
  
//     // Calculate the difference between the two dates
// var  diff = eidUlAdhaDate.getTime() - now.getTime();
  
//     // Calculate the number of days, hours, minutes, and seconds left
//     var daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
//     var hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     var secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
  
//     // Return the results
//     return {
//       days: daysLeft,
//       minutes: minutesLeft,
//       seconds: secondsLeft
//     };
//   }

//   // Call the function and log the results
//   var countdown = countdownToEidUlAdha();
//   document.write(`There are "<br>"${countdown.days} days"<br>", ${countdown.minutes} minutes"<br>", and ${countdown.seconds} seconds "<br>"left until Eid-ul-Adha.`);


// function application(){
//     var getUL = document.querySelector("#ul")
//   // purpose : muja HTML ka UL chayea to is lyea ma document.queryselector ka under # laga kr ul lakho ga . OK

//   var getInp = document.querySelector('#inp')
//   var createLi = document.createElement("li")
//   var Litext = document.createTextNode(getInp.value)
//   createLi.appendChild(Litext)
//   getUL.appendChild(createLi)
//   getInp.value = ''
//   var delbtn = document.createElement("button")
//   var delText = document.createTextNode("DELETE")
//   delbtn.appendChild(delText)
//   createLi.appendChild(delbtn)
//   delbtn.setAttribute("onclick","dellist(this")

  

// }
// document.write()
// function deList(e){
// e.parentNode.remote()
// }

// function delall(){
// getUL.innerHTML
// }




// let inp = document.querySelector('#inp');
// let del = document.querySelector('#del');
// let list = document.querySelector('#list')
// let btn = document.createElement("button")
// let btn2 = document.createElement("button")

// function create(){
//     let li = document.createElement('li');
//     li.innerHTML = inp.value;
//     list.appendChild(li);
//     inp.value = '';
//    btn.innerHTML = "Delete"
//    li.appendChild(btn)
//    btn.onclick = function(){
//        li.remove()
//    }

//    btn2.innerHTML = "Edit"
//    li.appendChild(btn2)
//    btn2.onclick = function(){
//     let text = prompt("enter what you write")
//        li.innerHTML  = text;
//    }
// }
// function deleteall(){
//     list.innerHTML = '';
// }
























