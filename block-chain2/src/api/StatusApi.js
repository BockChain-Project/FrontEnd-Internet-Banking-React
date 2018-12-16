// @flow
import api from "./Api";

class StatusApi {
  static getSubTransTypeList() {
    return api.post("status/subtranstype", {});
  }

  static getConfigEnumList() {
    return api.post("status/configenum", {});
  }

  static getTransTypeList() {
    return api.post("status/transtype", {});
  }

  static getBankTransStatusList(data: Object) {
    return api.post("status/transstatus", data);
  }

  static getReturnCodeList(data: Object) {
    return api.post("status/returncodemisc", data);
  }

  static getUserActionCodeList() {
    return api.post("status/useractioncodes", {});
  }
}
export default StatusApi;
