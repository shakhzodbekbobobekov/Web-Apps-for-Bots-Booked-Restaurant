import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Search/Searchbar";
import Products from "./components/Products/Products";
import BottomMenu from "./components/Bottom-Menu/BottomMenu";
import Booking from "./components/Booking/Booking";
import User from "./components/User/User";
import Product from "./components/Product/Product";
import Calendar from "./components/Calendar/Calendar";
import PageNotFound from "./components/Page-Not-Found/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Searchbar />
        <BottomMenu />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/user" element={<User />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/product" element={<Product />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
