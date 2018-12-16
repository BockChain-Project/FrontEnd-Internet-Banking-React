import React from "react";
import NotFound from "./../components/NotFoundPage";
import UserManagerContainer from "./../containers/AdminContainer/UserManagerContainer";
import ClientManagerContainer from "./../containers/client/ClientManagerContainer";
import LogoutContainer from "./../containers/auth/LogoutContainer";
import HomeContainer from "./../containers/auth/HomeContainer";

const routes = [
  {
    path: "/logout",
    exact: false,
    main: () => <LogoutContainer />
  },
  {
    path: "/",
    exact: true,
    main: () => <HomeContainer />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
