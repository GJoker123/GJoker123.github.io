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
        document.getElementById("nav_design").style.width = "250px";
        document.getElementById("main").style.marginLeft = "0px";
    }

}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("nav_design").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
