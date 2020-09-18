import React from 'react'
import Location from "./locations.jpg"
import Image2 from './pretty.jpg'
import Image3 from './image3.jpg'
import Image4 from './image4.jpg'



class Locations
    extends React.Component {



    render() {

        return (
            <div>
                <h1>Portland</h1>
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


                <h1>New York</h1>
                <h2>Ace Hotel New York</h2>
                <p>18 W 29th Street</p>
                <p>New York, NY 10001</p>
                <p>Weekdays 7am-3pm</p>
                <p>Weekends 8am-3pm</p>






            </div>
        )

    }
}

export default Locations