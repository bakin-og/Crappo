import React from 'react'
import divider from './crappo images/Divider.png'
import unfold from './crappo images/outline_expand_black_24dp.png';
import logo from './crappo images/Logo.png'

const Navbar = () => {
  return (
    <div className='navbar-home'>
        <div className="">
        <nav class="navbar fixed-top">
  <div class="container-fluid">
    <img src={logo} alt="" className='logs' />
    <a class="navbar-brand text-light crappo" href="#">CRAPPO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      {/* <span class= "navbar-toggler-icon"></span> */}
      <span className='unfold'> <img src={unfold} alt="" width={25} /></span>
    </button>
    <div class="offcanvas offcanvas-end navclose" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
        <button type="button" class="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav text-center m-1 pt-5 fs-2 flex-grow-1">
          <li className='nav-item'>
            <a className="nav-link active" href="#" id='ben'>Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" id='ben'>Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" id='ben'>About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" id='ben'>Contact</a>
          </li>
          <li class="nav-item">
            <div className='m-1 p-1'>
                <span className='login'>Login</span>
                <img src={divider} alt="" />
                <span className='register'>Register</span>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</nav>
        </div>
        
    </div>
  )
}

export default Navbar