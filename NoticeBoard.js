import React, { useState } from "react";
import { db, doc, setDoc } from "./firebase";  // ✅ Correct import

//import { doc, setDoc } from "firebase/firestore";

const NoticeBoard = () => {
  const [notice, setNotice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (notice.trim() !== "") {
      try {
        await setDoc(doc(db, "notices", "latestNotice"), { text: notice });
        alert("📢 Notice updated successfully!");
        setNotice("");
      } catch (error) {
        console.error("❌ Error updating notice:", error);
      }
    }
  };

  return (
    <div className="notice-board">
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter your notice here..."
          value={notice}
          onChange={(e) => setNotice(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default NoticeBoard;

