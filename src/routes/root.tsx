import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

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
        <div className='h-full'>
            <Navbar />
            <div className="h-full pt-24 pb-4 mx-auto px-4 text-center flex flex-col align-middle">
                <h1 className="text-3xl font-bold mb-6 uppercase">Enable your Location</h1>
                <img className='size-auto mb-4' src="./map_1.png" alt="Map Image" />
                <p className="text-lg">Please allow us to assess your location, so we can further help you.</p>
                <div className="flex justify-center mt-8">
                    <button
                        className="bg-primary text-white font-medium uppercase py-2 px-16 rounded-lg hover:bg-primary90"
                        onClick={handleGetCoordinates}
                    >
                        Share Location
                    </button>
                </div>
                {coordinates && (
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold">Your Current Coordinates:</h2>
                        <p>Latitude: {coordinates.latitude}</p>
                        <p>Longitude: {coordinates.longitude}</p>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Root;