import React from 'react';
import banner from '../../../assets/banar.png'
import user from '../../../assets/Image.png'
import flag from '../../../assets/flag.png'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BiCommentDetail, BiLike, BiShare, BiShareAlt } from "react-icons/bi";


const Blog = () => {
    return (
        <div>
            <div className='container mx-auto px-16 mt-20'>
                <div className='bg-white rounded-md p-5'>
                    <h2 className='text-center font-bold text-4xl'><span className='border-b-2 border-red-500'>Blog</span></h2>
                    <p className='text-center mt-2 mb-6'>Encuentra los artículos relacionados a tu sector y entérate de las ultimas noticias.</p>
                    <div className='md:grid  box-border grid-cols-3 gap-6'>
                        <div className='shadow-md hover:scale-105 transition-all'>
                            <img className='transition-all' src={banner} alt="" />
                            <div className='px-3 '>
                                <div className='flex relative mt-5 gap-5'>
                                    <img className='absolute  -top-[52px]' src={user} alt="" />
                                    <div className='ml-20' >
                                        <h2 className='text-1xl font-bold'>Cristian Fernández</h2>
                                        <p className='font-semibold '>Derecho penal</p>
                                        <div className='flex gap-1'>
                                            <FaStar className='text-red-500'></FaStar>
                                            <FaStar className='text-red-500'></FaStar>
                                            <FaStarHalfAlt className='text-red-500'></FaStarHalfAlt>
                                            <FaStar></FaStar>
                                            <FaStar></FaStar>
                                        </div>

                                    </div>
                                    <div>
                                        <img className='ml-5 w-100%' src={flag} alt="" />
                                    </div>
                                </div>
                                <h3 className='text-2xl font-bold my-3'>Title of blog post</h3>
                                <p className='text-gray-600'>Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.</p>
                                <div className='flex gap-3 my-4'>
                                    <div className='border rounded-3xl px-3'>Pill labels</div>
                                    <div className='border rounded-3xl px-3'>Pill labels</div>
                                    <div className='border rounded-3xl px-3'>Pill labels</div>

                                </div>
                                <hr />
                                <div className='flex justify-between my-2 py-4'>
                                    <div className='flex gap-1 items-center'>
                                        <BiCommentDetail></BiCommentDetail>
                                        <p>123</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <BiLike></BiLike>
                                        <p>340</p>
                                    </div>
                                    <button className='btn btn-outline border-2 rounded-sm'>compiter <BiShareAlt></BiShareAlt></button>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-md hover:scale-105 transition-all'>
                            <img className=' transition-all' src={banner} alt="" />
                            <div className='px-3 '>
                                <div className='flex relative mt-5 gap-5'>
                                    <img className='absolute  -top-[52px]' src={user} alt="" />
                                    <div className='ml-20' >
                                        <h2 className='text-1xl font-bold'>Cristian Fernández</h2>
                                        <p className='font-semibold '>Derecho penal</p>
                                        <div className='flex gap-1'>
                                            <FaStar className='text-red-500'></FaStar>
                                            <FaStar className='text-red-500'></FaStar>
                                            <FaStarHalfAlt className='text-red-500'></FaStarHalfAlt>
                                            <FaStar></FaStar>
                                            <FaStar></FaStar>
                                        </div>

                                    </div>
                                    <div>
                                        <img className='ml-5 w-100%' src={flag} alt="" />
                                    </div>
                                </div>
                                <h3 className='text-2xl font-bold my-3'>Title of blog post</h3>
                                <p className='text-gray-600'>Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.</p>
                                <div className='flex gap-3 my-4'>
                                    <div className='border rounded-3xl px-3'>Pill labels</div>
                                    <div className='border rounded-3xl px-3'>Pill labels</div>
                                    <div className='border rounded-3xl px-3'>Pill labels</div>

                                </div>
                                <hr />
                                <div className='flex justify-between my-2 py-4'>
                                    <div className='flex gap-1 items-center'>
                                        <BiCommentDetail></BiCommentDetail>
                                        <p>123</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <BiLike></BiLike>
                                        <p>340</p>
                                    </div>
                                    <button className='btn btn-outline border-2 rounded-sm'>compiter <BiShareAlt></BiShareAlt></button>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-md box-border hover:scale-105 transition-all'>
                            <img className=' transition-all' src={banner} alt="" />
                            <div className='px-3 '>
                                <div className='flex relative mt-5 gap-5'>
                                    <img className='absolute  -top-[52px]' src={user} alt="" />
                                    <div className='ml-20' >
                                        <h2 className='text-1xl font-bold'>Cristian Fernández</h2>
                                        <p className='font-semibold '>Derecho penal</p>
                                        <div className='flex gap-1'>
                                            <FaStar className='text-red-500'></FaStar>
                                            <FaStar className='text-red-500'></FaStar>
                                            <FaStarHalfAlt className='text-red-500'></FaStarHalfAlt>
                                            <FaStar></FaStar>
                                            <FaStar></FaStar>
                                        </div>

                                    </div>
                                    <div>
                                        <img className='ml-5 w-100%' src={flag} alt="" />
                                    </div>
                                </div>
                                <h3 className='text-2xl font-bold my-3'>Title of blog post</h3>
                                <p className='text-gray-600'>Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.</p>
                                <div className='flex gap-3 my-4'>
                                    <div className='border rounded-3xl px-3'>Pill labels</div>
                                    <div className='border rounded-3xl px-3'>Pill labels</div>
                                    <div className='border rounded-3xl px-3'>Pill labels</div>

                                </div>
                                <hr />
                                <div className='flex justify-between my-2 py-4'>
                                    <div className='flex gap-1 items-center'>
                                        <BiCommentDetail></BiCommentDetail>
                                        <p>123</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <BiLike></BiLike>
                                        <p>340</p>
                                    </div>
                                    <button className='btn btn-outline border-2 rounded-sm'>compiter <BiShareAlt></BiShareAlt></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;