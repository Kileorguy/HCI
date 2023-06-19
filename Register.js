const username =  document.getElementById('username')
const email =  document.getElementById('email')
const pass =  document.getElementById('pass')
const checkUser =  document.getElementById('checkUser')
const EventOrg =  document.getElementById('EventOrg')
const form = document.getElementById('formOuter')
const error = document.getElementById('error')

form.addEventListener('submit', e=>{
    e.preventDefault()
    register()
})

function setError(err){
    error.textContent = err
}

function register(){
    let usernameVal = username.value
    let emailVal = email.value
    let passVal = pass.value

    if(!checkUser.checked && !EventOrg.checked){
        setError("Radio button must be filled!")
        return
    }

    if(usernameVal === ''){
        setError("Name must be filled!")
        return
    }
    if(emailVal===''){
        setError("Email must be filled!")
        return
    }
    if(!emailVal.includes('@')){
        setError("Email must contains @!")
        return
    }
    if(passVal===''){
        setError("Password must be filled!")
        return
    }
    window.location.assign('Login.html')
}