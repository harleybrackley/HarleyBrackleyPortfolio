import "./Projects.css";
import TicTacToe from "../assets/TicTacToe_screenshot.png";
import FuzzFeed from "../assets/FuzzFeed_screenshot.png";
import RefillRouter from "../assets/RefillRouter_screenshot.png";
import JavaScript from "../assets/JavaScript.png";
import CSS from "../assets/CSS.png";
import ExpressJs from "../assets/ExpressJs.png";
import Github from "../assets/Github.png";
import HTML from "../assets/HTML.png";
import MUI from "../assets/MUI.png";
import PostgreSQL from "../assets/PostgreSQL.png";
import MongoDB from "../assets/MongoDB.png";
import NodeJs from "../assets/NodeJs.png";
import ReactJs from "../assets/ReactJs.png";
import Cloudinary from "../assets/Cloudinary.png";
import Portfolio from "../assets/Portfolio_Screenshot.png";
import { useState } from "react";

export default function ProjectThree() {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <article className="project-item-wrapper" onClick={handleFlip}>
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <div className="card-content">
            <h2>Refill Router</h2>

            <img src={RefillRouter} />
          </div>
        </div>

        <div className="flip-card-back">
          <div className="card-content">
            <p>
              A single page application using our own RESTful JSON API and the
              GoogleMaps API and a Futures API to display petrol station
              locations across Australia. Features include petrol station stats,
              a spotlight highlighting a particular petrol station, map center
              address information, a clock, a live Oil price display, and an
              address search function.
            </p>
            <section className="project-links">
              <p>
                <a href="https://github.com/harleybrackley/refill-router">
                  Github
                </a>
              </p>
              <div className="link-divider"></div>
              <p>
                <a href="https://github.com/harleybrackley/refill-router">
                  Demo - Not currently deployed sorry
                </a>
              </p>
            </section>
            <div className="project-stacks">
              <img src={HTML} alt="HTML" />
              <img src={CSS} alt="CSS" />
              <img src={JavaScript} alt="JavaScript" />
              <img src={NodeJs} alt="NodeJs" />
              <img src={ExpressJs} alt="ExpressJs" />
              <img src={PostgreSQL} alt="PostgreSQL" />
              <img src={Github} alt="Github" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
