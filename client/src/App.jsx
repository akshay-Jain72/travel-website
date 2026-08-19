import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LoginForm from "./components/LoginForm";
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
  // State for Login Modal and Sidebar visibility
  const [showForm, setShowForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      {/* Passing states & handlers to Header and Sidebar */}
      <Header 
        setShowForm={setShowForm} 
        toggleSidebar={toggleSidebar} 
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        setShowForm={setShowForm}
      />
      
      <LoginForm 
        showForm={showForm} 
        setShowForm={setShowForm} 
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