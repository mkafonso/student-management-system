import React from "react";
import { Switch, Route } from "react-router-dom";

// import pages
import Dashboard from "../pages/Dashboard/Dashboard";
import Students from "../pages/Students/Students";

// import components
import DefaultLayout from "../components/Layouts/DefaultLayout/DefaultLayout";

// import libs
import routes from "../lib/routes";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.root.path}
        component={() => (
          <DefaultLayout>
            <Dashboard />
          </DefaultLayout>
        )}
      />

      <Route
        exact
        path={routes.students.path}
        component={() => (
          <DefaultLayout>
            <Students />
          </DefaultLayout>
        )}
      />

      <Route
        exact
        path="/*"
        component={() => (
          <DefaultLayout>
            <h1>Not Found</h1>
          </DefaultLayout>
        )}
      />
    </Switch>
  );
};

export default Routes;
