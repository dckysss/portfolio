import {
  github,
  linkedin,
  css,
  react,
  html,
  node,
  tailwind,
  go,
  java,
  figma,
  lvinnamon,
  movieSearch,
  stayinn,
  tako,
  golangCert,
  feCert,
  reactCert,
  icimcisCert,
  takologo,
  prosialogo,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about-me",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
];

export const techs = [
  {
    id: "tech-1",
    icon: react,
    title: "React",
  },
  {
    id: "tech-2",
    icon: html,
    title: "HTML",
  },
  {
    id: "tech-3",
    icon: css,
    title: "CSS",
  },
  {
    id: "tech-4",
    icon: node,
    title: "NodeJS",
  },
  {
    id: "tech-5",
    icon: tailwind,
    title: "Tailwind",
  },
  {
    id: "tech-6",
    icon: go,
    title: "Golang",
  },
  {
    id: "tech-7",
    icon: java,
    title: "Java",
  },
  {
    id: "tech-8",
    icon: figma,
    title: "Figma",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: github,
    link: "https://github.com/dckysss",
  },
  {
    id: "social-media-2",
    icon: linkedin,
    link: "https://www.linkedin.com/in/dicky-sanjaya-77b857254/",
  },
];

export const certs = [
  {
    id: "cert-1",
    img: icimcisCert,
    link: "https://drive.google.com/file/d/13SiEK63S17NTBBPsBgNu4tX0I6O-scmp/view",
  },
  {
    id: "cert-2",
    img: golangCert,
    link: "https://drive.google.com/file/d/1TngNmbcNHvjUKGorQnKxjG4tsiqaaiJ2/view",
  },
  {
    id: "cert-3",
    img: feCert,
    link: "https://www.dicoding.com/certificates/L4PQ80E17ZO1",
  },
  {
    id: "cert-4",
    img: reactCert,
    link: "https://www.sololearn.com/certificates/CT-GKBVHHOP",
  },
];

export const projects = [
  {
    id: "project-1",
    name: "Movie Search",
    type: "Frontend Development",
    desc: "Movie searching website using TheMovieDatabase API with react speech recognition.",
    img: movieSearch,
    link: "https://movi3databas3.netlify.app/",
  },
  {
    id: "project-2",
    name: "Tako",
    type: "UI/UX",
    desc: "Introducing Tako, a connecting platform between creators and fans.",
    img: tako,
    link: "https://tako.id/",
  },
  {
    id: "project-3",
    name: "LVinnamon",
    type: "Frontend Development",
    desc: "Simple company product selling website with vanilla html, css, js and jquery.",
    img: lvinnamon,
    link: "https://lvinnamon.netlify.app/",
  },
  {
    id: "project-4",
    name: "StayInn",
    type: "Fullstack Development",
    desc: "Fullstack clone of booking.com with MERN stack",
    img: stayinn,
    link: "https://stayinn.netlify.app/",
  },
];

export const experiences = [
  {
    id: "exp-1",
    company: "Tako",
    period: "Aug 2023 - Jan 2024",
    role: "UI/UX Designer",
    img: takologo,
  },
  {
    id: "exp-2",
    company: "Prosia",
    period: "Feb 2024 - Feb 2025",
    role: "Programmer Intern (Fullstack Web Developer)",
    img: prosialogo,
  }
]