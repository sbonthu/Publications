import React from 'react';
import { connect } from 'react-redux';
import {getLogin} from "../../redux/login/actions";


class LoginForm extends React.Component {
  

   componentDidMount(){
      this.props.getLogin();
   }

   render(){
       return(
           <div>
               login
           </div>
       )
   }
}

const mapDispatchToProps = (dispatch)  => {
    return {
        getLogin: () => dispatch(getLogin())
    }
}


const mapStateToProps = (state) => {
    return {
        login:state.loginState.login
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)