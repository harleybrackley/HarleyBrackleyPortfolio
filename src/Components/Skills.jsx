import "./Skills.css";
import React from "react";
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

export default function Skills() {
  return (
    <>
      <section className="skills-wrapper-1">
        <section>
          <img src={JavaScript} alt="JavaScript" />
          <p>JavaScript</p>
        </section>

        <section>
          <img src={CSS} alt="CSS" />
          <p>CSS</p>
        </section>

        <section>
          <img src={ExpressJs} alt="ExpressJs" />
          <p>ExpressJs</p>
        </section>

        <section>
          <img src={Github} alt="Github" />
          <p>Github</p>
        </section>

        <section>
          <img src={HTML} alt="HTML" />
          <p>HTML</p>
        </section>

        <section>
          <img src={Cloudinary} alt="Cloudinary" />
          <p>Cloudinary</p>
        </section>
      </section>

      <section className="skills-wrapper-2">
        <section>
          <img src={MUI} alt="MUI" />
          <p>MUI</p>
        </section>

        <section>
          <img src={PostgreSQL} alt="PostgreSQL" />
          <p>PostgreSQL</p>
        </section>

        <section>
          <img src={MongoDB} alt="MongoDB" />
          <p>MongoDB</p>
        </section>

        <section>
          <img src={NodeJs} alt="NodeJs" />
          <p>NodeJs</p>
        </section>

        <section>
          <img src={ReactJs} alt="ReactJs" />
          <p>ReactJs</p>
        </section>
      </section>
    </>
  );
}
