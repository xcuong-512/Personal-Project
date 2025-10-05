// Class Component
// Function Component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    // JSX
    render() {
        const myAge = 26;
        const myInfor = ['a', 'b', 'c'];
        return (
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfor name="Nguyen Tran Xuan Cuong" age="23" />
                <hr />
                <DisplayInfor name="Charlie Nguyen" age={myAge} myInfor={myInfor} />
            </div>
        );
    }
}

export default MyComponent;