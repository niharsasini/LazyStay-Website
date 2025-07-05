import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Topbar from "./components/common/Topbar.jsx";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";

import AppRouter from "./navigation/AppRouter";

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
