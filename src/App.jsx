import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes as Switch, Route, useLocation } from "react-router-dom";
import HomepageWrapper from "./pages/HomepageWrapper/HomepageWrapper";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact element={<HomepageWrapper />}>
          <Route index element={<Homepage />} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
