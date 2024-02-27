import "./App.css";
import {
  projects,
  degrees,
  skills,
  Header,
  NavBar,
  ExperienceBlock,
  SkillsBlock,
  CourseBlock,
  EducationBlock,
} from "./components";

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
