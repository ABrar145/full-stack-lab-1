import "./App.css";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div>
      <header className="site-header">
        <div className="logo-title">
          <img src="/logo.jpeg" alt="Pixell River Financial Logo" className="logo" />
          <div>
            <h1>Pixell River Financial</h1>
            <p>Welcome to the employee directory!</p>
          </div>
        </div>
        <nav>
          <a href="#">Employees</a>
          <a href="#">Organization</a>
        </nav>
      </header>

      <EmployeeList />

      <footer>
        Copyright © Pixell River Financial {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
