import React from 'react';
import { Redirect, Route } from 'react-router';


const PrivateRoute = ({ children, ...rest }) => {
  const user=(localStorage.getItem("user"))
  console.log(user)
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;

