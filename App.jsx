import Note from "./Note";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Note /><Note /><Note />
    </div>
  );
}
export default App;