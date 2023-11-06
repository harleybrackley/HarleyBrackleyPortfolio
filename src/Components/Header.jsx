import "./Header.css";

export default function Header() {
  return (
    <section className="header-wrapper">
      <h1>HB</h1>
      <ul className="nav-bar">
        <li>Home</li>
        <li>Intro</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <ul className="link-bar">
        <li>Github</li>
        <li>LinkedIn</li>
        <li>Email</li>
      </ul>
    </section>
  );
}
