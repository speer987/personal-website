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
            <div className="flex">
              {courseInfo?.preview?.map((item) => (
                <h4 className="extra-padding" key={item}>
                  <a className="custom-a" href={item[1]} target="_blank">
                    {item[0]}
                  </a>
                </h4>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {courseInfo?.code ? (
          <div className="extra-padding">
            <h5>Code</h5>
            <div className="flex">
              {courseInfo?.code?.map((item) => (
                <h4 className="extra-padding" key={item}>
                  <a className="custom-a" href={item[1]} target="_blank">
                    {item[0]}
                  </a>
                </h4>
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
