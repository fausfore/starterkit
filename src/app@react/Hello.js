import ReactDOM from 'react-dom';
import React from 'react'

class HelloWorld extends React.Component {

  render() {
    return (
        <div>
            <h1>Hello from React App with Webpack</h1>
            <h2>With Ecmascript 2015 !</h2>
            <img src="/public/images/react.png"/>
        </div>
    ) 
  }
}

var mainElement = document.querySelector("#root");

ReactDOM.render(React.createElement(HelloWorld), mainElement);