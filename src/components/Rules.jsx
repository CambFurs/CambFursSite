import React, { useState } from 'react';
import { rules } from '../constants';
import {arrowdown} from '../assets';
import styles from '../style';

const Rules = () => {
  const [visibleKey, setVisibleKey] = useState(null);

  const toggleVisibility = (key) => {
    if (visibleKey === key) {
      setVisibleKey(null);
    } else {
      setVisibleKey(key);
    }
  };

  return (
    <section id="rules" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mg-6`}>
      <div className={`${styles.flexstart} sm:my-0 my-10 rounded dark:bg-black-gradient bg-orange-gradient p-10 `}>
        <h2 className='text-3xl dark:text-white text-black font-poppins font-bold'> Rules</h2>
        <ol style={{ listStyleType: 'decimal' }}>
          {rules.map((rule) => (
            <li key={rule.key} className={`${styles.paragraph} max-w-470px mt-5`}>
              <div className='flex flex-row' onClick={() => toggleVisibility(rule.key)}>
              {rule.rule}
              <span className='cursor-pointer' ><img src={arrowdown} className='m-1 w-[23px] h-[23px] object-contain text-gradient md:block hidden' alt='Show More'/></span>
              </div>
              <div
                id={`info_${rule.key}`}
                style={{
                  display: visibleKey === rule.key ? 'block' : 'none',
                }}
              >
                <hr className='my-2'/>
                <p className='dark:text-white text-black'>{rule.reason}</p>
                {rule.subreasons && rule.subreasons.length > 0 && (
                  <ul style={{ listStyleType: 'circle' }}>
                    {rule.subreasons.map((subreason, index) => (
                      <li key={index} className='ml-10'>{subreason.link && subreason.title ? (
                        <a href={subreason.link} className="dark:text-white text-black"style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                          {subreason.title}
                        </a>
                      ) : (
                        subreason
                      )}
                    </li>
                    ))}
                  </ul>
                )}
                <hr className='my-2'/>
              </div>
            </li>
          ))}
        </ol>
        
      </div>
    </section>
  );
};

export default Rules;