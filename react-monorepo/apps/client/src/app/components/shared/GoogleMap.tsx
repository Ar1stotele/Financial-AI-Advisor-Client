import GoogleMapReact from 'google-map-react';
import { MapPin } from './MapPin';
import { useState } from 'react';

interface GoogleMapProps {
  lat: number;
  lng: number;
  positionChangeHandler: (event: { lat: number; lng: number }) => void;
}

export const GoogleMap = ({
  lat,
  lng,
  positionChangeHandler,
}: GoogleMapProps) => {
  return (
    <GoogleMapReact
      center={{ lat, lng }}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
      onClick={positionChangeHandler}
    >
      {/* TODO fix map */}
      <MapPin />
    </GoogleMapReact>
  );
};
