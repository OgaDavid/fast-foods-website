import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Register from "./Components/Form/Register";
import Login from "./Components/Form/Login";
import Businesses from "./Components/Businesses";


function App() {
  return (
    <div className="App">
      {/* <Banner />
      <Navbar />
      <Home />
      <Businesses />
      <Services/>
      <Footer /> */}
      <Register/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
