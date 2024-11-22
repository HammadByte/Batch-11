

// var milisec = 0
// var seconds = 0
// var minutes = 0
// var getHtmlmsec = document.getElementById('msec')
// var getHtmlsec = document.getElementById('sec')
// var getHtmlmin = document.getElementById('min')

// setInterval(function(){
//     milisec++
//     getHtmlmsec.innerHTML = milisec
//     if(milisec >= 100){
//         seconds++
//         getHtmlsec.innerHTML = seconds
//         milisec = 0
//     }



// },10)


// TRY



// var milisec = 0
// var seconds = 0
// var minutes = 0
// var getHtmlmsec = document.getElementById('milisec')
// var getHtmlsec = document.getElementById('secs')
// var getHtmlmin = document.getElementById('mints')

// setInterval(function(){
//     milisec++
//     getHtmlmsec.innerHTML = milisec
//     if(milisec >= 100){
//         seconds++
//         getHtmlsec.innerHTML = seconds
//         milisec = 0
//     }



// },10)












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


// var arr =[ {
// p_model : 2024,
// p_Name : 'bugatti',
// Makevarientmodel : "400 kmbs in 30 second."
// },
// {
//     p_model : '2021',
//     p_Name : 'unique',
//     p_specification : '100 kmbs in 20 second.'
//     },
//     {
//         p_model : '2023',
//         p_Name : 'Audi',
//         p_specification : '100kmbs in 2.5 second'
//         }
    
    
// ]
// var index = 0

// for (var i = 0; i <arr.length; i++ ){
//     console.log(arr[i].p_Name);
// }
var paras = document.getElementById("para")
paras.innerText =  question
var inp1 = document.getElementById("inp1")
inp1.innerText = option1
var inp2 = document.getElementById("inp2")
inp2.innerText = option2
var inp3 = document.getElementById("inp3")
inp3.innerText = option3
    
var questions = [
    {
        question : 'What is HTML stand for ?',
        option1 : 'Haper tect markup language.',
        option2 : 'Hiper text markup language.',
        option3 : 'in ma se koi be nhi.',
    
},
{
    question : 'What is CSS stand for ?',
    option1 : 'Cak Cading Stylo Sheet.',
    option2 : 'Cas Cading Style Sheet.',
    option3 : 'Cake cating style sheet.',

},
{
    question : 'What is JS stand for ?',
    option1 : 'Not any one ',
    option2 : 'Jaca Script.',
    option3 : 'Java Script.',

},
{
    question : 'What is Stylo stand for ?',
    option1 : 'Muhammad Hammad.',
    option2 : 'Muhammad Akram.',
    option3 : 'Muhammad ASLAM.',

},
{
    question : 'What is CM stand for ?',
    option1 : 'Computer Maical.',
    option2 : 'Computer Master.',
    option3 : 'Computer Machenics.'

}

]

function btnclk(){
    if(arrayofobject > question.length ){
        alert("Questuion Finish.")
    }
    else{
        var paras = document.getElementById("para")
        paras.innerText =  question
        var inp1 = document.getElementById("inp1")
        inp1.innerText = option1
        var inp2 = document.getElementById("inp2")
        inp2.innerText = option2
        var inp3 = document.getElementById("inp3")
        inp3.innerText = option3
            
    }
}

    



















