import {GET_CUSTOMERS} from './constants';

//action creator THUNK:
export const getCustomers = () => dispatch => {
  //GET request to this route
  return fetch('/api/customers')
    //receive the response
    .then(res => res.json())
    // send the data in the payload: dispatch the action
    .then(customers => dispatch({type: GET_CUSTOMERS, payload: customers}))
}
