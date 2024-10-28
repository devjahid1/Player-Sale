import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { TbCoinFilled } from "react-icons/tb";
import banner from "../../assets/bg-shadow.png"
import banner_img from "../../assets/banner-main.png"
import { useState } from "react";


const Nav = () => {
  const [coins, setCoins] = useState(0);

  const handleClaimCredit = () =>{
    setCoins(coins + 6000000);
  }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/fixture'>Fixture</NavLink></li>
        <li><NavLink to='/Teams'>Teams</NavLink></li>
        <li><NavLink to='/schedules'>Schedules</NavLink></li>
    </>
    return (
      <div>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-full p-2 shadow">
            {links}
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center ml-[55%] hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="flex gap-2"><span>{coins} </span>Coin<TbCoinFilled className="text-yellow-600 text-2xl"/></a>
  </div>
  </div>

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
      <button onClick={handleClaimCredit} className="btn text-black bg-yellow-300 hover:bg-yellow-300">Claim Free Credit</button>
    </div>
  </div>
</div>
  </div>

    );
};

export default Nav;