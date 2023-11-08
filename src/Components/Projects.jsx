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

export default function Projects() {
  return (
    <div className="project-wrapper">
      <div className="project-shifter"></div>
      <article className="project-1-wrapper">
        <h2>Project 1</h2>
        <div className="project-details">
          <img src={TicTacToe} />

          <aside className="project-aside">
            <section className="project-links">
              <p>
                <a href="https://github.com/harleybrackley/Project-One-Repo">
                  Github
                </a>
              </p>
              <div className="link-divider"></div>
              <p>
                <a href="https://harleybrackley.github.io/Project-One-Repo/">
                  Demo
                </a>
              </p>
            </section>
            <p>
              A simple tic-tac-toe game where 2 users can play tic-tac-toe
              against each other. Features include win counters, a draw counter,
              and a total round counter.
            </p>
            <div className="project-stacks">
              <img src={HTML} alt="HTML" />
              <img src={CSS} alt="CSS" />
              <img src={JavaScript} alt="JavaScript" />
              <img src={Github} alt="Github" />
            </div>
          </aside>
        </div>
      </article>

      <article className="project-2-wrapper">
        <h2>Project 2</h2>
        <div className="project-details">
          <img src={FuzzFeed} />

          <aside className="project-aside">
            <section className="project-links">
              <p>
                <a href="https://github.com/harleybrackley/FuzzFeed">Github</a>
              </p>
              <div className="link-divider"></div>
              <p>
                <a href="https://fuzzfeed.onrender.com/">Demo</a>
              </p>
            </section>
            <p>
              A full stack CRUD app where users can share their pets. Features
              include sign-up, add pet profiles, edit pet profiles, and image
              uploading.
            </p>
            <div className="project-stacks">
              <img src={HTML} alt="HTML" />
              <img src={CSS} alt="CSS" />
              <img src={JavaScript} alt="JavaScript" />
              <img src={NodeJs} alt="NodeJs" />
              <img src={ExpressJs} alt="ExpressJs" />
              <img src={Cloudinary} alt="Cloudinary" />
              <img src={Github} alt="Github" />
            </div>
          </aside>
        </div>
      </article>

      <article className="project-3-wrapper">
        <h2>Project 3</h2>
        <div className="project-details">
          <img src={RefillRouter} />

          <aside className="project-aside">
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
            <p>
              A single page application using our own RESTful JSON API and the
              GoogleMaps API and a Futures API to display petrol station
              locations across Australia. Features include petrol station stats,
              a spotlight highlighting a particular petrol station, map center
              address information, a clock, a live Oil price display, and an
              address search function.
            </p>
            <div className="project-stacks">
              <img src={HTML} alt="HTML" />
              <img src={CSS} alt="CSS" />
              <img src={JavaScript} alt="JavaScript" />
              <img src={NodeJs} alt="NodeJs" />
              <img src={ExpressJs} alt="ExpressJs" />
              <img src={PostgreSQL} alt="PostgreSQL" />
              <img src={Github} alt="Github" />
            </div>
          </aside>
        </div>
      </article>

      <article className="project-4-wrapper">
        <h2>Project 4</h2>
        <div className="project-details">
          <img src={Portfolio} />

          <aside className="project-aside">
            <section className="project-links">
              <p>
                <a href="https://github.com/harleybrackley/HarleyBrackleyPortfolio">
                  Github
                </a>
              </p>
              <div className="link-divider"></div>
              <p>
                <a href="https://www.harleybrackley.com">Demo</a>
              </p>
            </section>
            <p>This! My own personal portfolio made using ReactJs.</p>
            <div className="project-stacks">
              <img src={HTML} alt="HTML" />
              <img src={CSS} alt="CSS" />
              <img src={JavaScript} alt="JavaScript" />
              <img src={ReactJs} alt="ReactJs" />
              <img src={Github} alt="Github" />
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
