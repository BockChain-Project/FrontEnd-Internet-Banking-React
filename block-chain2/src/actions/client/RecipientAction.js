import * as Types from "./ClientActionType";
import Api from "./../../api/Api";
import { API_BASE_URL, API_USER_ACCOUNT_GET, API_RECIPIENT_LIST_GET } from "./../../configs/AppConfig";

export const actFetchRecipients = recipients => {
    return {
        type: Types.FETCH_RECIPIENT_LIST,
        recipients
    };
};
export const actFetchRecipientsRequest = () => dispatch =>
    Api.get(`${API_BASE_URL}${API_RECIPIENT_LIST_GET}`).then(res => {
        //console.log("actFetchRecipientsRequest", res);
        dispatch(actFetchRecipients(res.recipients));
    });
