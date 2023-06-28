import React from 'react';
import styles from '../style';
import { developer } from '../assets';
import SocMed from './SocMed';

const Hero = () => (
    <section id='home' className='mb-12'>
      <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[42px] text-white ss:leading-[92px] leading-[65px]'>
              Hi, I'am<br className='hidden sm:block' /> <span className='text-gradient'>Dicky</span> {" "}
            </h1>
          </div>

          <h2 className='font-poppins font-semibold ss:text-[48px] text-[26px] text-white ss:leading-[60px] leading-[55px]'>
            A Front-End Web Developer
          </h2>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={developer} alt='billing'
          className='w-[100%] h-[100%] relative z-[5] md:pt-6'
          draggable="false" />

          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
          <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
        </div>
      </div>
      <SocMed />
    </section>
)

export default Hero