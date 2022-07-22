import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Search/Searchbar";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Searchbar />
        <Product />
      </Router>
    </div>
  );
}

export default App;
