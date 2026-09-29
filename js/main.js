var myHeading = document.querySelector("h1");
var myImage = document.querySelector("img")
myHeading.textContent = "Hello world!";
function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}
var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!" + multiply(5, 10);
document.querySelector("img").onclick = function() {
    var mySRC = myImage.getAttribute("src")
    if (mySRC === "img/testimg.png") {
        myImage.setAttribute("src", "img/Dead God.png")
    }
    if (mySRC === "img/Dead God.png") {
        myImage.setAttribute("src", "img/testimg.png")
    }
    
}