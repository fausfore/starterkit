import uiRouter from 'angular-ui-router';
import router from './app.router'
import { aboutComponent } from './about/about.component'
import { helloComponent } from './hello/hello.component'

angular.module('testApp', [uiRouter])
    .config(router)
    .component('aboutComponent', aboutComponent)
    .component('helloComponent', helloComponent)
