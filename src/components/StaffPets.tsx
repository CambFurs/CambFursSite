import { useEffect, useCallback, useState } from 'react';
import { staffPets } from '../constants';

function determineClasses(indexes: any, cardIndex: any) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const StaffPets = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= staffPets.length - 1) {
      setIndexes({
        previousIndex: staffPets.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === staffPets.length
            ? 0
            : prevState.currentIndex + 2
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 4000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  return (
    <div className="container flex justify-center flex-1">
      <div className='basis-1/2'>
        <h1 className='font-poppins justify-center text-3xl'>Meet the Furrier Admins</h1>
        <ul className="card-carousel">
          {staffPets.map((staffPets, index) => (
            <li
              key={staffPets.id}
              className={`card ${determineClasses(indexes, index)} dark:bg-black-gradient bg-orange-gradient`}
            >
              <img src={staffPets.img} alt={staffPets.name} />
              <h2 className='font-poppins font-bold dark:text-white text-near-black'>{staffPets.name}</h2>
              <p className='font-poppins dark:text-white text-near-black'>{staffPets.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StaffPets;
