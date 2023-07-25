import React from 'react';
import { BrowserRouter as Router, Routers, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Header from './components/Header';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/income">
                Income
              </Nav.Link>
              <Nav.Link as={Link} to="/expense">
                Expenses
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routers>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/income">
            <IncomePage />
          </Route>
          <Route path="/expense">
            <ExpensePage />
          </Route>
        </Routers>
      </div>
    </Router>
  );
};

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import IncomePage from "./Component/IncomePage";
// import ExpensePage from "./Component/ExpensePage";
// import Dashboard from "./Component/Dashboard";
 

// function App() {
//   return (
// <Router>
// <div className="container mt-4">
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav">
//             <li className="nav-item">
//                 <Link className="nav-link" to="/dashboard">Dashboard</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/income">Income</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/expenses">Expenses</Link>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />}/>
//           <Route path="/income" element={<IncomePage />}/>
//           <Route path="/expenses" element={<ExpensePage />}/>
//         </Routes>
// </div>

// </Router>
   
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import IncomePage from "./Component/IncomePage";
// import ExpensePage from "./Component/ExpensePage";
// import Dashboard from "./Component/Dashboard";
 

// function App() {
//   return (
// <Router>
// <div className="container mt-4">
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav">
//             <li className="nav-item">
//                 <Link className="nav-link" to="/dashboard">Dashboard</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/income">Income</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/expenses">Expenses</Link>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />}/>
//           <Route path="/income" element={<IncomePage />}/>
//           <Route path="/expenses" element={<ExpensePage />}/>
//         </Routes>
// </div>

// </Router>
   
//   );
// }

// export default App;


