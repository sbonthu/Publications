import { connect } from "react-redux";
import Login from "../../components/login";
import { getLogin } from "../../actions/login";

const mapDispatchToProps = dispatch => {
    return {
        getLogin: () => dispatch(getLogin())
    };
};

const mapStateToProps = state => {
    return {
        login: state.loginState.login
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
