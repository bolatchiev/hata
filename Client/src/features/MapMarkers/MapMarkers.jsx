import React, { useState, useEffect } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Фикс для иконок маркеров
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function MapMarkers() {
  // Загрузка меток из localStorage при инициализации
  const [markers, setMarkers] = useState(() => {
    const savedMarkers = localStorage.getItem('mapMarkers');
    return savedMarkers ? JSON.parse(savedMarkers) : [];
  });

  // Сохранение меток в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('mapMarkers', JSON.stringify(markers));
  }, [markers]);

  // Обработчик клика по карте
  useMapEvents({
    click(e) {
      const newMarker = {
        id: Date.now(), // Уникальный ID для каждой метки
        position: e.latlng,
        title: `Метка ${markers.length + 1}`,
        createdAt: new Date().toISOString()
      };
      setMarkers([...markers, newMarker]);
    },
  });

  // Удаление конкретной метки
  const removeMarker = (id) => {
    setMarkers(markers.filter(marker => marker.id !== id));
  };

  // Очистка всех меток
  const clearAllMarkers = () => {
    setMarkers([]);
  };

  return (
    <>
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>
            <div style={{ minWidth: '200px' }}>
              <h4>{marker.title}</h4>
              <p>
                Координаты: {marker.position.lat.toFixed(4)}, {marker.position.lng.toFixed(4)}
              </p>
              <p>
                Создано: {new Date(marker.createdAt).toLocaleString()}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeMarker(marker.id);
                }}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#ff4757',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '8px'
                }}
              >
                Удалить
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
      
      {/* Кнопка очистки всех меток */}
      {markers.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1000,
            backgroundColor: 'white',
            padding: '5px',
            borderRadius: '4px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)'
          }}
        >
          <button
            onClick={clearAllMarkers}
            style={{
              padding: '5px 10px',
              backgroundColor: '#ff4757',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Очистить все метки ({markers.length})
          </button>
        </div>
      )}
    </>
  );
}
