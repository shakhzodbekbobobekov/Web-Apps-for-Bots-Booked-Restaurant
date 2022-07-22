import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Search/Searchbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Searchbar />
      </Router>
    </div>
  );
}

export default App;
