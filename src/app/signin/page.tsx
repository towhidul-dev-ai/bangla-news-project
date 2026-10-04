'use client';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';

const SignInPage = () => {
     const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
    
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { email: string,  password: string};
    
    
        const {data, error} = await authClient.signIn.email({
            ...user,
            callbackURL: "/"
         })
    
         if(data){
            toast.success("Sign In Succesfully")
            console.log(data);
            // redirect("/")
            
         }
    
         if(error){
            toast.error("something went wrong");
            console.log(error)
         }
        console.log(user);
    
    }

    return (
        <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন ইন</h2>
      <form onSubmit={onSubmit}>
      {/* <form> */}
        <fieldset className="fieldset   rounded-box w-md">
          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button type="submit" className="btn text-white bg-red-700 mt-4 ">
            সাইন ইন করুন
          </button>
        </fieldset>
      </form>

      {/* <button onClick={handleGoogleSignIn} className="btn ">Sign In With Google</button>
      <button onClick={handleGithubSignIn} className="btn ">Sign In With Github</button> */}
    </div>
    );
};

export default SignInPage;