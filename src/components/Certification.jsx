import { useEffect } from "react"
import { certs } from "../constants"
import { visit } from "../assets"
import AOS from "aos";
import "aos/dist/aos.css";
import styles, { layout } from "../style"
import { LazyLoadImage } from "react-lazy-load-image-component";

const Certification = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      offset: 500,
    });
  }, []);
  return(
    <section id="certification" className="flex-1 flex-col text-center">
        <h2 className={`${styles.heading2} mb-4`}>My Certification</h2>
        <div className={`${layout.sectionImg} flex-row flex-wrap gap-8`}>
          {certs.map((cert) => (
            <div className="w-[90%] relative shadow-md shadow-sky-500/50 border-2 border-neutral-200/80 rounded-[0.5rem] overflow-hidden img-transition md:w-[35%]">
                <a href={cert.link} target='_blank'>
                    <LazyLoadImage key={cert.id} src={cert.img} alt={cert.id}
                    className={`rounded-[0.5rem] object-fill opacity-75 cursor-pointer transition-transform web-img`} />
                    <div className="absolute w-full h-full z-[3] top-0 flex justify-center rounded-[0.5rem] p-6 hover-img text-[0.8rem] sm:text-[1rem]">
                        <div className="text-white my-auto text-center font-poppins">
                            <div className="flex justify-center">
                                <p className="font-medium text-[1rem] mr-2 sm:text-[1.2rem]">Show Credentials</p>
                                <img src={visit} alt="visit" loading="lazy" className="w-[1rem] sm:w-[1.5rem]"/>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Certification