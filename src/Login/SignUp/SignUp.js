import React from 'react';

const SignUp = () => {
    return (
        <div>
             <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">লগ ইন কর!</h1>
                    <p class="py-6">তুমি তোমার ড্যাশবোর্ড দেখতে লগইন কর অথবা নতুন এক্যাউন্ট তৈরি কর</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                        <label class="label">
                            <span class="label-text">তোমার নাম </span>
                        </label>
                        <input type="text" placeholder="তোমার নাম লেখ" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                        <label class="label">
                            <span class="label-text">তোমার নাম </span>
                        </label>
                        <input type="text" placeholder="তোমার নাম লেখ" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                        <label class="label">
                            <span class="label-text">ইমেইল</span>
                        </label>
                        <input type="text" placeholder="তোমার ইমেইল দাও" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                        <label class="label">
                            <span class="label-text">পাসওয়ার্ড </span>
                        </label>
                        <input type="password" placeholder="তোমার পাসওয়ার্ড দাও" class="input input-bordered" />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">পাসওয়ার্ড ভুলে গেছ?</a>
                        </label>
                        </div>
                        <div class="form-control mt-6">
                        <button class="btn btn-primary">লগইন</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SignUp;