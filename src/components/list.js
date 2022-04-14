import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className=' hover:bg-[#F6F8FF] transition duration-300 grid grid-flow-col auto-cols-max  w-full gap-3 p-3 items-center'>
            <img src={image} alt={name} className='object-cover w-20 h-20 col-auto rounded-full ' />
            <div className='w-full col-auto text-lg font-medium '>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;