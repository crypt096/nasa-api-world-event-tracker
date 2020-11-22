import LocationInfoBox from "./LocationInfoBox";
import { useState } from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationMarker from "./LocationMarker";

const WholeMap = ({ eventData, center, zoom }) => {
  console.log(eventData);
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiY3J5cHQwIiwiYSI6ImNraHQyMno3czB5ejUyc2t6dTUwdjh0bG0ifQ.wD_SXUA4mA-tIbAsUGlo3w",
  });
  const [locationInfo, setLocationInfo] = useState(null);
  const NATURAL_EVENT_WILDFIRE = 8;

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
      return (
        <Marker
          className="location-marker"
          key={index}
          coordinates={[
            ev.geometries[0].coordinates[0],
            ev.geometries[0].coordinates[1],
          ]}
          onClick={(e) => e.preventDefault()}
        >
          <LocationMarker
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        </Marker>
      );
    }
    return null;
  });
  return (
    <div className="map" id="map">
      <Map
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
        center={[center.lng, center.lat]}
        zoom={[zoom]}
      >
        {markers}
      </Map>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

WholeMap.defaultProps = {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 3,
};

export default WholeMap;
