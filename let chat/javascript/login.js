const form = document.querySelector(".login form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-text");
form.onsubmit = (e) =>{ 
    e.preventDefault(); // preventing from from submitting
}
continueBtn.onclick = () =>{
   // let's start ajax
   let xhr = new XMLHttpRequest(); //creating XML object
   xhr.open("POST", "php/login.php", true);
   xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
             let data = xhr.response;
             console.log(data);
             if(data == "success"){
                 location.href = "users.php";
            }else{
                
                errorText.textContect = data;
                errorText.style.display = "block";
              
                                               
            }
        }
    }
}
// we have to send data through ajax php
let formData = new FormData(form);// creating new formDate object
xhr.send(formData); //sending the form data to php
}