
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import MapMarkers from '../../features/MapMarkers/MapMarkers';


export default function OSMap() {
    const position = [55.7558, 37.6176] 

    return (
      <MapContainer 
        center={position} 
        zoom={13} 
        style={{ height: '600px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapMarkers/>
      </MapContainer>
    );
  }
  
