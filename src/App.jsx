import Routing from "./services/router/Routing";
import Home from "./page/Home";
import ToastContainer from "../src/components/Toster/ToastContainer";
import "./App.css";

function App() {
  return (
    <>
      <Routing>
        <Home></Home>
      </Routing>
      <ToastContainer />
    </>
  );
}

export default App;
