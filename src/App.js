import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AccountForm from "./components/AccountForm";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";

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
      <AccountForm />
    </>
  );
}

export default App;
