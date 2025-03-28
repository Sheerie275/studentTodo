// EditStudent Component for update student data
  
// Import Modules
const BASE_URL = import.meta.env.VITE_BASE_URL;
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { useNavigate, useParams } from "react-router-dom";
  
// EditStudent Component
const EditStudent = (props) => {
  const navigate = useNavigate();
  const {id} =  useParams();
  console.log(id)


  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });
    
  // onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .put(
        `${BASE_URL}/update-student/${id}`,
        studentObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          // props.history.push("/student-list");
          navigate("/student-list");
          
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/student/` 
        + id
      )
      .then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({ name, email,  rollno });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Student
    </StudentForm>
    
  );
};
  
// Export EditStudent Component
export default EditStudent;