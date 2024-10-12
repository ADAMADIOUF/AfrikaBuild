import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

// Ensure you have your Mapbox access token set in your .env file
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const Map = () => {
  // Coordinates for Dakar, Senegal
  const lng = -17.5002
  const lat = 14.6928
  const title = 'Dakar, Senegal' // Title for the popup

  const mapContainerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!mapRef.current && mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current, // div reference for the map
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat], // Center on Dakar
        zoom: 10,
        attributionControl: false, // Disable attribution control
      })

      // Add marker
      const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)

      // Optionally add a popup to the marker
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(title)
      marker.setPopup(popup).togglePopup() // Show popup on marker

      mapRef.current = map
    }

    // Clean up map instance on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [lng, lat, title])

  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '300px' }}></div>
  )
}

export default Map
  