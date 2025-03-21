import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  next,
  git,
  figma,
  flutter,
  svabag,
  idea,
  devlop,
  testing,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
  
    title: "Associate Software Developer",
    company_name: "Svabag Labs",
    icon: svabag,
    iconBg: "#383E56",
    date: "July 2024 - Ongoing ",
    points: [
      "Developing and maintaining mobile applications using Flutter and integrating Swagger APIs for seamless backend communication.",
"Building and optimizing web applications using React.js and Next.js for high-performance user experiences.",
"Collaborating with cross-functional teams, including designers, product managers, and developers, to create innovative and user-friendly solutions.",
"Implementing responsive design principles to ensure a seamless experience across devices and platforms.",
"Participating in code reviews and providing valuable feedback to enhance code quality and maintainability",
    ],
  
  },
  
 
];


const projects = [
  {
    name: "Ideation & Design",
    description:
      "Every great app starts with a bold idea! I transform concepts into intuitive UI/UX wireframes, ensuring a seamless user experience from the start.",
    tags: [
      {
        name: "design",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: idea,
    source_code_link: "https://github.com/",
  },
  {
    name: "Development & Execution",
    description:
      "Code is my canvas! I craft clean, scalable, and high-performance apps that bring ideas to life with flawless functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: devlop,
    source_code_link: "https://github.com/",
  },
  {
    name: "Testing & Deployment",
    description:
      "Perfection is in the details! I rigorously test, optimize, and launch apps with precision—ensuring a smooth, bug-free experience for every user.",
    tags: [
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
      {
        name: "postman",
        color: "pink-text-gradient",
      },
    ],
    image: testing,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
