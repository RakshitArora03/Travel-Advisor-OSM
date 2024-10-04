
import  {Flex}  from "@chakra-ui/react";
import Header from "../components/Header"
import List from "../components/List"

import PlaceDetail from "../components/PlaceDetail"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {getPlacesData} from "./api";
import Geolocation from "@react-native-community/geolocation";


const Map = dynamic(()=>import("../components/Map"),{ssr: false})


const Home = () => {

  const [places, setPlaces] = useState([])
  const [filteredPlaces, setfilteredPlaces] = useState([])
  const [coords, setCoords] = useState({})
  const [bounds, setBounds] = useState(null)
  const [type, settype] = useState('restaurants');
  const [ratings, setratings] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null);
  
  
  //Ratings Change
  useEffect(() => {
    const filteredData = places.filter((place) => place.rating > ratings);
    setfilteredPlaces(filteredData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ratings])

  const handleMarkerClick = (place) => {
  setChildClicked(place);
};
  
  
  
  // Get places details
  useEffect(() => {
    if (bounds) {
      console.log('Bounds:', bounds);
    
      const {  _southWest,_northEast } = bounds;
      console.log('_northEast:', bounds?._northEast);
      console.log('_southWest:', bounds?._southWest);
    
      setisLoading(true);
      getPlacesData(type, bounds._southWest,bounds._northEast)
        .then((data) => {
          console.log(data);
          setPlaces(data);
          setisLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setisLoading(false);
        });
    }
  }, [type, coords,  setPlaces, bounds]);



  try{
    useEffect(() => {
      navigator?.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          console.log({ latitude, longitude })
          setCoords({ lat: latitude, lng: longitude });
        }
      );
    }, []);} catch (error)
    {console.log(error)}
  
  
  
  /*useEffect(() => {
    //getting current location

    Geolocation.watchPosition(
      ({coords : {latitude, longitude}}) => { 
        console.log({latitude, longitude})
        setcoordinates({lat : latitude, lng : longitude});  
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData().then((data => {
      console.log(data)
    }))
  }, []);*/

  return <Flex 
    justifyContent={'center'}
    alignItems={'center'}
    width={'100vw'}
    height={'100vh'}
    maxWidth={'100vw'}
    maxHeight={'100vh'}
    position={'relative'}
    >
    
    <List places = {filteredPlaces.length ? filteredPlaces : places } isLoading={isLoading}/>

     <Header 
      settype={settype}
      setratings={setratings}
      setCoords={setCoords}
        />    

    <Map setCoords={setCoords} places={filteredPlaces.length ? filteredPlaces : places} setChildClicked={(child) => setChildClicked(child)} coords={coords} setBounds={setBounds}  />
  </Flex>;
};

export default Home;