export default function StudentList({ students }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Student List</h2>
      <ul className="space-y-2">
        {students.map((s) => (
          <li key={s.id} className="flex justify-between bg-gray-100 p-3 rounded shadow">
            <span>{s.name}</span>
            <span>{s.mark}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
