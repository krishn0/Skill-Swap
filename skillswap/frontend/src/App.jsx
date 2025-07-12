import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Settings from "./pages/settings";
import Notifications from "./pages/notification";
import Home from "./pages/Home";
import BrowseSkills from "./components/BrowseSkills";
import Browse from "./pages/Browse";
import MySwaps from "./pages/MySwaps";
import SwapRequest from "./pages/SwapRequest";
import OwnProfile from "./pages/OwnProfile";
import Profile from "./pages/Profile";

function Layout({ children }) {
  const location = useLocation();

  // Hide navbar on landing page and auth pages if you want
  const hideNavbarOnPaths = ["/", "/login", "/signup"];

  return (
    <>
      {/* Conditionally render navbar */}
      {!hideNavbarOnPaths.includes(location.pathname) && <Navbar />}
      <main>{children}</main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* App pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/browse-skills" element={<BrowseSkills />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/my-swaps" element={<MySwaps />} />
          <Route path="/swap-request" element={<SwapRequest />} />

          {/* Profile routes */}
          <Route path="/profile" element={<OwnProfile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<h2 className="p-6 text-2xl">404 - Page Not Found</h2>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
