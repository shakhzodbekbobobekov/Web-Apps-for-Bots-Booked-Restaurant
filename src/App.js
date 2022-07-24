import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Search/Searchbar";
import Product from "./components/Product/Product";
import BottomMenu from "./components/Bottom-Menu/BottomMenu";
import Buy from "./components/Buy/Buy";
import User from "./components/User/User";
import PageNotFound from "./components/Page-Not-Found/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Searchbar />
        <BottomMenu />

        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/user" element={<User />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
