import { useEffect, useState } from 'react';
import { IonIcon, } from '@ionic/react';
import {sunnySharp, moonSharp} from 'ionicons/icons';


const ThemeSwitch = () => {
    const  [theme, setTheme] = useState<string>();
    const element = document.documentElement
    const options = [
        {icon: sunnySharp, text: "Light Mode"},
        {icon: moonSharp, text: "Dark Mode"}
    ]

    if (localStorage.theme === 'Dark Mode' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

    useEffect(()=>{
        if (theme) {
            switch (theme) {
                case 'Dark Mode':
                    element.classList.add('dark');
                    localStorage.setItem('theme', 'Dark Mode');
                    break;
                case 'Light Mode':
                    element.classList.remove('dark');
                    localStorage.setItem('theme', 'Light Mode');
                    break;
                default:
                    localStorage.removeItem('theme');
                    break;
            }
        }
    }, [theme])
        
    return (
        <div className='fixed top-5 right-10 duration-100 dark:bg-slate-700 bg-gray-100 rounded mr-0 pl-2 pr-2'>
            {options?.map(opt=>(
                <button 
                    key={opt.text} 
                    onClick={()=>setTheme(opt.text)}
                    className={`w-8, h-8 leading-9 text-xl rounded-full m-1 ${ theme === opt.text && "text-sky-600"}`
                }>
                    <IonIcon icon={opt.icon} aria-label={opt.text} />
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitch
