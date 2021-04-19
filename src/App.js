import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountForm from "./components/AccountForm";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";
import Transaction from "./components/Transaction";

function App() {
  return (
    <>
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
      {/* Dashboard (current budget) */}
      {/* History (monthly view) */}
      <Dashboard />
      <hr></hr>
      {/* Maybe make these pop-up forms? */}
      <Transaction />
      <hr></hr>
      {/* Make this a pop-up form? */}
      <AccountForm />
      <hr></hr>
    </>
  );
}

export default App;
