// src/App.js
import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App = () => {
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({ name: '', age: '' });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            // Update logic here
        } else {
            setStudents([...students, student]);
        }
        setStudent({ name: '', mssv: '', email: '', phoneNumber: '', gpa: ''});
        setIsEditing(false);
    };

    const handleEdit = (student) => {
        setStudent(student);
        setIsEditing(true);
    };

    const handleDelete = (index) => {
        const newStudents = students.filter((_, i) => i !== index);
        setStudents(newStudents);
    };

    return (
        <div>
            <h1>Student CRUD App</h1>
            <StudentForm 
                student={student}
                onChange={handleChange}
                onSubmit={handleSubmit}
                isEditing={isEditing}
            />
            <StudentList 
                students={students}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default App;