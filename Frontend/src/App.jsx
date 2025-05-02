import { useEffect, useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await fetch('http://localhost:8085/api/students');
    const data = await res.json();
    setStudents(data);
  };

  const addStudent = async (student) => {
    await fetch('http://localhost:8085/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Student Mark Manager</h1>
      <div className="flex flex-col items-center">
        <StudentForm onAdd={addStudent} />
        <StudentList students={students} />
      </div>
    </div>
  );
}

export default App;
