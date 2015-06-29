angular.module('sbf').directive("toggleNavigation", function($mdSidenav){
    return {
        restrict: 'A',
        scope: {
            id: '@toggleNavigation'
        },
        link: function(scope, element){
            scope.$on('$destroy', onDestroy);

            element[0].addEventListener('click', toggleNavigation);

            function toggleNavigation(){
                $mdSidenav(scope.id).toggle();
            }

            function onDestroy(){
                element[0].removeEventListener('click');
            }
        }
    };
});