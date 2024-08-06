import { projects } from "../constants";
import { visit } from "../assets";
import styles, {layout} from "../style"
import { LazyLoadImage } from "react-lazy-load-image-component";

const Project = () => {
  return (
    <section id="project" className={layout.section} data-aos="fade-up">
      <div>
        <h2 className={`${styles.heading2} text-center mb-4 md:mb-6`}>My Projects</h2>
        {projects.map((project) => (
          <div key={project.id} className="flex justify-center mb-8">
            <div className="w-[90%] md:min-h-[300px] relative shadow-md shadow-sky-600/50 border-2 border-neutral-200/80 rounded-[0.5rem] overflow-hidden img-transition md:w-[60%]">
              <a href={project.link} target='_blank'>
                <LazyLoadImage src={project.img} alt={project.id} width="100%" height="100%"
                  className={`rounded-[0.5rem] object-contain opacity-75 cursor-pointer transition-transform web-img`} />
                <div className="absolute w-full h-full z-[3] top-0 flex justify-center rounded-[0.5rem] p-6 img-overlay text-[0.8rem] sm:text-[1rem]">
                  <div className="absolute left-2 top-2 px-2 text-white bg-sky-600/75 rounded-[0.5rem] tracking-wide">
                    {project.type}
                  </div>
                  <div className="text-white my-auto text-center">
                    <div className="flex justify-center">
                      <h3 className="font-semibold text-[1rem] mr-2 sm:text-[1.5rem]">{project.name}</h3>
                      <img src={visit} alt="visit" loading="lazy" width="20"
                        height="20" className="w-[1rem] sm:w-[1.5rem]" />
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