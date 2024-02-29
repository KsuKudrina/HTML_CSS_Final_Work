// var myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.documentElement.style.setProperty('--count', 5);


// var element = document.getElementById('myElement');
// var oldValue = element.getAttribute('style');
// var newValue = oldValue.replace('--my-var: старое значение', '--my-var: новое значение');
// element.setAttribute('style', newValue);

// var sheet = document.styleSheets[0];
// sheet.cssRules[0].style.setProperty('--count', 'новое значение');

var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};