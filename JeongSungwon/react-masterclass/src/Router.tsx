import {BrowserRouter, Switch, Route} from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/React/:coinId">
          <Coin isDark={isDark} />
        </Route>
        <Route path="/React">
          <Coins isDark={isDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
