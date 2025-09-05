import { useEffect, useState } from "react";
import { Department } from "../types";
import EmployeeSection from "./EmployeeSection";

export default function EmployeeList() {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
  fetch("/employees.json")
    .then((res) => {
      console.log("Fetch status:", res.status); 
      return res.json();
    })
    .then((data: Department[]) => {
      console.log("Fetched data:", data); 
      setDepartments(data);
    })
    .catch((err) => console.error("Error loading employees:", err));
}, []);


  return (
    <main className="p-4">
      <h2 className="text-xl font-bold mb-4">Employee Directory</h2>
      {departments.map((dept, i) => (
        <EmployeeSection key={i} dept={dept} />
      ))}
    </main>
  );
}
