const searchBar = document.querySelector(".users .search input"),
searchBtn = document.querySelector(".users .search button");
userslist = document.querySelector(".users  .users-list");

searchBtn.onclick =()=>{
  searchBar.classList.toggle("active");
  searchBar.focus();
  searchBtn.classList.toggle("active");
}

searchBar.onkeyup = () =>{
  let seachTerm = searchBar.value;
  let searchTerm = searchBar.value;
  if(seachTerm !=""){
    searchBar.classList.add("active");
  }else{
    searchBar.classList.remove("active");
    searchBar.value = "";
  }
  // let's start ajax
  let xhr = new XMLHttpRequest(); //creating XML object
  xhr.open("POST", "php/search.php", true);
  xhr.onload = ()=>{
     if(xhr.readyState === XMLHttpRequest.DONE){
       if(xhr.status === 200){
            let data = xhr.response;
            userslist.innerHTML = data;
       }
   }
}
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("searchTerm=" + searchTerm);
}

setInterval(() => {
  // let's start ajax
  let xhr = new XMLHttpRequest(); //creating XML object
  xhr.open("GET", "php/users.php", true);
  xhr.onload = ()=>{
     if(xhr.readyState === XMLHttpRequest.DONE){
       if(xhr.status === 200){
            let data = xhr.response;
            if(!searchBar.classList.contains("active")){
           userslist.innerHTML = data;
            }
       }
   }
}
xhr.send();
}, 500);

