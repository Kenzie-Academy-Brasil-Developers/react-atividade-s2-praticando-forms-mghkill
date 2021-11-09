import "./App.css";
import { Switch, Route } from "react-router-dom";

import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Form />
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
