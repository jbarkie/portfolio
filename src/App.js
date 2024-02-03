import { useState, useEffect } from "react";
import NotFound from "./components/NotFound";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import "./static/css/styles.css";

function App() {
  const [validRoute, setValidRoute] = useState(true);

  useEffect(() => {
    const path = window.location.pathname;
    setValidRoute(validateRoute(path));
  }, []);

  return (
    <div className="App">
      { validRoute ? (
        <>
          <Sidebar></Sidebar>
          <Page></Page>
        </>
      ) : (
        <NotFound/>
      )}
    </div>
  );
}

function validateRoute(route) {
  const validRoutes = ["/"];
  return validRoutes.includes(route);
}

export default App;
