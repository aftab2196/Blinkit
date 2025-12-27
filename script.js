// LOGIN BUTTON FUNCTION
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
// cart functions
 let cartBackgroundColor = document.querySelector(".cart");
 let addButton = document.querySelectorAll(".add_button");
 addButton.forEach(buttons => {
     buttons.addEventListener("click",function(){
          cartBackgroundColor.classList.toggle("newcart");
     })
 })