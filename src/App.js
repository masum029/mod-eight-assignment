
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import IncomePage from "./Component/IncomePage";
import ExpensePage from "./Component/ExpensePage";
import Dashboard from "./Component/Dashboard";
 

function App() {
  return (
<Router>
<div className="container mt-4">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/income">Income</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/expenses">Expenses</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/income" element={<IncomePage />}/>
          <Route path="/expenses" element={<ExpensePage />}/>
        </Routes>
</div>

</Router>
   
  );
}

export default App;
