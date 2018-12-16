// @flow
import api from "./Api";
import StorageService from "../services/StorageService";

class TokenApi {
  static postVerifyToken() {
    const config = {
      headers: {
        "Content-Type": "application/json",
        // Authorization: 
      }
    };
    return api.post(`sbiapi/jwttoken/verify`, config);
  }
}

export default TokenApi;
