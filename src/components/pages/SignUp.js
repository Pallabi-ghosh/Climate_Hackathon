import React from "react";
import "../../App.css";
import SignUpContainer from "./SignUpContainer"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


export default function SignUp() {
  return (
    <MuiThemeProvider>
      <SignUpContainer />
    </MuiThemeProvider>
  );
}
