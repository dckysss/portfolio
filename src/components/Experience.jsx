import { experiences } from "../constants"
import styles from "../style";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Experience = () => {
  return (
    <section className="flex-1 flex-col text-white text-center mb-10">
      <h2 className={`${styles.heading2} mb-4`}>Work Experience</h2>
      <div className="flex flex-col-reverse">
        {experiences.map((exp) => (
            <div key={exp.id} className="flex flex-col items-center justify-center mb-6">
              <LazyLoadImage
                src={exp.img}
                alt={exp.company}
                className="w-40 h-40 object-cover mb-4"
              />
              <p className="text-lg font-semibold">{exp.company}</p>
              <p className="text-sm italic text-gray-300">{exp.role}</p>
              <p className="text-sm text-gray-400">{exp.period}</p>
              <p className="text-sm text-gray-400">{exp.type}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Experience;