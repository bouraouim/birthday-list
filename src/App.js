import logo from './logo.svg';
import data from './components/data';
import { useState } from 'react';
import List from './components/list';

function App() {
  const [people,setPeople]=useState(data)


  return (

    <main className=''>
        <div className='relative max-w-sm mx-auto mt-6 bg-white rounded-lg shadow-lg'>
          <div className='w-3/4 h-3/4 -right-1/2 top-1/4   bg-[#6C9CFC] rounded-full absolute -z-10 ' ></div>
          <h3  className='text-center font-["Lora"] text-4xl my-2 font-bold '> {people.length} Birthdays today</h3>
          <List people={people}/>
          <div className='flex justify-center max-w-3/4 '>
          <button onClick={() => setPeople([])} className='bg-[#201F4C] rounded-full   font-medium text-white py-2 px-16 mb-2'>CLEAR ALL</button></div>
        </div>
    </main>
  );
}

export default App;
