import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes as Switch, Route, useLocation } from "react-router-dom";
import HomepageWrapper from "./pages/HomepageWrapper/HomepageWrapper";
import Homepage from "./pages/Homepage/Homepage";
import Register from "./pages/Auth/Register";
import Auth from "./pages/Auth/Auth";
import Destination from "./pages/Destination/Destination";
import PackageDetails from "./pages/Destination/PackageDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact element={<HomepageWrapper />}>
          <Route index element={<Homepage />} />
          <Route path="/destinations">
            <Route path=":destination" exact element={<Destination />} />
            <Route path="package-details" exact element={<PackageDetails />} />
          </Route>
        </Route>
        <Route
          path="/login"
          exact
          // element={<Navigate to={"/dashboard"} />}
          element={
            <Auth
            // setHandleNotData={setHandleNotData}
            />
          }
          // element={token === null ? <Login /> : <Navigate to={"/dashboard"} />}
        />
      </Switch>
    </div>
  );
}

export default App;
