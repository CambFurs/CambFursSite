import { useState } from 'react'
import {menu, close} from '../assets'
import {navLinks} from '../constants'
import {ThemeSwitch} from '.';

type NavbarProps = {
  darkColourMode: boolean;
  updateColourMode: (darkMode: boolean) => void;
};

const Navbar = (props: NavbarProps) => {
  const element = document.documentElement
  const [toggle, setToggle] = useState<boolean>(false)
  const options = [
    { text: "Light Mode"},
    { text: "Dark Mode"}
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

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'> 
      <h1 className='w-[124px] font-poppins dark:text-white text-black font-extrabold'>CambFurs</h1>
      <ul className="list-none sm:flex hidden justify-end items-center">
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 dark:text-white text-black `}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
          </li>
        ))}
        <li>
          <ThemeSwitch darkColourMode={props.darkColourMode} updateColourMode={props.updateColourMode} />
        </li>
      </ul>
       
      <div className='sm:hidden flex flex-1 justify-end items-center '>
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev)=> !prev)}/>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 dark:bg-black-gradient bg-orange-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}>
          <ul className="list-none flex-col justify-end items-center">
            {navLinks.map((nav,index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 dark:text-white text-black `}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
              </li>
            ))}
            {options?.filter(opt => localStorage.theme != opt.text).map((opt, index) => (
              <li key={index}>
                <button>
                  <a 
                    onClick={() => switchTheme(opt.text)}
                    className={`font-poppins font-normal cursor-pointer text-[16px] dark:text-white text-black mb-0 ${localStorage.theme === opt.text ? 'hidden' : ''}`}
                  >
                    {opt.text}
                  </a>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar