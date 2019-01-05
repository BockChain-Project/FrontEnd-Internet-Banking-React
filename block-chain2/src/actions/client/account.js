import * as Types from "./ClientActionType";
import Api from "./../../api/Api";
import { API_BASE_URL, API_USER_ACCOUNT_GET } from "./../../configs/AppConfig";

export const actFetchProducts = accounts => {
    return {
        type: Types.FETCH_ACCOUNTS,
        accounts
    };
};
export const actFetchAccountsRequest = () => dispatch =>
    Api.get(`${API_BASE_URL}${API_USER_ACCOUNT_GET}`).then(res => {
        console.log(res.accounts);
        dispatch(actFetchProducts(res.accounts));
    });
