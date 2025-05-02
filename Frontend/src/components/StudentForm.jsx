import { useState } from 'react';

export default function StudentForm({ onAdd }) {
  const [student, setStudent] = useState({ name: '', mark: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!student.name || !student.mark) return;
    await onAdd(student);
    setStudent({ name: '', mark: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white rounded shadow w-full max-w-md">
      <input
        type="text"
        placeholder="Name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
        className="p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Mark"
        value={student.mark}
        onChange={(e) => setStudent({ ...student, mark: e.target.value })}
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Student
      </button>
    </form>
  );
}
