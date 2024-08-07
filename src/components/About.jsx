import { techs } from "../constants"
import AOS from "aos";
import "aos/dist/aos.css";
import styles, { layout } from "../style";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Certification from "./Certification";
import Experience from "./Experience";

const TechList = ({ icon, title }) => (
  <div className="flex p-4 md:p-6">
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue shadow-inner shadow-sky-500/50`}>
      <LazyLoadImage
        src={icon}
        alt="icon"
        title={title}
        className="w-[50%] h-[50%] object-contain"
        draggable="false"
      />
    </div>
  </div>
)

const About = () => {
  AOS.init({
    duration: 800,
    easing: "ease",
    offset: 400,
    once: true,
  });

  return (
    <section id="about-me" className={`${styles.paddingY} mt-6`} data-aos="fade-up">
      <div className="flex-1 flex-col text-center mb-10">
        <h2 className={styles.heading2}>About Me</h2>
        <p className={`${styles.paragraph} text-left sm:text-center`}>Hello! I'm Dicky Sanjaya, an Information Systems student at Binus University. I've learned the basic of Java, SQL and UI/UX designing from the study. I also learned frontend web development and a bit of backend through many sources. I've worked for a startup company as a voluntary UI/UX Designer, and further got an internship in a corporate digital service company as a Fullstack Developer. On this site, I put my web projects along with what I've learned or achieved. Thanks for visiting!</p>
      </div>

      <div className="flex-1 flex-col text-center">
        <h2 className={styles.heading2}>My Tech Stacks</h2>
        <div className={`${layout.sectionImg} flex-row flex-wrap`}>
          {techs.map((tech, index) => (
            <TechList key={tech.id} {...tech} index={index} />
          ))}
        </div>
      </div>

      <Experience />
      <Certification />
    </section>
  );
};

export default About;