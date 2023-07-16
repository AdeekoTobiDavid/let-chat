const form = document.querySelector(".typing-area"),
inputfield = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatbox = document.querySelector(".chat-box");

form.onsubmit = (e) =>{ 
    e.preventDefault(); // preventing from from submitting
}

sendBtn.onclick = ()=>{
   // let's start ajax
   let xhr = new XMLHttpRequest(); //creating XML object
   xhr.open("POST", "php/insert-chat.php", true);
   xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
       // inputfield.value = ""; //once message inserted into database then leave blank the input field           
       //   scrollToBottom();     
        }
    }
}
// we have to send data through ajax php
let formData = new FormData(form);// creating new formDate object
xhr.send(formData); //sending the form data to php

}

/*chatBox.onmouseenter = ()=>{
  chatBox.classList.add("active");
}
chatBox.onmouseleave = ()=>{
  chatBox.classList.remove("active");
}*/

setInterval(()=>{
    // let's start ajax
  let xhr = new XMLHttpRequest(); //creating XML object
  xhr.open("POST", "php/get-chat.php", true);
  xhr.onload = ()=>{
     if(xhr.readyState === XMLHttpRequest.DONE){
       if(xhr.status === 200){
            let data = xhr.response;
            chatbox.innerHTML = data;
            /*  if(!chatBox.classList.contains("active")){ // if active class not contains in chatbox the scroll to bottom
              scrollToBottom(); 
            }  */                                   
       }
   }
  }
  // we have to send data through ajax php
let formData = new FormData(form);// creating new formDate object
xhr.send(formData); //sending the form data to php  
}, 500); // this function will run frequently after 500ms
/*
function scrollToBottom(){
  chatbox.scrollTop = chatBox.scrollHeight;
}*/