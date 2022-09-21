import React from 'react'

const Footer = () => {

    const style = {
        width: "60px",
        height:"60px"
    }
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-right">
                <div className="footer-logo">
                    <h1>Fast<span>foods<span><lord-icon style={style} src="https://cdn.lordicon.com/zkazkzgr.json" trigger="loop"></lord-icon></span></span></h1>
                </div>
                <p>The fastest and most reliable food<br/>delivery in your city.</p>
            </div>

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
        </div>
    </div>
  )
}

export default Footer