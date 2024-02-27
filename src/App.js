import "./App.css";
import Coursework from "./components/Coursework";
import { projects } from "./components/projects";
import Education from "./components/Education";
import { degrees } from "./components/edu";
import Experience from "./components/Experience";
import { experience } from "./components/exp";

function App() {
  return (
    <div>
      <div id="grid">
        <div id="header">
          <h1>Saarah Peer</h1>
          <p>
            Hi! I am a Computer Science major and Statistics and Data Science
            minor at Loyola Marymount University.
          </p>
        </div>
        <a href="#title-one">
          <button id="button-one">Experience</button>
        </a>
        <a href="#title-two">
          <button id="button-two">Projects</button>
        </a>
        <a href="#title-three">
          <button id="button-three">Skills</button>
        </a>
        <a href="#title-four">
          <button id="button-four">Education</button>
        </a>
        <h2 id="title-one">Experience</h2>
        <div id="flex-one">
          <Experience experienceList={experience} />
        </div>
        <h2 id="title-two">Projects</h2>
        <div id="flex-two">
          <Coursework courseList={projects} />
        </div>
        <h2 id="title-three">Skills</h2>
        {/* <div id="card-five" className="pill-parent">
          <div className="pill-green">Python</div>
          <h4 className="pill-green">Python</h4>
          <h4 className="pill-green">Python</h4>
          <h4 className="pill-green">Python</h4>
        </div> */}
        <h2 id="title-four">Education</h2>

        <div id="flex-three">
          <Education degrees={degrees} />
        </div>
        <div id="contact">
          <a href="linkedin.com/saarah-peer">
            <button id="linkedin">
              <i class="fa fa-linkedin"></i>
            </button>
          </a>
          <a href="github.com/speer987">
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
