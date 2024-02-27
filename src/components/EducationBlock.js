import Education from "./Education";
export default function EducationBlock({ degrees }) {
  return (
    <div className="two-p-padding no-p-bottom">
      <h2 id="title-four">Education</h2>
      <div id="flex-three">
        <Education degrees={degrees} />
      </div>
    </div>
  );
}
