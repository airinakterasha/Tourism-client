import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email,password, photo)

        // password error
        if (password.length < 6) {
            toast('Password should be at least 6 characters or longer.')
            return;
        } else if (!/[A-Z]/.test(password)){
            toast('Your password should have at least one uppercase characters.')       
            return
        } else if (!/[a-z]/.test(password)){
            toast('Your password should have at least one lowercase characters.')       
            return
        }

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            // user create to database
            const createAt = result.user?.metadata?.creationTime;
            const user = {name, email, photo, createAt}

            fetch('http://localhost:5555/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'You have been created your account',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <>
            <div className="bg-[#F4F5F8] md:w-3/4 lg:w-1/2 mx-auto my-10">
                <div className="text-center pt-20">
                    <h2 className="text-4xl bg-accent p-10">Please Register</h2>
                </div>
                <div className="">
                    <form onSubmit={handleRegister} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter name" className="input input-bordered" required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Register</button>
                        </div>
                    </form>

                    <div className="text-center pb-10">
                        <p className="text-2xl">Already have an account? Please <Link to='/login' className="text-purple-500">Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register