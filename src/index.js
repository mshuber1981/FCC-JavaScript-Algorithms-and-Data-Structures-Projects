import React from "react";
import ReactDOM from "react-dom/client";
// https://reactjs.org/docs/context.html
import { AppProvider } from "./appContext";
// https://github.com/staylor/react-helmet-async
import { Helmet, HelmetProvider } from "react-helmet-async";
// https://create-react-app.dev/docs/adding-bootstrap
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <HelmetProvider>
      <Helmet>
        {/* Essential META Tags */}
        <meta property="og:title" content="FCC JS Algos and DS Projects" />
        {/* https://ogp.me/#type_website */}
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mshuber1981.github.io/FCC-JavaScript-Algorithms-and-Data-Structures-Projects/fcc.png"
        />
        <meta
          property="og:url"
          content="https://mshuber1981.github.io/FCC-JavaScript-Algorithms-and-Data-Structures-Projects/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Non-Essential, But Recommended */}
        <meta
          property="og:description"
          content="My freecodecamp.org JavaScript Algorithms and Data Structures projects."
        />
        <meta property="og:site_name" content="CRA Starter" />
        <meta name="twitter:image:alt" content="Create React App" />
      </Helmet>
      <App />
    </HelmetProvider>
  </AppProvider>
);
