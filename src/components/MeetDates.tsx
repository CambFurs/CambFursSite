import { dates } from "../constants";
import styles from "../style";

const formatDate = (dateString: string) => {
    const date = new Date(dateString.split('-').reverse().join('-'));
    const day = date.getDate();
    const month = date.toLocaleString('en-GB', { month: 'long' });
    const ordinal = getOrdinal(day);
    return `${ordinal} ${month}`;
};

const getOrdinal = (day: number) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const relevantDigits = (day > 3 && day < 21) || day % 10 > 3 ? 0 : day % 10;
    return day + suffixes[relevantDigits];
};

const MeetDates = () => {
const currentDate = new Date();

    return (
        <div id="dates" className={`flex-1 items-start flex-col m-2 pb-2`}>
            <div className={` sm:my-0 mt-10 rounded dark:bg-black-gradient bg-orange-gradient pb-10 xs:p-2 sm:p-5 md:p-10`}>
                <table className="border-collapse table-auto text-sm ">
                    <thead>
                        <tr >
                            <th className="xs:text-xl text-2xl border-b font-bold p-4 pl-8 pt-0 pb-3">Date</th>
                            <th className="xs:text-xl text-2xl border-b font-bold p-4 pl-8 pt-0 pb-3">Location</th>
                            <th className="xs:text-lg text-xl md:text-2xl border-b font-bold p-4 pl-8 pt-0 pb-3">Special Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dates.map((date, index) => (
                            <tr key={index}>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-white text-near-black md:whitespace-nowrap">{formatDate(date.date)}</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-white text-near-black">{date.location}</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-white text-near-black">{date.specialNotes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-2 sm:float-right xs:text-center">
                    <a href="https://calendar.cambfurs.co.uk" target="_blank" rel="noreferrer" className="flex dark:text-white text-near-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 m-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <p className="font-poppins  dark:text-white text-near-black">Download iCal</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default MeetDates;