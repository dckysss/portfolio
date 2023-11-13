import { github, linkedin, css, react, html, js, tailwind, go, java, figma, lvinnamon, movieSearch, manage, tako, golangCert, feCert, reactCert, efsetCert  } from "../assets";

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
    icon: js,
    title: "JavaScript",
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
    link: "https://github.com/pepega212",
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
    img: golangCert,
    link: "https://drive.google.com/file/d/1TngNmbcNHvjUKGorQnKxjG4tsiqaaiJ2/view",
  },
  {
    id: "cert-2",
    img: feCert,
    link: "https://www.dicoding.com/certificates/L4PQ80E17ZO1",
  },
  {
    id: "cert-3",
    img: reactCert,
    link: "https://www.sololearn.com/certificates/CT-GKBVHHOP",
  },
  {
    id: "cert-4",
    img: efsetCert,
    link: "https://drive.google.com/file/d/1OFj3pEZUYzO9Lg3TrYHXpJSvZ7u9r6j5/view",
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
    name: "manage",
    type: "Frontend Development",
    desc: "Frontend Mentor manage company profile landing page with tailwind & jquery.",
    img: manage,
    link: "https://manage-landing-fementor.netlify.app/",
  }
];