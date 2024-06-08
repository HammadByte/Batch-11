var getDIV = document.querySelector('#Weatherapp')
var getINP = document.querySelector('#inp')

 
function btnclick(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`)
    .then(function(data){return data.json()})
    .then(function(data){console.log(data.main.temp)})
    getDIV.innerHTML += ``
    .catch(function(err){console.log(err)})



}
