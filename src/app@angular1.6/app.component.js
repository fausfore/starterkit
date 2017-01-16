import testApp from './app.module'

class testCrt{
    constructor(){
        this.hello = 'Hello from Angular 1.6 App with Webpack'
        this.world = 'With Ecmascript 2015 !'
    }
}

export default testCrt

testApp.controller('testCrt', testCrt);


