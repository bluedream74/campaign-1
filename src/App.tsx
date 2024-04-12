import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
