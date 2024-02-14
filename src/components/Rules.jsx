import React from 'react'
import { rules } from '../constants'
import styles from '../style'

const Rules = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mg-6`}>
      <div className={`${styles.flexstart} sm:my-0 my-10 rounded bg-black-gradient p-10 `}>
        <h2 className='text-white font-poppins'> Rules</h2>
        ###
        <ol style={{ listStyleType: 'decimal' }}>
          {rules.map((rule) => (
            <li key={rule.key} className={`${styles.paragraph} max-w-470px mt-5`}>{rule.rule}</li>
          ))}
        </ol>
        <p className='text-white font-poppins align-center'>Cambridge Furs is a social space and not a dating group.</p>
        <p className='text-white font-poppins'>We want to keep the group safe, friendly, and enjoyable for everyone (both online and at meets). Please do not take anything anyone says as an invitation to hit on them. Anyone reported as cruising (specifically looking for dates) will be asked to leave the group and may not be invited back.</p>
      </div>
    </section>
  )
}

export default Rules