import aboutController from './about.controller'

export const aboutComponent = {
    name: 'about',
    url: '/about',
    template: require('./about.html'),
    controller: aboutController,
    controllerAs: 'test1'
}


