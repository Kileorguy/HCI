let username = document.getElementById('user')
let email = document.getElementById('email')

username.textContent = localStorage.getItem('username')
email.textContent = localStorage.getItem('email')

let pass = document.getElementById('pass')
let passCheck = document.getElementById('passCheck')
function checkPassword(){
    if(pass.value == passCheck.value && pass.value!= ""){
        console.log("Change")
        localStorage.setItem('pass',pass.value)
        location.reload(true)
    }
}