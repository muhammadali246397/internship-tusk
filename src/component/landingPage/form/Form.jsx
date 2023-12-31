import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Form = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className='container mx-auto px-16'>
            <div className="">
                <div className="card md:w-2/6">
                    <div className="card-body bg-white rounded-lg px-5 border">
                        <h3 className='font-semibold text-3xl'>Resistration form</h3>
                        <p>register your account here</p>

                        <div className="divider">o</div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base ">Email</span>
                                </label>
                                <input className="input input-bordered" placeholder='Email' type='email'
                                    {...register("mail", { required: "Email Address is required" })}
                                    aria-invalid={errors.mail ? "true" : "false"}
                                />
                                {errors.mail && <p role="alert" className='text-red-500'>{errors.mail?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base ">UserName</span>
                                </label>
                                <input className="input input-bordered" type='text' placeholder='User Name'
                                    {...register("username", { required: "User name is required" })}
                                    aria-invalid={errors.username ? "true" : "false"}
                                />
                                {errors.username && <p className='text-red-500' role="alert">{errors.username?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Password</span>
                                </label>
                                <div className="password-input relative">
                                    <input
                                        className="input w-full input-bordered"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        {...register("password", { required: "Please set your password" })}
                                        aria-invalid={errors.password ? "true" : "false"}
                                    />
                                    <span
                                        onClick={togglePasswordVisibility}
                                        className="password-toggle absolute top-4 right-4"
                                    >
                                        {showPassword ? (
                                            <FaEye></FaEye>
                                        ) : (
                                            <FaEyeSlash></FaEyeSlash>
                                        )}
                                    </span>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500" role="alert">
                                        {errors.password?.message}
                                    </p>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base ">Confirm Password</span>
                                </label>
                                <div className="password-input relative">
                                    <input
                                        className="input w-full input-bordered"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        {...register("conpassword", { required: "Please set your password" })}
                                        aria-invalid={errors.conpassword ? "true" : "false"}
                                    />
                                    <span
                                        onClick={togglePasswordVisibility}
                                        className="password-toggle absolute top-4 right-4"
                                    >
                                        {showPassword ? (
                                            <FaEye></FaEye>
                                        ) : (
                                            <FaEyeSlash></FaEyeSlash>
                                        )}
                                    </span>
                                </div>
                                {errors.conpassword && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                            </div>

                            <div className='text-center mt-10'>
                                <input className="btn bg-[#D80027] px-6 py-2 border-none w-full hover:bg-[rgb(255,149,168)] text-white rounded-sm" type="submit" value='Login' />
                            </div>
                            <p className='text-red-500 text-center underline mt-5'> <Link >Forget yur password?</Link ></p>


                            <div className="divider">o</div>
                            <p className='text-center'>Do not you have an account yet?</p>
                            <p className='text-red-500 text-center underline mt-2'><Link>create one here</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;