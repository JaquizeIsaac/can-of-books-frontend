import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const SERVER = import.meta.env.VITE_SERVER_URL;


// const SERVER = import.meta.env.VITE_SERVER_URL;
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            <Route
             exact path="/about"
              element={<About />}
            />
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;