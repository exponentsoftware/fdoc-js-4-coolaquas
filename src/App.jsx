import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import portfolio1 from "./page/portfolio1";
import portfolio2 from "./page/portfolio2";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={portfolio1} />
          <Route path="/P2" exact component={portfolio2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
