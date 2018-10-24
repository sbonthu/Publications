import axios from 'axios';

export const baseURL = "https://api.github.com/";

export const Api = axios.create({
    baseURL: baseURL,
});

export const handleError = err => {
    throw err
}



export const Get = async url => {
    try {
        const resp = await axios
            .get(baseURL + url);
        return resp;
    }
    catch (error) {
        handleError(error);
    }
}

export const Post = async (url, data) => {
    try {
        const resp = await axios
            .post(baseURL + url, data);
        return resp;
    }
    catch (error) {
        handleError(error);
    }
}

export const Put = async (url, data) => {
    try {
        const resp = await axios
            .put(baseURL + url, data);
        return resp;
    }
    catch (error) {
        handleError(error);
    }
}



export const Delete = async url => {
    try {
        const resp = await axios
            .delete(baseURL + url);
        return resp;
    }
    catch (error) {
        handleError(error);
    }
}