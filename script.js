document.addEventListener("DOMContentLoaded", () => {
  const employeeList = document.getElementById("employee-list");

fetch("./employees.json")
  .then(res => res.json())
  .then(data => {
    console.log("Loaded employees:", data); // ✅ debug output
    data.forEach(dept => {
      const section = document.createElement("section");

      const h4 = document.createElement("h4");
      h4.textContent = dept.department;
      section.appendChild(h4);

      const ul = document.createElement("ul");
      dept.employees.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
      });

      section.appendChild(ul);
      employeeList.appendChild(section);
    });
  })
  .catch(err => console.error("Fetch error:", err));



  document.getElementById("year").textContent = new Date().getFullYear();
});


