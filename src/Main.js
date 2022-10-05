import { Route, Switch } from "react-router-dom";
import Article from "./Article";
import Articles from "./Articles";
import Contact from "./Contact";
import Help from "./Help";
import Home from "./Home";
import NotFound from "./NotFound";
import Peoples from "./People";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Main() {
  const user = useContext(UserContext);
  return (
    <div className="page-content">
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/help" component={Help} />
        <Route path="/articles" exact component={() => <Articles />} />
        <Route
          path="/people"
          component={() => (
            <Peoples isLogin={user.isLogin} people={user.people} />
          )}
        />
        <Route path="/contact" component={Contact} />
        <Route path="/articles/:slug" component={({ match }) => <Article />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default Main;
