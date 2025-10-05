import React from "react";

class UserInfor extends React.Component {

    state = {
        name: "Xuan Cuong",
        address: "Ha Noi",
        age: 23
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and i am from
                {this.state.address} and I am {this.state.age} years old.
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your Name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)} />

                    <label>Your Age: </label>
                    <input
                        value={this.state.age}
                        type="number"
                        onChange={(event) => this.handleOnChangeAge(event)} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;