import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Students from "./pages/Students/Students";
import StudentProfile from "./pages/Students/StudentProfile/StudentProfile";
import Academics from "./pages/Academics/Academics";
import { AppProvider } from "./context/Contextapi";
import AddStudent from "./pages/Students/components/AddStudent/AddStudent";


function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          {/* Students list page (pehle ye khulega) */}
          <Route path="/students" element={<Students />} />
          <Route path="/students/new" element={<AddStudent />} />

          {/* Particular student profile */}
          <Route path="/students/:studentId" element={<StudentProfile />} />

          <Route path="/academics" element={<Academics />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;