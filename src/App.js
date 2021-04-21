import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountForm from "./components/AccountForm";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Budget from "./components/Budget";
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";
import Transaction from "./components/Transaction";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Particles 
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      {/* Create budget  */}
      {/* History (monthly view) */}
      <br></br>
      <Budget />
      <hr></hr> 

      {/* Dashboard (current budget) */}
      <Dashboard/>
      <hr></hr>

      {/* Maybe make these pop-up forms? */}
      <Transaction/>
      <hr></hr>

      {/* Make this a pop-up form? */}
      <AccountForm />
      <hr></hr>
    </ HashRouter>
  );
}

export default App;
