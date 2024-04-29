

const CountryName = () => {
  const handleCountry = (e) => {
    e.preventDefault();
    const form = e.target;

    const countryName = form.countryName.value;
    const image = form.image.value;
    const flag = form.flag.value;
    console.log(countryName, image, flag);
    const country = {countryName, image, flag}

    fetch('http://localhost:5555/countryname', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(country)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })


  }
  return (
    <div className="h-screen">
      <div className="bg-[#F4F5F8] md:w-3/4 lg:w-1/2 mx-auto my-20">
        <div className="text-center pt-20">
            <h2 className="text-4xl bg-accent p-10">Add Country Name</h2>
        </div>
        <form onSubmit={handleCountry} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <input type="text" name="countryName" placeholder="Add Country" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Image Url</span>
            </label>
            <input type="text" name="image" placeholder="Add Country Image url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Flag Url</span>
            </label>
            <input type="text" name="flag" placeholder="Add Country Flag url" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Country</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CountryName