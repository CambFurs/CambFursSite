import { useEffect, useState } from 'react';
import styles from '../style';
import {dates} from '../constants';

type NextMeetType = {
  date: string;
  location: string;
  specialNotes: string;
  daysUntil: number;
}

const NextMeet = () => {
  const [nextMeet, setNextMeet] = useState<NextMeetType | null>(null);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // to ignore time component

    for (let meet of dates) {
      let meetDate = new Date(meet.date.split('-').reverse().join('-'));
      meetDate.setHours(0, 0, 0, 0); // to fix DST
      if (meetDate >= today) {
        const diffTime = Math.abs(meetDate.getTime() - today.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        setNextMeet({ ...meet, daysUntil: diffDays });
        break;
      }
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString.split('-').reverse().join('-'));
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' }; // e.g., "Monday 1 January"
    return date.toLocaleDateString('en-GB', options);
  };

  return (
    <div className={`${styles.flexCenter} sm:my-0 my-10 max-w-[400px] rounded dark:bg-black-gradient bg-orange-gradient p-[2px] `}>
        <div className='mx-5 my-5'>
            {nextMeet ? (
                <p className='dark:text-white text-near-blackfont-poppins font-medium text-xl p-3 px-10'>
                {nextMeet.daysUntil === 0 ? <>The meet is <span className='font-extrabold'>today</span>!</> : 
                    <>The next meet is in <span className='font-poppins font-extrabold'>{nextMeet.daysUntil}</span> days on {formatDate(nextMeet.date)}</>
                }
                {nextMeet.location === "on Discord" && ` and is happening ${nextMeet.location}`}
                {nextMeet.specialNotes && ` and is a ${nextMeet.specialNotes.toLowerCase()}!`}
                </p>
            ) : (
                <p className='dark:text-white text-near-black font-poppins'>No meets are scheduled yet! Check back shortly for more to be announced!</p>
            )}
        </div>
    </div>
  );
};

export default NextMeet;