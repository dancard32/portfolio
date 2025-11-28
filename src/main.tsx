import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Card, H1, Text } from "@blueprintjs/core";
import useStylingStore from "./redux/store";
import { useShallow } from "zustand/react/shallow";
import { Spinner } from "@blueprintjs/core";

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "@blueprintjs/table/lib/css/table.css";

import routes from "~react-pages";
import PageNotFound from "./_pages/PageNotFound";
import ResponsiveNavbar from "./feature/nav/NavBar";
import FallBackComponent from "./components/FallBackComponent";

export function App() {
  const { isDark, isMobile } = useStylingStore(
    useShallow((state) => ({ isDark: state.isDark, isMobile: state.isMobile }))
  );

  return (
    <Suspense fallback={<FallBackComponent />}>
      <div className={`${isDark ? "bp6-dark" : "bp6"}`}>
        {!isMobile ? <ResponsiveNavbar /> : null}
        <div className="main-content w-full h-[93vh]!">
          {useRoutes([...routes, { path: "*", element: <PageNotFound /> }])}
        </div>
        {!isMobile ? null : <ResponsiveNavbar />}
      </div>
    </Suspense>
  );
}

const app = createRoot(document.getElementById("root")!);

app.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
