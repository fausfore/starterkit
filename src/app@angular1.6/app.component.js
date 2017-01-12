import uiRouter from 'angular-ui-router';


export const testApp = angular.module('testApp', [uiRouter])   

testApp.controller('testCrt',testCrt);

testCrt.$inject = ['$scope']

function testCrt($scope){
    this.hello = 'Hello from Angular 1.6 App with Webpack'
    this.world = 'With Ecmascript 2015 !'
}

testApp.config(router);

router.$inject = ['$stateProvider']

function router($stateProvider){
    const helloState = {
        name: 'hello',
        url: '/hello',
        template: require("./hello.html"),
        controller: 'testCrt as test1'
    }

  const aboutState = {
        name: 'about',
        url: '/about',
        template: require("./about.html"),
        controller: 'appController as test2'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
}