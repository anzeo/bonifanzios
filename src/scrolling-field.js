var field = document.querySelector(".field");
var step = 5;

document.addEventListener("mousewheel", onMouseWheelEvent, false);
document.addEventListener("DOMMouseScroll", onMouseWheelEvent, false);

function onMouseWheelEvent(event) {
    var delta = -1 * Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    var currentRotation = getCurrentRotation();
    var newRotation = currentRotation + (delta * step);

    if(newRotation >= 0 && newRotation <= 60){
        field.style.transform = "perspective(4em) rotateX(" + newRotation + "deg)";
    }

    return false;
}

function getCurrentRotation(){
    return field.style.transform ? parseInt(field.style.transform.match(/\d+/g)[1]) : 0;

}