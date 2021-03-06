// @flow
import jwtDecode from "jwt-decode";
import api from "./Api";
import StorageService from "../services/StorageService";
import { API_BASE_URL } from "./../configs/AppConfig";

class TokenApi {
    static postVerifyToken() {
        const { uid } = jwtDecode(StorageService.getToken()).user;
        return api.get(`${API_BASE_URL}/users/${uid}`);
    }

    static postVerifyRefreshToken() {
        return api.getFreshToken(`${API_BASE_URL}/auth/access`);
    }
}

export default TokenApi;
