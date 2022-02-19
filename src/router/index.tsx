import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../components/Home"));
const Profile = lazy(() => import("../components/Profile"));

const RouterOutlet = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
};
export default RouterOutlet;
