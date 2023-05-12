let Body=document.body,
    containerNav=document.querySelector('nav'),
    label=containerNav.querySelector('.text'),
    socialName=document.querySelectorAll('.socialName'),
    text=document.querySelector('p');
label.addEventListener('click',()=>{
    Body.classList.toggle('dark');
    
    if (label.textContent=="mode nuit"){
        label.textContent="mode jour";
    }
    else{
        label.textContent="mode nuit"

    }
    socialName.forEach(sn =>{
        if ( sn.style.color=="rgb(58, 85, 92)"){
            sn.style.color="#fff";
        }
        else{
            sn.style.color="rgb(58, 85, 92)";
        }
    })
   
})
