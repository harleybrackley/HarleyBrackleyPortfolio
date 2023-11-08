import "./Contact.css";
import Github from "../assets/Github.png";
import LinkedIn from "../assets/LinkedIn.png";
import Email from "../assets/Email.png";

export default function Contact() {
  return (
    <section className="contact-wrapper">
      <article className="link-bar">
        <ul>
          <li className="list-items">
            <img src={Email} />
            <p>harleybrackley@gmail.com</p>
          </li>
          <li className="list-items">
            <img src={LinkedIn} />
            <a href="https://www.linkedin.com/in/harleybrackley/">LinkedIn</a>
          </li>
          <li className="list-items">
            <img src={Github} />
            <a href="https://github.com/harleybrackley">Github</a>
          </li>
        </ul>
      </article>
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
    </section>
  );
}
