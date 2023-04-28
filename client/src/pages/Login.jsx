import React from "react";
import Userfront from "@userfront/react";

Userfront.init("vndrdxvn");
const LoginForm = Userfront.build({
    toolId: "ramarka"
})

const Login = () => {
  return <LoginForm />;
};

export default Login;
