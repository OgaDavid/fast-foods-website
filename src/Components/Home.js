import React from 'react'

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className="home-content">
            <div className="home-left">
                <div className="home-left-content">
                    <div className="home-left-content-text">
                    <h1>The Fastest and most Reliable Food delivery in <span className='your-city'>Your city<span>.</span></span></h1>
                    <p>Your one stop online food market where you get all kinds and varieties<br />of food! New secret recipes available every Friday!</p>
                    </div>

                    <div className="home-left-content-buttons">
                        <button>Get Started <span><i class="fa-regular fa-paper-plane"></i></span></button>
                        {/* <div className="new-delivery">
                            <div className="new-delivery-content">
                            <i class="fa-solid fa-truck-fast fa-2x"></i>
                            <div className="new-delivery-text">
                                <h3>Fast foods is getting Bigger!</h3>
                                <p>Delivery now available in Lagos, Abuja,<br />Portharcourt and Osun states, Nigeria!</p>
                            </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <div className="home-right">
                <div className="home-right-content">
                    <img className='home-right-img' src="https://c4.wallpaperflare.com/wallpaper/219/42/474/food-burgers-burger-wallpaper-preview.jpg" alt="" />
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Home