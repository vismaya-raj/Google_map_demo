import React, { useState } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Form from "./Form";

const mapStyles = {
  width: "50%",
  height: "50%",
};

export const MapContainer = (props) => {
  const [location, setLocation] = useState({
    lat: "",
    long: "",
    isShowMap: false,
  });

  const showMap = (loc) => {
    console.log(loc);
    setLocation({
      lat: loc.lat,
      long: loc.long,
      isShowMap: true,
    });
  };

  return (
    <>
      <Form showMap={showMap} name="sujith" />
      {location.isShowMap && (
        <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: location.lat,
            lng: location.long,
          }}
        />
      )}
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAzeEg1j_V3YoXjP2HIAqN2ux60xfgIM1s",
})(MapContainer);
