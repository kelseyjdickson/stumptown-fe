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
                <img src={Portland}alt="portland" className="pdx"></img>
                
                <h2>Division</h2>
                <p>4525 SE Division Street</p>
                <p>Portland,OR 97206</p>
                <p>Daily 7am-3pm</p>
                <img src={Location} alt="stump"></img>

                <h2>Belmont</h2>
                <p>2256 SE Belmont Street</p>
                <p>Portland,OR 97214</p>
                <p>Weekdays 7am-2pm</p>
                <p>Weekends 8am-3pm</p>
                <img src={Image2} alt="rug"></img>

                <h2>Ace Hotel Portland</h2>
                <p>1026 SW Stark Street</p>
                <p>Portland,OR 97205</p>
                <p>Weekdays 7am-2pm</p>
                <p>Weekends 8am-3pm</p>
                <img src={Image3} alt="green"></img>

                <h2>Downtown</h2>
                <p>128 SW 3rd Ave</p>
                <p>Portland,OR 97204</p>
                <p>Daily 8am-3pm</p>
                <img src={Image4} alt="many"></img>


                
                <img src={NY}alt="portland" className="nyc"></img>
                <h2>Ace Hotel New York</h2>
                <p>18 W 29th Street</p>
                <p>New York, NY 10001</p>
                <p>Weekdays 7am-3pm</p>
                <p>Weekends 8am-3pm</p>
                <img src={Stump}alt="stump"></img>
               

             

           
                <Map/>
                <Footer/>
            </>
            </div>
        )

    }
}

export default Locations