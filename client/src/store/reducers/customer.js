import {GET_CUSTOMERS} from '../actions/constants'

                        // state is currently an ARRAY!
const customerReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_CUSTOMERS:
        // state is currently an ARRAY!
        return [
          ...payload
        ]

      default:
        return state
    }
}

export default customerReducer;
