// PickupExpress.js

import React, { useState } from 'react';

const PickupExpress = () => {
    const [pickupPincode, setPickupPincode] = useState('');
    const [deliveryPincode, setDeliveryPincode] = useState('');
    const [parcelWeight, setParcelWeight] = useState('');
    const [rate, setRate] = useState(0);

    const calculateRate = () => {
        const metroCities = ['473110', '473111', '473112', '473113', '473114'];
        const isMetroCity = metroCities.includes(pickupPincode.toLowerCase());

        if (pickupPincode && deliveryPincode && parcelWeight) {
            const weight = parseFloat(parcelWeight);
            if (!isNaN(weight) && weight > 0) {
                const baseRate = 160;
                const rateMultiplier = isMetroCity ? 1 : 1.5; // Rate is 1.5 times for non-metro cities
                const calculatedRate = weight * baseRate * rateMultiplier;
                setRate(calculatedRate.toFixed(0));
            } else {
                setRate(0);
            }
        } else {
            setRate(0);
        }
    };

    return (
        <div className='  shadow-md  border-2 p-10 rounded-xl'>
            <div className='grid grid-cols-2 gap-4'>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Pickup Pincode</label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={pickupPincode}
                        onChange={(e) => setPickupPincode(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Delivery Pincode</label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={deliveryPincode}
                        onChange={(e) => setDeliveryPincode(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Document Weight ( up to 1000g)</label>
                    <input
                        type="number"
                        step="0.01"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={parcelWeight}
                        onChange={(e) => setParcelWeight(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-800 hover:bg-blue-900 hover:shadow-md text-white font-bold mx-10 my-4 rounded"
                    onClick={calculateRate}
                >
                    Calculate Rate
                </button>

            </div>


            <div className="mt-4">
                <div>
                    <p className="font-bold text-gray-500">Calculated Rate:</p>
                </div>
                {rate > 0 && (
                    <div>
                        <p className="font-bold text-gray-500">{rate}</p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default PickupExpress;
