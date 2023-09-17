import { useEffect } from "react"
import { projects } from "../constants"
import { visit } from "../assets"
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../style"

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      offset: 500,
    });
  }, []);
  return(
    <section id="project" data-aos="fade-up">
      <div className={styles.paddingY}>
        <h2 className={`${styles.heading2} text-center mb-4 md:mb-6`}>My Projects</h2>
        {projects.map((project) => (
          <div className="flex justify-center mb-8">
            <div className="w-[50%] relative shadow-md shadow-sky-500/50 rounded-[0.5rem] overflow-hidden img-transition">
              <a href={project.link} target='_blank'>
              <img key={project.id} src={project.img} alt={project.id} 
              className={`rounded-[0.5rem] object-contain cursor-pointer transition-transform`} />
              <div className="absolute w-full h-full z-[3] top-0 flex justify-center rounded-[0.5rem] p-6 hover-img">
                <div className="text-white my-auto text-center font-poppins">
                  <div className="flex justify-center">
                    <h3 className="font-semibold text-[1.5rem] mr-2">{project.name}</h3>
                    <img src={visit} alt="visit" className="w-[1.5rem]"/>
                  </div>
                  <p>{project.desc}</p>
                </div>
              </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project