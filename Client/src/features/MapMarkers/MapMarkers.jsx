import React, { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapMarkers() {
  const [markers, setMarkers] = useState([]);

  useMapEvents({
    click(e) {
      setMarkers([...markers, e.latlng]);
    },
  });

  return markers.map((position, idx) => (
    <Marker key={idx} position={position} onClick={() => setMarkers([])}>
      <Popup>
        Метка {idx + 1} <br />
        Координаты: {position.lat.toFixed(4)}, {position.lng.toFixed(4)}
      </Popup>
      <button
        onClick={() => setMarkers([])}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1000,
        }}
      >
        Очистить метки
      </button>
    </Marker>
  ));
}
