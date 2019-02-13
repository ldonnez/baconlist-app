/* eslint-disable */
import Loadable from "react-loadable"
import LoadingScreen from "components/LoadingScreen"

export default [
  {
    path: "/signin",
    exact: true,
    authorized: false,
    component: Loadable({
      loader: () => import("./SignIn"),
      loading: LoadingScreen
    })
  },
  {
    path: "/signup",
    exact: true,
    authorized: false,
    component: Loadable({
      loader: () => import("./SignUp"),
      loading: LoadingScreen
    })
  },
  {
    path: "/",
    exact: true,
    authorized: true,
    component: Loadable({
      loader: () => import("./Root"),
      loading: LoadingScreen
    })
  },
  {
    path: "/lists",
    exact: true,
    authorized: true,
    component: Loadable({
      loader: () => import("./Root"),
      loading: LoadingScreen
    })
  }
]
