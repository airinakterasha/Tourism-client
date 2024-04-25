import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>ErrorPage
        <div className="">
            <div className="m-10 text-center space-y-10">
                <h2 className="text-4xl">404! </h2>
                <h2 className="text-4xl">Sorry the page is not found.</h2>
                <p className="">Go back to the <Link to='/' className="text-blue-600">Home</Link></p>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage