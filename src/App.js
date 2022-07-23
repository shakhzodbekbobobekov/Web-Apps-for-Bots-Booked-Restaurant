import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Search/Searchbar";
import Product from "./components/Product/Product";
import BottomMenu from "./components/Bottom-Menu/BottomMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Searchbar />
        <Product />
        <BottomMenu />
      </Router>
    </div>
  );
}

export default App;
