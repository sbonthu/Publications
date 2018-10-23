import { Get } from "../../services/http";
import { API } from "../../services/api";

export const Login = {
    getLoginSucess: "getLoginSucess/lgoin"
};

export const getLoginSucess = data => {
    return {
        type: Login.getLoginSucess,
        data
    };
};

export function getLogin(dispatch) {
    return (dispatch, getState) => {
        Get(API.users)
            .then(resp => {
                dispatch(getLoginSucess(resp.data));
            })
            .catch(err => {
                console.log(err);
            });
    };
}
