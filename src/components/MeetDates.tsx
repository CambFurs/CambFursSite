import { dates } from "../constants";
import styles from "../style";

const MeetDates = () => {
const currentDate = new Date();

    return (
        <section id="dates" className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mg-6`}>
            <div className={`${styles.flexStart} sm:my-0 my-10 rounded dark:bg-black-gradient bg-orange-gradient xs:p-2 sm:p-5 md:p-10 `}>
                <table className="border-collapse table-auto w-full text-sm">
                    <thead>
                        <tr >
                            <th className="text-2xl border-b font-bold p-4 pl-8 pt-0 pb-3">Date</th>
                            <th className="text-2xl border-b font-bold p-4 pl-8 pt-0 pb-3">Location</th>
                            <th className="text-xl md:text-2xl border-b font-bold p-4 pl-8 pt-0 pb-3">Special Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dates.map((date, index) => (
                            <tr key={index}>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-white text-near-black">{date.date}</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-white text-near-black">{date.location}</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-white text-near-black">{date.specialNotes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default MeetDates;