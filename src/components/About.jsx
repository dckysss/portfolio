import { useEffect } from "react"
import { techs } from "../constants"
import AOS from "aos";
import "aos/dist/aos.css";
import styles, { layout } from "../style"

const TechList = ({ icon, title }) => (
  <div className="flex p-4 md:p-6">
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img 
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
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      offset: 500,
    });
  }, []);

  return (
    <section id="about-me" className={`${styles.paddingY} mt-6`} data-aos="fade-up">
      <div className="flex-1 flex-col text-center mb-10">
        <h2 className={styles.heading2}>About Me</h2>
        <p className={`${styles.paragraph} text-left sm:text-center`}>Hello everyone, my name is Dicky Sanjaya, I'm a student at Binus University currently majoring Information Systems. I have learned the basic of Java, UI/UX designing from the college, and now I'm learning and got interested in Frontend web developing. I also have a little bit knowledge of Backend programming since I've learned Golang and made a REST API with it. In this website, I put my web projects to show you guys what I've learned or achieved. Thank you.</p>
      </div>

      <div className="flex-1 flex-col text-center">
        <h2 className={styles.heading2}>My Tech Stacks</h2>
      </div>

      <div className={`${layout.sectionImg} flex-row flex-wrap`}>
        {techs.map((tech, index) => (
          <TechList key={tech.id} {...tech} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default About;