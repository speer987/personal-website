import './App.css';
import Coursework from './components/Coursework';
import Education from './components/Education';
import Experience from './components/Experience';

const courses = 
[
  {
    course: "Interaction Design",
    university: "Loyola Marymount University",
    desc: ["Applied several HCI principles learned throughout the semester in a group project to ideate, design and build an app prototype to remind forgetful medicine takers to record their mood and dose intake.",
    "Submitted four reports and a 10 minute video that summarized group findings about user research and effectiveness of prototype to improve app design periodically.",
    "Evaluated classmates’ prototype designs to learn the importance of aesthetics and designing with the end user in mind to create interfaces."]
  }, 
  {
    course: "Web Application Development",
    university: "Loyola Marymount University",
    desc: ["I like pie."]
  },
  {
    course: "Web Design for Non-Profit Organizations",
    university: "Pace University",
    desc: ["Designed and developed a fully functional website using the Wix CMS to assist a person with disabilities in showcasing their skills and building their professional network.",
    "Bolstered communication skills and developed a good eye for design through constant discussion with a client to build a professional website layout that suited their needs."]
  }
]

const degrees = 
[
  {
    university: "Loyola Marymount University",
    degree: "B.S. in Computer Science",
    attended: "2021 - Present",
    location: "Los Angeles, California",
    courses: [
      "Interaction Design", 
      "Computer Systems Organization", 
      "Algorithms and Analysis", 
      "Calculus 1",
      "Calculus 2",
      "Database Systems",
      "Languages and Automata 1",
      "Web Application Development",
      "Artificial Intelligence",
      "Introduction to Probability and Statistics"
    ],
    honors: [
      "Tau Sigma National Honors Society Nominee",
      "Dean’s List (Fall 2021)",
      "Dean’s List (Spring 2022)"
    ]
  },
  {
    university: "Pace University",
    degree: "B.S. in Computer Science",
    attended: "2020 - 2021",
    location: "New York City, New York",
    courses: [
      "Data Structures and Algorithms", 
      "Computer Programming II",
      "Fundamentals of Unix and C Programming",
      "Web Design for Non-Profit Organizations",
      "Mathematical Structures for Computer Science",
      "Precalculus"
    ],
    honors: 
    [
      "Pforzheimer Honors College",
      "National Society of Leadership and Success Nominee",
      "Dean’s List (Fall 2020)",
      "Dean’s List (Spring 2021)",
      "GPA: 3.74/4.00"
    ]
  }
]

const experience = [
  {
    company: "Google",
    role: "CSSI: Online Student",
    time: "Summer 2021",
    location: "Los Angeles, California",
    desc: [
      "Participated in an in-depth 4-week computer science program for high-achieving students.",
      "Completed an introductory project-based JavaScript processing and creative coding curriculum taught by Google Engineers and LMU faculty to learn about functions, data types, objects, and 3D graphics.",
      "Developed 12 individual JavaScript projects alongside Google Engineers, LMU faculty and students.",
      "Gained valuable professional skills through resume development and SWE interview workshops.",
      "Presented a final project with Text-to-Speech and Teachable Machine API integration to Google employees, LMU faculty, and community leaders to showcase JavaScript coding and team-work skills."
    ]
  },
  {
    company: "Meta",
    role: "Data Challenge Finalist",
    time: "Summer 2022",
    location: "Los Angeles, California",
    desc: [
      "One of 86 undergraduate students in the U.S. to join a competitive five-month data science apprenticeship which included mock-up interviews, a large data science project, technical workshops/webinars, group mentorship and a SQL class.",
      "Met with mentors (a Meta Data Scientist and Data Engineer) periodically to present insights gained from data exploration and obtain meaningful feedback on potential product pitch improvements.",
      "Explored, analyzed, and aggregated insights from a large data set using Excel and Python to compile actionable information, product design recommendations, and intuitive visualizations in a finalized product pitch which was presented to a Meta Data Scientist and Data Engineer."
    ]
  }
]

function App() {
  return (
    <div>
      <div id="grid">
        <div id="header">
          <h1>Saarah Peer</h1>
          <p>Hi! I am a Computer Science major at Loyola Marymount University.</p>
        </div>
        <a href="#title-one"><button id='button-one'>Course Projects</button></a>
        <a href="#title-two"><button id='button-two'>Education</button></a>
        <a href="#title-three"><button id='button-three'>Hackathons</button></a>
        <a href="#title-four"><button id='button-four'>Work Experience</button></a>
        <div id='title-one'>Course Projects</div>
        <div id='flex-one'>
          <Coursework courseList={courses}/>
        </div>
        <div id='title-two'>Education</div>
        <div id='flex-two'>
          <Education degrees={degrees} />
        </div>
        <div id='title-three'>Hackathons</div>
        <div id='card-five'>
          <div className='subheader-three'>
            <h3>Rose Hack</h3>
            <h4>UC Riverside</h4>
          </div>
        </div>
        <div id='title-four'>Work Experience</div>
        <div id="flex-three">
          <Experience experienceList={experience} />
        </div>
        <div id='contact'>
          <button id='linkedin'><i class='fa fa-linkedin'></i></button>
          <button id='github'><i class='fa fa-github'></i></button>
          <button id='download'>Download This Resume</button>
          <button id='mail'><i class='fa fa-envelope'></i></button>
        </div>
      </div>
      <div id='credit'>
          Designed by Saarah Peer in React and CSS.
      </div>
    </div>
  );
}

export default App;
