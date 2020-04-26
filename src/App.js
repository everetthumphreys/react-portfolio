import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <div>

      <Navbar />
      <Switch>
      <Route  path="/contact" component={Contact} />
      <Route  path="/portfolio" component={Portfolio} />
      <Route  path="/" component={Profile} />
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;