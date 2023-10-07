import GoogleMapReact from 'google-map-react';
import { MapPin } from './MapPin';

interface GoogleMapProps {
  lat: number;
  lng: number;
  onPositionChange: (event: any) => void;
}
export const GoogleMap = ({ lat, lng, onPositionChange }: GoogleMapProps) => {
  const handlePositionChange = (event: any) => {
    const position = {
      lat: event.lat,
      lng: event.lng,
    };

    onPositionChange(position);
  };
  return (
    <GoogleMapReact
      defaultCenter={{ lat, lng }}
      defaultZoom={16}
      onClick={handlePositionChange}
    >
      <MapPin lat={lat} lng={lng} />
    </GoogleMapReact>
  );
};
