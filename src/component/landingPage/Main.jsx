import React from 'react';
import Form from './form/Form';

const Main = () => {
    return (
        <div>
            <div className='my-20 '>
                <div className='container mx-auto px-16'>
                    <button className='btn text-white bg-blue-600 px-6 py-3 mr-20 hover:bg-blue-800 font-semibold '>BOOK NOW</button>
                    <button className='btn bg-gradient-to-r from-[#2FDFEC] py-3 px-6 via-[#45B0F4] via-30% via-[#6272FF] via-45% via-[#8959FD] via-60% via-[#B43DFB] via-70% to-[#F646E5] text-white hover:from-[#F646E5] hover:to-[#2FDFEC] font-semibold '>BOOK NOW</button>
                </div>
            </div>
            <Form></Form>
        </div>
    );
};

export default Main;