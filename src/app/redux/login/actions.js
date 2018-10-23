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

export function getLogin() {
    return (dispatch, getState) => {
        Get(API.users)
            .then(resp => {
                dispatch(getLoginSucess(resp.data[0]));
            })
            .catch(err => {
                console.log(err);
            });
    };
}
