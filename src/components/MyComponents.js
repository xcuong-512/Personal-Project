// Class Component
// Function Component
import React from "react";

class MyComponent extends React.Component {
    // JSX
    render() {
        return (
            <div>
                My first component
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;