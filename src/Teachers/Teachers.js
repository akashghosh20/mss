import React from 'react';
import teacher from '../Assets/images/doctor.png'
import background from '../Assets/images/bg.png'

const Teachers = () => {
    return (
        <section 
        style={
            {background}
        }
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={teacher} alt="missing" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl py-5'>Make an Appointment Today</h2>
                <p className=' pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
            </div>
        </section>
    );
};

export default Teachers;