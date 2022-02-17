import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Rdv from "./Rdv";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Rdv />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
