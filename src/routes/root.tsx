import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import CoordinatesInfo from '../components/CoordinatesInfo/CoordinatesInfo';

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
                {coordinates ? (
                    <CoordinatesInfo coordinates={coordinates} />
                ) : (
                    <>
                        <h1 className="text-3xl font-bold mb-5 uppercase">Enable your Location</h1>
                        <div className="flex justify-center">
                            <img src="./map_1.png" alt="Map Image" className='size-11/12 h-fit mb-4 sm:size-8/12 sm:h-fit md:size-6/12 md:h-fit lg:size-4/12 lg:h-fit xl:size-3/12 xl:h-fit 2xl:size-2/12 2xl:h-fit' />
                        </div>
                        <p className="text-lg">Please allow us to assess your location, so we can further help you.</p>
                        <div className="flex justify-center mt-8">
                            <button
                                className="bg-primary text-white font-medium uppercase py-2 px-10 rounded-3xl hover:bg-primary90"
                                onClick={handleGetCoordinates}
                            >
                                Share Location
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}


export default Root;