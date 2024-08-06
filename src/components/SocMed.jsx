import { socialMedia } from '../constants'

const SocMed = () => (
  <section className="flex flex-wrap xl:px-0 px-16 justify-center sm:justify-start">
    {socialMedia.map((social, index) => (
      <a key={social.id} href={social.link} rel='noopener noreferrer' target='_blank'>
        <img src={social.icon} alt={social.id} loading='lazy'
          className={`w-[48px] h-[48px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-10' : 'mr-0'}`} />
      </a>
    ))}
  </section>
)


export default SocMed