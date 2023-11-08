import "./Contact.css";
import Github from "../assets/Github.png";
import LinkedIn from "../assets/LinkedIn.png";

export default function Contact() {
  return (
    <section>
      <article>
        <form>
          <div className="name-email">
            <input
              className="contactInput"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="contactInput"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="contact-input">
            <input
              className="contactInput"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="contactInput"
              id="message"
              placeholder="Message"
              rows="4"
              name="message"
              required
            />
            <button type="submit">Send Message</button>
          </div>
        </form>
      </article>
      <article>
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
      </article>
    </section>
  );
}
