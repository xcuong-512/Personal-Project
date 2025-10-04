// Class Component
// Function Component
import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Xuan Cuong",
        address: "Ha Noi",
        age: 23
    };

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i am from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;