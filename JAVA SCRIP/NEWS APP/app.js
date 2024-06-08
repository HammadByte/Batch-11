var inp = document.querySelector('#inp')
var weatherDiv = document.querySelector('#newsapp')
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`)
.then(function(data){data.json()})
.then(function(data){
    console.log(data.main.temp)
    weatherDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`
})
.catch(function(data){
    console.log(data)
})