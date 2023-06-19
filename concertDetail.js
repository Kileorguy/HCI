let edit = document.getElementById('edit-button')
let cancel = document.getElementById('cancel-concert')

edit.addEventListener('click',(e)=>{
    e.preventDefault()

    window.location.href = "EditConcert.html"
});

cancel.addEventListener('click',(e)=>{
    e.preventDefault()

    window.location.href = "EoHome.html"
})
