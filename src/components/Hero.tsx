import styles from '../style';
import JoinButton from './JoinButton';
import NextMeet from './NextMeet';

type HeroProps = {
  darkColourMode: boolean;
};

const Hero = (props: HeroProps) => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row justify-between items-centerw-full'>
        <h1 className='flex-1 font-poppins font-semi-bold ss:text-[72px] text-[52px] dark:text-white text-near-black ss:leading-[75px] leading-[50px]'> <span className='font-bold'>Cambridge</span> <br/> {' '} <span className='dark:text-gradient text-orange-gradient'>Furs {' '}</span></h1>
        <div className="ss:flex hidden med:mr-4 mr-0">
          <JoinButton darkColourMode={props.darkColourMode}/>
        </div>
      </div>
      <p className={`${styles.paragraph} max-w-470px mt-5 dark:text-white text-near-black`}>Cambridge Furs is a small, community-driven furmeet that has been around since the late 1990s, serving as a social group for furries over 16 in Cambridgeshire and beyond.</p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <NextMeet/>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <JoinButton darkColourMode={props.darkColourMode}/>
    </div>
  </section>
)

export default Hero