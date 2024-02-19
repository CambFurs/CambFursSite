import styles from '../style'
import { plus } from '../assets'

const JoinButton = () => {
    
    return (
    <div className={`${styles.flexCenter} mx-5 w-[140px] h-[140px] rounded-full dark:bg-blue-gradient bg_orange_button p-[3px] cursor-pointer`}>
        <div className={` ${styles.flexCenter} flex-col dark:bg-primary bg-slate-300 w-[100%] h-[100%] rounded-full`}>
            <a href="https://t.me/+rtNuL-0neQBhMzZk" rel='external' target='_blank'>    
                <div className={` ${styles.flexStart} flex-row`}>
                    <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                        <span className='dark:text-gradient text-orange-gradient'>Join </span>    
                    </p>
                    <img src={plus} className='w-[23px] h-[23px] object-contain dark:text-gradient text-orange-gradient' alt='plus'/>
                </div>
                <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className='dark:text-gradient text-orange-gradient'>the chat</span>
                </p>
            </a>
        </div>
    </div>
    
)
    }

export default JoinButton