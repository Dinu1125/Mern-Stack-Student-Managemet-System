import axios from "axios";
import React, { useState, useEffect } from "react";

function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students data when the component mounts
    function getStudents() {
      axios
        .get("http://localhost:8000/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }

    getStudents(); // Call the function to fetch students data
  }, []); // Empty dependency array ensures the effect runs only once, on mount

  return (
    <div>
      <h1>All Students</h1>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllStudents;
