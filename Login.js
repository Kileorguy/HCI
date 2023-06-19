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
    let checkVal
    if(checkUser.checked){
        checkVal=0
    }else{
        checkVal=1
    }
    let emailCheck = localStorage.getItem('email')
    let passCheck = localStorage.getItem('pass')
    let roleCheck = localStorage.getItem('role')
    if(emailVal===emailCheck && passCheck === passVal&&roleCheck==checkVal){
        window.location.assign('Home.html')
    }else{
        setError("Invalid Credential!")
    }

    if(emailVal==='dion@email.com' && passVal === 'dion'){
        window.location.assign('Home.html')
    }else{
        setError("Invalid Credential!")

    }
}