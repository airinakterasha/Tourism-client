import { useContext, useState } from "react"
import { AuthContext } from "./../providers/AuthProvider";
import { toast } from "react-toastify";


const UpdateProfile = () => {
    const {user, updateUserProfile} = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const [email, setEmail] = useState(user?.email);
    const [photo, setPhoto] = useState(user?.photoURL);

    const handleUpdateProfile = (e) => {
        e.preventDefault()
        updateUserProfile(name, photo)
        .then(() => {
            toast('You updated your profile successfully');
        })
        .catch(()=>{
            toast('Your profile is not updated');
        })  
    }
    return (
        <>
            <div className="bg-[#F4F5F8] md:w-3/4 lg:w-1/2 mx-auto my-20">
                <div className="text-center pt-20">
                    <h2 className="text-4xl bg-accent p-10">Update your profile</h2>
                </div>
                <div className="">
                    <form onSubmit={handleUpdateProfile} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Name</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder={user && user.displayName} 
                                name={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input input-bordered" 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder={user && user.photoURL} 
                                name={photo} 
                                onChange={(e) => setPhoto(e.target.value)}
                                className="input input-bordered" 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                                <span className="label-text text-red-500">You cannot change your email address.</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder={user && user.email}  
                                name={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                className="input input-bordered" 
                                disabled
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateProfile