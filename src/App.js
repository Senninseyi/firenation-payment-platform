import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Cart from "./modules/cart";
import Home from "./modules/home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Cart />} path="cart" />
      </Routes>
    </Layout>
  );
}

export default App;
