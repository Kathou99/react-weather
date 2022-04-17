import Search from "./Search";
import Footer from "./Footer";
import React from 'react';
import "./App.css";

function App() {
  return (
    <div className="App p-5">
      <div className="container p-5">
        <header>
          <h1 className="app-greeting mb-5 text-uppercase">
            YOUR WEATHER...
          </h1>
        </header>

        <Search defaultLocation="Val-D'Or" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
