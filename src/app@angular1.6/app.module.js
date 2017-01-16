import uiRouter from 'angular-ui-router';
import router from './app.router'

const testApp = angular.module('testApp', [uiRouter])

testApp.config(router);

export default testApp