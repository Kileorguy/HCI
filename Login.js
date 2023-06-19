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
   
    let emailVal = email.value
    let passVal = pass.value

    if(emailVal==='dion@email.com' && passVal === 'dion'){
        window.location.assign('Home.html')
    }else{
        setError("Invalid Credential!")

    }
}