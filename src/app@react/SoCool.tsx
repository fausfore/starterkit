import * as ReactDOM from 'react-dom';
import * as React from 'react'

interface HelloProps {
  compiler: string;
  framework: string;
}

class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return (
            <div>
                <h1>Hello from {this.props.framework} App with Webpack</h1>
                <h2>With {this.props.compiler} !</h2>
                <img src="/public/images/react.png"/>
            </div>
        )
    }
}


ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root2")
);