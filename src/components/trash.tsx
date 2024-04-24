import * as React from "react"

export default function Navbar(){
  return(
    <>
      <div className="navbar bg-[#F5F5F5]">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-[#000000] t-xl">PT. Cahaya Dua Berlian </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[#3E4095]">
              <li><a>Home</a></li>
              <li><a>Our Product</a></li>
              <li><a>About Us</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
        </div>
    </>
  )
}

<div className="navbar bg-[#F5F5F5]">
          <div className="navbar-start">
            <div className="profile-header">
              <div className="profile-header-box">
                <div className="left">
                  <img src="/cdb.png" width={67} height={45} />
                </div>
                <div className="right">
                    <h2 className="text-[#000000]">PT. Cahaya Dua Berlian</h2>
                  <p className="text-[#666666]">Printing & Construction</p>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[#3E4095]">
              <li><a>Home</a></li>
              <li><a>Our Product</a></li>
              <li><a>About Us</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
        </div>