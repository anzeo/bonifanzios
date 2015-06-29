angular.module('sbf').directive("toggleNavigation", function($mdSidenav){
    return {
        restrict: 'E',
        templateUrl: 'src/views/ToggleNavigation.html',
        link: function(scope, element, attrs){
            var id = attrs['mdComponentId'];

            scope.toggle = toggleNavigation;

            function toggleNavigation(){
                $mdSidenav(id).toggle();
            }
        }
    };
});