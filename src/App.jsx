import React, { useState, useEffect } from 'react'
import styles from "./style";
import { Navbar, Hero, About, Project, Footer } from './components';

const App = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const visible = window.scrollY < 60;
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return(
    <div className="bg-primary w-full overflow-hidden smooth-scroll">
      <div className={`${styles.paddingX} ${styles.flexCenter} xl:fixed z-[999] w-full ${visible ? '' : 'navbar'}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Project />
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App