import React from "react";
import NotFound from "./../components/NotFoundPage";
import UserManagerContainer from "./../containers/AdminContainer/UserManagerContainer";
import ClientManagerContainer from "./../containers/client/ClientManagerContainer";
import ClientTransferContainer from "./../containers/client/ClientTransferContainer";
import LogoutContainer from "./../containers/auth/LogoutContainer";
import HomeContainer from "./../containers/auth/HomeContainer";
import ContactContainer from "./../containers/client/ContactContainer";
import ErrorPage from "./../components/Error";
import History from "./../components/History";
import Transfer from "./../components/Transfer";
import { URL_TRANFER } from "./../configs/constants/AppUrlConstant";

const routes = [
    {
        path: "/logout",
        exact: false,
        main: () => <LogoutContainer />
    },
    {
        path: "/",
        exact: true,
        main: () => <ClientManagerContainer />
    },
    {
        path: "/history",
        exact: false,
        main: () => <History />
    },
    {
        path: "/contact",
        exact: false,
        main: () => <ContactContainer />
    },
    {
        path: `${URL_TRANFER}`,
        exact: false,
        main: () => <ClientTransferContainer />
    },
    {
        path: "/admin-login",
        exact: false,
        main: () => <UserManagerContainer />
    },
    {
        path: "",
        exact: false,
        main: () => <ErrorPage />
    }
];

export default routes;
