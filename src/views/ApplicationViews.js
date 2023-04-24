import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { AboutMe } from "../aboutMe/AboutMe";
import { Projects } from "../projects/Projects";
import { Resume } from "../resume/Resume";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>

            <Outlet />
          </>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  );
};