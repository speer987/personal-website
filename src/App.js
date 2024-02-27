import "./App.css";
import Coursework from "./components/Coursework";
import { projects } from "./components/projects";
import Education from "./components/Education";
import { degrees } from "./components/edu";
import Experience from "./components/Experience";
import { experience } from "./components/exp";
import { skills } from "./components/skills";
import Header from "./components/Header";
import AnchorButton from "./components/AnchorButton";

function App() {
  return (
    <div>
      <div id="grid">
        <Header
          role={
            "Computer Science major and Statistics and Data Science minor at Loyola Marymount University"
          }
        />
        <AnchorButton
          href={"#title-one"}
          id={"button-one"}
          text={"Experience"}
        />
        <AnchorButton href={"#title-two"} id={"button-two"} text={"Projects"} />
        <AnchorButton
          href={"#title-three"}
          id={"button-three"}
          text={"Skills"}
        />
        <AnchorButton
          href={"#title-four"}
          id={"button-four"}
          text={"Education"}
        />

        <h2 id="title-three">Skills</h2>

        <h2 id="title-one">Experience</h2>
        <div id="flex-one">
          <Experience experienceList={experience} />
        </div>
        <h2 id="title-two">Projects</h2>
        <div id="flex-two">
          <Coursework courseList={projects} />
        </div>
        <div className="pill-parent">
          {skills?.map((skill) => (
            <div key={skill} className="pill pill-green">
              {skill}
            </div>
          ))}
        </div>
        <h2 id="title-four">Education</h2>
        <div id="flex-three">
          <Education degrees={degrees} />
        </div>
        <div id="contact">
          <a href="https://linkedin.com/saarah-peer" target="_blank">
            <button id="linkedin">
              <i class="fa fa-linkedin"></i>
            </button>
          </a>
          <a href="https://github.com/speer987" target="_blank">
            <button src="github.com/speer987" id="github">
              <i class="fa fa-github"></i>
            </button>
          </a>
        </div>
      </div>
      <div id="credit">Designed with ❤️ by Saarah Peer</div>
    </div>
  );
}

export default App;
