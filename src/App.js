import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout";
import LandingPage from "./pages/landing";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
