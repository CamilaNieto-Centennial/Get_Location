import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import GoogleMapReact from 'google-map-react';

function Root() {

    const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number } | null>(null);

    const handleGetCoordinates = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCoordinates({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Welcome to My Location App!</h1>
                <p className="text-lg mb-6">After allowing GPS location permissions, please click on the button below so we can get your coordinates.</p>
                <div className="flex justify-center">
                    <button
                        className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary80"
                        onClick={handleGetCoordinates}
                    >
                        Get Coordinates
                    </button>
                </div>
                {coordinates && (
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Your Current Coordinates:</h2>
                        <p>Latitude: {coordinates.latitude}</p>
                        <p>Longitude: {coordinates.longitude}</p>
                        <div style={{ height: '400px', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
                                defaultCenter={{ lat: coordinates.latitude, lng: coordinates.longitude }}
                                defaultZoom={15}
                            >
                                {/* You can add markers or other components here */}
                            </GoogleMapReact>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Root;