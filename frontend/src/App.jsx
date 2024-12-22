import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Sidebar from "./components/shared/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import IdeaSubmission from "./pages/IdeaSubmission";
import IdeaReport from "./pages/reports";
import ProfileEditingPage from "./pages/Setting";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/submit-idea" element={<IdeaSubmission />} />
              <Route path="/reports" element={<IdeaReport/>}/>
              <Route path="/settings" element={<ProfileEditingPage/>} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
