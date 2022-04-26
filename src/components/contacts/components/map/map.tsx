import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../../hooks/use-map';
import { ADDRESS_POINT } from '../../../../const'


function Map() {
  const mapRef = useRef(null);
  const map = useMap(mapRef, ADDRESS_POINT);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: '/map-bubble.png',
    iconSize: [56, 70],
    iconAnchor: [20, 40],
  });


  useEffect(() => {
    if (map) {
        leaflet
          .marker({
            lat: ADDRESS_POINT.lat,
            lng: ADDRESS_POINT.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      };
  }, [defaultCustomIcon, map]);

  return (
    <div
      style={{width: '695px', height: '336px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
