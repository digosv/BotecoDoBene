import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import PorcoesQuentes from "./components/PorcoesQuentes";
import Cervejas from "./components/Cervejas";
import Bolinhos from "./components/Bolinhos";
import PorcoesFrias from "./components/PorcoesFrias";
import Lanches from "./components/Lanches";
import Drinks from "./components/Drinks";
import SemAlcool from "./components/Semalcool";

function App() {
  return (
    <Router>
      <div className="bg-amber-100 pt-24 min-h-screen">
        <Header />
        <Buttons />

        <Routes>
          <Route
            path="/Boteco-Do-Bene-Cardapio/"
            element={
              <motion.div
                key="homepage"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <HomePage />
              </motion.div>
            }
          ></Route>
          <Route
            path="/bolinhos"
            element={
              <motion.div
                key="bolinhos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Bolinhos />
              </motion.div>
            }
          ></Route>
          <Route
            path="/porcoesquentes"
            element={
              <motion.div
                key="porcoesquentes"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <PorcoesQuentes />
              </motion.div>
            }
          ></Route>
          <Route
            path="/porcoesfrias"
            element={
              <motion.div
                key="porcoesfrias"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <PorcoesFrias />
              </motion.div>
            }
          ></Route>
          <Route
            path="/lanches"
            element={
              <motion.div
                key="lanches"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Lanches />
              </motion.div>
            }
          ></Route>
          <Route
            path="/drinks"
            element={
              <motion.div
                key="drinks"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Drinks />
              </motion.div>
            }
          ></Route>
          <Route
            path="/cervejas"
            element={
              <AnimatePresence>
                <motion.div
                  key="cervejas"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Cervejas />
                </motion.div>
              </AnimatePresence>
            }
          ></Route>
          <Route
            path="/semalcool"
            element={
              <AnimatePresence>
                <motion.div
                  key="semalcool"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SemAlcool />
                </motion.div>
              </AnimatePresence>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
