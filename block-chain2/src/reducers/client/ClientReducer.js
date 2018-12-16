/* eslint-disable no-var */
import * as ACTIONTYPES from "../../actions/client/ClientActionsType";
import api from "../../api/Api";
import * as BASE_URL from "../../configs/AppConfig";

const initialState = {
  clients: [],
  pagination: 1
};

const ClientReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

export default ClientReducer;
