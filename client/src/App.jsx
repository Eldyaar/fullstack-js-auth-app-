import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Result } from "antd";

import { useAuth } from "./contexts/AuthContext";

import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const { isAuthenticate } = useAuth();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticate ? <Register /> : <Navigate to="/dashboard" />
          }
        />
        <Route
          path="/login"
          element={!isAuthenticate ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticate ? <Dashboard /> : <Login />}
        />
        <Route
          path="*"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Page no found"
              style={{ padding: 20 }}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
