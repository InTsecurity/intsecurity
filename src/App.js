import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Contactus from "./components/ContactUs/Contactus";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes>
            <Route exact path="/" Component={About}></Route>
            <Route path="/contact" Component={Contactus}></Route>
          </Routes>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
