import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='flex justify-center h-screen items-center'>
        <div class="card w-96  bg-base-100 shadow-xl">
            <div class="card-body">
                
              <h2 class="text-center text-xl font-bold">অ্যাকাউন্ট তৈরি কর</h2>

                    <form>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">তোমার নাম</span>
                    </label>
                    <input
                        type="text"
                        placeholder="তোমার নাম লেখ"
                        className="input input-bordered w-full max-w-xs" />
                   
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">তোমার গার্ডিয়ানের নাম</span>
                    </label>
                    <input
                        type="text"
                        placeholder="তোমার গার্ডিয়ানের নাম লেখ"
                        className="input input-bordered w-full max-w-xs" />
                   
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">তোমার মোবাইল নম্বর</span>
                    </label>
                    <input
                        type="email"
                        placeholder="তোমার মোবাইল নম্বর দাও"
                        className="input input-bordered w-full max-w-xs" />
                   
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">তোমার গার্ডিয়ানের মোবাইল নম্বর</span>
                    </label>
                    <input
                        type="email"
                        placeholder="তোমার গার্ডিয়ানের মোবাইল নম্বর দাও"
                        className="input input-bordered w-full max-w-xs" />
                   
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">ইমেইল</span>
                    </label>
                    <input
                        type="email"
                        placeholder="তোমার ইমেইল দাও"
                        className="input input-bordered w-full max-w-xs" />
                   
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">পাসওয়ার্ড</span>
                    </label>
                    <input
                        type="password"
                        placeholder="তোমার পাসওয়ার্ড দাও"
                        className="input input-bordered w-full max-w-xs"/>
                </div>

                    <input  className="btn w-full max-w-xs text-white mt-4" type="submit" value="অ্যাকাউন্ট তৈরি কর" />
                    </form>
            <p>আগের অ্যাকাউন্ট আছে?<Link className='text-primary' to="/login">লগ ইন কর</Link></p>
            
            
        </div>
   </div>
</div>

    );
};

export default SignUp;