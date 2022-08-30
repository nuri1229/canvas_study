import React, { useEffect, useState } from "react";
import { Step1Page, Step2Page, Step3Page, Step4Page } from "./pages";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import "./App.css";
import "./App2.css";

function App() {
  const [direction, setDirection] = useState<string | null>(null);
  const location = useLocation();
  const history = useHistory();

  const onBack = () => {
    setDirection("left");
  };

  const onNext = () => {
    setDirection("right");
  };

  useEffect(() => {
    if (direction === "left") {
      history.goBack();
    }
    if (direction === "right") {
      if (location.pathname === "step4") return;
      else {
        const arr = ["/step1", "/step2", "/step3", "/step4"];
        const index = arr.findIndex((item) => item === location.pathname);
        history.push(arr[index + 1]);
      }
    }
    setDirection(null);
  }, [direction, history, location]);

  return (
    <div style={{ height: "100%" }}>
      <ul className="nav">
        <li>
          <Link to="/step1">step1</Link>
        </li>
        <li>
          <Link to="/step2">step2</Link>
        </li>
        <li>
          <Link to="/step3">step3</Link>
        </li>
        <li>
          <Link to="/step4">step4</Link>
        </li>
      </ul>
      <TransitionGroup style={{ height: "100%" }}>
        <CSSTransition
          key={location.pathname}
          classNames={`${direction || "right"}`}
          timeout={1000}
        >
          <Switch>
            <Route exact path="/step1">
              <Step1Page />
            </Route>
            <Route exact path="/step2">
              <Step2Page />
            </Route>
            <Route exact path="/step3">
              <Step3Page />
            </Route>
            <Route exact path="/step4">
              <Step4Page />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <ul className="btn_area">
        <li onClick={onBack}>뒤로</li>
        <li onClick={onNext}>앞으로</li>
      </ul>
    </div>
  );
}

export default App;
