// CreateStudent Component for add new student
  
// Import Modules
const BASE_URL = import.meta.env.VITE_BASE_URL; 
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";
import {useNavigate} from "react-router-dom";
  
// CreateStudent Component
const CreateStudent = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = 
    useState({ name: '', email: '', rollno: '' })
  // onSubmit handler
  const handleSubmit =async(studentObject) => {

    try{
const res = await   axios.post(`${BASE_URL}/create-student`, 
      studentObject);
      if (res.status === 200){
                  alert('Student successfully created'); 
                  navigate("/student-list")
                }
                else{
                  throw new Error('Failed to create student');
              }
    }catch(err){
      alert('Something went wrong', err.message)
    }

}
  // Return student form
  return(
    <StudentForm initialValues={formValues} 
      onSubmit={handleSubmit} 
      enableReinitialize>
      Create Student
    </StudentForm>
  )
}
  
// Export CreateStudent Component
export default CreateStudent