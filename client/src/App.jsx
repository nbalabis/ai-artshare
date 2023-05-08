import React, { useState, useEffect } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost, Login, Signup } from "./pages";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/api/getuser");
      const data = await response.json();
      if (data.user) {
        setUser(data.user);
      }
    };
    getUser();
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = async () => {
    try {
      const response = await fetch(`/api/logout`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      setUser(null);
      alert(data.message);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <HashRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        {user ? (
          <div className="flex gap-2">
            <Link
              to="/create-post"
              className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:shadow-md"
            >
              Create
            </Link>
            <button
              type="button"
              className="font-inter font-medium text-[#6469ff] px-4 py-2 rounded-md border border-[#6469ff] hover:shadow-md"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="font-inter font-medium text-[#6469ff] px-4 py-2 rounded-md border border-[#6469ff] hover:shadow-md"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:shadow-md"
            >
              Sign Up
            </Link>
          </div>
        )}
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost user={user} />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/signup" element={<Signup login={login} />} />
        </Routes>
      </main>
    </HashRouter>
  );
};

export default App;
