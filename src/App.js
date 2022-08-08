import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const { pathname } = useLocation();
  const [showNavSearch, setShowNavSearch] = useState(true);
  console.log(pathname);

  useEffect(() => {
    if (pathname !== "/") {
      setShowNavSearch(false);
    } else {
      setShowNavSearch(true);
    }
  }, [pathname]);

  return (
    <div className="App">
      {showNavSearch && <Navbar />}
      {showNavSearch && <Searchbar />}

      <BottomMenu />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/user" element={<User />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/product" element={<Product />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
