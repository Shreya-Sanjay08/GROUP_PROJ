// import React, { useState, useEffect } from "react";
// import { db, collection, getDocs } from "./firebase"; // ✅ Import getDocs correctly

// const TeacherDashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const studentsCollection = collection(db, "STUDENTS"); // ✅ Fetch collection
//         const studentsSnapshot = await getDocs(studentsCollection);
        
//         const studentsList = studentsSnapshot.docs.map(doc => ({
//           id: doc.id, 
//           ...doc.data(),
//         }));

//         setStudents(studentsList);
//       } catch (err) {
//         console.error("Error fetching students:", err);
//         setError("Failed to fetch students.");
//       }
//     };

//     fetchStudents();
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h2>Teacher Dashboard</h2>

//       {error && <p style={styles.error}>{error}</p>}

//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Course</th>
//             <th>Attended Classes</th>
//             <th>Total Classes</th>
//             <th>Attendance %</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.id}</td>
//               <td>{student.course_name}</td>
//               <td>{student.attended_classes}</td>
//               <td>{student.total_classes}</td>
//               <td>{((student.attended_classes / student.total_classes) * 100).toFixed(2)}%</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // Styling
// const styles = {
//   container: { textAlign: "center", padding: "20px" },
//   error: { color: "red", fontWeight: "bold" },
//   table: { width: "80%", margin: "auto", borderCollapse: "collapse" },
//   th: { background: "#4CAF50", color: "white", padding: "10px" },
//   td: { border: "1px solid #ddd", padding: "8px", textAlign: "center" },
// };

// export default TeacherDashboard;

// import React, { useState, useEffect } from "react";
// import NoticeBoard from "./NoticeBoard";
// import { db, collection, getDocs } from "./firebase";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
// } from "chart.js";

// import { Pie, Bar } from "react-chartjs-2";

// // Register required components
// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title
// );

// const TeacherDashboard = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       const studentsCollection = collection(db, "STUDENTS");
//       const studentsSnapshot = await getDocs(studentsCollection);
//       const studentList = studentsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setStudents(studentList);
//     };

//     fetchStudents();
//   }, []);

//   return (
//     <div className="container">
//       <h2>Teacher Dashboard</h2>
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Course</th>
//               <th>Attended Classes</th>
//               <th>Total Classes</th>
//               <th>Percentage</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => {
//               const percentage =
//                 (parseInt(student.attended_classes) / student.total_classes) * 100;
//               return (
//                 <tr key={student.id}>
//                   <td>{student.id}</td>
//                   <td>{student.course_name}</td>
//                   <td>{student.attended_classes}</td>
//                   <td>{student.total_classes}</td>
//                   <td>{percentage.toFixed(2)}%</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
//////////////////////////////////////////////////////////////////////////////////////////////////////
// // export default TeacherDashboard;
// import React, { useState, useEffect } from "react";
// import NoticeBoard from "./NoticeBoard";
// import { db, collection, getDocs } from "./firebase";  // ✅ Correct import

// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
// } from "chart.js";

// import { Pie, Bar } from "react-chartjs-2";

// // Register required components
// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title
// );

// const TeacherDashboard = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       const studentsCollection = collection(db, "STUDENTS");
//       const studentsSnapshot = await getDocs(studentsCollection);
//       const studentList = studentsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setStudents(studentList);
//     };

//     fetchStudents();
//   }, []);

//   return (
//     <div className="container">
//       <h2>Teacher Dashboard</h2>
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Course</th>
//               <th>Attended Classes</th>
//               <th>Total Classes</th>
//               <th>Percentage</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => {
//               const percentage =
//                 (parseInt(student.attended_classes) / student.total_classes) * 100;
//               return (
//                 <tr key={student.id}>
//                   <td>{student.id}</td>
//                   <td>{student.course_name}</td>
//                   <td>{student.attended_classes}</td>
//                   <td>{student.total_classes}</td>
//                   <td>{percentage.toFixed(2)}%</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* 🔽 ADD NOTICE BOARD SECTION BELOW 🔽 */}
//       <div className="notice-board-section">
//         <h3>📢 Notice Board</h3>
//         <NoticeBoard />
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react"; 
import NoticeBoard from "./NoticeBoard";
import { db, collection, getDocs, updateNotice } from "./firebase";

const TeacherDashboard = () => {
  const [students, setStudents] = useState([]);
  const [noticeText, setNoticeText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const correctPassword = "teacher123"; // Change to a secure password

  useEffect(() => {
    if (isLoggedIn) {
      fetchStudents();
    }
  }, [isLoggedIn]);

  const fetchStudents = async () => {
    const studentsCollection = collection(db, "STUDENTS");
    const studentsSnapshot = await getDocs(studentsCollection);
    const studentList = studentsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStudents(studentList);
  };

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsLoggedIn(true);
    } else {
      alert("❌ Incorrect password! Try again.");
    }
  };

  const handleNoticeUpdate = async () => {
    if (noticeText.trim() === "") {
      alert("❌ Notice cannot be empty!");
      return;
    }
    
    try {
      await updateNotice(noticeText);
      alert("✅ Notice updated successfully!");
      setNoticeText(""); // Clear input after update
    } catch (error) {
      console.error("❌ Error updating notice:", error);
    }
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div className="login-container">
          <h2>Teacher Login</h2>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <>
          <h2>Teacher Dashboard</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Attended Classes</th>
                  <th>Total Classes</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => {
                  const percentage =
                    (parseInt(student.attended_classes) / student.total_classes) * 100;
                  return (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.course_name}</td>
                      <td>{student.attended_classes}</td>
                      <td>{student.total_classes}</td>
                      <td>{percentage.toFixed(2)}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="notice-board-section">
            <h3>📢 Notice Board</h3>
            <NoticeBoard />
          </div>
        </>
      )}
    </div>
  );
};

export default TeacherDashboard;
