/* eslint-disable */
import { lazy } from "react"

export default [
  {
    path: "/signin",
    exact: true,
    authorized: false,
    component: lazy(() => import("./SignIn"))
  },
  {
    path: "/signup",
    exact: true,
    authorized: false,
    component: lazy(() => import("./SignUp")),
  },
  {
    path: "/",
    exact: true,
    authorized: true,
    component: lazy(() => import("./Root"))
  },
  {
    path: "/lists",
    exact: true,
    authorized: true,
    component: lazy(() => import("./Root"))
  },
  {
    path: "/friends",
    exact: true,
    authorized: true,
    component: lazy(() => import("./Friends"))
  }
]
