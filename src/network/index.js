import axios from 'axios';
import { LOADING_STOP } from '../context/action/type';
import apiConstant from './Endpoint';
import { stringData } from '../utils';


const instance = axios.create({
    baseURL: apiConstant.baseUrl,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    }

});

export const sendGetRequest = async (url, params, dispatch) => {
    return instance.get(url, {
        params
    }).then((response) => {

        return response.data;
    })
        .catch((err) => {
            if (err.response === undefined) {
                throw new Error(stringData.commonErrorMessage);
            }
            console.log('api err', err.response.data);
            throw err.response.data;
        })
        .finally(() => {
            dispatch({
                type: LOADING_STOP
            })
        })
}