import Staff from "./Staff";
import StaffPets from "./StaffPets";

const StaffBar = () => {
    return (
        <div id="staff"className="flex flex-col md:flex-row">
            <Staff />
            <StaffPets />
        </div>
    );
}

export default StaffBar;