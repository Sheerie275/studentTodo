const BASE_URL = import.meta.env.VITE_BASE_URL; 
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
//custom component
import StudentTableRow from "./StudentTableRow";
  
const StudentList = () => {
 
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then(({ data }) => {
        setStudents(data);
       
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default StudentList;