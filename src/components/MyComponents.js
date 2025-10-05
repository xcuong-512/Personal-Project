// Class Component
// Function Component
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Nguyen Tran Xuan Cuong", age: "26" },
            { id: 2, name: "Nguyen Thanh Thao", age: "24" },
            { id: 3, name: "Nguyen Thanh Duy", age: "2" },
            { id: 4, name: "Nguyen Minh Anh", age: "1" },
        ]
    };

    handleAddNewUser = (userObj) => {
        let listUserClone = [...this.state.listUsers];
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    // JSX
    render() {
        // Dry => Don't repeat yourself
        return (
            <>
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br /> <br />
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                    />
                </div>
                <div className="b">

                </div>
            </>
        );
    }
}

export default MyComponent;