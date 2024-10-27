import banner from "../../assets/bg-shadow.png"
import banner_img from "../../assets/banner-main.png"
const Header = () => {
    return (
<div
  className="hero h-[545px] rounded-2xl bg-black"
  style={{
    backgroundImage: `url(${banner})`,
  }}>
  <div className=""></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <img className="ml-[130px]" src={banner_img} alt="" />
      <p className=" mt-3 text-2xl font-bold">
      Assemble Your Ultimate Dream 11 Cricket Team
      </p>
      <p className="mb-5 mt-2">Beyond Boundaries Beyond Limits</p>
      <button className="btn text-black bg-yellow-300 hover:bg-yellow-300">Claim Free Credit</button>
    </div>
  </div>
</div>
    );
};

export default Header;