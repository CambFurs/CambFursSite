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
      <div className={`${styles.flexStart} sm:my-0 my-10 rounded dark:bg-black-gradient bg-orange-gradient xs:p-2 sm:p-5 md:p-10 `}>
        <h2 className='text-3xl  dark:text-white text-near-black font-poppins font-bold'>Frequently Asked Questions</h2>
        <ol className="mt-5" style={{ listStyleType: 'decimal' }}>
          {faq.map((fact) => (
            <li key={fact.key} className={`${styles.paragraph} max-w-470px mt-5`}>
              <div className='flex flex-row' onClick={() => toggleVisibility(fact.key)}>
              {fact.question}
              <span className='cursor-pointer' ><img src={arrowdown} className='m-1 w-[23px] h-[23px] object-contain dark:text-gradient text-near-black sm:block hidden' alt='Show More'/></span>
              </div>
              <div
                id={`info_${fact.key}`}
                style={{
                  display: visibleKey === fact.key ? 'block' : 'none',
                }}
              >
                <hr className='md:my-2'/>
                <p className='dark:text-white text-near-black'>{fact.answer}</p>
                <hr className='my-2'/>
              </div>
            </li>
          ))}
        </ol>
        
      </div>
    </section>
  );
};

export default Faq;