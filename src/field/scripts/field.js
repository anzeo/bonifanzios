angular.module("sbf.field").directive("field", function(){
    return {
        restrict: "E",
        templateUrl: "src/field/views/field.html",
        link: function(scope, element){   
            scope.$on("$destroy");
            
            var step = 5;
            var field =  element[0].querySelector(".field");

            field.addEventListener("mousewheel", onMouseWheelEvent, false);
            field.addEventListener("DOMMouseScroll", onMouseWheelEvent, false);

            function onMouseWheelEvent(event) {
                var delta = -1 * Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                var currentRotation = getCurrentRotation();
                var newRotation = currentRotation + (delta * step);

                if(newRotation >= 0 && newRotation <= 60){
                    field.style.transform = "perspective(8em) rotateX(" + newRotation + "deg)";
                }

                return false;
            }

            function getCurrentRotation(){
                return field.style.transform ? parseInt(field.style.transform.match(/\d+/g)[1]) : 0;

            }
            
            function onDestroy(){
                field.removeEventListener("mousewheel");
                field.removeEventListener("DOMMouseScroll");
            }
        }
    }
});