import { GET_ABOUT, GET_CURRENT_ABOUT, currentAbouts,  about } from './about.state'
import { aboutModel } from './about.model'

class aboutController{
    constructor($timeout, aboutModel){
        this.hello = 'About from Angular 1.6 App with Webpack'
        this.world = 'With Ecmascript 2015 !'
        this.aboutModel = aboutModel;
        this.$timeout = $timeout;
    }
    $onInit(){
        this.about = about( undefined, { type: GET_ABOUT }) 

        this.$timeout(() => {
            const payload = [
                { id: 0, name: 'Redux' },
                { id: 1, name: 'Angular' }
            ]
            this.about = about(this.about, { type: GET_ABOUT, payload })
        }, 3000)

        this.$timeout(() => {
            const payload = [
                { id: 0, name: 'Oh' }
            ]
            this.about = about(this.about, { type: 'GET_ABOUT', payload })
        }, 6000)
    }
    
    onAboutSelected(currentAbout){
        this.currentAbout = currentAbouts(this.currentAbout, { type: GET_CURRENT_ABOUT, payload: currentAbout })
    }

    isCurrentAbout(about){
        return this.currentAbout && this.currentAbout.id === about.id
    }
}

aboutController.$inject = ['$timeout']

export default aboutController