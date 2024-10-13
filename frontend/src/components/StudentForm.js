// src/components/StudentForm.js
import React from 'react';

const StudentForm = ({ student, onChange, onSubmit, isEditing }) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="mssv"
                placeholder="MSSV"
                value={student.mssv}
                onChange={onChange}
                required
            />
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={student.name}
                onChange={onChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={student.email}
                onChange={onChange}
                required
            />
            <input
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                value={student.phoneNumber}
                onChange={onChange}
                required
            />
            <input
                type="text"
                name="gpa"
                placeholder="GPA"
                value={student.gpa}
                onChange={onChange}
                required
            />
            <button type="submit">
                {isEditing ? 'Update Student' : 'Add Student'}
            </button>
        </form>
    );
};

export default StudentForm;