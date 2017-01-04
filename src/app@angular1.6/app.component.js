
export const testApp = angular.module('testApp', [])   

testApp.controller('testCrt', function($scope) {
    $scope.hello = 'Hello from Angular 1.6 App with Webpack'
    $scope.world = 'With Ecmascript 2015 !'
});