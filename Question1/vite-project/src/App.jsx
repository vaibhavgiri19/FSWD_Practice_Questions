import React from "react";
import "./App.css";
import Header from "./components/Header";
import EventDetails from "./components/EventDetails";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <EventDetails />
      <Speakers />
      <Schedule />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
