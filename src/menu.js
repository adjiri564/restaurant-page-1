import waakye from "./images/Waakye.jpg"
import jollof from "./images/jollof.jpg"
import beans from "./images/beans.webp"
function menuPage(){
    const content = document.getElementById("content");
    content.innerHTML = `<h1 class= "header">Menu</h1>
        <p class= "menu-p"> This is a menu specially prepared for you  love</p>
        <div class = "info">
        <img class = "menu-img" src="${waakye}" alt="waakye">
        <p class= "menu-txt"> The waakye is a very delicious dish that takes you out of this world</p>
        </div>
        <div class = "info">
        <img class = "menu-img" src="${jollof}" alt="jollof">
        <p class= "menu-txt"> This dish is taken on special occasions and it is called Jollof</p>
        </div>
        <div class = "info">
        <img class = "menu-img" src="${beans}" alt="beans">
        <p class= "menu-txt"> Beans is the salvation of most ghanaians, because it is delicious yet cheap.</p>
        </div>
        `;

    return content
}

export default menuPage