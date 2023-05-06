import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormField } from "../components";

const Signup = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const API_URL = import.meta.env.DEV
    ? "http://localhost:8080"
    : "https://ai-artshare.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Username"
            type="text"
            name="username"
            value={form.username}
            handleChange={handleChange}
          />
          <FormField
            labelName="Password"
            type="password"
            name="password"
            value={form.password}
            handleChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="mt-5 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;