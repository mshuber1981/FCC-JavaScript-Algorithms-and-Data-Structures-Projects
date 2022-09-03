import React from "react";
// https://reactrouter.com/web/guides/quick-start
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Palindrome from "../pages/Palindrome";
import RomanNumerals from "../pages/RomanNumerals";
import Rot13 from "../pages/Rot13";
import ValidPhoneNumber from "../pages/ValidPhoneNumber";
import CashRegister from "../pages/CashRegister";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Palindrome-Checker">
        <Palindrome />
      </Route>
      <Route exact path="/Roman-Numeral-Converter">
        <RomanNumerals />
      </Route>
      <Route exact path="/ROT13">
        <Rot13 />
      </Route>
      <Route exact path="/Valid-Phone-Number">
        <ValidPhoneNumber />
      </Route>
      <Route exact path="/Cash-Register">
        <CashRegister />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
