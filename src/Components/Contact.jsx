import "./Contact.css";
import Github from "../assets/Github.png";
import LinkedIn from "../assets/LinkedIn.png";

export default function Contact() {
  return (
    <section>
      <ul className="link-bar">
        <li>
          <a href="https://github.com/harleybrackley">Github</a>
          <img src={Github} />
        </li>
        <li>
          <a href="https://www.linkedin.com/in/harleybrackley/">LinkedIn</a>
          <img src={LinkedIn} />
        </li>
      </ul>
    </section>
  );
}
