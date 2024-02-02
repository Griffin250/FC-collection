/*...............................................................................

var loginPage = document.getElementById("loginPage");
function openPage(){
  loginPage.style.display  = "block"; 
}

var closeButton = document.getElementById("closeButton");
function closePage(){
  loginPage.style.display  = "none"; 
}

const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

/*................................................................Details section...................*/

var Size = document.getElementById("SizePage");
var Details = document.getElementById("DetailsPage");
function openPage2(){
  SizePage.style.display = "block";
  DetailsPage.style.display = "none";
  ReviewPage.style.display = "none";
}

var Size = document.getElementById("SizePage");
var Details = document.getElementById("DetailsPage");
function openPage1(){
  SizePage.style.display = "none";
  DetailsPage.style.display = "block";
  ReviewPage.style.display = "none";
}

var Reviews = document.getElementById("ReviewPage");
function openPage3(){
  SizePage.style.display = "none";
  DetailsPage.style.display = "none"; 
  ReviewPage.style.display = "block";
}

  
  /*............................................Login / Create Account Forms ........................................*/
  let loginForm = document.getElementById("loginForm");
  let signupForm = document.getElementById("signupForm");
  let createAccount = document.getElementById("createAccount");
  let loginButton = document.getElementById("loginButton");
  
  createAccount.onclick = function(){
      loginForm.style.transform = "translateY(-120%)";
      signupForm.style.transform="translateY(-111%)";
  }
  loginButton.onclick = function(){
      signupForm.style.transform="translateY(120%)";
      loginForm.style.transform="translateY(0%)";
  }
  
  /*.....................................................................Shopping Cart..................................*/
  var Cart = document.getElementById("shoppingCart");
  var closeButton = document.getElementById("shoppingCart");

  function openCart(){
    shoppingCart.style.transform = "translateY(0%)";
  }
  function closeCart(){
    shoppingCart.style.transform = "translateY(-200%)";
  }