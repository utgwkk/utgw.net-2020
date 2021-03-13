/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "../styles/main.css";

interface MyAppArgs {
  Component: any;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: MyAppArgs) => {
  return <Component {...pageProps} />;
};

export default MyApp;
