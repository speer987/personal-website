export default function Education({ degrees }) {
  return degrees?.map((degreeInfo) => (
    <div className="card" id="education" key={degreeInfo.university}>
      <div className="subheader-two">
        <h3>{degreeInfo.university}</h3>
        <h4 className="bold">{degreeInfo.degree}</h4>
        <br />
        <h4>{degreeInfo.attended}</h4>
        <h4>{degreeInfo.location}</h4>
      </div>
      <div className="padding">
        <p className="inner-header">Relevant Coursework</p>
        <ul className="one-liners pill-parent">
          {degreeInfo?.courses.map((item) => (
            <div className="pill pill-dark-green" key={item}>
              {item}
            </div>
          ))}
        </ul>
        <p className="inner-header">Honors and Awards</p>
        <ul className="one-liners">
          {degreeInfo?.honors.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  ));
}
