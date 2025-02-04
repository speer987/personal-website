const projects = [
  {
    order: 1,
    course: "React Native LMU Marketplace Mobile App",
    university: "Loyola Marymount University",
    desc: [
      "Created a React Native mobile app inspired by a business student's app proposal.",
      "Met with said business student to discuss user interface design, and functionality of app before app development.",
      "Designed a Figma Prototype which I shared with a business student before app development, which showed various capabilities of the app to be built, with pages such as Favorite Listings, User Listings, Create a Listing, and All Listings Page.",
      "Used Firebase/Firestore to keep track of Listings, as well as account details such as when a user joined the platform.",
      "Used Clerk Authentication to allow students to sign in using both their Outlook and Google Accounts. Those with Outlook Accounts had a verified checkmark next to their name when listing an item.",
      "Item Listings provided a way for users to find information such as a photo of the item, price, and description about an item being sold, but were able to get more information in another pop-up on each listing.",
    ],
    tech: [
      "Software Engineering Principles",
      "Documentation",
      "React Native Paper",
      "React Native",
      "Firestore",
      "Firebase Authentication",
      "XCode Simulator",
      "Google Fonts",
      "Git",
      "Github",
    ],
  },
  {
    order: 2,
    course: "React Book Wishlist/Tracking Web App (The Book Nook)",
    university: "Loyola Marymount University",
    desc: [
      "Developed a complex web app for book enthusiasts which allows users to browse, search, and add books to bookshelves that are saved to numerous collections on Firestore",
      "Integrated the Google Books API to allow users to search for books, the NYT Books API to browse for recent best selling books, and Firestore to save books to bookshelves such as 'to-read', 'read', and 'completed', which were implemented from scratch",
      "Incorporated Chart.js to allow users to track progress of books they are currently reading on a daily basis, which is then displayed on the bookshelf page",
      "Posterboarded work to others to show accomplishments over the course of the project and to spread awareness about this web app",
      "Participated in bi-weekly stand-up meetings by presenting a slide deck to show progression of work over time, and tracked goals using a Gantt Chart",
      "Peer-reviewed other's projects and incorporated their feedback into my own project",
      "Used Google Authentication to allow users to browse and search while logged out, with the added functionality of maintaining a bookshelf and their reading progress by logging in",
      "Created an aesthetically pleasing interface by reusing hand-crafted React components, such as card components which display book information such as title, image, price, age rating and more; or clickable/unclickable book covers; which were styled using Tailwind CSS",
      "Hosted on Firebase Hosting",
    ],
    tech: [
      "React.js",
      "HTML",
      "CSS",
      "Javascript",
      "Open Library API",
      "Google Books API",
      "New York Times Best Selling Book API",
      "Google Authentication via Firebase",
      "Firestore",
      "Firebase Hosting",
      "Chart.js",
      "Tailwind CSS",
      "Gantt Charts",
      "Bi-Weekly Presentations (stand up meetings)",
      "Peer Reviews",
      "Poster Boarding",
      "Google Fonts",
      "Github",
      "Git",
    ],
    code: [["Github", "https://github.com/speer987/the-book-nook"]],
    preview: [["On Firebase Hosting", "https://the-book-nook-5c098.web.app/"]],
  },
  {
    order: 3,
    course: "YeeHaw Programming Language",
    university: "Loyola Marymount University",
    order: 7,
    desc: [
      "Worked alongside five team members to create a cowboy themed programming language called YeeHaw, which supports loops, nesting, static typing, and OOP.",
      "Programmed parts of the analyzer and compiler, added some test code to the analyzer, and some example code with references to JavaScript syntax in a README.md file.",
      "Learn the basics of the Ohm language for creating grammars",
    ],
    tech: [
      "Ohm",
      "JavaScript",
      "Teamwork",
      "Communication Skills",
      "Presentations",
      "Github",
      "Git",
    ],
    code: [["Github", "https://github.com/alex-armknecht/YeeHaw"]],
  },
  {
    order: 4,
    course: "Command Line Utility (mkfid - Make File in Directory)",
    university: "Loyola Marymount University",
    desc: [
      "Worked alongside three other team members to develop a command line utility that allows users to create a file within a folder in one line.",
      "Honed teamwork and communication skills by working together to brainstorm and develop pseudocode, which was then converted to C code.",
      "Allowed flexibility for users to create multiple files or a single file in a new folder or a folder of a user's choosing via command flags.",
      "Collaborated with others to brainstorm and implement command flags such as -h for help and -d for directory, which we inspired by other command line utilities.",
      "Worked with others to write documentation and preliminary project development plans, which were later uploaded to GitHub.",
      "Presented work at project completion to show achievements, project functionality and progress over time",
    ],
    tech: [
      "C",
      "Unix",
      "Presentation Skills",
      "Teamwork",
      "Communication Skills",
      "GitHub",
      "Git",
      "Research",
    ],
    code: [
      [
        "Github",
        "https://github.com/Sarronnn/CMSI-3510_Tadesse-Ramchandran-Peer-Abrams",
      ],
    ],
  },
  {
    order: 5,
    course: "Full Graph Database SDK w/ Command Line Interface",
    university: "Loyola Marymount University",
    desc: [
      "Applied concepts learned from writing database queries to answer questions regarding a test dataset",
      "Created files that align mostly with the CRUD (I implemented dal files to create, update, delete artwork descriptions) for database design based on a Museum of Modern Art Dataset",
      "Programmed a file that can be called by users on the command line to use various query and CRUD functions from a dal file I wrote. The dal file was based on an example file.",
      "Made a graph database using Neo4J for archival purposes that allow art historians or others to maintain and artwork database that shows artist nodes pointing to artworks that they worked on",
      "Programmed files to preprocess data from csv files to then load as nodes and their connections to the Neo4J dashboard.",
      "Wrote design documentation and made a database schema to show a brief overview of database structure",
      "Created files that allow aggregate queries, as well as search queries to help users find what they are looking for in the database",
    ],
    tech: [
      "Neo4J",
      "Python",
      "Cypher",
      "Database Design",
      "Documentation",
      "Database Systems Knowledge",
      "Kaggle",
      "Data Science",
      "Data Cleaning",
      "Version Control",
      "Git",
      "Github",
    ],
  },
  {
    order: 6,
    course: "React Nutrition Web App",
    university: "Loyola Marymount University",
    desc: [
      "Worked alongside two other team members to build a React web app that helps health concious individuals search for recipes, get three randomly generated recipes, or see their most recent favorited recipe from Firestore (which was implemented by one of my team members).",
      "Developed a grid form layout with a gradient background to allow users to search for recipes that have a particular max ready time, or amount of max carbs, max protein and max calories.",
      "Ensured the smooth development of the search and random recipe generator page to display recipes in a 2x2 grid of a 3x1 grid.",
      "Queried the Spoonacular API to show information on recipe cards such as recipe title, recipe image, summary, link, favorite recipe button, serving amount, ready time, and a nutrition label.",
      "Utilized two API endpoints (four in total) from the Spoonacular API on each of the following pages: search and random recipe generator.",
      "Collaborated with team members to write documentation that included project plans, schedule and mission statement as to why we created this app.",
    ],
    tech: [
      "React",
      "Spoonacular API",
      "CSS",
      "HTML",
      "Firebase/Firestore",
      "Google Authentication",
      "Google Fonts",
      "GitHub",
      "Git",
      "Teamwork",
      "Communication Skills",
      "Presentation Skills",
    ],
    code: [["Github", "https://github.com/joanna-estrada/nutrition"]],
  },
  {
    order: 7,
    course: "React Country Data Finder Web App",
    university: "Loyola Marymount University",
    desc: [
      "Created a React App that uses a combination of HTML, CSS, and React that fetches information such as Common Name, Official Name, Population, Region, Subregion, Flag, Capital, Continent, and Time Zones of countries a user searches for from the Country API.",
      "Incorporated complex components such as a form with a user input, which queries the Country API for country details, which are displayed underneath the form.",
      "Developed a cohesive and responsive user interface through the use of involved CSS concepts such as grid and flex, while using symmetry in the image placement to create a balanced, simple visual appearance.",
      "Validated code by using a HTML accessibility validator.",
      "Hosted on both GitHub pages and CodeSandbox.",
    ],
    tech: [
      "Rest Countries API",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Color Schemes",
      "Google Fonts",
      "Git",
      "Github",
      "CodeSandbox",
    ],
    preview: [
      ["On GitHub Pages", "https://speer987.github.io/react-country-finder/"],
      ["On CodeSandbox", "https://q839ng.csb.app/"],
    ],
    code: [
      ["GitHub", "https://github.com/speer987/react-country-finder"],
      [
        "CodeSandbox",
        "https://codesandbox.io/p/sandbox/react-country-data-finder-q839ng?file=%2Fsrc%2Findex.js",
      ],
    ],
  },
  {
    order: 8,
    course: "Compound Interest Calculator Web App",
    university: "Loyola Marymount University",
    desc: [
      "Developed an app by incorporating various HTML and CSS concepts that allow users to calculate their compound interest on a uniform and aesthetically pleasing interface.",
      "Used numerous CSS concepts such as transform, border width and color, and grid, which allowed for the symmetrical and responsive placement of images and content.",
      "Incorporates the use of four different user input fields (one being a number), which are validated upon form submission for easily calculating compound interest.",
      "Ensured that users are presented with an error message when entering erroneous inputs.",
      "Utilized a basic javascript function knowledge to calculate compound interest before displaying it to the user interface.",
      "Hosted on both GitHub pages and CodeSandbox.",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Google Fonts",
      "Color Schemes",
      "Code Sandbox",
      "Github",
      "Git",
    ],
    preview: [
      [
        "On GitHub Pages",
        "https://speer987.github.io/compound-interest-calculator/",
      ],
      ["On CodeSandbox", "https://loxvgn.csb.app/"],
    ],
    code: [
      ["GitHub", "https://github.com/speer987/compound-interest-calculator"],
      [
        "CodeSandbox",
        "https://codesandbox.io/p/sandbox/compound-interest-calculator-loxvgn?file=%2Findex.html%3A4%2C29",
      ],
    ],
  },
  {
    order: 9,
    course: "Rose Hack",
    university: "UC Riverside",
    desc: [
      "Worked on the HTML and CSS for front page of a web app that seeks to educate users about hydroponics.",
    ],
    tech: [
      "CSS",
      "HTML",
      "Teamwork",
      "Communication Skills",
      "Presentation Skills",
    ],
    preview: [
      ["On DevPost", "https://devpost.com/software/hydroponics-website"],
    ],
  },
  {
    order: 10,
    course: "Medication Tracking Mobile App (BetterHealth App)",
    university: "Loyola Marymount University",
    desc: [
      "Worked alongside two team members to apply several HCI principles learned throughout the semester in a group project to ideate, design and build an app prototype to remind forgetful medicine takers to record their mood and dose intake.",
      "Submitted four reports and a 10 minute video that summarized group findings about user research and effectiveness of prototype to improve app design periodically.",
      "Evaluated classmates’ prototype designs to learn the importance of aesthetics and designing with the end user in mind to create interfaces.",
    ],
    tech: [
      "User Interface Design",
      "Teamwork",
      "HCI Design Principles",
      "Prototyping",
      "Documentation",
      "Peer Reviews",
    ],
  },
  {
    order: 11,
    course: "Website for Client with Special Needs",
    university: "Pace University",

    desc: [
      "Designed and developed a fully functional website using the Wix CMS to assist a person with disabilities in showcasing their skills and building their professional network.",
      "Met with client to discuss interests, skills and work experience in order to build a website that accurately represents them",
      "Bolstered communication skills and developed a good eye for design through constant discussion with a client to build a professional website layout that suited their needs.",
    ],
    tech: ["Wix CMS", "Prototyping", "Communication Skills"],
  },
];

export default projects;
