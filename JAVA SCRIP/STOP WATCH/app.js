var mints_html = document.getElementById("mints")
var second_html = document.getElementById("second")
var mn_html = document.getElementById("mn")



var mints = 0
var second = 0
var milisecond = 0

var start_btn = 0
var stop_btn = 0
var reset_btn = 0


var watchinterval;


function start(){
	watchinterval =setInterval(function(){
		milisecond++
		mn_html.innerText = milisecond
	},10)


if(milisecond >= 999){
	second++
	milisecond = 0


}
if(second >= 59){
	mints++
	second = 0
}


}
function stop(){
clearInterval (watchinterval)
var milisecond = 0
var second = 0
var mn = 0
}


function reset(){
	clearInterval (watchinterval)
	var milisecond = 0
	var second = 0
	var mn = 0
}