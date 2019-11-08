import React, { useEffect } from 'react';
// import PropTypes from 'prop-types'
import { connect, useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../../store/actions/customer';
import './customers.css';

const Customers = () => {

  const dispatch = useDispatch();

  // Run getCustomers (actionCreatFunc THUNK) which makes GET request to server route, which sends hardcoded data as a response
  // 👆 When actionObj is created, dispatch it to reducer
  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  const customers = useSelector(state => state.customers);

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.firstName} {customer.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  customers: state.customers
});

const dispatchToProps = dispatch => ({
  getCustomers: () => dispatch(getCustomers())
});

export default connect(
  mapStateToProps,
  dispatchToProps
)(Customers);
