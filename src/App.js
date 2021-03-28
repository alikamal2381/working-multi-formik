import React from "react";
import "./App.css";
import { UserForm } from "./components/UserForm";
//import Stepper from "./stepper";

const App = () => {
  return (
    <div className="App">
      <h1>Working Multi Form using Formik & Material UI</h1>

      {/* <Stepper /> */}

      <UserForm />
    </div>
  );
};

export default App;
