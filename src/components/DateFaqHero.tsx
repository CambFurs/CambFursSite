import styles from '../style';
import Faq  from './Faq';
import MeetDates  from './MeetDates';

const DateFaqHero = () => {
    return (
    <div className={`flex sm:flex-row flex-col ${styles.paddingY}`}>
        <div className={`${styles.flexCenter}`}>
          <MeetDates/>
        </div>
        <div className={`${styles.flexStart}`}>
          <Faq/>
        </div>
      </div>      
    );
}
export default DateFaqHero;