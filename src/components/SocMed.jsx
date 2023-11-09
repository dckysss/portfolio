import { LazyLoadImage } from 'react-lazy-load-image-component'
import { socialMedia } from '../constants'

const SocMed = () => (
    <section className="flex flex-wrap xl:px-0 px-16 justify-center sm:justify-start">
      {socialMedia.map((social, index) => (
        <a href={social.link} target='_blank'>
        <LazyLoadImage key={social.id} src={social.icon} alt={social.id} 
        className={`w-[48px] h-[48px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-10' : 'mr-0' }`} />
        </a>
      ))}
    </section>
)


export default SocMed