export const Login ={
    getLoginSucess: 'getLoginSucess/lgoin'
}

export const getLoginSucess = (data) => {
    return {
        type:Login.getLoginSucess,
        data
    }
}

export function getLogin() {
    return (dispatch,getState) =>{
        dispatch(getLoginSucess())
        console.log("api call")
    }
}