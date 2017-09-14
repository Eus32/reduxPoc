import * as actionTypes from './actionTypes';
import Axios from 'axios';

const apiUrl = 'http://59b79c63b0e71700113fa3e0.mockapi.io/v1/software';

export const fetchSoftwaresSuccess = (softwares) => {
    return {
        type: actionTypes.FETCH_SOFTWARES_SUCCESS,
        softwares
    }
};
  
export const fetchSoftwares = () => {
    return (dispatch)   => {
        return Axios.get(apiUrl)
            .then(response => {
                dispatch(fetchSoftwaresSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};