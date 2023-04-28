import React, { useState } from "react";
import Userfront from "@userfront/react";

Userfront.init("vndrdxvn");
const UserfrontSignup = Userfront.build({
  toolId: "lldlaom",
});

const SignupForm = () => {
  return (
    <div>
      <UserfrontSignup />
    </div>
  );
};

export default SignupForm;
