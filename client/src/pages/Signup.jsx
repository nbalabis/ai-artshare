import React, { useState } from "react";
import Userfront from "@userfront/react";

Userfront.init("vndrdxvn");
const SignupForm = Userfront.build({
  toolId: "lldlaom",
});

const Signup = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default Signup