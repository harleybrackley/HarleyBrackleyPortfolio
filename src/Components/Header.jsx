import "./Header.css";

export default function Header() {
  return (
    <section className="header-wrapper">
      <h1 className="HB">HB</h1>
      <ul className="nav-bar">
        <li
          className="nav-bar-links"
          onClick={() => handleSectionChange("intro")}
        >
          Intro
        </li>
        <li
          className="nav-bar-links"
          onClick={() => handleSectionChange("projects")}
        >
          Projects
        </li>
        <li
          className="nav-bar-links"
          onClick={() => handleSectionChange("skills")}
        >
          Skills
        </li>
        <li
          className="nav-bar-links"
          onClick={() => handleSectionChange("contact")}
        >
          Contact
        </li>
      </ul>
    </section>
  );
}
