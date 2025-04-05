// import React, { useState, useEffect } from "react";
// import { db, doc, getDoc } from "./firebase"; // Import Firebase Firestore functions

// const StudentDashboard = () => {
//   const [name, setName] = useState("");
//   const [course, setCourse] = useState("");
//   const [studentData, setStudentData] = useState(null);
//   const [error, setError] = useState("");
//   const [showWarning, setShowWarning] = useState(false);

//   const handleLogin = async () => {
//     setError(""); // Reset error
//     setStudentData(null); // Reset previous data
//     setShowWarning(false); // Reset warning state

//     if (!name || !course) {
//       setError("Please enter both Name and Course.");
//       return;
//     }

//     try {
//       const studentRef = doc(db, "STUDENTS", name); // Fetch student by name
//       const studentSnap = await getDoc(studentRef);

//       if (studentSnap.exists()) {
//         const data = studentSnap.data();

//         // Check if course matches
//         if (data.course_name === course) {
//           setStudentData(data);
//           const attendancePercentage = (data.attended_classes / data.total_classes) * 100;

//           // Delay showing warning until after data is displayed
//           setTimeout(() => {
//             if (attendancePercentage < 75) {
//               setShowWarning(true);
//             }
//           }, 500); 
          
//         } else {
//           setError("Course name does not match our records.");
//         }
//       } else {
//         setError("Student not found. Please check your name.");
//       }
//     } catch (err) {
//       console.error("Error fetching student data:", err);
//       setError("Failed to fetch student data.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Student Dashboard</h2>

//       <input
//         type="text"
//         placeholder="Enter your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={styles.input}
//       />
//       <input
//         type="text"
//         placeholder="Enter your Course"
//         value={course}
//         onChange={(e) => setCourse(e.target.value)}
//         style={styles.input}
//       />

//       <button onClick={handleLogin} style={styles.button}>Login</button>

//       {error && <p style={styles.error}>{error}</p>}

//       {studentData && (
//         <div style={styles.dataContainer}>
//           <h3>Welcome, {name}!</h3>
//           <p><strong>Course:</strong> {studentData.course_name}</p>
//           <p><strong>Attended Classes:</strong> {studentData.attended_classes}</p>
//           <p><strong>Total Classes:</strong> {studentData.total_classes}</p>
//           <p><strong>Attendance Percentage:</strong> {((studentData.attended_classes / studentData.total_classes) * 100).toFixed(2)}%</p>
//         </div>
//       )}

//       {/* Show warning AFTER student data is displayed */}
//       {showWarning && alert("⚠️ Warning: Your attendance is less than 75%!")}
      
//     </div>
//   );
// };

// // Styling
// const styles = {
//   container: { textAlign: "center", padding: "20px" },
//   input: { margin: "10px", padding: "10px", width: "250px", fontSize: "16px" },
//   button: { background: "green", color: "white", padding: "10px 20px", border: "none", cursor: "pointer" },
//   error: { color: "red", fontWeight: "bold" },
//   dataContainer: { marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "5px" },
// };

// export default StudentDashboard;

import React, { useState } from "react";
import { db, doc, getDoc } from "./firebase";  // ✅ Correct import

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";


// Register required components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const StudentDashboard = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [warning, setWarning] = useState("");

  const handleLogin = async () => {
    try {
      const studentRef = doc(db, "STUDENTS", name);
      const studentSnap = await getDoc(studentRef);

      if (studentSnap.exists() && studentSnap.data().course_name === course) {
        const data = studentSnap.data();
        setStudentData(data);
        
        // Show warning if attendance < 75%
        const attendancePercentage = (parseInt(data.attended_classes) / data.total_classes) * 100;
        if (attendancePercentage < 75) {
          setTimeout(() => {
            alert("⚠ Warning: Your attendance is less than 75%");
          }, 500);
        }
      } else {
        setStudentData(null);
        setWarning("Failed to fetch student data.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setWarning("Failed to fetch student data.");
    }
  };

  return (
    <div className="container">
      <h2>Student Dashboard</h2>
      <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Enter Course" onChange={(e) => setCourse(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

      {studentData && (
        <div>
          <h3>Welcome, {name}</h3>
          <p>Course: {studentData.course_name}</p>
          <p>Attended Classes: {studentData.attended_classes}</p>
          <p>Total Classes: {studentData.total_classes}</p>

          <h3>Attendance Chart</h3>
          <Pie
            data={{
              labels: ["Attended", "Missed"],
              datasets: [
                {
                  data: [studentData.attended_classes, studentData.total_classes - studentData.attended_classes],
                  backgroundColor: ["#28a745", "#dc3545"],
                },
              ],
            }}
          />
        </div>
      )}
      {warning && <p className="warning">{warning}</p>}
    </div>
  );
};

export default StudentDashboard;
