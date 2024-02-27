import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ExperienceBlock from "./components/ExperienceBlock";
import CourseBlock from "./components/CourseBlock";
import projects from "./components/projects";
import SkillsBlock from "./components/SkillsBlock";
import skills from "./components/skills";
import EducationBlock from "./components/EducationBlock";
import degrees from "./components/edu";

function App() {
  return (
    <div>
      <div id="body-wo-footer">
        <Header
          role={
            "Computer Science major and Statistics and Data Science minor at Loyola Marymount University"
          }
        />
        <NavBar />
        <ExperienceBlock />
        <CourseBlock projects={projects} />
        <SkillsBlock skills={skills} />
        <EducationBlock degrees={degrees} />
      </div>
      <div id="credit">Designed with ❤️ by Saarah Peer</div>
    </div>
  );
}

export default App;
