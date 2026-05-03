import { useEffect, useMemo, useState } from "react";
import { projects } from "./data/projects.js";
import LandingPage from "./pages/LandingPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  return hash || "/";
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const scrollFrame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0 });
    });

    return () => window.cancelAnimationFrame(scrollFrame);
  }, [route]);

  const projectMap = useMemo(
    () => new Map(projects.map((project) => [project.slug, project])),
    [],
  );

  if (route.startsWith("/projects/")) {
    const slug = route.replace("/projects/", "");
    return <ProjectPage project={projectMap.get(slug)} />;
  }

  return <LandingPage projects={projects} />;
}
