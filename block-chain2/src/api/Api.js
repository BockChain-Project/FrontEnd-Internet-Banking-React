/* eslint-disable camelcase */
/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable arrow-body-style */
// @flow
import axios from "axios";
import _ from "lodash";
import StorageService from "../services/StorageService";
import { API_BASE_URL } from "../configs/AppConfig";

class Api {
  static post(path: string, data: Object) {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    // console.info(data);
    const jsonData = JSON.stringify(data);
    return axios
      .post(`${API_BASE_URL}/${path}`, data, config)
      .then(res => {
        // console.log(res.data);
        return res.data;
      })
      .catch(error => {
        throw error;
      });
  }

  static postToken(path: string, data: Object, config: Object) {
    return axios
      .post(`${API_BASE_URL}/${path}`, data, config)
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  }

  static get(path: string) {
    const token = StorageService.getToken();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    return axios
      .get(`${path}`, config)
      .then(res => {
        // console.log(res.data);
        if (res.data) {
          return res.data;
          // eslint-disable-next-line no-else-return
        } else {
          return res;
        }
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  static getWithParams(path: string, paramsData: Object) {
    console.log(paramsData);
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      params: paramsData
    };

    return axios
      .get(`${path}`, config)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  static getWithQuerys(path: string, paramsData: Object) {
    // console.log("status: ", paramsData.status);
    const strQuery = JSON.stringify(paramsData);
    console.log(strQuery);

    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        query: `${strQuery}`
      }
    };

    return axios
      .get(`${path}`, config)
      .then(res => {
        // console.log(res.data);
        return res.data;
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }
  static throwError(status: String, error: String, message: String) {
    const errorObj = {
      status,
      error,
      message
    };
    throw errorObj;
  }
}

export default Api;
