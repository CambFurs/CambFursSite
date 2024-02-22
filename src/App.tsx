import { useEffect, useState } from 'react';
import styles from './style';

import { Navbar, Faq, Footer, MeetDates, Rules, Socials, Staff, Hero , NextMeet} from './components';

const App = () => {
  const [darkColourMode, setDarkColourMode] = useState<boolean>(localStorage.theme === 'Dark Mode' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));

  const updateColourMode = (darkMode: boolean) => {
    setDarkColourMode(darkMode);
  }
  
  return (
    <div className=" w-full overflow-hidden dark:text-gray-100 dark:bg-primary bg-slate-300">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar darkColourMode={darkColourMode} updateColourMode={updateColourMode} />
        </div>  
      </div>
      <div className={`dark:bg-primary bg-slate-300 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero darkColourMode={darkColourMode}/>
        </div>
      </div>
      <div id="#socials" className={`dark:bg-primary bg-slate-300 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Socials/>
        </div>
      </div>
      <div className={`dark:bg-primary bg-slate-300 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Rules/>
        </div>
      </div>
      <div className={`dark:bg-primary bg-slate-300 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Staff/>
        </div>
      </div>
      <div className={`dark:bg-primary bg-slate-300 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <MeetDates/>
        </div>
      </div>
    </div>
  )
};


export default App