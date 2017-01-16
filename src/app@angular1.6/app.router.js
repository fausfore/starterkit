const router = ($stateProvider) => {

    const states = [
        {
            name: 'hello',
            url: '/hello',
            template: require("./hello.html"),
            controller: 'testCrt as test1'
        },
        {
            name: 'about',
            url: '/about',
            template: require("./about.html"),
            controller: 'appController as test2'
        }
    ]

    // Loop over the state definitions and register them
    states.forEach(function(state) {
        $stateProvider.state(state);
    });

}

router.$inject = ['$stateProvider']

export default router
