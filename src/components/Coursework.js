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
          <div className="extra-padding">
            <h5>Technologies & Skills Used</h5>
            <div className="pill-parent">
              {courseInfo?.tech.map((skill) => (
                <div className="pill pill-pink" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {courseInfo?.preview ? (
          <div className="extra-padding">
            <h5>Preview</h5>
            <div className="extra-padding flex">
              <h4>
                <a href={courseInfo.preview.project} target="_blank">
                  Project
                </a>
              </h4>
              <h4 className="extra-padding">
                <a href={courseInfo.preview.code} target="_blank">
                  Code
                </a>
              </h4>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  ));
}
