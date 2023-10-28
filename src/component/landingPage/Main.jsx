import React from 'react';
import Form from './form/Form';
import Blog from './blog/Blog';

const Main = () => {
    return (
        <div>
            <div className='py-20 '>
                <div className="container mx-auto px-16">
                    <button
                        className="text-white bg-blue-600 px-6 border-none py-3 mr-20 font-semibold custom-hover-shadow"
                    >
                        BOOK NOW
                    </button>
                    <button
                        className="btn bg-gradient-to-r from-[#2FDFEC] custom-hover-shadow border-none py-3 px-6 via-[#45B0F4] via-30% via-[#6272FF] via-45% via-[#8959FD] via-60% via-[#B43DFB] via-70% to-[#F646E5] text-white font-semibold"
                    >
                        BOOK NOW
                    </button>
                </div>
            </div>
            <Form></Form>
            <Blog></Blog>
        </div>
    );
};

export default Main;