

const Login = () => {
  return (
    <>
        <div className="bg-[#F4F5F8] md:w-3/4 lg:w-1/2 mx-auto my-20">
            <div className="text-center pt-20">
                <h2 className="text-4xl bg-accent p-10">Please Sign In</h2>
            </div>
            <div className="">
                <form className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login