import React, { PureComponent } from 'react'
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import * as coffee from './db.json'
import CoffeeCup from './photos/coffee.svg'


const APIKEY = process.env.REACT_APP_MAPBOX_API_KEY;
class Map extends PureComponent {
  
  state = {
    viewport: {


      width: '100%',
      height: 600,
      latitude: 39.0626831,
      longitude: -101.642682,
      zoom: 4,
      selectedShop = null
     
    },

  };


  
  
  
  render() {
    return (
      <ReactMapGL
      {...this.state.viewport}
      mapboxApiAccessToken={APIKEY}
      mapStyle="mapbox://styles/kelseymapbox/ckfd8wvd43zi719p30pnbson5"
      onViewportChange={(viewport) => this.setState({viewport})}
    
      >
        {coffee.locations.map(shop => (
          <Marker key={shop.id}
          latitude={shop.coordinates[1]}
          longitude={shop.coordinates[0]}>
            
              <button className="marker-button">
                <img className="coffee-marker"src={CoffeeCup}alt="coffee marker"></img>
                {/* <span>📍</span> */}
              </button>
            

          </Marker>
              ))}
        
          
        <div style={{position: 'absolute', right: 0}}>
          <NavigationControl showCompass={false}/>
        </div>

      </ReactMapGL>
      
      
      
      );
    }
  }


export default Map