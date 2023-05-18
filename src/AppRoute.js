import Clock from "./pages/dashboard/components/Clock";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoute() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path="/" element={<Clock />} />
              </Routes>
          </Router>
      </div>
  );
}

export default AppRoute;