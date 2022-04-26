import {useEffect, useState, MutableRefObject} from 'react';
import leaflet from 'leaflet';
import { Map, TileLayer } from 'leaflet';
import { AddressPoint } from '../types/main-types'


function useMap(mapRef: MutableRefObject<HTMLElement | null>, point: AddressPoint) {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: point.lat,
          lng: point.lng,
        },
        zoom: point.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, point]);

  return map;
}

export default useMap;
