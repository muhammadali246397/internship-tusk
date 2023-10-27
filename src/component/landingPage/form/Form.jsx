import React from 'react';
import { useForm } from 'react-hook-form';


const Form = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    const validatePassword = (value) => {
        if (!value) {
            return 'Password is required';
        }
        if (value.length < 6) {
            return 'Password must be at least 6 characters long';
        }
        if (!/(?=.*[A-Z])/.test(value)) {
            return 'Password must contain at least one capital letter';
        }
        if (!/(?=.*[!@#$%^&*()])/.test(value)) {
            return 'Password must contain at least one special character';
        }
        return true;
    };
    return (
        <div className='container mx-auto px-16'>
            <div className="">
                <div className="card w-2/6">
                    <div className="card-body bg-slate-200 rounded-lg px-5 border">
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
                                    <span className="label-text text-base ">Password</span>
                                </label>
                                <input className="input input-bordered" placeholder='Password'
                                    {...register("password", { required: "Please set your password" })}
                                    aria-invalid={errors.password ? "true" : "false"}
                                />
                                {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base ">Confirm Password</span>
                                </label>
                                <input className="input input-bordered" placeholder='Confirm Password'
                                    {...register("conpassword", { required: "set confirm password" })}
                                    aria-invalid={errors.conpassword ? "true" : "false"}
                                />
                                {errors.conpassword && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                            </div>

                            <div className='text-center mt-10'>
                                <input className="btn bg-[#D80027] px-6 py-2 border-none w-full hover:bg-[rgb(255,149,168)] text-white rounded-sm" type="submit" value='Login' />
                            </div>
                            <div className="divider">o</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;