import React from "react"
import Loadable from "react-loadable"

let Login = Loadable({
  loader: () => import("./pages/Login.jsx"),
  loading: () => <div>Loading...</div>,
});

let Register = Loadable({
  loader: () => import("./pages/Register.jsx"),
  loading: () => <div>Loading...</div>,
});

export default { Login, Register}
