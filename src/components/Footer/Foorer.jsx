import logo from "../../assets/logo.png";
import banner from "../../assets/Frame 11.png"
import news from "../../assets/Frame 34.png"
const Foorer = () => {
    return (
       <div>

        <div
  className="mt-10 m-auto hero h-[360px] lg:w-[1340px] -mb-[100px] relative rounded-2xl bg-black"
  style={{
    backgroundImage: `url(${news})`,
  }}>
    </div>


        <footer className="  mt-10 bg-black text-base-content text-white p-10">
            <img className="m-auto mt-20 w-[142px]" src={logo}/>
            <div className="footer mt-5">
    <nav>
    <h6 className="font-bold text-[18px] text-white">About Us</h6>
        <p className="text-[15px] w-[291px] text-left text-gray-400">We are a passionate team dedicated to providing the best services to our customers.</p>
  </nav>
  <nav>
    <h6 className="font-bold text-[18px] text-white">Quick Links</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Content</a>

  </nav>

  <form>
    <h6 className="footer-title">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-gray-400 w-[291px]">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div className="join">
            <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered join-item"
            />
            <button className="join-item p-2">
                <img src={banner} alt="Icon" className="h-[51px] w-[150px] -mt-[10px] -ml-[6px]" />
            </button>
        </div>
    </fieldset>
  </form>
  </div>
</footer>
<footer className="footer footer-center bg-black text-white text-base-content p-4 border border-b-solid border-gray-600 ">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - Adnan All Rights Reserved.</p>
  </aside>
</footer>
</div>
    );
};

export default Foorer;