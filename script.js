//  let addBtn = document.querySelector(".add");
//  let subtractBtn= document.querySelector(".subtract");
//  let quantity = document.querySelector(".quantity_01");
//  let count = 0;
//  addBtn.addEventListener("click",function(){
//     count++;
//     quantity.innerHTML = count;
//  })
//  subtractBtn.addEventListener("click",function(){
//     if(count > 0  ){
//         count--;
//     }
//     quantity.innerHTML = count;
//  })
//  let body = document.querySelector("body");
//  let login = document.querySelector(".login");
//  login.addEventListener("click",function(){
//  body.style.opacity = "0.7";
//  body.style.backgroundColor-"gray";
//  })
let loginBtn = document.querySelector(".login");
let overlay = document.querySelector(".overlay");
let loginPage = document.querySelector(".login_page");
let isloginOpen = false;
loginBtn.addEventListener("click", function () {
  
  if(!isloginOpen){
       overlay.classList.add("active");
    loginPage.classList.add("active");
    loginPage.style.display = "flex";
    document.body.classList.add("modal-open");
     isloginOpen = true; 
}else{
     overlay.classList.remove("active");
    loginPage.classList.remove("active");
    loginPage.style.display = "none";
     document.body.classList.remove("modal-open");
    isloginOpen = false;
}
});
