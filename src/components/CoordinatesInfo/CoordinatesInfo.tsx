import React from 'react';

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface CoordinatesInfoProps {
    coordinates: Coordinates | null;
}

const CoordinatesInfo: React.FC<CoordinatesInfoProps> = ({ coordinates }) => {
    if (!coordinates) {
        return null; // Return null if coordinates are not available
    }

    return (
        <div className="pb-8">
            <div className="flex justify-center">
                <img src="./check.png" alt="Check Image" className='pb-8 size-11/12 h-fit sm:size-8/12 sm:h-fit md:size-6/12 md:h-fit lg:size-4/12 lg:h-fit xl:size-3/12 xl:h-fit 2xl:size-2/12 2xl:h-fit' />
            </div>
            <h1 className='text-2xl font-semibold pb-1'>All right!</h1>
            <p className='text-gray-500 font-medium'>Your location has been shared with us.</p>
            <hr className='mt-4 mb-7' />
            <p className='font-semibold'>Latitude: <span className='font-normal'>{coordinates.latitude}</span></p>
            <p className='font-semibold'>Longitude: <span className='font-normal'>{coordinates.longitude}</span></p>
        </div>
    );
};

export default CoordinatesInfo;
