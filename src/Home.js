import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"src="https://drive.google.com/uc?id=11PS1v_qfS_oDwDiHW3syMVYvgpg0UrVH"/>
                
                
                <div className="home__row">
                    
                    
                    <Product 
                    id="12423"
                    title="Apple Earpods  Color:White " 
                    price={9990} 
                    image="https://drive.google.com/uc?id=1C7geGzGdhwJM8yh3btvz8PrtLD2_i2YE"
                    rating={5}
                    />
                    <Product 
                    id="12423"
                    title="Think and grow rich by Napoleaon Hill" 
                    price={699} 
                    image="https://drive.google.com/uc?id=1Tv7hQrClBLiOFtoZUIlAZbPKm0pHNVMD"
                    rating={4}
                    /> 
                </div>

                <div className="home__row">
                    <Product 
                    id="12423"
                    title="Apple MacBook Pro - space gray(13.3 inch)" 
                    price={79000} 
                    image="https://drive.google.com/uc?id=1n1_ajWQft8IVM55Etnrt0xOxFfKMe58W"
                    rating={5}
                    />
                      
                    <Product 
                    id="12423"
                    title="Apple watch (GPS,40mm)" 
                    price={14999} 
                    image="https://drive.google.com/uc?id=1MLYpFWfRMuH-i4febPGbozSRrkP9xB5C"
                    rating={3}
                    />
                    <Product 
                    id="12423"
                    title="Children of time by Adrian" 
                    price={1599} 
                    image="https://drive.google.com/uc?id=1n8ep8EcJmw9JuA6H1jPWfDhdwpNefxt4"
                    rating={3}
                    />
                
                </div>

                <div className="home__row">
                    <Product
                    id="12423"
                    title="Whey Protein Powder"
                    price="2999"
                    image="https://drive.google.com/uc?id=1gS66shPZu1vrGnsmwrJL6Oy33_fQksue"
                    />
                </div>


            </div>
        </div>
    );
}

export default Home;