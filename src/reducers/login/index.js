import { Login } from "../../actions/login";

const defaultState = {
    login: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case Login.getLoginSucess:
            return {
                ...state,
                login: action.data
            };
        default:
            return state;
    }
};
