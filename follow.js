let follow = document.querySelector('#follow-button')
follow.addEventListener('click',()=>{
    if (follow.querySelector('#follow-text').innerHTML == "Follow"){
        follow.querySelector('#follow-text').innerHTML = "Followed"
        follow.querySelector('#followed').setAttribute('style','display:block;')
        follow.setAttribute('style','background-color:#F8F8F8;')
        follow.querySelector('#follow-text').setAttribute('style','color:#D9D9D9;')

        setTimeout(() => {
            if (follow.querySelector('#follow-text').innerHTML == "Followed"){
                follow.querySelector('#follow-text').innerHTML = "Unfollow"
                follow.querySelector('#followed').setAttribute('style','display:none;')
            }
        }, 3000);
        
    }else{
        follow.querySelector('#follow-text').innerHTML = "Follow"
        follow.setAttribute('style','background-color:#9A0000;')
        follow.querySelector('#followed').setAttribute('style','display:none;')
    }    
    
})