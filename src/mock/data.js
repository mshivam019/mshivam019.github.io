import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shivam Mishra | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is',
  name: 'Shivam Mishra.',
  subtitle: 'Software Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'dp.jpg',
  paragraphOne: 'I am a CSE Student at Lovely Professional University, having holistic knowledge over software development,IT Support, UX design and also experienced in Dev-Ops.',
  paragraphTwo: 'My objective is to have growth oriented and challenging career where I can contribute my knowledge and skills to the organization and enhance my experience through continuous learning and teamwork.',
  paragraphThree: 'My Skills include : HTML/CSS/JS, JAVA, APP DEVELOPMENT, C/C++, PYTHON, GIT & GITHUB and UNITY GAME ENGINE.',
  
  resume: 'https://drive.google.com/file/d/1aVHDpp9r0Ueh1fbjUgI9Lwi51pHo9UtV/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'hms.png',
    title: 'Hospital Management System',
    info: 'Based on CRUD operations using Java SpringBoot and maven, used PostgreSQL as database and thymeleaf for frontend.',
    info2: 'It has a login page for doctors and patients, options to add appointments update and delete them similarly doctors can update and delete patient details.Used Docker-Compose to dockerize the application, hosting the images on Docker Hub for easy deployment.',
    url: 'https://hospital-management-system-sql.herokuapp.com/',
    repo: 'https://github.com/mshivam019/Hospital_Management', // if no repo, the button will not show up
  },
  
  {
    id: nanoid(),
    img: 'kanban.png',
    title: 'Notes App',
    info: 'Developed a Notes app to store user’s daily tasks, logs, to-do, etc with help of Firebase.',
    info2: 'Used Firestore as database, lazy-login using google sign-in and traditional login using email and password.Used Docker to containerize the application, currently using Vercel to host and call the serverless functions.',
    url: 'https://kanban-notes.vercel.app/',
    repo: 'https://github.com/mshivam019/notes-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gcp.jpg',
    title: 'Google Cloud Platform',
    info: 'Participated in 30 days of Google Cloud and Google Cloud Ready Facilitator program, during which I completed several Qwiklabs tasks and projects.',
    info2: 'I learnt about Load Balancers, Vms, Kubernetes, TensorFlow, Docker, Jenkins, Spinnaker and CloudSQL',
    url: 'https://www.qwiklabs.com/public_profiles/bd36d7ee-556e-45e9-992e-eb30e9253f55',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'butterfly.png',
    title: 'Social-Butterfly',
    info: 'Twitter like web-app where you can send, edit, like, delete and share Flutters(Tweets). You can also search Flutters sent by anyone and shareit using actual twitter',
    info2: 'Built with React for frontend, Mongodb as database and Auth0 with JWT token for authentication. Mongodb Data API is used to handle the serverless functions to perform CRUD operations, Atlas serach is used to indexing the Flutters, App services with triggers is used to add users from Auth0 to the database.',
    url: 'https://social-butterfly.vercel.app/',
    repo: 'https://github.com/mshivam019/Social-Butterfly', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'app.png',
    title: 'App Development',
    info: 'I have worked several basic apps like Just-Java coffee ordering app using Java and XML, Weather app using Flutter, A Grocery-List app using Kotlin and a Text-to-Speech app using Swift UI. For more details click the link below.',
    info2: 'I also had the chance to work as the Compose Camp Facilitator teaching 250+ students about Jetpack Compose, the new way of building native android apps. Also built an Instagram-Clone app using Jetpack Compose with Kotlin for final app submission.',
    url: 'https://mshivam019.github.io/portfolio/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cer.png',
    title: 'Certifications',
    info: 'I have Certifications for Google IT Support, Android Specialist, Adobe UX Designing, AWS Academy Graduate, Google Project Management, Architecting with Google Compute Engine and several others.',
    info2: 'Check out more of my cerificates using the link below.',
    url: 'https://www.credly.com/users/mshivam019/',
    repo: 'https://drive.google.com/drive/folders/1q0KZSNVHhTny67mdtN_LUV7pMb8y6T3O?usp=sharing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Let\'s Talk',
  email: 'mshivam019@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/MShivam190',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/mshivam019',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mshivam019/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mshivam019',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
