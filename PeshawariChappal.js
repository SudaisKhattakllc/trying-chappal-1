const arrow=document.querySelector(".scroll-top")
  
  
  
  
  
  window.onscroll=function(){
    if(window.pageYOffset>100){
        arrow.style.display="block"; 
    }
    else{
        arrow.style.display="none";
    }
  }




  arrow.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })

  })








  






// Sign in 


const user=document.querySelector(".fa-user")
const signinform=document.querySelector(".sign-in-form")

user.addEventListener("click",function(){
    signinform.style.display="block"
})


const cross=document.querySelector(".close-btn")
 cross.addEventListener("click",function(){
  signinform.style.display="none"
 })

