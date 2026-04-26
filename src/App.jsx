// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StudentProfile from "./pages/StudentProfile";
import Academics from "./pages/Academics";
import { AppProvider } from "./context/Contextapi";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/student" element={<StudentProfile />} />
          <Route path="/Academics" element={<Academics />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;