import React from 'react'
import heroimage from '../Asset/back.avif'
import destination1 from '../Asset/bali image.jpeg'
import destination2 from '../Asset/paris.jpeg'
import destination3 from '../Asset/tokiyo.jpg'
import '../style/Home.css'

const Home = () => {
    return (
        <div className='home' id='homeP'>
            <section className='hero'>
                <img src={heroimage} alt="Explore the world" className='hero-image' />
                <div className='hero-text'>
                    <h1>Discover Your Next Adventure</h1>
                    <p>Unforgettable experiences await. Explore destinations,
                        plan trips, and create memories</p>
                </div>
            </section>

            {/* Popular Destinations Section */}
            <section className='destinations'>
                <h2>Popular Destinations</h2>
                <div className='destination-grid'>
                    <div className="destination-card">
                        <img src={destination1} alt="Destination 1" />
                        <h3>Bali,Indonesia</h3>
                        <p>Explore the city of lights, with its iconic landmarks,
                            world-class cuisine, and romantic ambiance</p>
                    </div>
                    <div className='destination-card'>
                        <img src={destination2} alt="Destination 2" />
                        <h3>Paris, France</h3>
                        <p>Explore the city of lights, with its iconic landmarks,
                            world-class cuisine, and romantic ambiance.</p>
                    </div>
                    <div className='destination-card'>
                        <img src={destination3} alt="Destination 3" />
                        <h3>Tokiyo,Japan</h3>
                        <p>A city where modern meets tradition. Discover Tokyo's
                            futuristic skyline and ancient temples.</p>
                    </div>
                </div>
            </section>

            {/* Promo Section */}
            <section className='promo'>
                <h2>Special Deals</h2>
                <p>Get exclusive discounts and early access to the best deals
                    on flights, hotels, and tours</p>
                <button className='promo-button'><a href="#contactP">Explore Deals</a></button>
            </section>
        </div>
    )
}

export default Home
