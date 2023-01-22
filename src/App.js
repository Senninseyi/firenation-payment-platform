import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Cart from "./modules/cart";
import Home from "./modules/home";

function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/src/serviceworker.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="cart" />
      </Routes>
    </Layout>
  );
}

export default App;
