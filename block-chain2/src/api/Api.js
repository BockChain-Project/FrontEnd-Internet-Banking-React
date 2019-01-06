// @flow
import axios from "axios";
import _ from "lodash";
import StorageService from "../services/StorageService";
import { API_BASE_URL } from "../configs/AppConfig";

class Api {
    static post(path: string, data: Object) {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": StorageService.getToken()
            }
        };
        const jsonData = JSON.stringify(data);
        return axios
            .post(`${path}`, data, config)
            .then(res => {
                return res.data;
            })
            .catch(error => {
                throw error;
            });
    }

    static get(path: string) {
        const token = StorageService.getToken();
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": token
            }
        };

        return axios
            .get(`${path}`, config)
            .then(res => {
                if (res.data) return res.data;
                return res;
            })
            .catch(error => {
                throw error;
            });
    }
    static getFreshToken(path: string) {
        const token = StorageService.getRefreshToken();
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-refresh-token": token
            }
        };

        return axios
            .get(`${path}`, config)
            .then(res => {
                if (res.data) return res.data;
                return res;
            })
            .catch(error => {
                throw error;
            });
    }
    static getWithParams(path: string, paramsData: Object) {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": StorageService.getToken()
            },
            params: paramsData
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
