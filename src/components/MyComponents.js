// Class Component
// Function Component
import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Xuan Cuong",
        address: "Ha Noi",
        age: 23
    };

    handleClick(event) {
        console.log(">>> Click my button <<<");
        // console.log(event);
        // console.log(event.target);
        console.log(`My name is ${this.state.name}`);
    }

    handleOnMouseOver(event) {
        console.log(event.pageX);
    }

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i am from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;