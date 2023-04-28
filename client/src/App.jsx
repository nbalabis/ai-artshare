import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Userfront from "@userfront/react";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

Userfront.init("vndrdxvn");

const SignupForm = Userfront.build({
  toolId: "lldlaom",
});

const LoginForm = Userfront.build({
  toolId: "ramarka",
});

const App = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const checkForUser = async () => {
  //     try {
  //       const response = await fetch("https://api.userfront.com/v0/self", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${Userfront.tokens.accessToken}`,
  //         },
  //       });

  //       const data = await response.json();
  //       console.log(data)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   checkForUser();
  // }, []);

  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        {user ? (
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
            >
              Sign Up
            </Link>
          </div>
        )}
        <button
            type="button"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
            onClick={Userfront.logout}
          >
            Logout
          </button>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <>{JSON.stringify(Userfront.user, null, 2)}</>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create-post"
            element={<CreatePost user={user && user} />}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
