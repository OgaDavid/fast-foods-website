import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Home />
      <Services/>
      <Footer />
    </div>
  );
}

export default App;
