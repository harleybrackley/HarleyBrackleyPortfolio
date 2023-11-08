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
      <h1 className="skill-headings">Tech Skills</h1>
      <section className="front-end-wrapper">
        <article>
          <img src={HTML} alt="HTML" />
          <p>HTML</p>
        </article>

        <article>
          <img src={CSS} alt="CSS" />
          <p>CSS</p>
        </article>

        <article>
          <img src={JavaScript} alt="JavaScript" />
          <p>JavaScript</p>
        </article>
        <article>
          <img src={NodeJs} alt="NodeJs" />
          <p>NodeJs</p>
        </article>

        <article>
          <img src={ReactJs} alt="ReactJs" />
          <p>ReactJs</p>
        </article>
      </section>
      <section className="back-end-wrapper">
        <article>
          <img src={ExpressJs} alt="ExpressJs" />
          <p>ExpressJs</p>
        </article>

        <article>
          <img src={PostgreSQL} alt="PostgreSQL" />
          <p>PostgreSQL</p>
        </article>

        <article>
          <img src={MongoDB} alt="MongoDB" />
          <p>MongoDB</p>
        </article>

        <article>
          <img src={Cloudinary} alt="Cloudinary" />
          <p>Cloudinary</p>
        </article>

        <article>
          <img src={Github} alt="Github" />
          <p>Github</p>
        </article>
      </section>
    </>
  );
}
