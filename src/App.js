import "./App.css";
import { Switch, Route } from "react-router-dom";

import Form from "./components/Form";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [allowed, setAllowed] = useState(false);
  const [formValue, setFormValue] = useState({});
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Form setAllowed={setAllowed} setFormValue={setFormValue} />
          </Route>
          <Route exact path="/card">
            <Card />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
