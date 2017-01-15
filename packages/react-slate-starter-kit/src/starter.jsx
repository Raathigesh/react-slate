import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends Component {
    render() {
        return (
            <div> 
            hello World
            </div>
        );
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);