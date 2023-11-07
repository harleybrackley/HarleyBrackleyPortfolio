import "./Header.css";

export default function Header() {
  return (
    <section className="header-wrapper">
      <h1 className="HB">HB</h1>
      <ul className="nav-bar">
        <li className="nav-bar-links">Home</li>
        <li className="nav-bar-links">Skills</li>
        <li className="nav-bar-links">Projects</li>
        <li className="nav-bar-links">Contact</li>
      </ul>
    </section>
  );
}
