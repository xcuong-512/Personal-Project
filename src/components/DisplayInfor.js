import React from "react";
import './DisplayInfor.scss'
import Logo from '../logo.svg';

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        const { listUsers } = this.props;
        // console.table(listUsers);
        // console.log(listUsers);
        // console.log(this.props)
        // props => properties
        return (
            <div className="display-infor-container">
                {/* <img src={Logo} alt="Logo" /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }} style={{ color: '#333' }}>
                        {this.state.isShowListUser === true ? "Hide list users:" : "Show list users:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div style={{ paddingTop: "30px" }}>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfor;