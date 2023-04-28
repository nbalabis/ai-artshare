import React, { useState } from "react";

import { FormField } from "../components";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(user)
  };

  return (
    <div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Email"
            type="email"
            name="email"
            vlaue={user.email}
            handleChange={handleChange}
            required
          />
          <FormField
            labelName="Password"
            type="password"
            name="password"
            vlaue={user.password}
            handleChange={handleChange}
            required
          />
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
