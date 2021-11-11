//open and close The sidebar by clicking toggle button

let toggleBtn = document.querySelector('.main .toggle');
let navigator = document.querySelector('.navigator');
let mainSection = document.querySelector('.main');

 
 
   toggleBtn.addEventListener('click',()=>{
         if(this.innerWidth > 991){ 
         console.log(this.innerWidth);  
    navigator.classList.toggle('open');
    mainSection.classList.toggle('open')
    
} else{
    mainSection.classList.remove('open');
    navigator.classList.remove('open');
    navigator.classList.toggle('phone_open');
}
   })


navigator.addEventListener("click",()=>{
     if(this.innerWidth <991){    
         navigator.classList.remove('open')
         mainSection.classList.remove('open');
        navigator.classList.toggle('phone_open');

    }
}) 

//hide and display profile dropdown list
let profile_btn = document.querySelector("header .profile");

profile_btn.addEventListener("click",()=>{
    console.log(profile_btn);
    console.log(profile_btn.lastElementChild)

    profile_btn.lastElementChild.classList.toggle('open_menu');
});