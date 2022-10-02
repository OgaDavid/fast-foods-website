import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header>
       <nav id='navbar'>
        <div className="navbar">
          <Logo />
          <div className="navlinks">
            <ul>

              <li><a href="/">Home</a></li>

              <li>
                <div className="services">
                <a href="#services-section">Services <i class="fa-solid fa-angle-down"></i></a>
                <div className="dropdown">
                  <div className="dropdown-content">
                    <div className="dropdown-card">
                        <div className="dropdown-img">
                          <i class="fa-solid fa-utensils fa-2x"></i>
                        </div>
                        <div className="dropdown-text">
                          <h3>Tasty meals</h3>
                          <p>Delicious and fast meals.</p>
                        </div>
                      </div>

                      <div className="dropdown-card">
                        <div className="dropdown-img">
                          <i class="fa-solid fa-truck-fast fa-2x"></i>
                        </div>
                        <div className="dropdown-text">
                          <h3>Fast Delivery</h3>
                          <p>Swift delivery service.</p>
                        </div>
                      </div>

                      <div className="dropdown-card">
                        <div className="dropdown-img">
                          <i class="fa-solid fa-money-check-dollar fa-2x"></i>
                        </div>
                        <div className="dropdown-text">
                          <h3>Easy checkout</h3>
                          <p>Seamless checkout service.</p>
                        </div>
                      </div>

                      <div className="dropdown-card">
                        <div className="dropdown-img">
                          <i class="fa-solid fa-shield-halved fa-2x"></i>
                        </div>
                        <div className="dropdown-text">
                          <h3>Money back guaranteed</h3>
                          <p>Up to 80% refund.</p>
                        </div>
                      </div>
                  </div>
                </div>
                </div>
              </li>

              <li>
                <div className="new">
                <a href="#new">New<span><i class="fa-solid fa-fire"></i><i class="fa-solid fa-angle-down"></i></span></a>
                <div className="dropdown">
                  <div className="dropdown-content">
                    <div className="fruits dropdown-card">
                        <div className="dropdown-img">
                          <i class="fa-solid fa-lemon fa-2x"></i>
                        </div>
                        <div className="dropdown-text">
                          <h3>Fruits</h3>
                          <p>Get fresh, juicy fruits now!</p>
                        </div>
                    </div>

                    <div className="veggies dropdown-card">
                        <div className="dropdown-img">
                          <i class="fa-solid fa-carrot fa-2x"></i>
                        </div>
                        <div className="dropdown-text">
                          <h3>Veggies</h3>
                          <p>Get fresh, clean veggies now!</p>
                        </div>
                    </div>

                    <div className="fast-foods dropdown-card">
                        <div className="dropdown-img">
                          <i class="fa-solid fa-burger fa-2x"></i>
                        </div>
                        <div className="dropdown-text">
                          <h3>Fast-foods</h3>
                          <p>Try our latest recipes!</p>
                        </div>
                    </div>

                    <div className="drinks dropdown-card">
                        <div className="dropdown-img">
                          <i class="fa-solid fa-martini-glass-citrus fa-2x"></i>
                        </div>
                        <div className="dropdown-text">
                          <h3>Drinks</h3>
                          <p>Check out new drinks!</p>
                        </div>
                    </div>

                  </div>
                </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="cta-buttons">
            <button datatype='login' className='login-btn'>Login</button>
            <button datatype='signup' className='signup-btn'>Sign up</button>
          </div>
        </div>
       </nav>
    </header>
  )
}

export default Navbar