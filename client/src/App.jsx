import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LoginForm from "./components/Login";
import Home from "./components/Home";
import Book from "./components/Book";
import Packages from "./components/Packages";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // State for Login Modal, Sidebar, and Authentication
  const [showForm, setShowForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Page refresh hone par bhi login status yaad rakhne ke liye
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      {/* Passing states & handlers to Header */}
      <Header 
        setShowForm={setShowForm} 
        toggleSidebar={toggleSidebar} 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        setShowForm={setShowForm}
      />
      
      {/* Yahan setIsLoggedIn prop pass kar diya hai */}
      <LoginForm 
        showForm={showForm} 
        setShowForm={setShowForm} 
        setIsLoggedIn={setIsLoggedIn}
      />

      <Home />
      <Book />
      <Packages />
      <Services />
      <Gallery />
      <Review />
      <Contact />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;