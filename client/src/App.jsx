import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainRoute from "./components/MainRoute";
import NewSideBarMenu from "./components/newSideBarMenu";
import { WalletContext } from "./utils/keplr";
import { useState } from "react";

function App() {
  const [walletId, setWalletId] = useState(null)

  return (
    <Router>
      <WalletContext.Provider value={{walletId, setWalletId}}>
      <header>
        <Header />
      </header>
      <main>
        <div className="flex flex-col md:flex-row">
          <nav aria-label="alternative nav" className="bg-gray-800">
            <NewSideBarMenu />
          </nav>
          <section className="inline-block bg-gray-800 w-full">
            <MainRoute />
          </section>
        </div>
      </main>
      <Footer />
      </WalletContext.Provider>
    </Router>
  );
}

export default App;
