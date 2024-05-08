
import restaurant from "./images/restaurant.jpg"

function homePage(){
    const message = document.getElementById("content")
    message.innerHTML = `
        <h1 class= "header">Welcome to our website!</h1>
        <img class="rest-img" src="${restaurant}" alt="restaurant">
        <p class ="text">We are a restaurant that is focused on serving the best dishes from the african continent.</p>
        <p class ="text">Please visit our menu page to see the list of dishes available</p>
        <p class ="text end">Hope you enjoy our dishes!!!</p>`; 
    
    return message;
}

export default homePage