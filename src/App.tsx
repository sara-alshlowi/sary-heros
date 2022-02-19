import React, { lazy, Suspense } from "react";
import "./App.css";
import RouterOutlet from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";

const Layout = lazy(() => import("./components/Layout"));

function App() {
  return (
    <Suspense fallback="...">
      <Router>
        <Layout>
          <RouterOutlet />
        </Layout>
      </Router>
    </Suspense>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
