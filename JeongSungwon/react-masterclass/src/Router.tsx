import {BrowserRouter, Switch, Route} from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/React/:coinId">
          <Coin />
        </Route>
        <Route path="/React">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
