export default function Coursework({ courseList }) {
  return courseList?.map((courseInfo) => (
    <div className="card" id="course" key={courseInfo.course}>
      <div className="subheader-one">
        <h3>{courseInfo.course}</h3>
        {/* <h4>{courseInfo.university}</h4> */}
      </div>
      <div className="padding">
        {courseInfo?.desc ? (
          <ul>
            {courseInfo?.desc.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <div></div>
        )}
        {courseInfo?.tech ? (
          <div>
            <h5>Technologies & Skills Used</h5>
            <div id="pill-parent">
              {courseInfo?.tech.map((skill) => (
                <div className="pill" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  ));
}
