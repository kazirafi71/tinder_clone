import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "./Login.css";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "red",
  },
}));

const Login = () => {
  const classes = useStyles();
  const provider = new firebase.auth.GoogleAuthProvider();
  var provider2 = new firebase.auth.FacebookAuthProvider();

//   firebase.auth().signInWithRedirect(provider);

//   const fbHandler = () => {
      
//     firebase.auth()
//   .getRedirectResult()
//   .then((result) => {
//     if (result.credential) {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;

//       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//       var token = credential.accessToken;
//       // ...
//     }
//     // The signed-in user info.
//     var user = result.user;
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   })
// }

  const handleAuth = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result.user)
        var credential = result.credential;
        var token = credential.accessToken;

        var user = result.user;
        // console.log(user)
        // console.log(token)
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("auth", token);
        history.push("/");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
      });
  };
  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      history.push("/");
    } else {
      history.push("/login");
    }
  }, []);
  return (
    <Container className="login__container">
      <Paper component={Box} className="login__style">
        <Button onClick={handleAuth}>Sign In With Google</Button>
        {/* <Button onClick={fbHandler}>Sign In With Facebook</Button> */}
      </Paper>
    </Container>
  );
}

export default Login;
