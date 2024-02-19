import React, { useEffect, useState } from 'react';
const ThemeSwitch = () => {
    const  [theme, setTheme] = useState();
    const element = document.documentElement
    const options = [
        {icon:"sunny-sharp", text: "Light Mode"},
        {icon:"moon-sharp", text: "Dark Mode"}
    ]

    if (localStorage.theme === 'Dark Mode' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

    useEffect(()=>{
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
    }, [theme])
        
    return (
        <div className='fixed top-5 right-10 duration-100 dark:bg-slate-700 bg-gray-100 rounded mr-0 pl-2 pr-2'>
            {options?.map(opt=>(
                <button 
                    key={opt.text} 
                    onClick={()=>setTheme(opt.text)}
                    className={`w-8, h-8 leading-9 text-xl rounded-full m-1 ${ theme === opt.text && "text-sky-600"}`
                }>
                    <ion-icon name={opt.icon} alt={opt.text}></ion-icon>
                </button>
            ))}
        </div>
    );
    };

export default ThemeSwitch
