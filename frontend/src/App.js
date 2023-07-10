import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BusDeatailScreen from "./screens/BusDeatailScreen";
import Dashboard from "./companyPanel/screens/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/details/:id" element={<BusDeatailScreen />} />
            <Route path="/company" element={<Dashboard />} />
          </Routes>
        </main>

        <footer>
          <p className="text-white">All the rights are reserved @ 2023</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
