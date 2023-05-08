import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <About />
      </header>
      <Footer />
    </div>
  );
}

export default App;
