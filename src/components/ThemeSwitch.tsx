import { IonIcon, } from '@ionic/react';
import {sunnySharp, moonSharp} from 'ionicons/icons';

type ThemeSwitchProps = {
    darkColourMode: boolean;
    updateColourMode: (darkMode: boolean) => void;
};

const ThemeSwitch = (props: ThemeSwitchProps) => {
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

    const switchTheme = (theme: string) => {
        if (theme == "Dark Mode") {
            props.updateColourMode(true);
            element.classList.add('dark');
            localStorage.setItem('theme', 'Dark Mode');
        } else {
            props.updateColourMode(false);
            element.classList.remove('dark');
            localStorage.setItem('theme', 'Light Mode');
        }
    }

    const correctIcon = (icon: string): boolean => {
        return (props.darkColourMode && icon == "Dark Mode") ||
        (!props.darkColourMode && icon == "Light Mode")
    }
        
    return (
        <div className='fixed bottom-0 right-1 duration-100 dark:bg-slate-700 bg-gray-100 rounded-t-lg mr-0 pl-2 pr-2'>
            {options?.map(opt=>(
                <button 
                    key={opt.text} 
                    onClick={()=>switchTheme(opt.text)}
                    className={`w-8, h-8 leading-9 text-xl rounded-full m-1 ${ correctIcon(opt.text) && "text-sky-600"}`
                }>
                    <IonIcon icon={opt.icon} aria-label={opt.text} />
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitch
