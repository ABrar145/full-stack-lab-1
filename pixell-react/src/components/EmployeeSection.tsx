import { Department } from "../types";

interface Props {
  dept: Department;
}

export default function EmployeeSection({ dept }: Props) {
  return (
    <section className="mb-6">
      <h4 className="text-lg font-semibold mb-2">{dept.department}</h4>
      <ul className="list-disc pl-6">
        {dept.employees.map((emp, i) => (
          <li key={i}>{emp}</li>
        ))}
      </ul>
    </section>
  );
}
