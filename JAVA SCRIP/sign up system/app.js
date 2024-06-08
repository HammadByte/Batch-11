
function signup(){
    var getemail = document.getElementById('iemail')
    var  getpassword = document.getElementById('ipassword')
    localStorage.setItem('email', getemail.value)
    localStorage.setItem('password', getpassword.value)
    location.href = 'signup.html'
}

function signin(){
    var getemail = document.getElementById('semail')
    var getpassword = document.getElementById('spassword')

    if(localStorage.getItem('email') == getemail.value && localStorage.getItem('password') == getpassword.value ){
alert('your id successful... ')
location.href = 'welcome.html'    
}
    else{
        alert('Unsuccessful')
    }
    
}



