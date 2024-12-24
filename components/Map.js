"use client"
import { useState, useEffect } from 'react';
import styles from '../styles/Map.module.css';

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Load Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.onload = initializeMap;
    document.body.appendChild(script);

    return () => {
      // Clean up script
      document.body.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    const mapOptions = {
      center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco coordinates
      zoom: 12, // Adjust the initial zoom level as needed
    };
    const mapElement = document.getElementById('map-container');
    const newMap = new google.maps.Map(mapElement, mapOptions);
    setMap(newMap);
  };

  const handleSearch = () => {
    // Perform search functionality here
  };

  return (
    <div className={styles.container}>
    <div id="map-container" className={styles.map}></div>
    <div className={styles['search-container']}>
      {/* <input type="text" className={styles['search-input']} placeholder="Search" />
      <button className={styles['search-button']} onClick={handleSearch}>Search</button> */}
    </div>
  </div>
  
  );
};

export default Map;
