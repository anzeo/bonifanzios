angular.module("sbf").controller("NavigationController", function ($scope) {
    var controller = this;
    controller.selectedTabIndex = 0;

    $scope.$on('$stateChangeSuccess', onStateChangeSuccess);

    function onStateChangeSuccess(event, toState){
        controller.selectedTabIndex = toState.data.tabIndex;
    }
});