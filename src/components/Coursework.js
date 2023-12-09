export default function Coursework({courseList}){
    return (
        courseList?.map(courseInfo => 
            <div id='card-one' key={courseInfo.course}>
                <div className='subheader-one'>
                <h3>{courseInfo.course}</h3>
                <h4>{courseInfo.university}</h4>
                </div>
                <div className='padding'>
                <ul>
                    {courseInfo?.desc.map(item => <li key={item}>{item}</li>)}
                </ul>
                </div>
            </div>
        )
    );
}