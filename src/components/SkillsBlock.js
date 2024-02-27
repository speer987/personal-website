export default function SkillsBlock({ skills }) {
  return (
    <div className="two-p-padding one-p-bottom no-p-top">
      <h2 id="title-three">Skills</h2>
      <div className="pill-parent">
        {skills?.map((skill) => (
          <div key={skill} className="pill pill-green">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
