/* eslint-disable no-var */
import * as ACTIONTYPES from "../../actions/client/ClientActionType";
import api from "../../api/Api";
import * as BASE_URL from "../../configs/AppConfig";

const initialState = {
  clients: [],
  pagination: 1,
  accounts: [
    {
      id: 1,
      name: '1234-5679-5678',
      balance: '300000000'
    },
    {
      id: 2,
      name: '1234-0000-5678',
      balance: '600000000'
    },
    {
      id: 3,
      name: '1234-1111-5678',
      balance: '900000000'
    }
  ]
};

const ClientReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

export default ClientReducer;
