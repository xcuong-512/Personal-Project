import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { age, name } = this.props;
        console.log(this.props)
        // props => properties
        return (
            <div>
                <div>My name is {name}</div>
                <div>My age is {age}</div>
            </div>
        )
    }
}

export default DisplayInfor;