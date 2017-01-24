import helloController from './hello.controller'

const helloComponent = {
    name: 'hello',
    url: '/hello',
    template: require('./hello.html'),
    controller: helloController,
    controllerAs: 'test2'
}


export  { helloComponent }

