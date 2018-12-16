// @flow
import Moment from "moment";

export function generateMerchantTransID() {
  // const date = new Date();
  // const currentTime = Moment(date).format("YYYYMMDDHHmmss");
  // return `${currentTime}${date.getTime()}`.substring(0, 15);
  return Math.random()
    .toString()
    .substr(2, 15);
}

export default generateMerchantTransID;
