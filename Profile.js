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

let back = document.getElementById('back')
back.addEventListener('click',()=>{
    if (localStorage.getItem('role') == 1){
        window.location.assign('EoHome.html')
    }else{
        window.location.assign('Home.html')
    }
})