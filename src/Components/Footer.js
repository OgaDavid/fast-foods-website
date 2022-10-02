import React from 'react'

const Footer = () => {

    const date = new Date();
  const currentYear = date.getFullYear();

    const style = {
        width: "60px",
        height:"60px"
    }
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-left">
                <a href="#banner">
                    <div className="footer-logo">
                        <h1>Fast<span>foods<span><lord-icon style={style} src="https://cdn.lordicon.com/zkazkzgr.json" trigger="loop"></lord-icon></span></span></h1>
                    </div>
                </a>
                <p>The fastest and most reliable food<br/>delivery in your city.</p>
 

                <div className="social-links">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-solid fa-paper-plane"></i>
                </div>

                <div className="mail">
                    <p>hello@fastfoods.com</p>
                </div>

                <div className="address">
                    <div className="country">
                        <h3>Nigeria</h3>
                        <p>No 2, Angle-View Estate, Chevron<br />Alternative Lekki, Lagos, Nigeria</p>
                    </div>

                    <div className="country">
                        <h3>United States</h3>
                        <p>651 N Broad St, New Castle, Delaware,<br />United States</p>
                    </div>

                    <div className="country">
                        <h3>British Virgin Islands</h3>
                        <p>Columbus Centre, Road Town, Tortola,<br/>British Virgin Islands.</p>
                    </div>
                </div>

                <div className="reserved">
                    <p>All rights Reserved. &copy; {currentYear} Fast foods Web.</p>
                </div>
            </div>

            <div className="footer-right">
                <div className="products">
                    <h3>Products</h3>
                    <ul>
                        <li>Fast foods</li>
                        <li>Drinks</li>
                        <li>Fruits</li>
                        <li>Veggies</li>
                    </ul>
                </div>

                <div className="legal">
                    <h3>Legal</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Security</li>
                        <li>AML & KYC Policy</li>
                    </ul>
                </div>

                <div className="use-cases">
                    <h3>Use Cases</h3>
                    <ul>
                        <li>Restaurants</li>
                        <li>Food Vendors</li>
                        <li>Ecommerce</li>
                        <li>Professionals</li>
                    </ul>
                </div>

                <div className="Freebies">
                    <h3>Freebies</h3>
                    <ul>
                        <li>Earn</li>
                        <li>Checkout</li>
                        <li>Fast Tokens</li>
                        <li>Payment Links</li>
                        <li>Payment Buttons</li>
                    </ul>
                </div>


                <div className="company">
                    <h3>Company</h3>
                    <ul>
                        <li>Pricing</li>
                        <li>Team</li>
                        <li>FAQS</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="business">
                    <h3>Businesses</h3>
                    <ul>
                        <li>Why use Us?</li>
                        <li>How it works</li>
                        <li>Checkout Demo</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer