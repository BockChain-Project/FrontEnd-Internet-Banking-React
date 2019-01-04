/* eslint-disable no-var */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import * as Types from './ClientActionType';
import callApi from '../../utils/apiCaller';

export const actFetchAccountsRequest = () => {
    return dispatch => {
        // return callApi('products', 'GET', null).then(res => {
        //     dispatch(actFetchProducts(res.data));
        // });
        var accounts = [
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
        ];
        var res = {
            data: accounts
        };
        dispatch(actFetchProducts(res.data));
    };
}

export const actFetchProducts = (accounts) => {
    return {
        type: Types.FETCH_ACCOUNTS,
        accounts
    }
}


// export const actGetProduct = (product) => {
//     return {
//         type: Types.FETCH_PRODUCTS,
//         product
//     }
// }