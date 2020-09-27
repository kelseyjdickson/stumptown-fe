import React from 'react'
import Location from "./photos/locations.jpg"
import Image2 from './photos/pretty.jpg'
import Image3 from './photos/image3.jpg'
import Image4 from './photos/image4.jpg'
import Footer from './Footer'
import Map from './Map1'
import Portland from './photos/portland.png'
import NY from './photos/new-york.png'
import Stump from './photos/stump.jpeg'




class Locations
    extends React.Component {



    render() {

        return (
            <div>
                <>
                <div>
                <img src={Portland}alt="portland" className="pdx"></img>
                </div>
                <img src={Location} alt="stump" className="photo1"></img>
                <div className="divi">
                <h2 className="location-name">Division</h2>
                <p className="address">4525 SE Division Street</p>
                <p className="address">Portland,OR 97206</p>
                <p className="hours">Daily 7am-3pm</p>
                </div>

                <div>
                <img src={Image2} alt="rug" className="pdx2"></img>

                </div>
                <h2 className="location-name">Belmont</h2>
                <p className="address">2256 SE Belmont Street</p>
                <p className="address">Portland,OR 97214</p>
                <p className="hours">Weekdays 7am-2pm</p>
                <p className="hours">Weekends 8am-3pm</p>

                <h2 className="location-name">Ace Hotel Portland</h2>
                <p className="address">1026 SW Stark Street</p>
                <p className="address">Portland,OR 97205</p>
                <p className="hours">Weekdays 7am-2pm</p>
                <p className="hours">Weekends 8am-3pm</p>
                <img src={Image3} alt="green"></img>

                <h2 className="location-name">Downtown</h2>
                <p className="address">128 SW 3rd Ave</p>
                <p className="address">Portland,OR 97204</p>
                <p className="hours"> Daily 8am-3pm</p>
                <img src={Image4} alt="many"></img>


                <div>
                <img src={NY}alt="portland" className="nyc"></img>
                </div>
                <h2 className="location-name">Ace Hotel New York</h2>
                <p className="address">18 W 29th Street</p>
                <p className="address">New York, NY 10001</p>
                <p className="hours">Weekdays 7am-3pm</p>
                <p className="hours">Weekends 8am-3pm</p>
                <img src={Stump}alt="stump"></img>


                 <h2 className="location-name">Cobble Hill</h2>
                <p className="address">212B Pacific Street</p>
                <p className="address">Brookly, NY 11201</p>
                <p className="hours">Weekdays 7am-2pm</p>
                <p className="hours">Weekends 8am-3pm</p>

                <h2 className="location-name">Greenich Village</h2>
                <p className="address">30 W 8th Street</p>
                <p className="address">New York, NY 11201</p>
                <p className="hours">Daily 7am-2pm</p>
                

             

           
                <Map/>
                <Footer/>
            </>
            </div>
        )

    }
}

export default Locations