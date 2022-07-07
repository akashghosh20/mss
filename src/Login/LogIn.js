import React from 'react';
import { Link} from 'react-router-dom';


const Login = () => {
  

 

    


    
 


    return (
        <div className='flex justify-center h-screen items-center'>
                <div class="card w-96  bg-base-100 shadow-xl">
                    <div class="card-body">
                        
                      <h2 class="text-center text-2xl font-bold">Log In</h2>

                            <form>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs" />
                           
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"/>
                        </div>

                            <input  className="btn w-full max-w-xs text-white" type="submit" value="LOG IN" />
                            </form>
                    <p>New to Here?<Link className='text-primary' to="/signup">Create New Account</Link></p>
                    <div class="divider">OR</div>
                    <button  class="btn btn-primary text-white">Continue With Google</button>
                    
                </div>
           </div>
        </div>
    );
};

export default Login;