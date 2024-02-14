import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const JoinButton = () => (
    
    <div className={`${styles.flexCenter} mx-5 w-[140px] h-[140px] rounded-full bg-blue-gradient p-[3px] cursor-pointer`}>
        <div className={` ${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <a href="https://t.me/+rtNuL-0neQBhMzZk" rel='external' target='_blank'>    
                <div className={` ${styles.flexStart} flex-row`}>
                    <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                        <span className='text-gradient'>Join </span>    
                    </p>
                    <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt='arrow'/>
                </div>
                <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className='text-gradient'>the chat</span>
                </p>
            </a>
        </div>
    </div>
    
)

export default JoinButton