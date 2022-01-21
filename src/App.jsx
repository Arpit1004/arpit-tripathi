import { useContext, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Certified from "./components/CertifiedFrom/Certified";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./Modal";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [overlay, setOverlay] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProductList />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {overlay ? <Modal></Modal> : null}
    </div>
  );
};

export default App;
