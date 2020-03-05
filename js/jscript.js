/*eslint-env browser*/

/* Code to perform the automatic smooth scroll based on a tags to the IDs. Speed is configurable */
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true
});


/* Variable to store value of window's width and execute code based on width of window (allows different sized nav bar to appear)*/
var x = window.matchMedia("(max-width: 700px)");

function openNav(x) {
    if (x.matches) {
        document.getElementById("nav_design").style.width = "150px";
        document.getElementById("main").style.marginLeft = "0px";
    } else {
        document.getElementById("nav_design").style.width = "190px";
        document.getElementById("main").style.marginLeft = "0px";
    }

}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("nav_design").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function loadproject(objdata) {


    switch (objdata.dataset.value) {
        case "1":
            document.getElementById("displayname").innerHTML = "The Crypt";
            document.getElementById("displayimg").src = "images/opened_eye_profile.jpg";
            document.getElementById("displayimg").alt = "The Crypt Project";
            document.getElementById("displaylink").href = "https://gjoker123.github.io/the-crypt/";
            document.getElementById("displaycontent").innerHTML = "The Crypt is a horror-themed project designed to showcase the abilities and stength of ajax and javascript as the user explores the depths. Also contains codes to be used with other projects. ";
            break;
        case "2":
            document.getElementById("displayname").innerHTML = "Encrypt & Decrypt";
            document.getElementById("displayimg").src = "images/encrypt_profile.jpg";
            document.getElementById("displayimg").alt = "Encrypt and Decrypt Project";
            document.getElementById("displaylink").href = "https://gjoker123.github.io/EncryptandDecrypt/";
            document.getElementById("displaycontent").innerHTML = "Encrypt & Decrypt is a cryptology - based website made to solve and create codes to be sent to friends or make puzzles. This is done using a combination of javascript, html, css and includes bootstrap."
            break;

        case "3":
            document.getElementById("displayname").innerHTML = "Written Works Of G";
            document.getElementById("displayimg").src = "images/WrittenWork.jpg";
            document.getElementById("displayimg").alt = "G's Library Project";
            document.getElementById("displaylink").href = "https://gjoker123.github.io/LibraryofG/";
            document.getElementById("displaycontent").innerHTML = "The Written Works Of G is a library that contains stories and writings of different styles and genres. This website was designed to showcase the strength of bootstrap. Also is connected to The Crypt and Encrypt Projects."
            break;

        case "4":
            document.getElementById("displayname").innerHTML = "G's Game Store";
            document.getElementById("displayimg").src = "images/game_store_profile.jpg";
            document.getElementById("displayimg").alt = "G's Game Store Project";
            document.getElementById("displaylink").href = "http://ggabe123-001-site1.atempurl.com/";
            document.getElementById("displaycontent").innerHTML = "G's Game Store is a website designed to utilise the capabilites of front-end and back-end development. Designed using C# and ASP.Net, the website provides and stores data via a database."
            break;
        case "5":
            document.getElementById("displayname").innerHTML = "Pixel.JS Demo Game";
            document.getElementById("displayimg").src = "images/pixeljs_game_demo.jpg";
            document.getElementById("displayimg").alt = "Pixel.Js Game";
            document.getElementById("displaylink").href = "https://gjoker123.github.io/DemoPixel/";
            document.getElementById("displaycontent").innerHTML = "A simple game demo made by using a combination of Pixel.JS and Bootstrap. Will be developed further on in the future. Instructions are included on the website."
            break;
    }

}
