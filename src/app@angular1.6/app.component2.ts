import { testApp } from './app.component'

interface Hello {
    first:string
    last:string
}

class appController {
    hello = {}
    constructor() {
        this.hello = {
                first:'Hello from Angular 1.6 App with Webpack',
                last:'With Typescript'
        }
    }
}

testApp.controller('appController',appController)     