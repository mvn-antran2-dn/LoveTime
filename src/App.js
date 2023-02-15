import "./assets/scss/styles.scss";
import Home from "./pages/home";
// import Test from "./pages/test";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./component/layout/Footer/Footer";
import "./firebase"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Home />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000} />
      {/* <Test /> */}
    </>
  );
}

export default App;
