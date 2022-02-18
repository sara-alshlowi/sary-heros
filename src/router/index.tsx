import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "../components/Home";
const Home = lazy(() => import("../components/Home"));

const RouterOutlet = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default RouterOutlet;
