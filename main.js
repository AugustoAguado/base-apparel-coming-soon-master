
let btnSubmit = document.querySelector(".main__button");
let successCard = document.querySelector(".main__success");
let container = document.querySelector(".main__container");
let successButton = document.querySelector(".main__success__button");
let form = document.querySelector(".main__form");
let input = document.querySelector(".main__input");


 form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let mail = input.value;
    let expReg= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(mail.match(expReg)){
        successCard.style.display = 'flex';
        container.style.opacity ="50%"; 
        let joined = document.querySelector(".main__success__mail");
        joined.innerHTML = mail;
        successButton.addEventListener("click",()=>{
            successCard.style.display = 'none';
            container.style.opacity ="100%"; 
        })
    form.reset();   
    }
    else{
        input.style.border = "0.1rem solid #f60909";
    }
})
