var getDiv = document.querySelector("#showprofile")
var getInp = document.querySelector("#inp")
function btn(){


    fetch(`https://api.github.com/users/hammadnizam`)
    .then((data)=>{
        data.json()
    })
    .then((data)=>{
        console.log(data)
        getDiv.innerHTML += `<div class="card" style="width: 18rem;">
        <img src= class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
        </div>
        <div class="card-body">
          <a href="#" class="card-link">Go to profile</a>
        </div>
      </div>`
    })
    .catch((err)=>{
        console.log(err);
    })
    
}



