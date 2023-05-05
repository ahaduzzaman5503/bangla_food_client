import React from 'react';
import Ahaduzzaman from '../../../../public/Assets/Ahaduzzaman.jpg'

const About = () => {
    return (
        <div className='container mx-auto bg-gray'>
        <div className='flex justify-around py-5'>
            <div><h1 className='text-2xl font-bold'>My Profile</h1></div>
            <div className='flex items-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                 </svg>
                 <h1 className='text-red-500 text-xl'>Edit</h1>
            </div>
        </div>
        <div className='w-full h-1 bg-gray-500 my-5'></div>

        <div className='flex justify-around'>
            <div className='my-10'>
            <div className="avatar">
             <div className="w-48 mb-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                 <img src={Ahaduzzaman} alt={Ahaduzzaman} />
             </div>
             </div>
             <div className='text-white flex bg-red-500 p-2 rounded'> 
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                 </svg>
                 <h1>Edit Profile</h1>
             </div>
            </div>
             <div >
                 <h1 className='font-bold'> Name:</h1>
                 <h1>Ahaduzzaman Ahad</h1><br/>
                 <h1 className='font-bold'>Email Address:</h1>
                 <h1>ahaduzzaman45503@gmail.com</h1><br/>
                 <h1 className='font-bold'>Phone Number:</h1>
                 <h1>01724923133</h1><br/>
             
             </div>
        </div>
        <div className='w-full h-1 bg-gray-500 my-5'></div>
       
     </div>
    );
};

export default About;