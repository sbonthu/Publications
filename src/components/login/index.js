import React, { Component } from "react";

class Login extends Component {
    componentDidMount() {
        this.props.getLogin();
    }

    render() {
        return <div>login</div>;
    }
}

export default Login;
