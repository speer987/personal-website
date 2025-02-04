export default function Experience({ experienceList }) {
  return experienceList?.map((experience) => (
    <div className="card" id="experience" key={experience}>
      <div className="subheader-four">
        <h3>{experience.company}</h3>
        <h4>{experience.role}</h4>
        <br />
        <h4>{experience.time}</h4>
        <h4>{experience.location}</h4>
      </div>
      {experience?.desc ? (
        <div className="padding">
          <ul>
            {experience?.desc.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  ));
}
