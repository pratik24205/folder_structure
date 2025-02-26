import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"
import { Bounce, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "./components/Footer"
import LoginPage from "./pages/LoginPage"
import TermAndConditions from "./pages/TermAndConditions"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Refunds from "./pages/Refunds"
import AboutUs from "./pages/AboutUs"
import ProductAndPricing from "./pages/ProductAndPricing"
import ContactUs from "./components/ContactUs"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/terms-and-conditions" element={<TermAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/pricing-and-products" element={<ProductAndPricing />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />

        <Footer />
      </Router>
    </>
  )
}

export default App
