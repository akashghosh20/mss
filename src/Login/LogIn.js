import React from 'react';
import { Link} from 'react-router-dom';


const Login = () => {
  

 

    


    
 


    return (
        <div className='flex justify-center h-screen items-center'>
                <div class="card w-96  bg-base-100 shadow-xl">
                    <div class="card-body">
                        
                      <h2 class="text-center text-2xl font-bold">লগ ইন</h2>

                            <form>


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

                            <input  className="btn w-full max-w-xs text-white" type="submit" value="LOG IN" />
                            </form>
                    <p>এখানে নতুন?<Link className='text-primary' to="/signup">নতন অ্যাকাউন্ট করুন</Link></p>
                    <div class="divider">OR</div>
                    <button  class="btn btn-primary text-white">গুগল দিয়ে লগ ইন</button>
                    
                </div>
           </div>
        </div>
    );
};

export default Login;