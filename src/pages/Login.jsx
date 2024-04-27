import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider";
import { toast } from 'react-toastify';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const { signIn, loginByGoogle } = useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //Login user
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            
            const user = {
                email,
                lastLoggedAt: result.user?.metadata?.lastSignInTime
                
            }
            
            
            // update last logged at in the database
            fetch('http://localhost:5555/user', {
                method: 'PATCH',
                headers: {
                'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
        })
        .catch(error => {
            console.log(error);
            toast('User or password did not matched. Please check carefully')

        })
    }

    // logged in by google
    const handleGoogleLogin = () => {
        loginByGoogle()
        .then(result => {
            toast('Logged in by google successfully')
            console.log(result.user);
        })
        .catch(error => {
            toast('Sorry! Unsuccessful logged in')
            console.log(error);
        })
    }
    return (
        <>
            <div className="bg-[#F4F5F8] md:w-3/4 lg:w-1/2 mx-auto my-20">
                <div className="text-center pt-20">
                    <h2 className="text-4xl bg-accent p-10">Please Sign In</h2>
                </div>
                <div className="">
                    <form onSubmit={handleLogin} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Login</button>
                        </div>
                    </form>
                    <div className="text-center space-y-8 my-10">
                        <p>Or Continue With</p>
                        <div className="space-x-10">
                            <button 
                            onClick={handleGoogleLogin}
                            className="btn btn-warning">
                                <FaGoogle />
                                Google
                            </button>
                            <button 
                            
                            className="btn btn-error">
                                <FaGithub />
                                Github
                            </button>
                        </div>
                    </div>
                    <div className="text-center pb-10">
                        <p className="text-2xl">Do not have an account? Please <Link to='/register' className="text-purple-500">Register</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login