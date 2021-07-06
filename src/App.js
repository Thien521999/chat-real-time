// libs
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// router
import { routes } from "./router/appRouter";
// context
import AuthContextProvider from "./Contexts/AuthContext";
// others
import "./App.css";

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          {routes.map((item) => (
            <Route
              key={item.id}
              path={item.path}
              component={item.component}
              exact
            />
          ))}
        </Switch>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
