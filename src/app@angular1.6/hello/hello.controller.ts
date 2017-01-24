interface Hello {
    first:string
    last:string
}

class helloController {
    hello = {}
    constructor() {
        this.hello = {
            first:'Hello from Angular 1.6 App with Webpack',
            last:'With Typescript'
        }
    }
}

export default helloController 