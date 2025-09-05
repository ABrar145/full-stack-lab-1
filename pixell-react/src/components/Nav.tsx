export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-800 text-white">
      <img src="/logo.png" alt="Pixell River Logo" className="h-10" />
      <ul className="flex gap-4">
        <li><a href="#">Employees</a></li>
        <li><a href="#">Organization</a></li>
      </ul>
    </nav>
  );
}
