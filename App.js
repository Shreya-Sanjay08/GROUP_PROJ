// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainPage from "./MainPage";
// import StudentDashboard from "./StudentDashboard";
// import TeacherDashboard from "./TeacherDashboard";
// import "./App.css";
// import backgroundImage from "./assets/background.jpg"; // ✅ Import the image

// function App() {
//   return (
//     <div className="background"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//       }}
//     >
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/student" element={<StudentDashboard />} />
//         <Route path="/teacher" element={<TeacherDashboard />} />
//       </Routes>
//     </Router>
//     </div>
//   );
// }


// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";
import "./App.css";

function App() {
  return (
    <>
      <div className="background"></div> {/* Background layer with opacity */}
      <div className="container">
        <div className="overlay"> {/* Semi-transparent overlay */}
          <h1>Welcome to Smart Classroom</h1>
          <Router>
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/student" element={<StudentDashboard />} />
//         <Route path="/teacher" element={<TeacherDashboard />} />
//       </Routes>
//     </Router>
        </div>
      </div>
    </>
  );
}

export default App;
