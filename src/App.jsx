import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import authService from "./appwrite/auth";
import { login, logout } from "./store/features/authSlice";
import { Footer, Header } from "./components";

import conf from "./conf";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          Welcome: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
