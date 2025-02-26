import AOS from "aos" // Import AOS
import "aos/dist/aos.css" // Import AOS CSS
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// Initialize AOS
AOS.init({
  duration: 1500, // Optional: Set duration for the animation
  once: false // Optional: If true, the animation occurs only once
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
