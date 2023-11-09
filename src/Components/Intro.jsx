import "./intro.css";
import Harley from "../assets/Harley.png";

export default function Intro() {
  return (
    <article className="intro-wrapper">
      <img className="profile-pic" src={Harley} alt="Harley" />

      <div className="section-wrapper">
        <section className="intro-section-1">
          <h1>Hello, World!</h1>
          <p>
            My name is Harley Brackley, I am a Software Engineer based in
            Melbourne.
          </p>
        </section>

        <section className="intro-section-2">
          <p>
            I am always looking for new and interesting challenges and ways to
            use my skills help create real solutions with a positive impact. I
            have recently completed General Assembly’s Software Engineering
            Immersive Course, a 12 week full time bootcamp where I have
            developed a strong understanding of both front end and back end
            technologies. Through my experience as a Surgical Instrument
            Technician, I bring strong attention to detail and critical thinking
            with a methodical approach to problem solving.
          </p>
        </section>
      </div>
    </article>
  );
}
