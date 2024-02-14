import React from 'react'
import styles from '../style'
import { socials } from '../constants'
/*TODO: Fix this code in MD size monitors, Long form text will overlap*/
const Socials = () =>  (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mg-6`}>
    {socials.map((social) => (
      <div key={social.id} className={`flex-1 justify-start items-center flex-row m-3`}>
        <a href={social.link} target='_blank' rel='noreferrer' className='container justify-center'>
          <img src={social.image} alt={social.name} className='w-[40px] h-[40px] object-contain mx-1'/>
          <p className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{social.name}</p>
        </a>
      </div>
    ))}
  </section>
)

export default Socials