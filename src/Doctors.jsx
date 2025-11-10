import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Doctor from './Doctor';

const Doctors = () => {
    const data = useLoaderData()
    const [doctors, setDoctors] = useState(data)

    const handlesearchDoctors = (e) => {
        e.preventDefault()
        const searchValue = e.target.search.value
        const filterDoctor = data.filter((doctor) => doctor.name.toLowerCase().includes(searchValue.toLowerCase()))
        setDoctors(filterDoctor)
    }

    return (
        <div>

            <div className='text-4xl font-bold text-green-300 text-center my-7'>
                <p>Our Hospital Doctors:{data.length}</p>
            </div>

            <div className=''>
                <form onSubmit={handlesearchDoctors} s className='flex flex-col justify-center items-center gap-7'>
                    <input className='w-160 h-8 border-2 rounded-2xl' type="search" name="search" id="" placeholder='search your desired doctor' />
                    <button className='mb-5 cursor-pointer border-2 border-green-400 w-35 h-8 rounded-2xl bg-green-300 text-white'>Submit</button>
                </form>
            </div>
            <div className='grid grid-cols-3 '>
                {doctors.map((doctor) => <Doctor doctor={doctor} key={doctor.id}></Doctor>)}
            </div>
        </div>
    );
};

export default Doctors;