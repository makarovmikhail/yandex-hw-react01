import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Content} from "@features/layouts/start-screen/content";
import {Footer} from "@features/footer";
import {Header} from "@features/header";
import {UIStartScreen} from "@ui/layouts/start-screen";
import {Settings} from "@features/layouts/settings";
import {History} from "@features/layouts/history";
import {RootState} from "@data-access/store";
import {useSelector} from "react-redux";

import routes from "@routes";

const AppRouter = () => {
  const settings = useSelector((state: RootState) => state.settings);
  return (
    <Router>
      <UIStartScreen>
        <Header />
        <Switch>
          <Route path={routes.start}>
            <Content />
          </Route>
          <Route path={routes.history}>
            <History />
          </Route>
          <Route path={routes.settings}>
            <Settings />
          </Route>
          <Route
            exact
            path={"/"}
            render={() => {
              return settings.settings.isSet ? (
                <Redirect to={routes.history} />
              ) : (
                <Redirect to={routes.start} />
              );
            }}
          />
        </Switch>
        <Footer />
      </UIStartScreen>
    </Router>
  );
};

export default AppRouter;
