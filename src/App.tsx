import { useEffect, useState } from 'react';
import styles from './style';

import { Navbar, Footer, Rules, Socials, Hero , StaffBar, DateFaqHero} from './components';

const App = () => {
  const [darkColourMode, setDarkColourMode] = useState<boolean>(localStorage.theme === 'Dark Mode' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));

  const updateColourMode = (darkMode: boolean) => {
    setDarkColourMode(darkMode);
  }
  
  return (
    <div className="  w-full overflow-hidden dark:text-gray-100 dark:bg-primary bg-primary-light">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar darkColourMode={darkColourMode} updateColourMode={updateColourMode} />
        </div>  
      </div>
      <div className={`dark:bg-primary bg-primary-light ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero darkColourMode={darkColourMode}/>
        </div>
      </div>
      <div id="#socials" className={`dark:bg-primary bg-primary-light ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Socials/>
        </div>
      </div>
      <div className={`dark:bg-primary bg-primary-light ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Rules/>
        </div>
      </div>
      <div className={`dark:bg-primary bg-primary-light ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <StaffBar/>
        </div>
      </div>
      <div className='divide-y-8 dark:divide-[#525459] divide-[#F5D6B4]'>
      <div className={`dark:bg-primary bg-primary-light ${styles.paddingX} ${styles.flexStart}`}>
        <DateFaqHero/>
      </div>    
      
        <div className={`bg-orange-300 dark:bg-neutral-400 ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
    
  )
};


export default App