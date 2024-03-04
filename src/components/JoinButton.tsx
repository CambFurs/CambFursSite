import styles from '../style';

type JoinButtonProps = {
    darkColourMode: boolean;
};

//TODO: Further changes to enable svg image updating
const JoinButton = (props: JoinButtonProps) => {

    return (
        <div className={`${styles.flexCenter} mx-5 w-[140px] h-[140px] rounded-full dark:bg-blue-gradient bg_orange_button p-[3px] cursor-pointer`}>
            <div className={` ${styles.flexCenter} flex-col dark:bg-primary bg-primary-light w-[100%] h-[100%] rounded-full`}>
                <a href="https://t.me/+rtNuL-0neQBhMzZk" rel='external' target='_blank'>    
                    <div className={` ${styles.flexStart} flex-row`}>
                        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                            <span className='dark:text-gradient text-orange-gradient'>Join </span>    
                        </p>
                        <svg width="23px" height="23px" className='object-contain' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="lightGradient" gradientTransform="rotate(157.81)">
                                    <stop offset="0%" stopColor="#B86E3D" />
                                    <stop offset="100%" stopColor="#D19A75" />
                                </linearGradient>
                                <linearGradient id="darkGradient" x1="0" x2="1" y1="1" y2="0">
                                    <stop offset="0.89%%" stopColor="#def9fa" />
                                    <stop offset="17.23%" stopColor="#bef3f5" />
                                    <stop offset="42.04%" stopColor="#9dedf0" />
                                    <stop offset="55.12%" stopColor="#7de7eb" />
                                    <stop offset="71.54%" stopColor="#5ce1e6" />
                                    <stop offset="100%" stopColor="#33bbcf" />
                                </linearGradient>
                            </defs>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 3a1 1 0 0 0-1 1v7H4a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4a1 1 0 0 0-1-1z" fill={`url(#${props.darkColourMode ? 'darkGradient' : 'lightGradient'})`} />
                        </svg>
                    </div>
                    <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                        <span className='dark:text-gradient text-orange-gradient'>the chat</span>
                    </p>
                </a>
            </div>
        </div>
    );
}

export default JoinButton;