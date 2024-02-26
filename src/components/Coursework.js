export default function Coursework({ courseList }) {
  return courseList?.map((courseInfo) => (
    <div className="card" id="course" key={courseInfo.course}>
      <div className="subheader-one">
        <h3>{courseInfo.course}</h3>
        <h4>{courseInfo.university}</h4>
      </div>
      {courseInfo?.desc ? (
        <div className="padding">
          <ul>
            {courseInfo?.desc.map((item) => (
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
