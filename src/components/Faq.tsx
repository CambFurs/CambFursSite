import { faq } from '../constants';
import {arrowdown} from '../assets';
import styles from '../style';
import { useState } from 'react';


const Faq = () => {
  const [visibleKey, setVisibleKey] = useState<number | null>(null);

  const toggleVisibility = (key: number | null) => {
    if (visibleKey === key) {
      setVisibleKey(null);
    } else {
      setVisibleKey(key);
    }
  };

  return (
    <section id="faq" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mg-6`}>
      <div className={`sm:my-0 my-10 rounded dark:bg-black-gradient bg-orange-gradient xs:p-2 sm:p-5 md:p-10 `}>
        <h2 className='text-3xl dark:text-white text-near-black font-poppins font-bold mb-10'>Frequently Asked Questions</h2>
        <ol className="" style={{ listStyleType: 'decimal' }}>
          {faq.map((fact) => (
            <li className={`${styles.paragraph} max-w-470px mt-5`}>
              {fact.question}
              <p className='dark:text-white text-near-black'>
                {fact.answer}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Faq;