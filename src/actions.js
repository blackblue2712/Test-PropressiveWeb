import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCESS,
    REQUEST_ROBOTS_FAILED
} from './contants';

export const setSearchField = text => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    
};

export const requestRobots = (dispatch) => {
    dispatch( {type: REQUEST_ROBOTS_PENDING} );
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: "GET",
      header: {
        "Accept": "Application/json",
        "Content-Type": "Application/json"
      }
    })
    .then( res => {
      return res.json();
    })
    .then( data => dispatch( {type: REQUEST_ROBOTS_SUCESS, payload: data} ))
    .catch( error => dispatch( {type: REQUEST_ROBOTS_FAILED, payload: error} ))
}