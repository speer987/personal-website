import Experience from "./Experience";
import { experience } from "./exp";
export default function ExperienceBlock() {
  return (
    <div className="two-p-padding one-p-bottom">
      <h2 id="title-one">Experience</h2>
      <div id="flex-one">
        <Experience experienceList={experience} />
      </div>
    </div>
  );
}
