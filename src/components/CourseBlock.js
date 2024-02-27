import Coursework from "./Coursework";
export default function CourseBlock({ projects }) {
  return (
    <div className="two-p-padding">
      <h2 id="title-two">Projects</h2>
      <div id="flex-two">
        <Coursework courseList={projects} />
      </div>
    </div>
  );
}
