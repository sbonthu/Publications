import React from 'react';
import { connect } from 'react-redux';
import {getLogin} from "../../redux/login/actions";


class LoginForm extends React.Component {
    constructor(props){
        super(props)
    }

   componentDidMount(){
      //this.props.getLogin();
   }

   render(){
       return(
           <div>
               login
           </div>
       )
   }
}
const mapStateToProps = state => {
    return {
        login:state.loginState.login
    }
}

const mapDispatchToProps = dispatch  => {
    return {
        getLogin: () => dispatch(getLogin())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)