import { useState } from 'react'
import {menu, close} from '../assets'
import {navLinks} from '../constants'
import {ThemeSwitch} from '.';

type NavbarProps = {
  darkColourMode: boolean;
  updateColourMode: (darkMode: boolean) => void;
};

const Navbar = (props: NavbarProps) => {
  const [toggle, setToggle] = useState<boolean>(false)
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
       
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev)=> !prev)}/>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}>
          <ul className="list-none flex-col justify-end items-center">
            {navLinks.map((nav,index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} dark:text-white text-black `}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar