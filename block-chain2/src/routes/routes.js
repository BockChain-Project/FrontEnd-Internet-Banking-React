import React from "react";
import NotFound from "./../components/NotFoundPage";
import UserManagerContainer from "./../containers/AdminContainer/UserManagerContainer";
import UserListContainer from "./../containers/AdminContainer/UserListContainer";
import UserAddAccountContainer from "./../containers/AdminContainer/UserAddAccountContainer";
import ClientManagerContainer from "./../containers/client/ClientManagerContainer";
import ClientTransferContainer from "./../containers/client/ClientTransferContainer";
import LogoutContainer from "./../containers/auth/LogoutContainer";
import ClientTransferOtp from "./../components/client/ClientTransferOtp";
import ClientAccountCloseContainer from "./../containers/client/ClientAccountCloseContainer";
import HomeContainer from "./../containers/auth/HomeContainer";
import ContactContainer from "./../containers/client/ContactContainer";
import ErrorPage from "./../components/Error";
import HistoryContainer from "./../containers/client/HistoryContainer";
import RecipientListContainer from "../containers/client/RecipientListContainer";
import Transfer from "./../components/Transfer";
import {
    URL_TRANFER,
    URL_TRANFER_OTP,
    URL_ACCOUNT_CLOSE,
    URL_ADMIN_ADD_USER,
    URL_ADMIN_LIST_USER,
    URL_ADMIN_ADD_ACCOUNT,
    URL_ADMIN_USER_DEPOSIT
} from "./../configs/constants/AppUrlConstant";

const routes = [
    {
        path: "/logout",
        exact: false,
        main: () => <LogoutContainer />
    },
    {
        path: "/recipients",
        exact: false,
        main: () => <RecipientListContainer />
    },
    {
        path: "/",
        exact: true,
        main: () => <ClientManagerContainer />
    },
    {
        path: "/contact",
        exact: false,
        main: () => <ContactContainer />
    },
    {
        path: `${URL_TRANFER}`,
        exact: true,
        main: () => <ClientTransferContainer />
    },
    {
        path: `${URL_TRANFER_OTP}`,
        exact: false,
        main: () => <ClientTransferOtp />
    },
    {
        path: `${URL_ACCOUNT_CLOSE}`,
        exact: false,
        main: () => <ClientAccountCloseContainer />
    },
    {
        path: `${URL_ADMIN_ADD_USER}`,
        exact: true,
        main: () => <UserManagerContainer />
    },
    {
        path: `${URL_ADMIN_LIST_USER}`,
        exact: false,
        main: () => <UserListContainer />
    },
    {
        path: `${URL_ADMIN_ADD_ACCOUNT}`,
        exact: true,
        main: () => <UserAddAccountContainer />
    },
    {
        path: "/admin-login",
        exact: false,
        main: () => <UserManagerContainer />
    },
    {
        path: "/history",
        exact: false,
        main: () => <HistoryContainer />
    },
    {
        path: "/recipients",
        exact: false,
        main: () => <RecipientListContainer />
    },
    {
        path: "",
        exact: false,
        main: () => <ErrorPage />
    }
];

export default routes;
