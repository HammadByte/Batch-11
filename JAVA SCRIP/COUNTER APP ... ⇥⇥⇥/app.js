function inc(){
    var app = document.querySelector("#app")
    var num = parseInt(app.innerHTML)
    num += 1
    app.innerHTML = num
}
function dec(){
    var app = document.querySelector("#app")
    var num = parseInt(app.innerHTML)
    num -=1
    app.innerHTML = num
}
