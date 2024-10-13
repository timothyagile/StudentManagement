// src/components/StudentList.js
import React from 'react';

const StudentList = ({ students, onEdit, onDelete }) => {
    return (
        <table border={1}>
            <tr>
                <th>MSSV</th>
                <th>Họ và tên</th>
                <th>Email</th>
                <th>SĐT</th>
                <th>GPA</th>
            </tr>
            {students.map((student, index) => (
                <tr key={index}>
                    <td>{student.mssv}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phoneNumber}</td>
                    <td>{student.gpa}</td>
                    <td>
                        <button onClick={() => onEdit(student)}>Edit</button>
                        <button onClick={() => onDelete(index)}>Delete</button>
                    </td>
                </tr>
            ))}
        </table>
    );
};

export default StudentList;


{/* <ul>
            {students.map((student, index) => (
                <li key={index}>
                    {student.name} (Age: {student.age})
                    <button onClick={() => onEdit(student)}>Edit</button>
                    <button onClick={() => onDelete(index)}>Delete</button>
                </li>
            ))}
        </ul> */}