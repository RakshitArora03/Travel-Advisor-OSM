/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Box, Flex } from "@chakra-ui/react";
import { icon } from "leaflet";
import { MapContainer, TileLayer, Marker, ZoomControl, useMap, Popup} from 'react-leaflet'
import L, { LatLng, LatLngBounds } from "leaflet";
import React, { useEffect} from "react";
import { OpenStreetMapProvider, GeoSearchControl, SearchControl } from 'leaflet-geosearch'
import 'leaflet-geosearch/dist/geosearch.css'; // Import GeoSearch CSS
import Head from "next/head";

<Head>
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""
/>
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css"
/>
 {/* eslint-disable-next-line @next/next/no-sync-scripts */}
<script src="https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.umd.js"></script>
</Head>


const MyIcon = new icon({
  iconUrl: "/location.png",
  iconSize: [35, 35]  
}); 

const otherIcon = new icon({
  iconUrl: "/location-pin.png",
  iconSize: [32, 32]  
});

// Search component using Leaflet GeoSearch
// const Search = ({ provider, setCoords }) => {
//   const map = useMap(); // Access the Leaflet map instance

//   useEffect(() => {
//     const searchControl = new GeoSearchControl({
//       provider,
//       style: 'bar', // Display style (you can also use 'button')
//       marker: {
//         icon: MyIcon, // Custom marker for search results
//       },
//       autoClose: true,
//       keepResult: true,
//     });

//     map.addControl(searchControl); // Add search control to the map

//     // Listen to location selection events
//     map.on('geosearch/showlocation', (result) => {
//       const { lat, lng } = result.location;
//       setCoords({ lat, lng }); // Update coordinates with search result
//     });

//     return () => {
//       map.removeControl(searchControl); // Clean up when component is unmounted
//     };
//   }, [map, provider, setCoords]);

//   return null; // No JSX output, just adding the control to the map
// };

// make new leaflet element
// const Search = (props) => {
//   const map = useMap() // access to leaflet map
//   const { provider, setCoords } = props

//   useEffect(() => {
//       const searchControl = new GeoSearchControl({
//         provider,        
//         marker: {
//           icon:MyIcon,
//           draggable:false
//         },
//         // style: BarProp,
              
//       })
    

//       map.addControl(searchControl) // this is how you add a control in vanilla leaflet
//       map.on('geosearch/showlocation',x => {
//          console.log(x)
//          const lati=x.location.y
//          const lngi=x.location.x
//          setCoords({ lat: lati, lng: lngi });
    
//     })

//       return () => map.removeControl(searchControl)
//   }, [ map, provider,setCoords])

//   return null // don't want anything to show up from this comp
// }



function MapChildComponent({ coords, setBounds, setCoords }) {
  const map = useMap();


  useEffect(() => {
    if (setBounds && setCoords) {
      const sw = map.getBounds().getSouthWest();
      const ne = map.getBounds().getNorthEast();
      
      setBounds({
        _northEast: { lat: ne.lat, lng: ne.lng },
        _southWest: { lat: sw.lat, lng: sw.lng }
      });

      setCoords(coords);
    }
  }, [coords, map, setBounds, setCoords]);

  return null; // This component doesn't render anything
}



export default function Map({
  places,
  coords,
  setBounds,
  setCoords,
  setChildClicked,
}) {

  /*var LeafIcon = L.Icon.extend({
    options: {
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    },
  });

  var greenIcon = new LeafIcon({
    iconUrl: "http://leafletjs.com/examples/custom-icons/leaf-green.png",
    shadowUrl: "http://leafletjs.com/examples/custom-icons/leaf-shadow.png",
  });*/  
  
  

  return (
    <Box width={'64vw'} 
      height={'full'} 
      position={'absolute'} 
      right={0} 
      borderWidth={'4px'} 
      borderColor={'blue.400'}
      overflow={'hidden'}
      >
      <map >
        <MapContainer          
          
          center={coords}
          zoom={13}
          zoomControl={false}          
          dragging={true}
          zoomAnimation={true}    
          
          >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coords} icon={MyIcon} />
          <ZoomControl position="bottomright" />
          <MapChildComponent coords={coords} setBounds={setBounds} setCoords={setCoords} />
          
          {/* Search control with OpenStreetMap provider */}
          {/* <Search provider={new OpenStreetMapProvider()} setCoords={setCoords} /> */}

          {/* <ReactLeafletSearch position="topright" /> */}
          {/* Inside the Map component */}

          {places.map((place, index) => {
          const { latitude, longitude, name } = place;
          if (latitude && longitude) {
            return (
              <Marker
                key={index}
                icon={otherIcon}
                position={[latitude, longitude]}
                onClick={() => setChildClicked(index)}
              >
                <Popup> 
                  <Flex
                    alignItems={'center'}
                    width={160}
                    height={160}
                    direction={'column'}
                    fontSize={16}
                    fontWeight={700}
                  >
                    {name}
                    <img src={place.photo ? place.photo.images.large.url :"/place_img.jpg"} alt={place.name}  
                    
                    style={{ width: "200px", height: "200px", objectFit: "cover" }} />
                    
                    </Flex>
                </Popup>
              </Marker>
              
            );
          }
          return null;
        })}
        {/* <Search  provider={new OpenStreetMapProvider()} setCoords={setCoords} style="zIndex=sticky"/> */}
        </MapContainer>
      </map>
    </Box>
  );
}





/*const Map = ({coordinates, setcoordinates, setbounds}) => {
  return (
    <Box width={'full'} height={'full'} >
      <map>        
        <MapContainer 
          center={coordinates} 
          zoom={13} 
          zoomControl={null}
          >
          <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates} icon={MyIcon} />
          <ZoomControl position="bottomright" />
        </MapContainer>
      </map>

    </Box>
  )
}

export default Map;*/