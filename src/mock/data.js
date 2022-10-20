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
    info2: 'It has a login page for doctors and patients, options to add appointments update and delete them similarly doctors can update and delete patient details.',
    url: 'https://hospital-management-system-sql.herokuapp.com/',
    repo: 'https://github.com/mshivam019/Hospital_Management', // if no repo, the button will not show up
  },
  
  {
    id: nanoid(),
    img: 'excel.png',
    title: 'Excel Reader',
    info: 'Using Springboot and java I upload an excel file through a rest call and then using Apache POI it reads the contents and stores it into the database. Here I used mySQL as database.',
    info2: 'I learnt about Multipart files and ApachePOI library also JSON library to be able to make a rest post call using the data in the excel file. This was an attempt to make a data driven automatic api testing program.',
    url: 'https://github.com/mshivam019/Excel-to-SQL',
    repo: '', // if no repo, the button will not show up
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
    img: 'wp.JPG',
    title: 'AWS Wordpress',
    info: 'This WordPress website is deployed on AWS EC2 instance with the help of nginx and php7.2. I have used t2 micro instance for vm and mariadb for database.',
    info2: 'I have converted the website to a static form using HTTrack and currently hosting it on GitHub.',
    url: 'https://mshivam019.github.io/wordpress/',
    repo: 'https://github.com/mshivam019/wordpress', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'apps.png',
    title: 'App Development',
    info: 'I have worked several basic apps like Just Java coffee ordering app using Java and XML, Weather app using Flutter and a Text-to-Speech app using Swift UI. For more details click the link below.',
    info2: 'I also had the chance to work on my University\'s Android Study Jam app using Kotlin where we built an all-in-one app to use all features at one common point.',
    url: 'https://mshivam019.github.io/portfolio/',
    repo: 'https://github.com/mshivam019?tab=repositories', // if no repo, the button will not show up
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
