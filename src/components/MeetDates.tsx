import { dates } from "../constants";

const MeetDates = () => {
    return (
        <div id="dates" className="container dark:bg-black-gradient bg-orange-gradient">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Special Notes</th>
                </tr>
                {dates.map((date, index) => (
                        <tr key={index}>
                            <td>{date.date}</td>
                            <td>{date.location}</td>
                            <td>{date.specialNotes}</td>
                        </tr>
                    ))}
            </thead>
        </div>
    )
}
export default MeetDates;