import { helloComponent } from './hello/hello.component'
import { aboutComponent } from './about/about.component'

const router = ($stateProvider) => {

    const states = [
        aboutComponent,
        helloComponent
    ]

    // Loop over the state definitions and register them
    states.forEach(function(state) {
        $stateProvider.state(state);
    });

}

router.$inject = ['$stateProvider']

export default router
