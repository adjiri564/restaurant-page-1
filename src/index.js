import home from "./home";
import menu from "./menu";
import about from "./about";
import restaurant from "./images/restaurant.jpg"
import "./style.css";

const homeBtn = document.querySelector(".hm-btn");
const  menuBtn = document.querySelector(".mn-btn");
const abtBtn = document.querySelector(".abt-btn");
const content = document.getElementById("content");

content.innerHTML =`
<h1 class= "header">Welcome to our website!</h1>
<img class="rest-img" src="${restaurant}" alt="restaurant">
<p class ="text">We are a restaurant that is focused on serving the best dishes from the african continent.</p>
<p class ="text">Please visit our menu page to see the list of dishes available</p>
<p class ="text end">Hope you enjoy our dishes!!!</p>
`


homeBtn.addEventListener("click",()=>{
    home()
})

menuBtn.addEventListener("click", () => {
    menu()
})

abtBtn.addEventListener("click",()=>{
    about()
})